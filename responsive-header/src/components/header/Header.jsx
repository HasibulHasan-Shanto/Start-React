import Nav from "../nav/Nav";
import { Menu } from 'lucide-react';


const Header = () => {
    const navLinks = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "About",
            path: "/about"
        },
        {
            id: 3,
            title: "Services",
            path: "/services"
        },
        {
            id: 4,
            title: "Blog",
            path: "/blog"
        },
        {
            id: 5,
            title: "Contact",
            path: "/contact"
        }
    ];
    return (
        <div className="flex justify-between bg-sky-500 p-5">
            <Menu />
        <h1 className="text-2xl font-extrabold">
            NavBar
        </h1>
        <ul className="flex gap-5 font-medium">
                {navLinks.map(navLink => <Nav key={navLink.id} navLink={navLink}></Nav>)}
        </ul>
        <button className="font-medium bg-red-500 py-1 px-4 rounded-md">
            Button
        </button>
        </div>
    );
};

export default Header;