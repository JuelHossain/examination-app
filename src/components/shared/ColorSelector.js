import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../features/exams/examSelector";
import { setColor } from "../../features/exams/examSlice";
import { colors } from "../../utils/color";

const ColorSelector = () => {
  const { name: activeColor } = useSelector(selectColor);
  const dispatch = useDispatch();
  return colors.map(
    (color) =>
      color?.name === activeColor || (
        <button
          onClick={() => {
            if (color?.name === "dark") {
            }
            dispatch(setColor(color));
            localStorage.setItem("color", JSON.stringify(color));
          }}
          key={color?.name}
          className={`${color?.class} w-6 h-6 rounded-full hover:scale-125 duration-300`}
        />
      )
  );
};

export default ColorSelector;
