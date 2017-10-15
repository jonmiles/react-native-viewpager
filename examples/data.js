// @flow

export type PageData = {|
  colour: string,
  word: string,
  phrase: string,
  style: {|
    backgroundColor: string,
    color: string
  |}
|};

const data: PageData[] = [
  {
    colour: "RED",
    word: "Richard",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "red",
      color: "white"
    }
  },
  {
    colour: "ORANGE",
    word: "Of",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "orange",
      color: "white"
    }
  },
  {
    colour: "YELLOW",
    word: "York",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "gold",
      color: "white"
    }
  },
  {
    colour: "GREEN",
    word: "Gave",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "green",
      color: "white"
    }
  },
  {
    colour: "BLUE",
    word: "Battle",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "blue",
      color: "white"
    }
  },
  {
    colour: "INDIGO",
    word: "In",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "indigo",
      color: "white"
    }
  },
  {
    colour: "VIOLET",
    word: "Vain",
    phrase: "Richard Of York Gave Battle In Vain",
    style: {
      backgroundColor: "violet",
      color: "white"
    }
  }
];

export default data;
