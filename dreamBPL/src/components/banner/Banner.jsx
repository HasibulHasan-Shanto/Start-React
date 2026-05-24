import bgShadow from '../../assets/bg-shadow.png';
import banner from '../../assets/banner-main.png'
const Banner = () => {
    return (
        <div
            className="max-w-350 mx-auto py-16 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${bgShadow})` }}
        >
            <div className="text-center">
                <img className='m-auto' src={banner} alt="" />
                <h1 className='text-4xl text-[#FFFFFF] font-bold my-3'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='text-xl text-gray-500 font-medium'>
                    Beyond Boundaries Beyond Limits
                </p>
                <div className="inline-flex items-center justify-center p-1 rounded-md border border-[#E7FE29] mt-3">
                    <button className="bg-[#E7FE29] text-black font-semibold text-2xl px-2 py-1 rounded-sm">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;