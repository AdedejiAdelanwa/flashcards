const decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

const getDecks = () => {
  return decks;
};

const getDeck = (id) => {
  return decks[id];
};

const saveDeckTitle = (title) => {
  return {
    ...decks,
    [title]: {
      title: title,
      questions: [],
    },
  };
};

// const addCardToDeck = (title,card)=>{
//     return decks[title]
// }
