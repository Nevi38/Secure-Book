const MARKETPLACE = document.getElementById('marketplace');
const MUSIC = document.getElementById('music');
const DISCOVER = document.getElementById('discover');
const LIST_FRIEND = document.getElementById('list-friends');
const PROFILE = document.getElementById('profile');

MARKETPLACE.addEventListener('click', function() {
    window.location.href = "store.html";
});

MUSIC.addEventListener('click', function() {
    window.location.href = "music-player.html";
});

DISCOVER.addEventListener('click', function() {
    window.location.href = "discover.html";
});

LIST_FRIEND.addEventListener('click', function() {
    window.location.href = "listfriend.html";
});

PROFILE.addEventListener('click', function() {
    window.location.href = "profile.html";
});
