import Navbar from "@/components/navbar/Navbar";
import ScroolLine from "@/components/line/ScroolLine"

export default function Home() {
  return (
      <main className=" w-full h-full">
        <div className="h-screen bg-landing-image-1 bg-no-repeat bg-cover bg-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[#323941] opacity-40"></div>
            <div className="relative flex flex-col justify-between items-center h-full ml-28 font-inter">
                <div className="mt-8"></div>
                <header className="text-white text-start space-y-4 container ml-24">
                    <h5 className="font-bold">HOLA, SOMOS ATOMIC</h5>
                    <h1 className="w-6/8 font-bold">
                      <span>Transformamos ideas en experiencias visuales</span>
                      <br />
                      <span>memorables</span>
                    </h1>
                </header>
                <div className="text-white text-start container ml-28 flex space-x-8">
                  <div className="relative mb-[4rem] line-footer">
                      <div className="absolute left-0 bg-white opacity-30 w-[1px] h-[4rem] rounded-md"></div>
                      <div className="absolute left-0 bg-white w-[1px] h-[1rem]"></div>
                  </div>
                  <h5 className="font-bold">
                    MIRA NUESTRO TRABAJO
                  </h5>
                </div>
            </div>
        </div>
        <div className="h-screen bg-white bg-no-repeat bg-cover bg-center">
          <div className="ml-28 text-white">
            Texto
          </div>
        </div>
        <div className="h-screen bg-landing-image-2 bg-no-repeat bg-cover bg-center">
          <div className="ml-28 text-white">
            Texto
          </div>
        </div>
        <div className="h-screen bg-landing-image-3 bg-no-repeat bg-cover bg-center">
          <div className="ml-28 text-white">
            Texto
          </div>
        </div>
      </main>
  );
}