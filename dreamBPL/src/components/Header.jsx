import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='max-w-350 mx-auto bg-red-200'>
            <div className="flex items-center justify-between">
                <img src={logo} alt="logo" />
                <div className="banner">
                    <div className="flex items-center gap-8">
                        <p>
                            <a href="#" className='text-gray-600 hover:text-black'>
                                Home
                            </a>
                        </p>
                        <p>
                            <a href="#"  className='text-gray-600 hover:text-black'>
                                Fixture
                            </a>
                        </p>
                        <p>
                            <a href="#"  className='text-gray-600 hover:text-black'>
                                Teams
                            </a>
                        </p>
                        <p>
                            <a href="#"  className='text-gray-600 hover:text-black'>
                                Schedules
                            </a>
                        </p>
                        <button className='bg-gray-300 py-2 px-8 rounded-md font-bold text-[#131313] text-[16px]'>
                            0 Coin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

