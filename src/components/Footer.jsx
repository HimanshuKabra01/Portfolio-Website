import { ArrowUp } from 'lucide-react';

export default function Footer() {

  const handleScroll = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return(
    <div className="w-full bg-white/10 text-white flex justify-center gap-100 min-h-[40px] border-t items-center">
      <div>
        &copy; 2025 Himanshu Kabra
      </div>
      <button className="cursor-pointer flex gap-4" onClick={handleScroll}>
        <ArrowUp />
        Back to top
      </button>
    </div>
  );
}