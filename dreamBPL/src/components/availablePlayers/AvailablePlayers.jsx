import { use } from "react";


const AvailablePlayers = ({ fetchPlayers }) => {
    const players = use(fetchPlayers)
    console.log(players);
    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl text-[#131313] font-bold">
                    Available Players
                </h3>
                <div>
                    <p>
                        Available
                    </p>
                    <p>
                        Selected
                        <span>O</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;