import { arrWorks } from "./arrWorks";
import Work from "./Work";

export default function RecentWork() {
  return (
    <section className="max-md:pl-[50px] flex max-md:w-[100%] w-1/1 flex-col pl-[112px] pt-[80px] pr-[112px]  bg-[#FFDDBF]">
      <h2 className="font-[Eczar,serif] text-[40px]">My Recent Work</h2>
      <div className=" mt-[32px] flex flex-col gap-[28px]">
        {arrWorks.map((val, i) => (
          <Work key={i} title={val.title} desc={val.desc} img={val.img} />
        ))}
      </div>
    </section>
  );
}
