import AsyncStorage from "@react-native-async-storage/async-storage";

export const decks = {
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

export async function getDeck(id) {
  const decksFromStorage = await AsyncStorage.getItem("decksObj");
  const decksObj = JSON.parse(decksFromStorage);
  return decksObj[id];
}

export async function getDecks() {
  try {
    const decksFromStorage = await AsyncStorage.getItem("decksObj");
    const data = JSON.parse(decksFromStorage);
    return data;
  } catch (error) {
    alert(error);
  }
}
export async function saveDeckTitle(title) {
  const decksFromStorage = await AsyncStorage.getItem("decksObj");
  const decksObj = JSON.parse(decksFromStorage);
  if (Object.keys(decksObj).includes(title)) {
    throw new Error("A deck with this name already exist");
  } else {
    const newObj = {
      ...decksObj,
      [title]: {
        title: title,
        questions: [],
      },
    };
    AsyncStorage.setItem("decksObj", JSON.stringify(newObj));
  }
}

export async function addCardToDeck(title, card) {
  const decksFromStorage = await AsyncStorage.getItem("decksObj");
  const decksObj = JSON.parse(decksFromStorage);
  const newObj = {
    ...decksObj,
    [title]: {
      ...decksObj[title],
      questions: [
        ...decksObj[title].questions,
        {
          question: card.question,
          answer: card.answer,
        },
      ],
    },
  };

  AsyncStorage.setItem("decksObj", JSON.stringify(newObj));
}
