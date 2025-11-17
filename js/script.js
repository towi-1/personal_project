// script.js - Main JavaScript for BingeBox

// State management
let currentPage = 1;
let currentShows = [];
let itemsPerPage = 12;
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentlyWatched = JSON.parse(localStorage.getItem('recentlyWatched')) || [];
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || null;

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadThemePreference();
    showPage('home');
});

// Initialize the application
function initializeApp() {
    currentShows = getAllShows();
    displayShows(currentShows);
    updateProfileButton();
}

// Setup all event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-links a, .logo').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href').substring(1);
            showPage(page);
        });
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Search
    document.getElementById('search-btn').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Filters
    document.getElementById('genre-filter').addEventListener('change', applyFilters);
    document.getElementById('year-filter').addEventListener('change', applyFilters);
    document.getElementById('sort-filter').addEventListener('change', applyFilters);
    document.getElementById('favorites-filter').addEventListener('click', showFavoritesOnly);
    document.getElementById('recent-filter').addEventListener('click', showRecentOnly);

    // Pagination
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));

    // Profile
    document.getElementById('profile-btn').addEventListener('click', () => showPage('profile'));
    document.getElementById('save-profile').addEventListener('click', saveProfile);
    document.getElementById('clear-data').addEventListener('click', clearAllData);

    // Watchlist tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            loadWatchlistTab(e.target.dataset.tab);
        });
    });
}

// Page navigation
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Load content for specific pages
        if (pageName === 'browse') {
            displayShows(currentShows);
        } else if (pageName === 'watchlist') {
            loadWatchlistTab('saved');
        } else if (pageName === 'profile') {
            loadProfileData();
        }
    }
}

// Display shows in grid
function displayShows(shows) {
    const grid = document.getElementById('shows-grid');
    grid.innerHTML = '';

    if (shows.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>No shows found</p></div>';
        return;
    }

    // Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedShows = shows.slice(startIndex, endIndex);

    paginatedShows.forEach(show => {
        const showCard = createShowCard(show);
        grid.appendChild(showCard);
    });

    updatePagination(shows.length);
}

// Create a show card element
function createShowCard(show) {
    const card = document.createElement('div');
    card.className = 'show-card';
    card.onclick = () => showDetails(show.id);

    const isFavorite = favorites.includes(show.id);
    const isInWatchlist = watchlist.includes(show.id);

    card.innerHTML = `
        <div class="show-poster-container">
            <img src="${show.poster}" alt="${show.title}" class="show-poster">
            <div class="show-overlay">
                <button class="quick-action" onclick="event.stopPropagation(); toggleWatchlist(${show.id})">
                    ${isInWatchlist ? '✓' : '+'} Watchlist
                </button>
            </div>
        </div>
        <div class="show-info-card">
            <h3 class="show-title">${show.title}</h3>
            <div class="show-meta-card">
                <span class="rating">⭐ ${show.rating}</span>
                <span class="year">${show.year}</span>
            </div>
            <div class="show-genres">
                ${show.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
            </div>
        </div>
        ${isFavorite ? '<span class="favorite-badge">❤</span>' : ''}
    `;

    return card;
}

// Show details page
function showDetails(showId) {
    const show = getShowById(showId);
    if (!show) return;

    // Add to recently watched
    addToRecentlyWatched(showId);

    // Update details page
    document.getElementById('detail-poster').src = show.poster;
    document.getElementById('detail-poster').alt = show.title;
    document.getElementById('detail-title').textContent = show.title;
    document.getElementById('detail-rating').textContent = `⭐ ${show.rating}`;
    document.getElementById('detail-year').textContent = show.year;
    document.getElementById('detail-genre').textContent = show.genres.join(', ');
    document.getElementById('detail-description').textContent = show.description;

    // Update buttons
    const playBtn = document.getElementById('play-btn');
    const downloadBtn = document.getElementById('download-btn');
    const addWatchlistBtn = document.getElementById('add-watchlist');
    const favoriteBtn = document.getElementById('favorite-btn');

    playBtn.onclick = () => playVideo(show.videoUrl);
    downloadBtn.onclick = () => downloadShow(show.downloadUrl);
    addWatchlistBtn.onclick = () => toggleWatchlist(showId);
    favoriteBtn.onclick = () => toggleFavorite(showId);

    // Update button states
    updateWatchlistButton(showId);
    updateFavoriteButton(showId);

    // Load similar shows
    loadSimilarShows(showId);

    // Show the details page
    showPage('show-details');
}

// Play video
function playVideo(videoUrl) {
    if (!videoUrl) {
        alert('Video not available');
        return;
    }

    const playerContainer = document.getElementById('video-player');
    const playerIframe = document.getElementById('player-iframe');
    
    playerIframe.src = videoUrl;
    playerContainer.classList.remove('hidden');
    
    // Scroll to player
    playerContainer.scrollIntoView({ behavior: 'smooth' });
}

// Download show
function downloadShow(downloadUrl) {
    if (!downloadUrl) {
        alert('Download not available for this show');
        return;
    }
    
    window.open(downloadUrl, '_blank');
}

// Toggle watchlist
function toggleWatchlist(showId) {
    const index = watchlist.indexOf(showId);
    
    if (index > -1) {
        watchlist.splice(index, 1);
    } else {
        watchlist.push(showId);
    }
    
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    updateWatchlistButton(showId);
    
    // Refresh if on watchlist page
    if (document.getElementById('watchlist').classList.contains('active')) {
        loadWatchlistTab(document.querySelector('.tab-btn.active').dataset.tab);
    }
}

