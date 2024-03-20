'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { RiGraduationCapFill } from 'react-icons/ri';
import useDarModeStore from '../store/switchStore';

import style from './Navbar.module.css'
import { ButtonDarkMode } from '.';

export const Navbar: React.FC = () => {

  const path = usePathname();
  const isDarkMode = useDarModeStore((state) => state.isDarkMode);

  return (
    <>
      <div 
        className={`${ isDarkMode ? 'bg-darkModeSecondary md:bg-darkModePrimary' : 'bg-[#f0f0f0] md:bg-[#f0f0f0]' } shadow-lg h-[4rem] px-8 flex items-center justify-center gap-10 fixed bottom-0 w-full z-40 
        md:gap-3 md:relative md:top-10 md:right-36 md:left-[93.5%] md:flex-col md:w-0 
        md:h-[12rem] md:rounded-2xl md:py-24 md:px-6`}
        style={{ boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)' }}
      >

        <div className={style.tooltip} data-tip="Sobre mí">
          <Link href="/" className={`${ path === '/' ? 'text-[#BD34FE]' : 'text-gray-500' } text-xs flex flex-col justify-center items-center md:flex-row md:gap-2`}>
            <FaUser size={25}/>
            <span className='text-[10px] md:hidden'>Sobre mi</span>
          </Link>
        </div>


        <div className={style.tooltip} data-tip="Experiencia">
          <Link href="/experience" className={`${ path === '/experience' ? 'text-[#BD34FE]' : 'text-gray-500' } text-xs flex flex-col justify-center items-center md:flex-row md:gap-2`}>
            <RiGraduationCapFill  size={25}/>
            <span className='text-[10px]  md:hidden'>Experiencia</span>
          </Link>
        </div>


        <div className={style.tooltip} data-tip="Portafolio">
          <Link href="/portfolio" className={`${ path === '/portfolio' ? 'text-[#BD34FE]' : 'text-gray-500' } text-xs flex flex-col justify-center items-center md:flex-row md:gap-2`}>
            <FaBagShopping size={25}/>
            <span className='text-[10px]  md:hidden'>Portafolio</span>
          </Link>
        </div>


        <div className={style.tooltip} data-tip="Contacto">
          <Link href="/contact" className={`${ path === '/contact' ? 'text-[#BD34FE]' : 'text-gray-500' } text-xs flex flex-col justify-center items-center md:flex-row md:gap-2`}>
            <IoIosMail size={25}/>
            <span className='text-[10px]  md:hidden'>Contacto</span>
          </Link>
        </div>
        
      </div>
      <div className={ `${ isDarkMode ? 'container-button-dark' : 'container-button-light'}` }>
        <ButtonDarkMode />
      </div>
      
    </>
  );
};