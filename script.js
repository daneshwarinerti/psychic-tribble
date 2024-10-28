document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    appendMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    setTimeout(() => appendMessage(botResponse, 'bot'), 1000); // Simulate a delay
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (lowerInput.includes('courses')) {
        return 'We offer a variety of courses. What are you interested in?';
    } else if (lowerInput.includes('location')) {
        return 'We are located at 123 College Ave.';
    } else {
        return 'I\'m sorry, I didn\'t understand that.';
    }
}
