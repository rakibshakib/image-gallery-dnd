import SingleImage from "../singleImage/SingleImage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useStateContext } from "../../context/context";
import addPhotoIcon from "../../assets/images/add-photo-icon.png"

const DaraggableImages = () => {
  const { imagesList } = useStateContext().state;
  const handleDrag = (index) => {
    console.log("Image dragged:", index);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="galaryContainer">
        <div className="grid-layout">
          {imagesList?.map((images, index) => (
            <SingleImage
              key={images.key}
              images={images}
              index={index}
              handleDrag={handleDrag}
            />
          ))}
          <div
            className={
              !imagesList.length > 0
                ? `grid-item-1 add-image`
                : `grid-item-${imagesList?.length + 1} add-image`
            }
          >
            {/* Add Images */}
            <img src={addPhotoIcon} alt="" />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DaraggableImages;
