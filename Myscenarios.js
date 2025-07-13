export const Myscenarios = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/-KxwlUDSHC8?si=dIFIGWAXsXcp9k7y", // Vimeo video URL
    dialogue: [
      { speaker: "Friend", text: "Hey, let's skip Jummah today and play video games!" },
      { speaker: "You", text: "Hmm... I'm not sure about that..." }
    ],
    question: "What do you say next?",
    options: [
      { text: "You're right, let's play!", correct: false },
      { text: "I can't miss Jummah, it's really important to me.", correct: true }
    ]
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/JaDkW7EojK8?si=3x2H1fX38EmKRU3X",
    dialogue: [
      { speaker: "Narrator", text: "You see a classmate being bullied in the hallway." },
      { speaker: "Bully", text: "You're such a loser!" },
      { speaker: "You", text: "This doesn't look right..." }
    ],
    question: "How do you respond?",
    options: [
      { text: "Laugh along to not stand out.", correct: false },
      { text: "Stand up and support the classmate.", correct: true }
    ]
  },
  {
    id: 3,
    videoUrl: "https://youtube.com/shorts/FkbBwvsxwTU?feature=shared",
    dialogue: [
      { speaker: "Narrator", text: "You had an heated-mad argument with your parents where you made them cry due to your tone. Even though you were right " },
      { speaker: "You", text: "I feel so angry right now!" }
    ],
    question: "What should you do?",
    options: [
      { text: "Ignore them for the rest of your life and never feel sorry, because you were right.", correct: false },
      { text: "Calm down, speak respectfully, and say sorry for your actions.", correct: true }
    ]
  }
];
