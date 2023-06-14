const quoteText = document.querySelector(".quote1"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".a-name .n1"),
soundBtn = document.querySelector(".voice"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".app");

//function for random quote
function randomQuote(){

    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    //fetching random quotes from the API and implementing the result into the webpage.
   fetch("http://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
   });
}

soundBtn.addEventListener("click" , () => {

    //SpeechSynthesisUtterance is the web speech API used for speech requests. 
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // it is gonna speak the utterance
});

copyBtn.addEventListener("click", () => {

    //copying the quote text on CopyBtn click
    //writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {

    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank"); //opening new twitter tab with quote in the url
});

quoteBtn.addEventListener("click" , randomQuote);