//copilot
document.addEventListener('DOMContentLoaded', () => {
  const createRandomElement = (className, content) => {
      const element = document.createElement('div');
      element.classList.add(className);
      element.innerHTML = content;
      element.style.position = 'absolute';
      element.style.top = `${Math.random() * 100}vh`;
      element.style.left = `${Math.random() * 100}vw`;
      element.style.transform = `scale(${Math.random() * 1.9 + 0.5})`;
      document.body.appendChild(element);
      return element;
  };

  const elements = [];
  for (let i = 0; i < 75; i++) {
      elements.push(createRandomElement('party', '🎈'));
  }

  

  setTimeout(() => {
      elements.forEach(element => element.remove());
  }, 8000); // Remove elements after 8 seconds
});

// Countdown Timer Logic
const countdown = () => {
  const targetDate = new Date("January 28, 2025 15:03:00").getTime(); // Format: Month Day, Year HH:MM:SS

  if (isNaN(targetDate)) {
    console.error("Invalid target date. Please check the format.");
    return;
  }

  const timer = setInterval(() => {
    const now = new Date().getTime();

    const difference = targetDate - now;

    // If the countdown is over, display "Project Launched!"
    if (difference < 0) {
      clearInterval(timer);
      // Add your code to display "Project Launched!" here
    }

    // Calculate time components
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
};
countdown();
