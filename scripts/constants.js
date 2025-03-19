
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeTile = document.querySelector(".tile_time-remaining");


const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");

const resetButton = document.querySelector(".reset");


const keys = document.querySelectorAll(".key");


const word = document.querySelector("#word-template").content;



const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./";

const ingoredkeys = ["Shift", "CapsLock"];

const punctuationOrSpace = ",.; ";

const paragraphs = [
  `The early morning sun cast golden hues across the quiet town birds chirped cheerfully as a gentle breeze rustled the trees a few joggers passed by enjoying the fresh air the aroma of freshly brewed coffee filled the streets signaling the start of another busy yet beautiful day`,  

`Technology has revolutionized the way we communicate from instant messaging to video calls staying connected is easier than ever social media platforms allow us to share moments opinions and ideas instantly despite the convenience balancing online interactions with real life connections remains essential for a fulfilling and meaningful life`,  

`Life is a journey filled with ups and downs every challenge we face shapes us into who we are learning from mistakes and growing stronger is part of the process embracing change and adapting to new situations helps us navigate through life's unpredictable paths leading to personal growth and resilience`,  

`A river flows endlessly carving its way through mountains and valleys its journey is long and uncertain but it never stops moving forward like the river we must keep pushing through obstacles no matter how tough perseverance and determination will always lead us to new opportunities and brighter horizons`,  

`The stars twinkled in the night sky painting a mesmerizing view the vast universe holds countless mysteries waiting to be explored with each passing night we gaze at the sky wondering about distant galaxies and other worlds beyond our reach curiosity fuels our desire to uncover the secrets of existence`,  

`Friendship is a bond that grows stronger with time true friends support and uplift each other through life's challenges laughter and shared moments create memories that last forever even when miles apart the connection remains unbroken reminding us that real friendship is not measured by distance but by the heart`,  

`The sound of waves crashing against the shore brings a sense of peace walking along the beach with sand between our toes reminds us of the beauty of nature the ocean holds endless wonders from its mysterious depths to the countless creatures that call it home a world of discovery awaits`,  

`Hard work and dedication pave the way to success dreams do not come true overnight persistence patience and effort are the keys to achieving great things every step forward no matter how small brings us closer to our goals never give up because progress is made one step at a time`,  

`Learning is a lifelong journey every experience teaches us something valuable knowledge opens doors to endless possibilities and fuels our curiosity to explore more the more we learn the more we realize how much remains unknown embrace every opportunity to grow expand your mind and discover new perspectives on life`,  

`The beauty of nature lies in its simplicity from towering mountains to delicate flowers every element plays its part in the grand design the colors of a sunset the whispering wind and the songs of birds create a symphony of peace reminding us to appreciate the world around us`,  

`Creativity is the essence of innovation ideas are born from curiosity and imagination whether through art music writing or science creativity drives progress and change never be afraid to express your thoughts or bring your ideas to life because every great achievement begins with a single creative spark`,  

`A journey begins with a single step sometimes the road ahead seems daunting but each step forward brings new experiences and lessons fear of the unknown should never stop us from moving forward every destination is reached by walking the path with courage determination and a willingness to embrace change`,  

`Kindness has the power to change the world a simple smile a helping hand or a kind word can brighten someone's day even the smallest act of kindness creates a ripple effect spreading positivity wherever it goes in a world that can sometimes be harsh kindness is a light of hope`,  

`The night is quiet and still as the moon casts a soft glow over the earth stars twinkle in the vast sky whispering stories of ancient times there is something magical about the silence of the night a moment of reflection peace and wonder in the endless expanse of space`,  

`Time is a precious gift once lost it can never be regained every moment counts and should be cherished spend time doing what you love with people who matter every second shapes our journey and the memories we create today will be the stories we carry with us forever`,  

`Patience is the key to achieving anything worthwhile great things take time to build and every setback is just a stepping stone toward success rushing through life often leads to mistakes but those who wait and work hard eventually see the fruits of their labor patience and perseverance always pay off`,  

`The sound of raindrops against the window brings a sense of calm watching the rain fall in steady rhythms reminds us that storms pass and the sun will shine again just like in life challenges may come but they never last forever hope and strength will carry us through`,  

`Books open the door to new worlds and endless adventures within their pages we find knowledge inspiration and stories that transport us beyond reality reading allows us to experience different perspectives and expand our understanding of life each book holds a universe waiting to be discovered by those who seek it`,  

`Music is a universal language that speaks to the soul its melodies bring comfort joy and inspiration whether through a simple tune or a grand symphony music connects people across cultures and time its rhythm beats in our hearts reminding us of the emotions and experiences that make us human`,  

`Failure is not the end but a lesson every mistake teaches us something valuable and every setback is an opportunity to grow success is built on perseverance and learning from challenges those who rise after falling are the ones who achieve greatness failure is just a stepping stone to success`,  

`The changing seasons remind us that life is constantly evolving each phase has its beauty and purpose spring brings new beginnings summer fills the world with warmth autumn paints the earth in vibrant hues and winter blankets everything in quiet rest change is natural and every season holds its own charm`,  

`A quiet morning with a cup of tea and a good book is a simple joy in life taking time to slow down and appreciate the little things can bring the greatest happiness sometimes peace is found not in grand achievements but in the gentle moments of stillness and reflection`,  

`Success is not measured by wealth or fame but by the impact we have on others making a difference in someone's life brings true fulfillment a kind word a helping hand or a moment of encouragement can leave a lasting impression real success is found in the goodness we share`,  

`The sunrise marks the beginning of a new day filled with endless possibilities each morning is a chance to start fresh set new goals and chase dreams with renewed energy the past is behind us and the future is unwritten every sunrise is a reminder that today is full of opportunity`,  

`Courage is not the absence of fear but the ability to act despite it facing challenges head on and stepping outside our comfort zones leads to growth and discovery bravery is about believing in ourselves and taking risks even when uncertainty looms because great things happen when we dare to try`,  

`Nature is a masterpiece of beauty and harmony from towering forests to vast oceans every part of the earth is connected in perfect balance respecting and protecting the environment ensures future generations can experience its wonders the more we appreciate nature the more we understand our place within it`,  

`Gratitude transforms ordinary moments into blessings appreciating what we have rather than focusing on what we lack brings true happiness every day holds something to be grateful for whether big or small recognizing these joys helps us live with a heart full of contentment and a mind open to life's wonders`,  

`Every ending is also a new beginning life moves in cycles and change is a constant part of our journey letting go of the past allows new opportunities to unfold embracing new experiences leads to growth and discovery every chapter that closes makes way for another adventure waiting to be written`,  

`Laughter is the music of the soul it brings people together and lightens even the heaviest hearts in moments of joy or sadness laughter reminds us that life is meant to be enjoyed finding humor in everyday situations makes challenges easier to face and fills our days with happiness`,  

`True happiness comes from within it is not found in material possessions but in meaningful relationships self acceptance and the joy of simple moments when we stop seeking happiness outside ourselves and embrace life as it is we discover that the key to joy has always been within our own hearts`,  

];

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)].split(" ");
};

export {
  wpmTile,
  accuracyTile,
  timeTile,
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ingoredkeys,
  keys,
  punctuationOrSpace,
};
