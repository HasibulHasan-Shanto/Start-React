import { useState } from "react";
import Nav from "../nav/Nav";
import { Menu, X } from 'lucide-react';


const Header = () => {
    const [open, setOpen] = useState(false)
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
        <>
            <div className="flex justify-between mx-20 mt-8">
                <div className="flex items-center gap-3">
                    <div className="md:hidden">
                        <div onClick={() => setOpen(!open)}>
                            {open ? <X /> : <Menu />}
                        </div>
                        <ul className={`font-medium absolute bg-red-500 p-4 space-y-2 w-54 text-center transition-all duration-500 ${open ? ' left-20' : '-left-64'}`}>
                            {
                                navLinks.map(navLink => <Nav key={navLink.id} navLink={navLink}></Nav>)
                            }
                        </ul>
                    </div>
                    <h1 className="text-2xl font-extrabold">
                        NavBar
                    </h1>
                </div>

                <ul className="hidden md:flex gap-5 font-medium">
                    {navLinks.map(navLink => <Nav key={navLink.id} navLink={navLink}></Nav>)}
                </ul>
                <button >
                    Button
                </button>
            </div>

        </>
    );
};

export default Header;