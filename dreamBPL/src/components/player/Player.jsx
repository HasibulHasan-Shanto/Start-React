import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, balance, setBalance, handleClick, selectedPlayers, setSelectedPlayers }) => {
    const [selected, setSelected] = useState(false)
    const handlePrice = (player)=>{
        if (balance < player.price) {
            alert(`You don't have enough money`)
            return
        }
        setSelected(true)
        setBalance(balance - player.price)
    }
    const handleSelectedPlayers = (player)=>{
        setSelectedPlayers([...selectedPlayers, player])
    }
    return (
        <div className="border border-gray-300 rounded-xl bg-[#ffffff] p-4 w-md">
            <img className="w-full h-60 rounded-2xl" src={player.playerImg} alt="" />
            <div className="flex items-center gap-3 my-3">
                <FaUserLarge className="text-xl" />
                <h6 className="font-bold text-xl text-[#131313]">
                    {player.playerName}
                </h6>
            </div>
            <div className="flex items-center justify-between border-gray-300 border-b-2 pb-4">
                <div className="flex items-center gap-2">
                    <FaFlag className="text-xl text-gray-500" />
                    <p className="text-xl text-gray-500 font-medium">
                        {player.playerCountry}
                    </p>
                </div>
                <p className="border border-gray-300 px-2 py-2 rounded-md">
                    {player.playerRole}
                </p>
            </div>
            <div>
                <div className="flex items-center justify-between my-3">
                    <p className="font-bold text-xl text-[#131313]">
                        Rating
                    </p>
                    <p className="ont-bold text-md text-[#131313]">
                        {player.rating}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl text-[#131313]">
                        Batting Style
                    </p>
                    <p className="ont-bold text-md text-[#131313]">
                        {player.battingStyle}
                    </p>
                </div>
                <div className="flex items-center justify-between my-3">
                    <p className="font-bold text-xl text-[#131313]">
                        Bowling Style
                    </p>
                    <p className="ont-bold text-md text-[#131313]">
                        {player.bowlingStyle}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl text-[#131313]">
                        Price: $<span>{player.price}</span>
                    </p>
                    <button player={player} onClick={() => { 
                        handlePrice(player)
                        handleClick()
                        handleSelectedPlayers(player)
                    }}
                        className={`border border-gray-300 px-2 py-2 rounded-md ${selected ? 'bg-red-500' : ''}`}>
                        {selected === true ? 'Selected' : 'Choose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;