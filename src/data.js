const tripleEquation = [
  {
    row: 0,
    col: 0,
  },
  {
    row: 0,
    col: 7,
  },
  {
    row: 0,
    col: 14,
  },
  {
    row: 7,
    col: 0,
  },
  {
    row: 7,
    col: 14,
  },
  {
    row: 14,
    col: 0,
  },
  {
    row: 14,
    col: 7,
  },
  {
    row: 14,
    col: 14,
  },
];

const triplePiece = [
  {
    row: 1,
    col: 5,
  },
  {
    row: 1,
    col: 9,
  },
  {
    row: 4,
    col: 4,
  },
  {
    row: 4,
    col: 10,
  },
  {
    row: 5,
    col: 1,
  },
  {
    row: 5,
    col: 5,
  },
  {
    row: 5,
    col: 9,
  },
  {
    row: 5,
    col: 13,
  },
  {
    row: 7,
    col: 7,
  },
  {
    row: 9,
    col: 1,
  },
  {
    row: 9,
    col: 5,
  },
  {
    row: 9,
    col: 9,
  },
  {
    row: 9,
    col: 13,
  },
  {
    row: 10,
    col: 4,
  },
  {
    row: 10,
    col: 10,
  },
  {
    row: 13,
    col: 5,
  },
  {
    row: 13,
    col: 9,
  },
];

const doubleEquation = [
  {
    row: 1,
    col: 1,
  },
  {
    row: 2,
    col: 2,
  },
  {
    row: 3,
    col: 3,
  },
  {
    row: 1,
    col: 13,
  },
  {
    row: 2,
    col: 12,
  },
  {
    row: 3,
    col: 11,
  },
  {
    row: 11,
    col: 3,
  },
  {
    row: 12,
    col: 2,
  },
  {
    row: 13,
    col: 1,
  },
  {
    row: 11,
    col: 11,
  },
  {
    row: 12,
    col: 12,
  },
  { row: 13, col: 13 },
];

const doublePiece = [
  {
    row: 0,
    col: 3,
  },
  {
    row: 0,
    col: 11,
  },
  {
    row: 2,
    col: 6,
  },
  {
    row: 2,
    col: 8,
  },
  {
    row: 3,
    col: 0,
  },
  {
    row: 3,
    col: 7,
  },
  {
    row: 3,
    col: 14,
  },
  {
    row: 6,
    col: 2,
  },
  {
    row: 6,
    col: 6,
  },
  {
    row: 6,
    col: 8,
  },
  {
    row: 6,
    col: 12,
  },
  {
    row: 7,
    col: 3,
  },
  {
    row: 7,
    col: 11,
  },
  {
    row: 8,
    col: 2,
  },
  {
    row: 8,
    col: 6,
  },
  {
    row: 8,
    col: 8,
  },
  {
    row: 8,
    col: 12,
  },
  {
    row: 11,
    col: 0,
  },
  {
    row: 11,
    col: 7,
  },
  {
    row: 11,
    col: 14,
  },
  {
    row: 12,
    col: 6,
  },
  {
    row: 12,
    col: 8,
  },
  {
    row: 14,
    col: 3,
  },
  {
    row: 14,
    col: 11,
  },
];

const pieces = [
  {
    name: "0",
    amount: 5,
    point: 1,
  },
  {
    name: "1",
    amount: 6,
    point: 1,
  },
  {
    name: "2",
    amount: 6,
    point: 1,
  },
  {
    name: "3",
    amount: 5,
    point: 1,
  },
  {
    name: "4",
    amount: 5,
    point: 2,
  },
  {
    name: "5",
    amount: 4,
    point: 2,
  },
  {
    name: "6",
    amount: 4,
    point: 2,
  },
  {
    name: "7",
    amount: 4,
    point: 2,
  },
  {
    name: "8",
    amount: 4,
    point: 2,
  },
  {
    name: "9",
    amount: 4,
    point: 2,
  },
  {
    name: "10",
    amount: 2,
    point: 3,
  },
  {
    name: "11",
    amount: 1,
    point: 4,
  },
  {
    name: "12",
    amount: 2,
    point: 3,
  },
  {
    name: "13",
    amount: 1,
    point: 6,
  },
  {
    name: "14",
    amount: 1,
    point: 4,
  },
  {
    name: "15",
    amount: 1,
    point: 4,
  },
  {
    name: "16",
    amount: 1,
    point: 4,
  },
  {
    name: "17",
    amount: 1,
    point: 6,
  },
  {
    name: "18",
    amount: 1,
    point: 4,
  },
  {
    name: "19",
    amount: 1,
    point: 7,
  },
  {
    name: "20",
    amount: 1,
    point: 5,
  },
  {
    name: "+",
    amount: 4,
    point: 2,
  },
  {
    name: "-",
    amount: 4,
    point: 2,
  },
  {
    name: "+/-",
    amount: 5,
    point: 1,
  },
  {
    name: "×",
    amount: 4,
    point: 2,
  },
  {
    name: "÷",
    amount: 4,
    point: 2,
  },
  {
    name: "×/÷",
    amount: 4,
    point: 1,
  },
  {
    name: "=",
    amount: 11,
    point: 1,
  },
  {
    name: " ",
    amount: 4,
    point: 0,
  },
];
export { tripleEquation, triplePiece, doubleEquation, doublePiece, pieces };
