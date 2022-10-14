import React, { useContext } from "react";
import Context from "../../context/Context";
import {
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
} from "./AboutMeStyles";
const Carousel = () => {
  const { timeLine } = useContext(Context);

  return (
    <article className="grid grid-cols-3 flex-wrap justify-items-center">
      {timeLine.map((item, index) => (
        <div
          className="flex border-2 border-solid border-white rounded-3xl p-8 m-8 justify-center cursor-pointer hover:border-blue-500 max-w-md"
          key={index}
        >
          <div className="flex flex-row">
            <h4>{item.year}</h4>
            <p>{item.text}</p>
          </div>
        </div>
        // <CarouselItem key={index} id={`carousel__item-${index}`}>
        //   <CarouselItemTitle>{item.year}</CarouselItemTitle>
        //   <CarouselItemText>{item.text}</CarouselItemText>
        // </CarouselItem>
      ))}{" "}
    </article>
  );
};

export default Carousel;
