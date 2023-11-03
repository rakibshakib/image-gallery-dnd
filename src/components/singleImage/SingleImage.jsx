import { useDrag, useDrop } from "react-dnd";
import imageStyle from "./singleimage.module.css";
import { useStateContext } from "../../context/context";

const SingleImage = ({ images, index, handleDrag }) => {
  const { dispatch } = useStateContext();
  const [{ isDragging }, drag] = useDrag({
    item: {
      index: index,
      label: `${index}`,
      itemname: `${index}`,
    },
    type: "BOX",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "BOX",
    drop: (item) => {
      if (item.index !== index) {
        dispatch({
          type: "DRAG_IMG",
          payload: {
            dragIndex: item.index,
            dropIndex: index,
          },
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={(node) => drag(drop(node))}
      onDragStart={() => handleDrag(index)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "pointer",
      }}
      className={
        images?.isSelected
          ? `${imageStyle.imageContainerSelected} grid-item-${index + 1}`
          : `${imageStyle.imageContainer} grid-item-${index + 1}`
      }
    >
      <input
        className={
          !images?.isSelected ? imageStyle.checkBox : imageStyle.CheckBoxSelected
        }
        type="checkbox"
        name="isSelected"
        id="isSelected"
        value={images?.isSelected}
        onChange={(e) => {
          dispatch({
            type: "SELECT_IMG_TOGGLE",
            payload: {
              key: images?.key,
              isSelected: e.target.checked,
            },
          });
        }}
      />
      <img className={imageStyle.images} src={images?.img} alt={"images 1"} />
    </div>
  );
};

export default SingleImage;

/* 


   // dispatch({
        //   type: "DRAG_IMG",
        //   payload: {
        //     dragIndex: item.index,
        //     dropIndex: index,
        //   },
        // });


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
