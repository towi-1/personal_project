const showsLibrary = [
    {
        id: 1,
        title: "Breaking Bad",
        year: 2008,
        rating: 9.5,
        genres: ["drama", "thriller"],
        description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
        poster: "images/breaking-bad.jpg", // Path to your local image
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // YouTube/DailyMotion embed link
        downloadUrl: "downloads/breaking-bad-s01e01.mp4", // Optional download link
        seasons: 5,
        episodes: 62
    },
    {
        id: 2,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genres: ["sci-fi", "horror", "drama"],
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        poster: "images/stranger-things.jpg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
        downloadUrl: "",
        seasons: 4,
        episodes: 34
    },
    {
        id: 3,
        title: "The Office",
        year: 2005,
        rating: 9.0,
        genres: ["comedy"],
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        poster: "images/the-office.jpg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
        downloadUrl: "",
        seasons: 9,
        episodes: 201
    },
    {
        id: 4,
        title: "Game of Thrones",
        year: 2011,
        rating: 9.2,
        genres: ["action", "drama"],
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        poster: "images/game-of-thrones.jpg",
        videoUrl: "https://www.dailymotion.com/embed/video/VIDEO_ID",
        downloadUrl: "",
        seasons: 8,
        episodes: 73
    },
    {
        id: 5,
        title: "Friends",
        year: 1994,
        rating: 8.9,
        genres: ["comedy", "romance"],
        description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        poster: "images/friends.jpg",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
        downloadUrl: "",
        seasons: 10,
        episodes: 236
    },
    // Add more shows following this template
];

// Helper functions to work with your local data

// Get all shows
function getAllShows() {
    return showsLibrary;
}

// Get show by ID
function getShowById(id) {
    return showsLibrary.find(show => show.id === id);
}

// Search shows by title
function searchShows(query) {
    const lowerQuery = query.toLowerCase();
    return showsLibrary.filter(show => 
        show.title.toLowerCase().includes(lowerQuery)
    );
}

// Filter shows by genre
function filterByGenre(genre) {
    if (!genre || genre === "") return showsLibrary;
    return showsLibrary.filter(show => 
        show.genres.includes(genre.toLowerCase())
    );
}

// Filter shows by year
function filterByYear(year) {
    if (!year || year === "") return showsLibrary;
    return showsLibrary.filter(show => show.year === parseInt(year));
}

// Sort shows
function sortShows(shows, sortBy) {
    const sortedShows = [...shows];
    
    switch(sortBy) {
        case 'popularity':
            return sortedShows.sort((a, b) => b.rating - a.rating);
        case 'rating':
            return sortedShows.sort((a, b) => b.rating - a.rating);
        case 'release_date':
            return sortedShows.sort((a, b) => b.year - a.year);
        case 'title':
            return sortedShows.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return sortedShows;
    }
}

// Advanced filtering (combine multiple filters)
function filterShows(options = {}) {
    let results = showsLibrary;
    
    // Apply search query
    if (options.query) {
        results = searchShows(options.query);
    }
    
    // Apply genre filter
    if (options.genre) {
        results = results.filter(show => 
            show.genres.includes(options.genre.toLowerCase())
        );
    }
    
    // Apply year filter
    if (options.year) {
        results = results.filter(show => 
            show.year === parseInt(options.year)
        );
    }
    
    // Apply minimum rating filter
    if (options.minRating) {
        results = results.filter(show => 
            show.rating >= options.minRating
        );
    }
    
    // Apply sorting
    if (options.sortBy) {
        results = sortShows(results, options.sortBy);
    }
    
    return results;
}

// Get random shows for recommendations
function getRandomShows(count = 4, excludeId = null) {
    let shows = showsLibrary.filter(show => show.id !== excludeId);
    const shuffled = shows.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Get shows by similar genre
function getSimilarShows(showId, count = 4) {
    const show = getShowById(showId);
    if (!show) return [];
    
    const similar = showsLibrary.filter(s => {
        if (s.id === showId) return false;
        return s.genres.some(genre => show.genres.includes(genre));
    });
    
    return similar.slice(0, count);
}

// Export for use in other files (if using modules)
// export { showsLibrary, getAllShows, getShowById, searchShows, filterShows, getSimilarShows };