import { About, Contact, Experience, Portfolio, Presentation, Studies } from "./views"
import { Footer } from "./components";



export default function Home() {

  return (
    <main className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

        {/* Secciones */}
        <Presentation/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>

    </main>
  );
}

