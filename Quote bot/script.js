const quotes = [
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    mood: "positive",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    mood: "motivational",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    mood: "inspirational",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    mood: "motivational",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    mood: "positive",
  },
];

const quoteParagraph = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");
const moodSelector = document.getElementById("mood-selector");

quotes.forEach((quote) => {
  const option = `<option value="${quote.mood}">${quote.author}</option>`;
  moodSelector.innerHTML += option;
});

moodSelector.addEventListener("change", function (event) {
  const quote = quotes.find((quote) => quote.mood === event.target.value);
  quoteParagraph.innerHTML = quote.text;
});

generateBtn.addEventListener("click", function () {
  quoteParagraph.innerText =
    quotes[Math.floor(Math.random() * quotes.length)].text;
});
