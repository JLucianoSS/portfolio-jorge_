
import { About, HomeMe, } from "./components";


// RUTA "/"
export default function Home() {
  return (
    <div className=" md:bg-green-500  md:w-[85%]  md:h-[90vh]  md:flex md:rounded-3xl"
      // style={{ boxShadow: '0px -2px 5px rgba(255, 255, 255, 0.2)' }}
    >
      <HomeMe />
      <About />
      
    </div>
  );
}
