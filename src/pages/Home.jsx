import LiveBackground from "../components/LiveBackground";

export default function Home() {

  return(
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full flex flex-col flex-1 px-4"> 
        <div className="flex flex-col items-center justify-center flex-1 relative">
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <LiveBackground />
        </div>
      </div>
      
    </div>
  );
};