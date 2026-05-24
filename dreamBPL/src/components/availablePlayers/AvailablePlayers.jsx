import { use } from "react";
import Player from "../player/Player";
// import koli from '../../assets/Virat koholi.png'

const AvailablePlayers = ({ fetchPlayers }) => {
    const players = use(fetchPlayers)
    console.log(players);
    return (
        <div className="max-w-350 mx-auto mt-2">
            <div className="grid grid-cols-3 gap-5 p-4">
                {
                    players.map(player => <player player={player}></player>
                    )
                }
            </div>
            
        </div>
    );
};

export default AvailablePlayers;