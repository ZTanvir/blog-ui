import { Oval } from "react-loader-spinner";
const Spinner = ({ width, height, color, secondaryColor }) => {
  return (
    <>
      <Oval
        height={height}
        width={width}
        color={color}
        secondaryColor={secondaryColor}
        ariaLabel="oval-loading"
      />
      <p>Loading</p>
    </>
  );
};

export default Spinner;
