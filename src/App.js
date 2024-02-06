import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const dynamicText = document.querySelector("h1 span");
  const words = ['Ketua Jamet',"Gopal suka makan","Lont* Curug", "Botita Manjalita"];

  // Variables to track the position and deletion status of the word
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
          // If condition is true, type the next character
          charIndex++;
          setTimeout(typeEffect, 70);
      } else if (isDeleting && charIndex > 0) {
          // If condition is true, remove the previous character
          charIndex--;
          setTimeout(typeEffect, 35);
      } else {
          // If word is deleted then switch to the next word
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 700);
      }
  }

  typeEffect();
  return (
    <div className="App">
    </div>
  );
}

export default App;
