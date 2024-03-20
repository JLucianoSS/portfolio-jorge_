import { ReactNode } from 'react';
import { IoIosClose } from 'react-icons/io';

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, onClose, children, title ='offcanvas title' }) => {
  return (
    <>
      {/* overlay - Fondo con opacidad */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity"
          aria-hidden="true"
        ></div>
      )}

      {/* Offcanvas */}
      <div
        className={`fixed z-20 inset-y-0 right-0 max-w-full sm:w-1/2 w-full bg-white overflow-y-auto transition-transform transform duration-700 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Content */}
        <div className= "bg-black">
          <button onClick={onClose} className="text-white w-full flex h-14 justify-center items-center hover:text-gray-900">
            <IoIosClose size={35} />
          </button>

          {children}
        </div>
      </div>
    </>
  );
};
