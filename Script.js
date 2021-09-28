fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('joke');

        jokeElement.innerHTML = jokeText;
})