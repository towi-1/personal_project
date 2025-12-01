// script.js - Main JavaScript for BingeBox

// State management
let currentPage = 1;
let currentShows = [];
let itemsPerPage = 12;
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentlyWatched = JSON.parse(localStorage.getItem('recentlyWatched')) || [];
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || null;
let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
let isSignupMode = false;

// Initialize app on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('BingeBox app starting...');
    initializeApp();
    setupEventListeners();
    loadThemePreference();
    showPage('home');
    console.log('BingeBox app loaded successfully!');
});

// Initialize the application
function initializeApp() {
    currentShows = getAllShows();
    displayShows(currentShows);
    updateProfileButton();
    updateHomePageButtons();
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
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Search
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    // Filters
    const genreFilter = document.getElementById('genre-filter');
    const yearFilter = document.getElementById('year-filter');
    const sortFilter = document.getElementById('sort-filter');
    const favoritesFilter = document.getElementById('favorites-filter');
    const recentFilter = document.getElementById('recent-filter');
    
    if (genreFilter) genreFilter.addEventListener('change', applyFilters);
    if (yearFilter) yearFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
    if (favoritesFilter) favoritesFilter.addEventListener('click', showFavoritesOnly);
    if (recentFilter) recentFilter.addEventListener('click', showRecentOnly);

    // Pagination
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');
    if (prevPage) prevPage.addEventListener('click', () => changePage(-1));
    if (nextPage) nextPage.addEventListener('click', () => changePage(1));

    // Profile/Login
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) profileBtn.addEventListener('click', handleProfileClick);
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Auth mode toggle
    const toggleAuthMode = document.getElementById('toggle-auth-mode');
    if (toggleAuthMode) {
        toggleAuthMode.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthenticationMode();
        });
    }
    
    // Profile actions
    const saveProfileBtn = document.getElementById('save-profile');
    const logoutBtn = document.getElementById('logout-btn');
    if (saveProfileBtn) saveProfileBtn.addEventListener('click', saveProfile);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    
    // Profile picture upload
    const uploadPicBtn = document.getElementById('upload-pic-btn');
    const profilePicInput = document.getElementById('profile-pic-input');
    if (uploadPicBtn) {
        uploadPicBtn.addEventListener('click', () => {
            if (profilePicInput) profilePicInput.click();
        });
    }
    if (profilePicInput) {
        profilePicInput.addEventListener('change', handleProfilePicUpload);
    }

    // Watchlist tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            loadWatchlistTab(e.target.dataset.tab);
        });
    });
    
    // Close player button
    const closePlayerBtn = document.getElementById('close-player-btn');
    if (closePlayerBtn) {
        closePlayerBtn.addEventListener('click', () => {
            const playerContainer = document.getElementById('player-container');
            const playerIframe = document.getElementById('video-iframe');
            playerIframe.src = '';
            playerContainer.classList.add('hidden');
        });
    }

    // Download button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('Download feature coming soon! Episodes will be available for download.');
        });
    }
    
    console.log('All event listeners set up successfully!');
}

// Page navigation
function showPage(pageName) {
    // Remove active class from all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

    clearVideoPlayer();
    
    // Add active class to target page
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Load content for specific pages
        if (pageName === 'browse') {
            displayShows(currentShows);
        } else if (pageName === 'watchlist') {
            loadWatchlistTab('saved');
        } else if (pageName === 'profile') {
            loadProfileData();
        } else if (pageName === 'home') {
            updateHomePageButtons();
        } else if (pageName === 'login') {
            // Reset to login mode when showing login page
            if (isSignupMode) {
                isSignupMode = false;
                toggleAuthenticationMode();
            }
        }
    } else {
        console.error('Page not found:', pageName);
    }
}

// Update homepage buttons based on login status
function updateHomePageButtons() {
    const heroActions = document.querySelector('.hero-actions');
    if (!heroActions) return;
    
    if (isLoggedIn) {
        // Only show Browse button when logged in
        heroActions.innerHTML = `
            <button class="btn btn-primary" onclick="showPage('browse')">Browse Shows</button>
        `;
    } else {
        // Show both buttons when logged out
        heroActions.innerHTML = `
            <button class="btn btn-primary" onclick="showPage('browse')">Browse Shows</button>
            <button class="btn btn-secondary" onclick="showPage('login'); isSignupMode = true; toggleAuthenticationMode();">Create Profile</button>
        `;
    }
}

