import { useEffect, useState } from "react";
import {
  triplePiece,
  tripleEquation,
  doublePiece,
  doubleEquation,
} from "./data";
import { BONUS } from "./constant";
import "./App.css";

function App() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    setupBoard();
  }, []);
  const setupBoard = () => {
    let board = [];
    for (let i = 0; i < 15; i++) {
      let temp = [];
      for (let j = 0; j < 15; j++) {
        temp.push({
          row: i,
          col: j,
          piece: null,
        });
      }
      board.push(temp);
    }
    for (let pos of triplePiece) {
      board[pos.row][pos.col] = {
        ...board[pos.row][pos.col],
        bonus: BONUS.TRIPLE_PIECE,
      };
    }
    for (let pos of tripleEquation) {
      board[pos.row][pos.col] = {
        ...board[pos.row][pos.col],
        bonus: BONUS.TRIPLE_EQUATION,
      };
    }
    for (let pos of doublePiece) {
      board[pos.row][pos.col] = {
        ...board[pos.row][pos.col],
        bonus: BONUS.DOUBLE_PIECE,
      };
    }
    for (let pos of doubleEquation) {
      board[pos.row][pos.col] = {
        ...board[pos.row][pos.col],
        bonus: BONUS.DOUBLE_EQUATION,
      };
    }
    setBoard(board);
  };
  const getPieceClass = (bonus) => {
    return bonus ? `position piece-${bonus?.toLowerCase().replace("_","-")}` : "position";
  };
  const getBonusText = (bonus) => {
    let b = bonus.split("_");
    if(b[0] == "TRIPLE") {
      b[2] = "3X"
    } else if(b[0] == "DOUBLE"){
      b[2] = "2X"
    }
    return <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <span style={{fontSize: '0.7rem'}}>{b[0]}</span>
      <span style={{fontSize: '1.2rem'}}>{b[2]}</span>
      <span style={{fontSize: '0.7rem'}}>{b[1]}</span>
    </div>
  }
  return (
    <div className="App">
      <div className="board">
        {board.map((row, i) => {
          return (
            <div key={i} className="row">
              {row.map((col, j) => {
                return (
                  <div key={j} className={getPieceClass(col.bonus)}>
                    {col.piece ? col.piece : col.bonus ? getBonusText(col.bonus) : ""}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
