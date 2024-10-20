// Periodically fetch new quotes from the server (every 30 seconds)
setInterval(fetchQuotesFromServer, 30000);

function resolveConflicts(serverQuotes) {
  const localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  
  // Combine quotes from server and local, giving precedence to server quotes
  const combinedQuotes = serverQuotes.concat(localQuotes.filter(localQuote =>
    !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)
  ));

  // Save combined quotes to local storage
  localStorage.setItem('quotes', JSON.stringify(combinedQuotes));

  // Update the displayed quotes
  showRandomQuote();
}
