function Countdown() {
  const launchDate = new Date('February 16, 2025 10:10:00 GMT+0530').getTime();  // for countdown date and time here
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownInterval);
    window.location.href = 'https://project-launched.vercel.app/'; // Redirect to launched page
  }
}

const countdownInterval = setInterval(Countdown, 1000);
Countdown();


// Footer removal
function removeFooterAtSpecificDateTime() { 
  const footerRemovalDate = new Date('February 15, 2025 21:00:00 GMT+0530'); // for footer date and time here
  const now = new Date();

  if (now >= footerRemovalDate) {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.remove();
      console.log('Footer removed successfully.');
    }
  }
}

// Check every remove the footer at the right time
setInterval(removeFooterAtSpecificDateTime, 1000);


// Additional animation logic
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
  }, 8000); 
});
