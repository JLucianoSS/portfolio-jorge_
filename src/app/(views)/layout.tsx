'use client';
import { HomeMe } from '../components';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PortfolioLayout({ children }: { children: React.ReactNode; }) {
  const path = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Ajusta el valor según el ancho deseado para móvil
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='md:bg-green-500 relative md:w-[85%] md:h-[90vh] md:flex md:rounded-3xl'>

      {
        isMobile 
        ? path === '/' ? <HomeMe /> : ''
        : <HomeMe />
      }

      {children}

    </div>
  );
}


  
  