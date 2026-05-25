import { use } from "react";
import Player from "../player/Player";

const AvailablePlayers = ({ fetchPlayers, balance, setBalance }) => {
    const players = use(fetchPlayers)
    // console.log(players);
    return (
        <div className="max-w-350 mx-auto mt-2">
            <div className="grid grid-cols-3 gap-5 p-4">
                {
                    players.map(player => (
                        <Player
                        setBalance={setBalance}
                        balance={balance} 
                        player={player}
                        key={player.id}
                        ></Player>
                    ))
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;