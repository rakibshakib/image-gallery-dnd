import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

import imageStyle from "./singleimage.module.css";

// eslint-disable-next-line react/prop-types
const SingleImage = ({ images, index, handleDrop, handleDrag }) => {
  // eslint-disable-next-line no-unused-vars
  const [isSelected, setIsSelected] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    item: {
      index: index,
      label: `${index}`,
      itemname:`${index}`,
    },
    type: "BOX",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "BOX",
    drop: (item) => {
      console.log({item}, "drop")
      handleDrop(item.index, index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  console.log({ isDragging, index });
  console.log({ drag });
  return (
    <div
      ref={(node) => drag(drop(node))}
      onDragStart={() => handleDrag(index)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "pointer",
      }}
      className={
        isSelected
          ? `${imageStyle.imageContainerSelected} grid-item-${index + 1}`
          : `${imageStyle.imageContainer} grid-item-${index + 1}`
      }
    >
      {/* <input
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
      /> */}
      <img className={imageStyle.images} src={images} alt={"images 1"} />
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
