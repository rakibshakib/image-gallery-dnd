import { useMemo } from "react";
import { useStateContext } from "../../context/context";
import style from "./action.module.css";
const ActionBar = () => {
  const {
    state: { imagesList },
    dispatch,
  } = useStateContext();
  console.log({ imagesList });
  const seletecImages = useMemo(() => {
    return imagesList?.filter((image) => image.isSelected)?.length;
  }, [imagesList]);
  console.log({ seletecImages });

  return (
    <div className={style.action_bar_container}>
      {/* {seletecImages === 0 ? (
        <h4> Gallery </h4>
      ) : seletecImages === 1 ? (
        `${seletecImages} File Selected `
      ) : (
        `${seletecImages} Files Selected`
      )} */}
      {seletecImages > 0 ? (
        <div className={style.title}>
          <input
            className={style.checkBox}
            type="checkbox"
            name="isSelected"
            id="isSelected"
            value={true}
            checked
            onChange={() => {
              dispatch({
                type: "UNSELECT_ALL_IMG",
              });
            }}
          />
          {
            <h4>
              {" "}
              &nbsp;
              {seletecImages === 1
                ? `${seletecImages} File Selected`
                : `${seletecImages} Files Selected`}
            </h4>
          }
        </div>
      ) : (
        <h4> Gallery </h4>
      )}

      <p>
        {seletecImages > 0 && (
          <span
            onClick={() => {
              dispatch({
                type: "DELETE_SELECETED_IMG",
              });
            }}
          >
            {" "}
            {seletecImages === 1 ? `Delete file` : `Delete files`}
          </span>
        )}
      </p>
    </div>
  );
};

export default ActionBar;
