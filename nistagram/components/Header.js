import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline';


const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-50 h-50 cursor-pointer=">
          <div className="w-50 h-50">
            <Image src='/OIG3.jpeg' width={50} height={50} alt="Picture of the author" />
          </div>
        </div>
        <div className='relative w-10 h-10 flex-shrink-0 cursor-pointer'>
          <Image src='/OIG3 (1).jpeg' width={30} height={30} alt="Picture of the author" />
        </div>
      {/* middle search */}
      <div>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon className=" text-gray-500" />
        </div>
        <input type="text" placeholder='Search' />
      </div>
      </div>

    </div>
  );
};

export default Header;

