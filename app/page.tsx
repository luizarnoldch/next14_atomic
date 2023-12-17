import Navbar from "@/components/navbar/Navbar";
import ScroolLine from "@/components/line/ScroolLine"

export default function Home() {
  return (
      <main className=" w-full h-full">
        <div className="h-screen bg-landing-image-1 bg-no-repeat bg-cover bg-center">
          <div className="ml-28 text-white">
            Texto
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