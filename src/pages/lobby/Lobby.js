import Page from "../page/Page"

export default function Lobby({ players }) {
    return (
        <Page name={"lobby"}>
            <h1>לובי</h1>
            {players.map((player,id) => <Player name={player} key={id} />)}
        </Page>
    )
}

const Player = ({ name }) => <h2> {name} </h2>