import { useState } from "react";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import Word from "./Word";
import { words } from "./words";

export default function GenerousWords() {
  const [currInd, setCurrInd] = useState(0);
  return (
    <section className="flex max-md:w-[1000px] w-max h-[583px] items-center flex-col   p-[128px]">
      <h2 className="text-[40px] font-[Eczar,serif] font-bold">
        Some Generous Words
      </h2>
      <p className="text-[20px]">
        Some of my favorite testimonials from my clients
      </p>
      <div className="flex mt-[96px] gap-[94px]">
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
        <div className=" justify-center flex overflow-hidden min-w-[936px] h-[255px] gap-[20px]">
          <Word message={words[currInd].message} name={words[currInd].name} />
          <Word
            message={words[currInd + 1].message}
            name={words[currInd + 1].name}
          />
        </div>
        <button disabled={currInd == words.length - 2 ? true : false}>
          <img
            className={currInd == words.length - 2 ? "opacity-40" : ""}
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
