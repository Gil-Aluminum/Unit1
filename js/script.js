/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes array, 10 best The Office quotes which will show randomly.
***/
const quotes = [
  {
    quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
    source: "Michael Scott",
    citation: "The Office",
    year: 2008,
  } ,
   {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "Michael Scott",
    citation: "The Office",
    year: 2005,
  } ,
   {
    quote: "If I don’t have some cake soon, I might die.",
    source: "Stanley Hudson",
    citation: "The Office",
    year: 2007,
  } ,
   {
    quote: "The worst thing about prison was the dementors.",
    source: 'Michael “Prison Mike” Scott',
    citation: "The Office",
    year: 2003,
  } ,
   {
    quote: "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    source: "Michael Scott",
    citation: "The Office",
    year: 2005,
  } ,
   {
    quote: "Identity theft is not a joke, Jim! Millions of families suffer every year.",
    source: "Dwight Schrute",
    citation: "The Office",
    year: 2006,
  } ,
   {
    quote: "Today, smoking is going to save lives.",
    source: "Dwight Schrute",
    citation: "The Office",
    year: 2008,
    tag: ",Best scene!"
  } ,
   {
    quote: "I am running away from my responsibilities. And it feels good.",
    source: "Michael Scott",
    citation: "The Office",
    year: 2007,
  } ,
   {
    quote: "I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.",
    source: "Kevin Malone",
    citation: "The Office",
    year: 2006,
  } ,
   {
    quote: "If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.",
    source: "Dwight Schrute",
    citation: "The Office",
    year: 2005,
  }
]
/***
 * `getRandomQuote` function - this function returns a random quote through genarting a random number.
***/

function getRandomQuote (){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// *just checking!
//console.log (getRandomQuote())
/***
 * `printQuote` function - this function print out a random quote to the html and adding citation year and tag if needed.
***/

function printQuote (){
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source}`
                if (randomQuote.hasOwnProperty('citation')){
                  html += `<span class="citation"> ${randomQuote.citation} </span>`}
                
                if (randomQuote.hasOwnProperty(`year`)) {
                 html += `<span class="year"> ${randomQuote.year} </span>`
                }

                if (randomQuote.hasOwnProperty(`tag`)) {
                 html += `<span class="tag"> ${randomQuote.tag} </span>`
                }
                 document.getElementById('quote-box').innerHTML = html;    

                  // This function change the background color of the page randomly.
                  let red = Math.floor(Math.random() * 256);
                  let green = Math.floor(Math.random() * 256);
                  let blue = Math.floor(Math.random() * 256);
                  let randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
                   document.body.style.backgroundColor = randomRGB;
                    return html;        
}




// This function refresh the page every 15 seconds (got help on slack channel from @Rachel Johnson [Thanks Rachel!])
setInterval(printQuote, 15000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
