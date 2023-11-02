import { useState } from "react";
import { useDrag } from "react-dnd";

import imageStyle from "./singleimage.module.css";

// eslint-disable-next-line react/prop-types
const SingleImage = ({ images, index }) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(isSelected);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "images",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className={
        isSelected
          ? `${imageStyle.imageContainerSelected} grid-item-${index + 1}`
          : `${imageStyle.imageContainer} grid-item-${index + 1}`
      }
    >
      <input
        className={imageStyle.checkBox}
        type="checkbox"
        name=""
        id=""
        onSelect={(e) => {
          console.log(e);
        }}
        onChange={(e) => {
          setIsSelected(e.target.checked);
        }}
      />
      <figure>
        <img className={imageStyle.images} src={images} alt={"images 1"} />
      </figure>
    </div>
  );
};

export default SingleImage;

/* 
      <input
        className={imageStyle.checkBox}
        type="checkbox"
        name=""
        id=""
        onSelect={(e) => {
          console.log(e);
        }}
        onChange={(e) => {
          setIsSelected(e.target.checked);
        }}
      />
      <figure
        className={
          isSelected
            ? imageStyle.imageContainerSelected
            : imageStyle.imageContainer
        }
      >
        <img className={imageStyle.images} src={images} alt={"images 1"} />
      </figure>



*/
