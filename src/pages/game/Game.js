import "./Game.css";

import Page from "../page/Page";

import {
  InputStage,
  MyTurnStage,
  NotMyTurnStage,
  EndRoundStage,
  EndGameStage,
} from "./stages.js";

function GameStage({ stageName, active, children }) {
  return (
    <div className={`game-stage ${stageName} ${active ? "active" : ""}`}>
      {children}
    </div>
  );
}

function Game({ inputSubmit, finishTurn, data, stage, uid }) {  
  const turn = parseInt(stage);
  const calcTurn = () => data[turn].player === uid ? 'myTurn' : 'notMyTurn';
  stage = !isNaN(turn) ? calcTurn() : stage;

  return (
    <Page name="game">
      {(() => {
        switch (stage) {
          case 'input':
            return <InputStage inputSubmit={inputSubmit} />
          case 'myTurn':
            return <MyTurnStage data={{ currentWriter: data[turn].text.writer, text: data[turn].text.body }} finishTurn={finishTurn} />
          case 'notMyTurn':
            return <NotMyTurnStage data={{ currentReader: data[turn].player, currentWriter: data[turn].text.writer }} />
          case 'endGame':
            return <EndGameStage data={data}/>
          default:
            return null
        }
      })()}
    </Page>
  );
}

export { GameStage };
export default Game;
