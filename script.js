// Handle the initial username input and save to local storage
function submitUsername() {
  const username = document.getElementById('username').value;
  if (username) {
    localStorage.setItem('username', username);
    window.location.href = 'chat.html';  // Redirect to the chat page
  } else {
    alert('Please enter a username!');
  }
}

// Send message to the chat box
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const messageText = messageInput.value;

  if (messageText.trim() !== '') {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message');
    messageBox.textContent = `${localStorage.getItem('username')}: ${messageText}`;

    document.getElementById('chat-box').appendChild(messageBox);
    messageInput.value = '';
    messageInput.focus();
  }
}

// Load the username from localStorage and display in chat
document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  if (!username) {
    window.location.href = 'index.html';  // If no username, go back to the selection page
  }
});
