// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Call loadQuotes() when the page loads to initialize quotes from local storage
window.onload = loadQuotes;

// Modify addQuote function to save quotes after adding a new one
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;

  if (newQuoteText.trim() === "" || newQuoteCategory.trim() === "") {
    alert("Please enter both a quote and a category.");
    return;
  }

  const newQuote = { text: newQuoteText, category: newQuoteCategory };
  quotes.push(newQuote);

  // Clear input fields
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  // Save quotes to local storage
  saveQuotes();

  // Display the newly added quote
  showRandomQuote();
}
