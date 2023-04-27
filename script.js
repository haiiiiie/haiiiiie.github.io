
// Music Player
const musicPlayer = document.getElementById("music-player");

musicPlayer.volume = 0.5;

// Random Generator
const generateButton = document.getElementById("generate-button");
const generatedText = document.getElementById("generated-text");

function generateRandomText() {
  const texts = [
    "Why did the carrot go to the doctor? Because it was feeling a bit 'peeled'!",
    "Why did the carrot break up with his girlfriend? She was too 'rooted' in her ways!",
    "What do you call a carrot that's not orange? A 'carrot-tan'!",
    "Why was the carrot such a bad artist? It kept drawing a blank!",
    "What did the baby carrot say to the mommy carrot? 'Where's my pop?'",
    "Why was the carrot afraid of the dark? It was scared of the boogeyman!",
    "What did the carrot say when it got a compliment? 'Oh, shucks, I'm just a root!'",
    "Why did the carrot go to the gym? To become a buff-stem!",
    "What do you call a rabbit who tells good jokes? A funny bunny, of course! And what does a funny bunny eat? Joke-erats!",
    "Why did the carrot cross the road? To prove he wasn't chicken!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What do you call a lazy vegetable? A 'pea-sleeper'!",
        "Why did the cucumber need a lawyer? It was in a pickle!",
        "What do you call a group of carrots? A 'root' party!",
        "Why did the pea go to the doctor? It was feeling a little green!",
        "Why don't vegetables go to school? Because they already know how to read!",
        "What did the grape say when it got stepped on? Nothing, it just let out a little 'whine'!",
        "Why did the broccoli go to the doctor? Because it needed a 'stalk'ing filler!",
        "Why did the mushroom get invited to all the parties? Because he's a 'fungi' to be with!",
        "Why did the onion cross the road? To get to the other side!",
        "What do you call a vegetable that's always on the phone? A 'celery' phone!",
        "What do you call a vegetable that's always out of breath? Aspar-agus!",
        "What do you call a vegetable that can play sports? Squash!",
        "Why did the pepper go to the doctor? It was feeling a little 'hot'!",
        "What did the lettuce say to the celery? 'Stop 'stalk'ing me!'",
        "What do you call a vegetable that tells jokes? A 'corny' vegetable!",
        "Why did the radish go to the doctor? Because it was 'beet' red!",
        "What do you call a vegetable that's always running? A 'marathon'!",
        "Why did the sweet potato cross the road? To get to the 'yam' side!",
        "What do you call a vegetable that's always happy? A 'jolly-green' bean!",
        "Why don't pumpkins ever quarrel? They prefer to keep things 'gourd-ial'!",
        "What's the biggest ant in the world? An 'ele-ant'!",
        "Why did the corn go to the doctor? Because it was feeling a little 'ear'ated!",
        "What did the vegetable say to the chef? 'Lettuce' make some dinner!",
        "What's the most musical vegetable? A 'beet' box!",
        "Why did the potato go to the doctor? Because it had a 'chip' on its shoulder!",
        "What do you call a vegetable that's always on the go? A 'traveling' turnip!",
        "Why did the carrot go to the party alone? Because it couldn't find a 'date'!",
        "Why did the beetroot blush? Because it saw the salad 'dressing'!",
        "What do you call a vegetable that's good at math? A 'cabbage'-tree!",
        "Why don't vegetables have many friends? Because they're too 'peas-y'!",
        "Why did the vegetable go to the gym? To get 'squash'ed!",
        "What do you call a vegetable that's always cleaning? A 'scrub'ber!",
        "Why did the onion go to the doctor? Because it was 'tearing' up!",
        "What do you call a vegetable that's always getting lost? A 'mis-leek'!",
        "Why did the pea get in trouble at school? It was always 'poding' off!"
      
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  generatedText.textContent = texts[randomIndex];
}

generateButton.addEventListener("click", generateRandomText);