// Toggle favorite
function toggleFavorite(showId) {
    const index = favorites.indexOf(showId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(showId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton(showId);
}

// Update watchlist button state
function updateWatchlistButton(showId) {
    const btn = document.getElementById('add-watchlist');
    if (btn) {
        btn.textContent = watchlist.includes(showId) ? '✓ In Watchlist' : '+ Watchlist';
    }
}

// Update favorite button state
function updateFavoriteButton(showId) {
    const btn = document.getElementById('favorite-btn');
    if (btn) {
        btn.textContent = favorites.includes(showId) ? '❤ Favorited' : '❤ Favorite';
        btn.style.color = favorites.includes(showId) ? '#e50914' : '';
    }
}

// Add to recently watched
function addToRecentlyWatched(showId) {
    recentlyWatched = recentlyWatched.filter(id => id !== showId);
    recentlyWatched.unshift(showId);
    recentlyWatched = recentlyWatched.slice(0, 20); // Keep last 20
    localStorage.setItem('recentlyWatched', JSON.stringify(recentlyWatched));
}

// Load similar shows
function loadSimilarShows(showId) {
    const similar = getSimilarShows(showId, 4);
    const grid = document.getElementById('similar-grid');
    grid.innerHTML = '';

    similar.forEach(show => {
        const card = createShowCard(show);
        grid.appendChild(card);
    });
}

// Search functionality
function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    
    if (query) {
        currentShows = searchShows(query);
    } else {
        currentShows = getAllShows();
    }
    
    currentPage = 1;
    applyFilters();
}

// Apply filters
function applyFilters() {
    const genre = document.getElementById('genre-filter').value;
    const year = document.getElementById('year-filter').value;
    const sortBy = document.getElementById('sort-filter').value;
    const query = document.getElementById('search-input').value.trim();

    const filteredShows = filterShows({
        query: query,
        genre: genre,
        year: year,
        sortBy: sortBy
    });

    currentShows = filteredShows;
    currentPage = 1;
    displayShows(currentShows);
}

// Show favorites only
function showFavoritesOnly() {
    if (favorites.length === 0) {
        alert('No favorites yet! Add some shows to your favorites.');
        return;
    }
    
    currentShows = favorites.map(id => getShowById(id)).filter(show => show !== undefined);
    currentPage = 1;
    displayShows(currentShows);
}

// Show recently watched only
function showRecentOnly() {
    if (recentlyWatched.length === 0) {
        alert('No recently watched shows yet!');
        return;
    }
    
    currentShows = recentlyWatched.map(id => getShowById(id)).filter(show => show !== undefined);
    currentPage = 1;
    displayShows(currentShows);
}

// Pagination
function changePage(direction) {
    const totalPages = Math.ceil(currentShows.length / itemsPerPage);
    currentPage += direction;
    
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    
    displayShows(currentShows);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
}

// Watchlist tabs
function loadWatchlistTab(tab) {
    const grid = document.getElementById('watchlist-grid');
    let shows = [];

    switch(tab) {
        case 'saved':
            shows = watchlist.map(id => getShowById(id)).filter(show => show !== undefined);
            break;
        case 'favorites':
            shows = favorites.map(id => getShowById(id)).filter(show => show !== undefined);
            break;
        case 'recent':
            shows = recentlyWatched.map(id => getShowById(id)).filter(show => show !== undefined);
            break;
    }

    grid.innerHTML = '';

    if (shows.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📺</span>
                <p>Nothing here yet!</p>
                <button class="btn btn-primary" onclick="location.href='#browse'">Browse Shows</button>
            </div>
        `;
        return;
    }

    shows.forEach(show => {
        const card = createShowCard(show);
        grid.appendChild(card);
    });
}

// Profile management
function loadProfileData() {
    if (userProfile) {
        document.getElementById('username').value = userProfile.username || '';
        document.getElementById('email').value = userProfile.email || '';
        document.getElementById('bio').value = userProfile.bio || '';
        
        // Load genre preferences
        document.querySelectorAll('.genre-checkboxes input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = userProfile.genres && userProfile.genres.includes(checkbox.value);
        });
    }
}

function saveProfile() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const bio = document.getElementById('bio').value.trim();
    
    const selectedGenres = Array.from(document.querySelectorAll('.genre-checkboxes input:checked'))
        .map(cb => cb.value);

    userProfile = {
        username: username,
        email: email,
        bio: bio,
        genres: selectedGenres
    };

    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    updateProfileButton();
    alert('Profile saved successfully!');
}

function updateProfileButton() {
    const btn = document.getElementById('profile-btn');
    if (userProfile && userProfile.username) {
        btn.textContent = userProfile.username;
    } else {
        btn.textContent = 'Login';
    }
}

function clearAllData() {
    if (confirm('Are you sure you want to clear all your data? This cannot be undone.')) {
        localStorage.clear();
        watchlist = [];
        favorites = [];
        recentlyWatched = [];
        userProfile = null;
        alert('All data cleared!');
        location.reload();
    }
}

// Theme management
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = document.querySelector('.theme-icon');
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    const icon = document.querySelector('.theme-icon');
    icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}