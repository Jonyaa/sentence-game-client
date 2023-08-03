import { useState, useEffect } from "react";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

import Game from "../game/Game";
import Lobby from "../lobby/Lobby";
import Cookies from "js-cookie";

const dummyPlayers = [{
  id: 0,
  name: 'עומרי סגל 69',
}, {
  id: 1,
  name: 'משה פריץ',
}, {
  id: 2,
  name: 'מעיין אבן',
}]

export default function Room() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);


  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

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
      routeChange(path)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('players_update', onPlayersUpdate)
    socket.on('redirect', onRedirect)

    return () => {

      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('players_update', onPlayersUpdate)
    };
  }, []);

  return (
    <>
      {gameStarted ? <Game /> : <Lobby players={players} />}
    </>
  );
}
