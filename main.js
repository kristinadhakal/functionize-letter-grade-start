// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById('eng-percent').value;
  let socPercent = +document.getElementById('soc-percent').value;
  let mathPercent = +document.getElementById('math-percent').value;
  let sciPercent = +document.getElementById('sci-percent').value;

  // Calculate & Output Letter Grades
  // English
  let engLetter;
  if (engPercent >= 80) {
    engLetter = 'A';
  } else if (engPercent >= 65) {
    engLetter = 'B';
  } else if (engPercent >= 55) {
    engLetter = 'C';
  } else if (engPercent >= 50) {
    engLetter = 'D';
  } else {
    engLetter = 'F';
  }
  document.getElementById('eng-letter').innerHTML = engLetter;

  // Social Studies
  let socLetter;
  if (socPercent >= 80) {
    socLetter = 'A';
  } else if (socPercent >= 65) {
    socLetter = 'B';
  } else if (socPercent >= 55) {
    socLetter = 'C';
  } else if (socPercent >= 50) {
    socLetter = 'D';
  } else {
    socLetter = 'F';
  }
  document.getElementById('soc-letter').innerHTML = socLetter;

  // Mathematics
  let mathLetter;
  if (mathPercent >= 80) {
    mathLetter = 'A';
  } else if (mathPercent >= 65) {
    mathLetter = 'B';
  } else if (mathPercent >= 55) {
    mathLetter = 'C';
  } else if (mathPercent >= 50) {
    mathLetter = 'D';
  } else {
    mathLetter = 'F';
  }
  document.getElementById('math-letter').innerHTML = mathLetter;

  // Science
  let sciLetter;
  if (sciPercent >= 80) {
    sciLetter = 'A';
  } else if (sciPercent >= 65) {
    sciLetter = 'B';
  } else if (sciPercent >= 55) {
    sciLetter = 'C';
  } else if (sciPercent >= 50) {
    sciLetter = 'D';
  } else {
    sciLetter = 'F';
  }
  document.getElementById('sci-letter').innerHTML = sciLetter;
}
