
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav a[href="#Home"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#Home').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav a[href="#About"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav a[href="#Gallery"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#Gallery').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav a[href="#contact"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});
const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Email: ${email}, Password: ${password}`);
});
// Share content on social media
ayrshare.share({
    text: 'Check out this amazing sketch!',
    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsketch-art&psig=AOvVaw0R79g7nzNqYO4NClE_G1SC&ust=1714728141547000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPic0aDS7oUDFQAAAAAdAAAAABAE',
    platforms: ['twitter', 'facebook', 'linkedin'], // Specify the platforms you want to share to
    hashtags: ['art', 'sketch'], // Add hashtags
    via: 'ArtSketch', // Add via (for Twitter)
    // You can add more parameters as needed, such as images or custom messages
  });
  