import { useDrag } from "react-dnd";
import SingleImage from "../singleImage/SingleImage";
import { useState } from "react";
import { imagesDataSet } from "../../utils/data";

const DaraggableImages = () => {
  const [imagesList, setImagesList] = useState([...imagesDataSet]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "images",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className="galaryContainer">
      <div className="grid-layout">
        {imagesList?.map((images, index) => (
          <div
            key={images.id}
            ref={drag}
            style={{
              opacity: isDragging ? 0.5 : 1,
              cursor: "pointer",
              border: "5px solid purple",
              width: "200px",
              height: "200px",
            }}
            className={`grid-item-${index + 1}`}
          >
            <SingleImage images={images?.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaraggableImages;
