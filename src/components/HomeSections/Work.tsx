export default function Work({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <section className="max-md:w-[350px] max-md:h-[300px] h-[400px] flex flex-col justify-center  items-center w-[1142px]  bg-[#FFF8F2] rounded-[24px]">
      <div className=" max-md:gap-[10px] flex items-center justify-center gap-[106px] ">
        <div className="max-md:w-[100px] flex flex-col max-md:ml-[10px]  ml-[76px] w-[404px] ">
          <div>
            <h3 className=" max-md:text-[24px] text-[32px]">{title}</h3>
            <p className="max-md:text-[10px] max-md:w-[100px] text-left w-[404px] float-left">
              {desc}
            </p>
          </div>

          <a className="text-[#4E5E80] font-bold mt-[24px]" href="#">
            View Case Study
          </a>
        </div>

        <div className="  flex items-center justify-center">
          <img src={img} alt="Image Work" />
        </div>
      </div>
    </section>
  );
}
