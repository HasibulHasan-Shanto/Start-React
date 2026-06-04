
const Nav = ({ navLink }) => {
    return (
        <>
            <li>
                <a href={navLink.path}>
                    {navLink.title}
                </a>
            </li>
        </>
    );
};

export default Nav;