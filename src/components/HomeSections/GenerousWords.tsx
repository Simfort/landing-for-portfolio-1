import { useState } from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import Word from "./Word";
import { words } from "./words";

export default function GenerousWords() {
  const [currInd, setCurrInd] = useState(0);
  const opt1 = window.innerWidth >= 768 ? words.length - 2 : words.length - 1;
  return (
    <section className="flex   h-[583px] items-center flex-col  w-1/1 max-md:p-[50px] p-[128px]">
      <h2 className="max-md:text-[30px] text-[40px] font-[Eczar,serif] font-bold">
        Some Generous Words
      </h2>
      <p className="text-[20px]">
        Some of my favorite testimonials from my clients
      </p>
      <div className="flex mt-[96px] max-md:gap-[10px] gap-[94px]">
        <button disabled={currInd == 0 ? true : false}>
          <img
            className={currInd == 0 ? "opacity-40" : ""}
            onClick={() =>
              setCurrInd((prevInd) => {
                return prevInd - 1;
              })
            }
            src={left}
            alt="left arrow"
          />
        </button>
        <div className=" justify-center flex overflow-hidden max-md:min-w-[0px] min-w-[936px] h-[255px] gap-[20px]">
          <Word message={words[currInd].message} name={words[currInd].name} />
          {window.innerWidth >= 768 && (
            <Word
              message={words[currInd + 1].message}
              name={words[currInd + 1].name}
            />
          )}
        </div>
        <button disabled={currInd == opt1 ? true : false}>
          <img
            className={currInd == opt1 ? "opacity-40" : ""}
            onClick={() =>
              setCurrInd((prevInd) => {
                return prevInd + 1;
              })
            }
            src={right}
            alt=" right arrow"
          />
        </button>
      </div>
    </section>
  );
}
