import { useState, useEffect } from "react";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

import Game from "../game/Game";
import Lobby from "../lobby/Lobby";
import CountdownAlert from "../../components/CountdownAlert";

export default function Room() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [players, setPlayers] = useState([]);
  const [countdown, setCountdown] = useState(0)
  const [inputStarted, setInputStarted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    socket.connect();
    function onConnect() {
      console.log("CONNECTED ", socket.id);
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onPlayersUpdate(players) {
      setPlayers(players.playersList);
    }

    function onRedirect(path) {
      navigate(path);
    }

    function onStartInput(time) {
      setCountdown(time);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('players_update', onPlayersUpdate)
    //Currently starting input soon functions as start input
    //need to change in server..
    socket.on('starting input soon', onStartInput)
    socket.on('redirect', onRedirect)

    return () => {

      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('players_update', onPlayersUpdate)
      socket.on('starting input soon', onStartInput)
    };
  }, []);

  return (
    <>
      {countdown && <CountdownAlert time={countdown} finish={() => { setCountdown(false); setInputStarted(true) }} />}
      {inputStarted ? <Game /> : <Lobby players={players} />}
    </>
  );
} 
