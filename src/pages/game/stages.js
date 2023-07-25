import "./stages.css";

import Button from "../../components/Button";
// eslint-disable-next-line
import Game, { GameStage } from "./Game";

function InputStage({ onSubmit }) {
  return (
    <GameStage stageName="input">
      <h2>הכנס משפט</h2>
      <form onSubmit={onSubmit} method="POST">
        <textarea rows={10}></textarea>
        <Button>סיימת.י</Button>
      </form>
    </GameStage>
  );
}

function MyTurnStage({ data, onFinish }) {
  // data: {currentWriter: str, text: str}

  return (
    <GameStage stageName="myturn">
      <h5 className="writer">כותב: {data.currentWriter}</h5>
      <h2>טקסט להקראה:</h2>
      <h5>"{data.text}"</h5>
      <Button onClick={onFinish}>סיימת.י</Button>
    </GameStage>
  );
}

function NotMyTurnStage({ data }) {
  // data: {currentReader: str, currentWriter: str}

  return (
    <GameStage stageName="notmyturn">
      <h5>מקריא:</h5>
      <h2>{data.currentReader}</h2>
      <h5>כותב:</h5>
      <h2>{data.currentWriter}</h2>
    </GameStage>
  );
}

function EndRoundStage({ data }) {
  // data: {name: text, name: text...}
  return (
    <GameStage stageName={"endround"}>
      <h2 className="title">נגמר הסיבוב!</h2>
      <h5 className="subtitle">סיבוב הבא עומד להתחיל</h5>
      <div className="sentence-list">
        {Object.keys(data).map((name) => {
          return (
            <div className="sentence" key={name}>
              <h5>{name}</h5>
              <p>{data[name]}</p>
            </div>
          );
        })}
      </div>
    </GameStage>
  );
}

function EndGameStage({ data }) {
  // data: {name: [text1, text2], name: [text1, text2]...}
  return (
    <GameStage stageName={"endgame"}>
      <h2 className="title">נגמר המשחק!</h2>
      <div className="sentence-list">
        {Object.keys(data).map((name) => {
          return (
            <div className="sentence" key={name}>
              <h5>{name}</h5>
              <ul>
              {data[name].map((text, i) => {
                return <li key={i}>"{text}"</li>;
              })}
              </ul>
            </div>
          );
        })}
      </div>
    </GameStage>
  );
}

export { InputStage, MyTurnStage, NotMyTurnStage, EndRoundStage, EndGameStage };
