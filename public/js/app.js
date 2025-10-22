// Counter functionality
let count = 0;
const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    countElement.textContent = count;

    // Add a little animation
    countElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countElement.style.transform = 'scale(1)';
    }, 200);
});

// Greeting functionality
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (name) {
        greeting.textContent = `Hello, ${name}! Welcome to our web app!`;
        nameInput.value = '';
    } else {
        greeting.textContent = 'Please enter your name first!';
    }
});

// Allow Enter key to trigger greeting
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        greetBtn.click();
    }
});

// Add smooth transitions to counter
countElement.style.transition = 'transform 0.2s';

console.log('Web app loaded successfully!');
