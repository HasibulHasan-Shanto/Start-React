import { Outlet } from 'react-router';
import Header from '../Header/Header'

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet/>
        </>
    );
};

export default Root;