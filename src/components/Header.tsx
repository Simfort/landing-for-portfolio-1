import exclued from "../assets/Exclude.png";
import tyn from "../assets/Mask group 2.png";

export default function Header() {
  return (
    <header>
      <nav className=" flex gap-[30px]">
        <a href="">Home</a>
        <a href="">Work</a>
        <a href="">Testimonials</a>
        <a href="">About</a>
      </nav>
      <div className="flex ">
        <div className=" mt-[142px]">
          <button className=" bg-[#FFDDBF] hover:bg-amber-200 text-[#403930] rounded-[10px] text-center pt-[12px] pb-[12px] pl-[24px] pr-[24px]">
            👋 Hello All
          </button>
          <p className="max-md:w-[100%] max-md:text-2xl  max-md:h-[10%] m w-[595px] h-[240px] font-[Eczar,serif] text-[64px] font-bold">
            I’m Shambhavi, A Product Designer and Problem Solver
          </p>
          <div className=" flex gap-[10px] mt-[80px] flex-wrap">
            <button className=" hover:opacity-70 flex text-[24px] rounded-[16px] w-[270px] h-[84px] items-center justify-center bg-[#4E5E80] text-[#F3F2FF]">
              View My Work
              <img className="ml-[10px]" src={exclued} alt="arrow" />
            </button>
            <button className="hover:border-[#6c80ad] hover:text-[#6c80ad]  flex text-[24px] font-bold rounded-[16px] w-[270px] h-[84px] items-center justify-center  border-[5px] border-[#4E5E80] text-[#4E5E80]">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <img src={tyn} alt="Tyn" />
        </div>
      </div>
    </header>
  );
}
