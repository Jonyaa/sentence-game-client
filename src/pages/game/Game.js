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

function StageController({ children }) {
  return (
    <>
      <EndGameStage data={dummyData} />
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
  return (
    <Page name="game">
      <StageController />
    </Page>
  );
}

export { GameStage };
export default Game;
