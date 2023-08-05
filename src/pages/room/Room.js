import { useState, useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/useAlert";
import { useCountdown } from "../../hooks/useCountdown";
import Cookies from "js-cookie";

import Game from "../game/Game";
import Lobby from "../lobby/Lobby";

export default function Room({ }) {
  //This component and alerts + countdowns + socket logic 

  const pin = Cookies.get('pin');
  const uid = Cookies.get('uid');

  //startInput and startGame are time varibales for intreacting with countdown 
  const [players, game,
    stage, setStage,
    startInput, setStartInput,
    startGame, setStartGame,
    emit
  ] = useSocket();
  const [AlertComponent, setAlert, resetAlert] = useAlert();
  const [CountdownComponent, setCountdown] = useCountdown();

  const onInputSubmit = (input) => {
    if (input.trim() === '') {
      // Input is empty, show the "add text" alert
      setAlert({
        active: true,
        message: 'אחי תוסיף תטקסט',
        timeout: 1500,
        onFinish: () => null,
      });
    }
    else {
      // Input is not empty, call alert, emit the input and wait for game start
      console.log('not empty');
      setAlert({
        active: true,
        message: 'בוא נחכה לשאר הלירדים',
        timeout: 30000000,
        onFinish: () => null,
      });
      emit('input', input)
    }
  }
  const onFinishTurn = () =>{
    emit("next turn")
  }

  useEffect(() => {
    if (startInput) setCountdown({
      active: true,
      timeout: startInput,
      onFinish: () => { setStage('input'); setStartInput(0) }
    });
    //Turn off alert and start game countdown
    if (startGame) {
      resetAlert();
      setCountdown({
        active: true,
        timeout: startGame,
        onFinish: () => { setStage('0'); setStartGame(0) }
      })
    };
  }, [startInput, startGame]);


  return (
    <>
      <AlertComponent />
      <CountdownComponent />
      {stage ? <Game inputSubmit={onInputSubmit} finishTurn={onFinishTurn} data={game} stage={stage} uid={uid} /> : <Lobby players={players} pin={pin} />}
    </>
  );
} 