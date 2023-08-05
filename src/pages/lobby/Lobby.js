import Page from "../page/Page"
import "./Lobby.css";

export default function Lobby({ players, pin }) {
    return (
        <Page name={"lobby"} align="top">
            <div>
                <div className="lobbyhead">
                    <h1> צ׳ילבוטק </h1>
                    <h1> #{pin} </h1>
                    <h5>חדר המתנה</h5>
                </div>
                <div className="playerslist">
                    {players.map((player, id) => <Player name={player} key={id} />)}
                </div>
            </div>
        </Page>
    )
}

const Player = ({ name }) => <h5> {name} </h5>