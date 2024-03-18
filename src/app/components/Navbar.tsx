
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { RiGraduationCapFill } from 'react-icons/ri';

// py-40 xl:px-60 lg:px-40 md:px-20 sm:px-10  px-5

export const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-300 h-12 px-8 flex items-center justify-center gap-6 shadow-2xl fixed w-full z-40 
      md:gap-10
    ">
     
          <Link href="#presentation" className='text-xs flex flex-col justify-center items-center text-gray-500 md:flex-row md:gap-2'>
            <FaUser size={20}/>
            <span>Sobre mi</span>
          </Link>
          <Link href="#experience" className='text-xs flex flex-col justify-center items-center text-gray-500 md:flex-row md:gap-2'>
            <RiGraduationCapFill  size={20}/>
            <span>Experiencia</span>
          </Link>
          <Link href="#portfolio" className='text-xs flex flex-col justify-center items-center text-gray-500 md:flex-row md:gap-2'>
            <FaBagShopping size={20}/>
            <span>Portafolio</span>
          </Link>
          <Link href="#contact" className='text-xs flex flex-col justify-center items-center text-gray-500 md:flex-row md:gap-2'>
            <IoIosMail size={20}/>
            <span>Contacto</span>
          </Link>
        
      

    </div>
  );
};

