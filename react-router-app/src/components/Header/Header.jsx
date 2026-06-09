import { NavLink } from "react-router";

const Header = () => {
    return (
        <div>
            <nav className="flex items-center justify-around p-4 bg-red-500">
                <h1 className="font-extrabold text-2xl">
                    Shanto
                </h1>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Mobiles'>
                            Mobiles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/laptops'>
                            Laptops
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/User1'>
                            User1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/User2'>
                            User2
                        </NavLink>
                    </li>
                </ul>
                <button className="bg-green-300 px-5 py-1 rounded-md">
                    Click me
                </button>
            </nav>
        </div>
    );
};

export default Header;