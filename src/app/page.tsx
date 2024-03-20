
import { About, HomeMe, } from "./components";


// RUTA "/"
export default function Home() {
  return (
    <div className=" md:bg-green-500  md:w-[85%]  md:h-[90vh]  md:flex md:rounded-3xl"
      style={{ boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)' }}
    >
      <HomeMe />
      <About />
      
    </div>
  );
}
