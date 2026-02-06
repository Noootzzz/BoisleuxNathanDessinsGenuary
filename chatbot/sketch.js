let bot;
let userInput;
let submitButton;
let outputDiv;

function preload() {
    bot = new RiveScript();
    bot.loadFile(["begin.rive", "dialogue.rive"])
        .then(botReady)
        .catch(botError);
}

function setup() {
    noCanvas(); // We don't need a canvas for this chat interface

    // Create UI elements
    userInput = createInput('');
    userInput.parent('chat-container'); // Append to our container
    userInput.attribute('placeholder', 'Type something...');

    submitButton = createButton('Send');
    submitButton.parent('chat-container');
    submitButton.mousePressed(botChat);

    outputDiv = select('#output');

    // Allow pressing Enter to submit
    userInput.changed(botChat);
}

function botReady() {
    console.log("Bot is ready!");
    bot.sortReplies(); // Required after loading files
}

function botError(err) {
    console.error("Bot error: " + err);
}

function botChat() {
    let input = userInput.value();
    if (input.trim() === '') return;

    let username = "local-user";

    // Display user message
    let userP = createP(input);
    userP.class('userConvo');
    userP.parent(outputDiv);

    // Get bot reply
    bot.reply(username, input).then(function (reply) {
        let botP = createP(reply);
        botP.class('botConvo');
        botP.parent(outputDiv);

        // Auto-scroll to bottom
        let outEl = document.getElementById('output');
        outEl.scrollTop = outEl.scrollHeight;
    });

    // Clear input
    userInput.value('');
}
