import Battery from '../assets/Group.png';
import Volume from '../assets/Vector.png';
import Wifi from '../assets/Vector-wifi.png';
import Diary from '../assets/Diary.png';
import Calendar from '../assets/Calender.png';
import Chrome from '../assets/Google Chrome.png';
import EmptyBin from '../assets/Empty Bin.png';
import CompanyLogo from '../assets/Company-Logo.png';
import { BsSearch, BsBell } from "react-icons/bs";
import { formatDate } from '../utils/getFormattedDate';
import { currentTime } from '../utils/getCurrentTime';


export const Dashboard = () => {
    const today = new Date();
    const formattedDate = formatDate(today); // Getting the date in format of 'Friday, March 6th'
    
    const formattedTime = currentTime(); // Getting the time in 24-hour format - 20:20

    return (
        <div className="bg-no-repeat bg-cover bg-[url('./assets/Wallpaper.png')] w-[100vw] h-[100vh]">
            <div className="relative grid grid-cols-5 items-end justify-end w-[16rem] float-end">
                <div className='py-3'>
                    <BsSearch style={{color:"#ffffff"}} />
                </div>
                <div className='py-3'>
                    <BsBell style={{color:"#ffffff"}} />
                </div>
                <div className='py-3'>
                    <img src={Wifi} alt=""  />
                </div>
                <div className='pt-5 pb-3'>
                    <img src={Volume} alt=""  />
                </div>
                <div className='py-3'>
                    <img src={Battery} alt=""  />
                </div>
            </div>

            <div className='time-and-date absolute left-[45%] top-[20%] text-center'>
                <p className='time text-[#fff] text-6xl'>{formattedTime}</p>

                <p className='date mt-2 text-[#000] font-semibold'>{formattedDate}</p>
            </div>

            <div className='sidebar-apps-list absolute rounded-2xl bg-[#ccc]/50 w-[3.6rem] h-[14rem] right-4 top-[36%] pt-5 px-2 p-1'>
                <div className='mb-2'>
                    <img src={Diary} alt="" />
                </div>
                <div className='mb-2'>
                    <img src={Calendar} alt="" />
                </div>
                <div className='mb-2'>
                    <img src={Chrome} alt="" />
                </div>
                <div className='mb-2'>
                    <img src={EmptyBin} alt="" />
                </div>
            </div>

            <div className='footer absolute bottom-0 bg-[#fff]/50 w-screen h-[4rem] py-4 pl-8 pr-5 z-0'>
                <div className='chat-bubble absolute bottom-14 w-[200px] h-[8.2rem] text-center bg-[#ffc815] rounded-[50%] z-10 pt-9 pb-4'>
                    <p className='block ml-[84px] w-[20px] font-bold'>Hello!</p>
                    <p className='inline-block w-[10rem] h-[4rem]'>What are you looking for?😊</p>
                </div>

                <div className='chat-bubble--triangle'></div>

                <p className='bg-[#282828] text-[#f8f8f8] px-1 inline-block rounded-sm mt-1'>
                    File
                </p>

                <div className='inline-block float-end'>
                    <img src={CompanyLogo} alt="" />
                </div>
            </div>
        </div>
    );
}