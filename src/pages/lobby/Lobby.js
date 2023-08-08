import Page from "../page/Page"
import Button from "../../components/Button";
import "./Lobby.css";

export default function Lobby({ players, pin, isAdmin, startGame }) {
    return (
        <Page name={"lobby"} align="top">
                <div className="lobbyhead">
                    <h1> צ׳ילבוטק </h1>
                    <h1> #{pin} </h1>
                    <h2>חדר המתנה</h2>
                </div>
                <div className="playerslist">
                    {players.map((player, id) => <Player name={player} key={id} />)}
                </div>
            {isAdmin && <Button onClick={startGame} className={'startGame'}> התחל משחק</Button>}
        </Page>
    )
}

const Player = ({ name }) => <h5>{name}</h5>