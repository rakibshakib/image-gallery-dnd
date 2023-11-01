import { useState } from "react";
import images1 from "../../assets/images/image-1.webp";
import imageStyle from "./singleimage.module.css";

const SingleImage = () => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(isSelected);
  return (
    <div>
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
        <img className={imageStyle.images} src={images1} alt={"images 1"} />
      </figure>
    </div>
  );
};

export default SingleImage;
