// Array with the text that will be typed and erased
const texts = ["Software Engineer", "Problem Solver", "Innovator", "Team Leader", "Mentor"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typed-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Wait 2 seconds before erasing text
  } else {
    setTimeout(type, 150); // Typing speed
  }
})();
