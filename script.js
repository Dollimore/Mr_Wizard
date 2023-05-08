const image = document.getElementById('frog');
const outputTextarea = document.getElementById('outputText'); 

let clickCount = 0;
const images = ['real1.png', 'real2.png']; 
let imageIndex = 0;
let imageInterval;

function typeWriter(text, index) {
  if (index < text.length) {
    outputTextarea.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => {
      typeWriter(text, index);
    }, 40);
  } else {
    clearInterval(imageInterval); 
  }
}

function switchImage() {
  if (imageIndex < images.length) {
    image.src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length; 
  }
}

function clickListener() {
  clickCount++;
  outputTextarea.innerText = '';

  if (clickCount === 1) {
    imageInterval = setInterval(switchImage, 300);
    typeWriter('Greetings Adventurer!', 0);
  } else if (clickCount === 2) {
    imageInterval = setInterval(switchImage, 300);
    typeWriter('Do you wish to know my wisdom?', 0);
  } else if (clickCount === 3) {
    imageInterval = setInterval(switchImage, 300);
    const responses = [
      'If you wait for the sun to reach its height in the sky on the summer equinox, then stare at it for 60 seconds, you will go blind.',
      'If you pee in a pool whilst swimming in it and then tell the people around you, they will think you are weird. However if you stand on the edge of the pool and pee into it, you will be put in jail for indecent exposure. Some things are the same in action, but different in outcome.',
      'mmmmmm.....Your future is clouded. You must travel to the mudslide marsh and see Big Shyeit the grey goblin. For the price of one pound of mooseknuckle he will enlighten you.',
      'If you go to your mirror at 1am and chant "Bloody mary, bloody mary, bloody mary!" and spin around three times, then light a candle. You will see the reflection of a retard.',
      'Many people say I have a hatred for the hobgoblins of the plain. They say we wizard frogs oppress them and belittle them. Nonsense! Some of my best slaves are hobgoblins! ',
      'Always check the size of your feet before you fill somebody else\'s shoes.',
      'Local bandits have taken up what is know as "Rice Picking". They fill up peoples locks with rice and water. Then when it expands it breaks the interior of the lock allowing them to enter. Locals are countering this by becoming homeless.',
      'Ask not for an easier life, but for broader shoulders. Suffering is what makes happiness so sweet. For there is no sunshine without rain, nor no light without dark.',
      'I once had a dream of a golden, glowing orb. It spoke to me in an ethereal voice, showing me the light of reason and the grey gloom that we call ignorance. It boomed in my head for what seemed like a century. Passing on knowlegde that trancended both our universe and the next. My body disintergrated yet my coniousness remained. The more I let go, the brighter everything became, until It dawned on me...I was the orb.....Finally when I awoke, I found that I had shit myself. ',
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    typeWriter(randomResponse, 0);
  } else if (clickCount === 4) {
    typeWriter('I have already said too much! Begone!', 0);
  }
  const audio = new Audio('audio_click.mp3'); // Replace with the path to your audio file
  audio.play();
}

image.addEventListener('click', clickListener);
