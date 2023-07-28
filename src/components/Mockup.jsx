/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

const Mockup = ({ userid }) => {
  let data = useSelector((state) => state.LinkSlice);
  let obj = data[userid];
  return (
    <div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <h1>{obj.name}</h1>
          <h1>{obj.email}</h1>
          {obj.links.map((link) => (
            <a key={link.id} href={link.link} target="_blank" rel="noreferrer">
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mockup;
