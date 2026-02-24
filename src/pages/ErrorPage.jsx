import img from "../assets/error1.png";

export const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
      }}
    >
      <img
        src={img}
        alt="Error Image"
        style={{ width: "43rem", height: "43rem" }}
      />
    </div>
  );
};
