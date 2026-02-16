const facts = [
  "The snare drum comes from military marching bands.",
  "Drumming is one of the oldest musical activities in history.",
  "A standard drum set usually has 5 main pieces.",
  "The hi-hat is played with your foot and sticks.",
  "Drummers use a metronome to improve timing."
];

function newFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[randomIndex];
}
