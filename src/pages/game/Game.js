import "./Game.css";

import Page from "../page/Page";

import {
  InputStage,
  MyTurnStage,
  NotMyTurnStage,
  EndRoundStage,
  EndGameStage,
} from "./stages.js";

const dummyData = {
  "בון רותי": ["חביתה ומקושקשת", "שדגכשדגכשדגכ"],
  "של סילברסטיין": ["ביצה בקן", "שדגכסבה"],
};


function StageController({ stage, data, onInputSubmit, onFinishTurn }) {
  return (
    <>
      {(() => {
        switch (stage) {
          case 'input':
            return <InputStage onSubmit={onInputSubmit} />
          case 'myTurn':
            return <MyTurnStage data={data} onFinishTurn={onFinishTurn} />
          case 'notMyTurn':
            return <NotMyTurnStage data={data} />
          case 'endRound':
            return <EndRoundStage />
          case 'engGame':
            return <EndGameStage />
          default:
            return null
        }
      })()}
    </>
  );
}

function GameStage({ stageName, active, children }) {
  return (
    <div className={`game-stage ${stageName} ${active ? "active" : ""}`}>
      {children}
    </div>
  );
}

function Game() {
  const onInputSubmit = data => console.log(data);
  const onFinishTurn = () => console.log('nextTurn');

  return (
    
    <Page name="game">  
       <StageController
        stage='input'
        data={{ currentReader: 'אמיר', currentWriter: 'שפר' }}
        onInputSubmit={onInputSubmit}
        onFinishTurn={onFinishTurn} /> 
    </Page>
  );
}

export { GameStage };
export default Game;
