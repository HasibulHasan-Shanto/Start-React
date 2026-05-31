
import { RiDeleteBin5Line } from "react-icons/ri";
const SelectedPlayer = ({ player, removePlayer }) => {
    return (
        <div className="bg-[#ffffff] p-4 border border-gray-400 rounded-xl shadow-md mb-1">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 ">
                    <img className='w-34 h-20 rounded-md' src={player.playerImg} alt="" />
                    <div>
                        <h4 className='font-bold text-2xl text-[#131313]'>
                            {player.playerName}
                        </h4>
                        <p className='text-xl text-gray-300'>
                            {player.playerRole}
                        </p>
                    </div>
                </div>
                <RiDeleteBin5Line onClick={() => { removePlayer (player)}}
                 className='text-2xl text-red-500' />
            </div>
        </div>

    );
};

export default SelectedPlayer;