// Toggle between login and signup mode
function toggleAuthenticationMode() {
    isSignupMode = !isSignupMode;
    
    const title = document.getElementById('login-title');
    const subtitle = document.getElementById('login-subtitle');
    const emailFieldGroup = document.getElementById('email-field-group');
    const submitBtn = document.querySelector('#login-form button[type="submit"]');
    const toggleText = document.getElementById('toggle-auth-text');
    
    if (isSignupMode) {
        // Signup mode
        title.textContent = 'Create Account';
        subtitle.textContent = 'Sign up to start your watchlist';
        emailFieldGroup.style.display = 'block';
        submitBtn.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-auth-mode">Sign in</a>';
    } else {
        // Login mode
        title.textContent = 'Welcome Back';
        subtitle.textContent = 'Sign in to access your watchlist';
        emailFieldGroup.style.display = 'none';
        submitBtn.textContent = 'Sign In';
        toggleText.innerHTML = 'New user? <a href="#" id="toggle-auth-mode">Create an account</a>';
    }
    
    // Re-attach click listener to the new link
    const newToggleLink = document.getElementById('toggle-auth-mode');
    if (newToggleLink) {
        newToggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthenticationMode();
        });
    }
}

// Handle login/signup
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const email = document.getElementById('login-email').value.trim();
    
    if (isSignupMode) {
        // Sign up mode - require email
        if (username && password && email) {
            isLoggedIn = true;
            userProfile = {
                username: username,
                email: email,
                bio: '',
                genres: [],
                profilePicture: null
            };
            
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            
            updateProfileButton();
            updateHomePageButtons();
            showPage('home');
            alert('Account created successfully!');
            isSignupMode = false;
        } else {
            alert('Please fill in all fields');
        }
    } else {
        // Login mode - don't require email
        if (username && password) {
            // Check if user exists in localStorage
            const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
            
            if (savedProfile && savedProfile.username === username) {
                // Returning user
                isLoggedIn = true;
                userProfile = savedProfile;
                
                localStorage.setItem('isLoggedIn', JSON.stringify(true));
                
                updateProfileButton();
                updateHomePageButtons();
                showPage('home');
                alert('Welcome back, ' + username + '!');
            } else {
                alert('User not found. Please sign up first.');
            }
        } else {
            alert('Please enter username and password');
        }
    }
}

// Handle profile button click
function handleProfileClick() {
    if (isLoggedIn) {
        showPage('profile');
    } else {
        showPage('login');
    }
}

// Load profile data
function loadProfileData() {
    if (!isLoggedIn || !userProfile) {
        showPage('login');
        return;
    }
    
    // Load profile picture
    const profilePic = document.getElementById('profile-picture');
    if (profilePic && userProfile.profilePicture) {
        profilePic.src = userProfile.profilePicture;
    }
    
    // Load form data
    if (userProfile) {
        document.getElementById('username').value = userProfile.username || '';
        
        // Email is now pre-filled and readonly
        const emailField = document.getElementById('email');
        emailField.value = userProfile.email || '';
        emailField.readOnly = true;
        emailField.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        emailField.style.cursor = 'not-allowed';
        
        document.getElementById('bio').value = userProfile.bio || '';
        
        // Load genre preferences
        document.querySelectorAll('.genre-checkboxes input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = userProfile.genres && userProfile.genres.includes(checkbox.value);
        });
    }
}

// Save profile
function saveProfile() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const bio = document.getElementById('bio').value.trim();
    
    const selectedGenres = Array.from(document.querySelectorAll('.genre-checkboxes input:checked'))
        .map(cb => cb.value);

    userProfile = {
        ...userProfile,
        username: username,
        email: email,
        bio: bio,
        genres: selectedGenres
    };

    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    updateProfileButton();
    alert('Profile saved successfully!');
}

