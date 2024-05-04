import { Link } from 'react-router-dom';
import CompanyLogo from '../assets/Company-Logo.png'
import Avatar from '../assets/Ellipse 33.png';

export const Login = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-[url('./assets/Wallpaper.png')] w-[100vw] h-[100vh]">

            <div className="relative ml-[52vw] w-[0.6rem] h-[100vh] bg-[#fff] ">
                <div className="absolute block -left-[16vw] top-[20vh] blur-sm bg-[#fff]/40 
                    shadow-[0px_5px_15px_rgba(0,0,0,0.35)] w-[34vw] h-[34vw] rounded-[34px] ">
                </div>
            </div>
            
            <div className='absolute left-[36vw] top-[20vh] w-[34vw] h-[34vw] z-20'>
                <div className='ml-[15vw] mt-8'>
                        <img src={CompanyLogo} className='w-16' alt="" />
                </div>

                <div>
                    <div className='relative left-side inline-block float-start ml-[4rem] mt-[4rem]'>
                        <div className='-top-2 inline-block'>
                            <img src={Avatar} alt="" />
                        </div>
                    </div>
                    <div className='right-side ml-[15vw] -mt-[6.4rem] float-start'>
                        <p className='text-[#000] text-xl font-semibold'>Welcome back...</p>

                        <input type="text" 
                            defaultValue='Rachelsaket89' 
                            className='w-[16rem] h-[2rem] shadow-[0px_20px_20px_0px_#00000024] text-xs mt-4 font-semibold text-[#141414] p-3 bg-[#a5a5a4] rounded-2xl' />

                        <input type="text" 
                            defaultValue='Password' 
                            className='w-[16rem] h-[2rem] shadow-[0px_20px_20px_0px_#00000024] text-xs font-semibold mt-4 text-[#141414] p-3 bg-[#a5a5a4] rounded-2xl ' />

                        <div className='mt-2'>
                            <span className='bg-transparent  w-[14px] h-[14px] border-solid border-[1px] border-black float-start inline-block mt-2 mr-2 rounded-sm'></span>

                            <p className='text-[#141414] float-start text-xs mt-2 font-semibold'>Remember me</p>
                        </div>
                        
                        <Link to="/dashboard" className='bg-[#282828] inline-block rounded-2xl text-center hover:text-[#fff]  text-[#fff] w-[16rem] h-[2rem] text-xs p-2 mt-4'> Login</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}