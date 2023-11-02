import SingleImage from "../singleImage/SingleImage";
import { useState } from "react";
import { imagesDataSet } from "../../utils/data";

const DaraggableImages = () => {
  const [imagesList, setImagesList] = useState([...imagesDataSet]);

  const handleDrag = (index) => {
    console.log("Image dragged:", index);
    // Perform any additional logic when an image is dragged
  };

  const handleDrop = (dragIndex, dropIndex) => {
    if (dragIndex !== dropIndex) {
      const updatedImages = imagesList.slice();
      const [draggedImage] = updatedImages.splice(dragIndex, 1);
      updatedImages.splice(dropIndex, 0, draggedImage);
      setImagesList(updatedImages);
    }
  };
  return (
    <div className="galaryContainer">
      <div className="grid-layout">
        {imagesList?.map((images, index) => (
          <SingleImage
            key={images.key}
            images={images?.img}
            index={index}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
          />
        ))}
      </div>
    </div>
  );
};

export default DaraggableImages;