// Update profile button
function updateProfileButton() {
    const btn = document.getElementById('profile-btn');
    if (isLoggedIn && userProfile && userProfile.username) {
        btn.textContent = userProfile.username;
    } else {
        btn.textContent = 'Login';
    }
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
        updateProfileButton();
        updateHomePageButtons();
        showPage('home');
        alert('Logged out successfully!');
    }
}

// Handle profile picture upload
function handleProfilePicUpload(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const dataURL = event.target.result;
            document.getElementById('profile-picture').src = dataURL;
            if (userProfile) {
                userProfile.profilePicture = dataURL;
                localStorage.setItem('userProfile', JSON.stringify(userProfile));
            }
        };
        reader.readAsDataURL(file);
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
    
    const isFavorite = favorites.includes(show.id);
    const isInWatchlist = watchlist.includes(show.id);

    card.innerHTML = `
        <div class="show-poster-container">
            <img src="${show.poster}" alt="${show.title}" class="show-poster">
            <div class="show-overlay">
                <button class="quick-action" data-id="${show.id}" data-action="watchlist">
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

    // Click card to view details
    card.addEventListener('click', (e) => {
        // Don't navigate if clicking the watchlist button
        if (!e.target.closest('.quick-action')) {
            showDetails(show.id);
        }
    });

    // Watchlist button
    const watchlistBtn = card.querySelector('.quick-action');
    if (watchlistBtn) {
        watchlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleWatchlist(show.id);
            displayShows(currentShows);
        });
    }

    return card;
}

// Show details page
function showDetails(showId) {
    clearVideoPlayer();
    console.log('Opening show details for ID:', showId);
    
    const show = getShowById(showId);
    if (!show) {
        console.error('Show not found:', showId);
        return;
    }

    // Add to recently watched
    addToRecentlyWatched(showId);

    // Set backdrop and poster
    const backdropImg = document.getElementById('backdrop-image');
    const posterImg = document.getElementById('detail-poster');
    
    if (backdropImg) backdropImg.src = show.poster;
    if (posterImg) posterImg.src = show.poster;
    
    // Set show info
    const titleEl = document.getElementById('detail-title');
    const ratingNumEl = document.getElementById('detail-rating-num');
    const ratingEl = document.getElementById('detail-rating');
    const yearEl = document.getElementById('detail-year');
    const genreEl = document.getElementById('detail-genre');
    const descEl = document.getElementById('detail-description');
    
    if (titleEl) titleEl.textContent = show.title;
    if (ratingNumEl) ratingNumEl.textContent = show.rating;
    if (ratingEl) ratingEl.textContent = `IMDB: ${show.rating}`;
    if (yearEl) yearEl.textContent = show.year;
    if (genreEl) genreEl.textContent = show.genres.join(', ');
    if (descEl) descEl.textContent = show.description;
    
    // Set duration and country
    const durationEl = document.getElementById('detail-duration');
    const countryEl = document.getElementById('detail-country');
    if (durationEl) durationEl.textContent = 'N/A';
    if (countryEl) countryEl.textContent = 'United States';

    // Setup buttons
    setupShowButtons(show);

    // Load episodes
    loadSeasonsAndEpisodes(show);

    // Load similar shows
    loadSimilarShows(show.id);

    // Show the details page
    showPage('show-details');
}

// Setup show detail buttons
function setupShowButtons(show) {
    // Hero play button
    const heroPlayBtn = document.getElementById('hero-play-btn');
    if (heroPlayBtn) {
        heroPlayBtn.onclick = () => {
            const episodesContainer = document.querySelector('.episodes-container');
            if (episodesContainer) {
                episodesContainer.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }

    // Watch now button
    const watchNowBtn = document.getElementById('watch-now-btn');
    if (watchNowBtn) {
        watchNowBtn.onclick = () => {
            if (show.trailer) {
                playEpisode(show.trailer, show.title + ' - Trailer');
            } else {
                const episodesContainer = document.querySelector('.episodes-container');
                if (episodesContainer) {
                    episodesContainer.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
    }

    // Add to favorite button
    const addFavoriteBtn = document.getElementById('add-favorite-btn');
    if (addFavoriteBtn) {
        if (favorites.includes(show.id)) {
            addFavoriteBtn.textContent = '✓ Added to favorites';
            addFavoriteBtn.style.backgroundColor = '#10b981';
        } else {
            addFavoriteBtn.textContent = '+ Add to favorite';
            addFavoriteBtn.style.backgroundColor = '';
        }
        addFavoriteBtn.onclick = () => toggleFavorite(show.id);
    }
}

// Load seasons and episodes
function loadSeasonsAndEpisodes(show) {
    const seasonSelect = document.getElementById('season-select');
    const episodesList = document.getElementById('episodes-list');
    
    seasonSelect.innerHTML = '';
    episodesList.innerHTML = '';
    
    if (!show.seasons || show.seasons.length === 0) {
        episodesList.innerHTML = '<p class="no-episodes">No episodes available</p>';
        return;
    }
    
    // Populate season dropdown
    show.seasons.forEach(season => {
        const option = document.createElement('option');
        option.value = season.seasonNumber;
        option.textContent = season.seasonNumber;
        seasonSelect.appendChild(option);
    });
    
    // Load first season by default
    loadEpisodeButtons(show, 1);
    
    // Handle season change
    seasonSelect.onchange = () => {
        const selectedSeason = parseInt(seasonSelect.value);
        loadEpisodeButtons(show, selectedSeason);
    };
}

// Load episode buttons for selected season
function loadEpisodeButtons(show, seasonNumber) {
    const episodesList = document.getElementById('episodes-list');
    episodesList.innerHTML = '';
    
    const season = show.seasons.find(s => s.seasonNumber === seasonNumber);
    if (!season || !season.episodes) {
        episodesList.innerHTML = '<p class="no-episodes">No episodes available</p>';
        return;
    }
    
    season.episodes.forEach(episode => {
        const episodeBtn = document.createElement('button');
        episodeBtn.className = 'episode-btn';
        episodeBtn.innerHTML = `
            <span class="episode-num">Eps ${episode.episodeNumber}:</span>
            <span class="episode-name">${episode.title}</span>
            <span class="episode-time">${episode.duration}</span>
        `;
        
        // Click to play episode
        episodeBtn.onclick = () => {
            playEpisode(episode.videoUrl, `${show.title} - S${seasonNumber}E${episode.episodeNumber}: ${episode.title}`);
        };
        
        episodesList.appendChild(episodeBtn);
    });
}

// Play episode in player
function playEpisode(videoUrl, title) {
    if (!videoUrl) {
        alert('Video not available');
        return;
    }

    const playerContainer = document.getElementById('player-container');
    const playerIframe = document.getElementById('video-iframe');
    const nowPlayingTitle = document.getElementById('now-playing-title');
    
    nowPlayingTitle.textContent = title;
    playerIframe.src = videoUrl;
    playerContainer.classList.remove('hidden');
    
    // Scroll to player
    playerContainer.scrollIntoView({ behavior: 'smooth' });
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
    
    // Update button if on details page
    const favoriteBtn = document.getElementById('add-favorite-btn');
    if (favoriteBtn) {
        if (favorites.includes(showId)) {
            favoriteBtn.textContent = '✓ Added to favorites';
            favoriteBtn.style.backgroundColor = '#10b981';
        } else {
            favoriteBtn.textContent = '+ Add to favorite';
            favoriteBtn.style.backgroundColor = '';
        }
    }
}

// Add to recently watched
function addToRecentlyWatched(showId) {
    recentlyWatched = recentlyWatched.filter(id => id !== showId);
    recentlyWatched.unshift(showId);
    recentlyWatched = recentlyWatched.slice(0, 20);
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
                <button class="btn btn-primary" onclick="showPage('browse')">Browse Shows</button>
            </div>
        `;
        return;
    }

    shows.forEach(show => {
        const card = createShowCard(show);
        grid.appendChild(card);
    });
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
    if (icon) {
        icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
    
    console.log('Theme switched to:', newTheme);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
    
    console.log('Theme loaded:', savedTheme);
}

function clearVideoPlayer() {
    const playerIframe = document.getElementById('video-iframe');
    const playerContainer = document.getElementById('player-container');
    
    if (playerIframe) {
        playerIframe.src = '';
    }
    if (playerContainer) {
        playerContainer.classList.add('hidden');
    }
}
