import Feauture from "../feauture/Feauture";

const Card = ({ card }) => {
    return (
        // <div className="bg-red-400 p-6 rounded-2xl border-2 shadow-lg text-center">
        //     <h4 className="text-xl font-bold">
        //         {card.name}
        //     </h4>
        //     <h1 className="text-5xl font-bold">
        //         {card.price}
        //     </h1>
        //     <strong>
        //         {card.duration}
        //     </strong>
        //     <p>
        //         {card.description}
        //     </p>
        //     {card.features.map((feature, index) => <Feauture key={index} feature={feature}></Feauture>)}
        // </div>
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{card.name}</h2>
                    <span className="text-xl">${card.price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <p>
                        {card.description}
                    </p>
                    <li>
                        <span>{card.features.map((feature, index) => <Feauture key={index} feature={feature}></Feauture>)}</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Card;