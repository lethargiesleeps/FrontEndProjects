const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const config = {
    headers: {
        Accept: 'application/json'
    }
}

generateJoke();
jokeBtn.addEventListener('click', generateJoke)
async 
async function generateJoke() {
    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();
    jokeDiv.innerHTML = data.joke;
}
