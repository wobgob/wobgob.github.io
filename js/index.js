const quotes = [
  "Time is money, friend!",
  "Well, spit it out!",
  "I got the best deals, anywhere!",
  "I got what you need!",
  "Ah, potential customer.",
  "May I show you my wares?",
  "Welcome, friend!",
  "Yeah, what do you want?",
  "Hey, how you doin'?",
  "Wazzup?",
  "Hm, interesting",
]

const shuffled = quotes.sort(() => 0.5 - Math.random())
document.getElementById('quote').innerHTML = shuffled[0]