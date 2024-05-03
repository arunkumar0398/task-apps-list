import Battery from '../assets/Group.png';
import Volume from '../assets/Vector.png';
import Wifi from '../assets/Vector-wifi.png';

export const Dashboard = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-[url('./assets/Wallpaper.png')] h-[100vh]">
            <div className="relative grid grid-cols-5 gap-1 items-end justify-end">
                <div className='py-6'>
                    <img src={Battery} alt=""  />
                </div>
                <div className='py-6'>
                    <img src={Battery} alt=""  />
                </div>
                <div className='py-6'>
                    <img src={Wifi} alt=""  />
                </div>
                <div className='py-6'>
                    <img src={Volume} alt=""  />
                </div>
                <div className='py-6'>
                    <img src={Battery} alt=""  />
                </div>
            </div>

        </div>
    );
}