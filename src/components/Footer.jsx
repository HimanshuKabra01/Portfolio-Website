import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full text-white flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 min-h-[50px] border-t px-4 py-2 text-sm md:text-base">
      <div className="text-center md:text-left">
        &copy; 2025 Himanshu Kabra
      </div>
      <div className="md:mt-1">Last updated : December 19, 2025</div>
      <button
        className="cursor-pointer flex items-center gap-2 px-3 py-1 transition"
        onClick={handleScroll}
      >
        <ArrowUp size={18} />
        Back to top
      </button>
    </div>
  );
}
