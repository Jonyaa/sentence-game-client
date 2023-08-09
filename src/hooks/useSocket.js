import { useState, useEffect } from "react";
import { socket } from "../socket";
import { useNavigate } from "react-router-dom";

export function useSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [players, setPlayers] = useState([]);
  const [startInput, setStartInput] = useState(0);
  const [startGame, setStartGame] = useState('');
  const [stage, setStage] = useState('');
  const [game, setGame] = useState('');

  const navigate = useNavigate();

  const emit = (event, data = null) => {
    socket.emit(event, data)
  }

  useEffect(() => {
    socket.connect();
    //Messages from server
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);
    const onPlayersUpdate = players => {
      setPlayers(players.playersList)
    };
    const onRedirect = path => navigate(path);
    const onStartInput = timeout => {
      setStartInput(timeout);
    };
    const onReconnect = ({ turn, data }) => {
      console.log('reconnect','turn:',turn,'data:',data);
      setGame(data);
      setStage(turn.toString());
    }
    const onStartGame = ({ data, timeout }) => {
      setStartGame(timeout);
      setGame(data);
    }
    const onNextTurn = (turn) => {
      console.log(turn, 'turn');
      setStage(turn.toString());
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('players_update', onPlayersUpdate)
    socket.on('start input in', onStartInput)
    socket.on('redirect', onRedirect)
    socket.on('start game soon', onStartGame)
    socket.on('next turn', onNextTurn)
    socket.on('reconnect', onReconnect)

    return () => {

      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('players_update', onPlayersUpdate)
      socket.off('start input in', onStartInput)
      socket.off('redirect', onRedirect)
      socket.off('start game soon', onStartGame)
      socket.off('next turn', onNextTurn)
      socket.off('reconnect', onReconnect)
      socket.disconnect();
    };
  }, []);

  return [players, game,
    stage, setStage,
    startInput, setStartInput,
    startGame, setStartGame,
    emit];
}