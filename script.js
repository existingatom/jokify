async function fetchQuote() {
    const url = "https://v2.jokeapi.dev/joke/Dark?type=single";
    const response = await fetch(url);
    const text = await response.json();
    console.log(text);
    document.getElementById("meme").innerHTML = text.joke;
}

fetchQuote();