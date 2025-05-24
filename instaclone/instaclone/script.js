// Sample data for stories
const stories = [
    { username: "traveler", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { username: "foodlover", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { username: "adventurer", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { username: "photographer", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { username: "artist", image: "https://randomuser.me/api/portraits/women/33.jpg" },
    { username: "fitness", image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { username: "musician", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { username: "writer", image: "https://randomuser.me/api/portraits/men/88.jpg" }
];

// Sample data for suggested users
const suggestedUsers = [
    { username: "travel_photography", name: "Followed by traveler + 3 more", image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { username: "food_pics", name: "Followed by foodlover", image: "https://randomuser.me/api/portraits/men/42.jpg" },
    { username: "nature_lover", name: "New to Instagram", image: "https://randomuser.me/api/portraits/women/58.jpg" },
    { username: "fitness_coach", name: "Followed by fitness + 8 more", image: "https://randomuser.me/api/portraits/men/65.jpg" },
    { username: "art_gallery", name: "Followed by artist", image: "https://randomuser.me/api/portraits/women/23.jpg" }
];

// Sample data for posts
const posts = [
    {
        username: "traveler",
        userImage: "https://randomuser.me/api/portraits/women/44.jpg",
        image: "https://source.unsplash.com/random/600x600/?travel",
        likes: 1243,
        caption: "Exploring new places! 🌍 #travel #adventure",
        comments: 42,
        time: "2 HOURS AGO"
    },
    {
        username: "foodlover",
        userImage: "https://randomuser.me/api/portraits/men/22.jpg",
        image: "https://source.unsplash.com/random/600x600/?food",
        likes: 892,
        caption: "Delicious pasta for dinner! 🍝 #foodie #pasta",
        comments: 31,
        time: "5 HOURS AGO"
    },
    {
        username: "photographer",
        userImage: "https://randomuser.me/api/portraits/men/75.jpg",
        image: "https://source.unsplash.com/random/600x600/?photography",
        likes: 2156,
        caption: "Golden hour magic ✨ #photography #sunset",
        comments: 87,
        time: "1 DAY AGO"
    }
];

// Load stories
function loadStories() {
    const storiesContainer = document.querySelector('.stories');

    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.className = 'story';
        storyElement.innerHTML = `
            <div class="story-avatar">
                <img src="${story.image}" alt="${story.username}">
            </div>
            <p>${story.username}</p>
        `;
        storiesContainer.appendChild(storyElement);
    });
}

// Load suggested users
function loadSuggestedUsers() {
    const suggestedUsersContainer = document.querySelector('.suggested-users');

    suggestedUsers.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'suggested-user';
        userElement.innerHTML = `
            <img src="${user.image}" alt="${user.username}">
            <div class="suggested-user-info">
                <p>${user.username}</p>
                <p>${user.name}</p>
            </div>
            <a href="#">Follow</a>
        `;
        suggestedUsersContainer.appendChild(userElement);
    });
}

// Load posts
function loadPosts() {
    const postsContainer = document.querySelector('.posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-user">
                    <img src="${post.userImage}" alt="${post.username}">
                    <p class="post-username">${post.username}</p>
                </div>
                <div class="post-more">...</div>
            </div>
            <img class="post-image" src="${post.image}" alt="Post by ${post.username}">
            <div class="post-actions">
                <div class="post-actions-left">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <i class="far fa-bookmark"></i>
            </div>
            <p class="post-likes">${post.likes.toLocaleString()} likes</p>
            <p class="post-caption">
                <span class="post-caption-username">${post.username}</span>
                ${post.caption}
            </p>
            <p class="post-comments">View all ${post.comments} comments</p>
            <p class="post-time">${post.time}</p>
            <div class="post-add-comment">
                <input type="text" placeholder="Add a comment...">
                <button disabled>Post</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Initialize the app
function init() {
    loadStories();
    loadSuggestedUsers();
    loadPosts();

    // Add event listener for comment input
    document.addEventListener('input', function (e) {
        if (e.target.matches('.post-add-comment input')) {
            const button = e.target.nextElementSibling;
            button.disabled = e.target.value.trim() === '';
        }
    });

    // Add like functionality
    document.addEventListener('click', function (e) {
        if (e.target.matches('.fa-heart')) {
            e.target.classList.toggle('far');
            e.target.classList.toggle('fas');
            e.target.style.color = e.target.classList.contains('fas') ? '#ed4956' : '';
        }
    });
}

// Run the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);