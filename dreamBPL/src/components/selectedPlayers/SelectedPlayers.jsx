
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";
const SelectedPlayers = ({ selectedPlayers, removePlayer }) => {
    return (
        <div className="max-w-350 mx-auto mt-10">
            {
                selectedPlayers.map(player => <SelectedPlayer
                    player={player}
                    key={player.id}
                    removePlayer={removePlayer}
                ></SelectedPlayer>)
            }

        </div>
    );
};

export default SelectedPlayers;