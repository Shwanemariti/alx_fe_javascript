// Notify the user of resolved conflicts
function notifyUserOfUpdate() {
  const notification = document.createElement('div');
  notification.innerText = "Quotes have been updated from the server.";
  notification.classList.add('notification');
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Modify resolveConflicts to include user notification
function resolveConflicts(serverQuotes) {
  const localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  let conflictsResolved = false;
  
  const combinedQuotes = serverQuotes.concat(localQuotes.filter(localQuote =>
    !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)
  ));

  if (combinedQuotes.length !== localQuotes.length) {
    conflictsResolved = true;
  }

  localStorage.setItem('quotes', JSON.stringify(combinedQuotes));
  
  // Update the displayed quotes
  showRandomQuote();

  if (conflictsResolved) {
    notifyUserOfUpdate();
  }
}

