import img from "../assets/link.png";

const Loading = () => {
  return (
    <div className="flex justify-center items-center pt-60">
      <img src={img} alt="loader" className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default Loading;
