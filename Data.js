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
  Redux: {
    title: "Redux",
    questions: [
      {
        question: "What is a thunk?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
      {
        question: "What is a store?",
        answer:
          "A store is a combination of a state with all the methods to interact with the state",
      },
    ],
  },
};

export function getDecks() {
  return decks;
}

export function getDeck(id) {
  return decks[id];
}

export function saveDeckTitle(title) {
  return {
    ...decks,
    [title]: {
      title: title,
      questions: [],
    },
  };
}

// const addCardToDeck = (title,card)=>{
//     return decks[title]
// }
