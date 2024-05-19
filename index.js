const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Jangan risau, Allah nampak usaha kau",
    "kau kuat, aku tau kau kuat",
    "Allah nampak usaha kau",
    "People of patience have beautiful endings",
    'I am proud of the progress you are making, no matter how small',
    "You are doing great",
    "The hearts pray for what they desire, but allah responds with what is better for you.",
    "it is by suffering that human beings become angels.",
    "many great actions are committed in small struggles",
    "Have faith in your abilities!",
    "It does not matter how slowly you go as long as you do not stop.",
    "Trust yourself, you know more than you think you do",
    "Push yourself because no one else is going to do it for you",
    "There is a past version of you that is so proud of how far you have come.",
    "no more negative self-talk, you are doing great",
    "just because you took longer than others, that doesn't mean you failed",
    "Verily, after every difficulty, there is relief. Surah Al-Sharh ayat 5",
    "Allah does not burden a soul beyond that it can bear.",
    "you are strong enough to face it, even if it doesn't feel like it right now",
    "one day someone will look at you the same way you look at the moon",
    "trust your intuition, it never lies",
    "your overthinking is robbing your joy",
    "you shouldn't climb mountains for the world to see you, but for you to see the world",
    "you have good energy",
    "handle yourself with care",
    "if you lose something you didn't expect to lose. allah will grant you something you never expected to own",
    "Keep going. Everything you need will come to you at the perfect time",
    "In the middle of a difficulty lies opportunity.",
    "speak kindly to yourself.",
    "your heart is the most beautiful thing about you.",
    "you are enough.",
    "Keep hydrated",
    "there is always someone out there who are rootingg for you",
    "There is always someone rooting for you, even if you think there isn't.",

  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})