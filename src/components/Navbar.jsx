/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LiaLinkSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
// import { AiFillEye } from "react-icons/ai";
import img from "../assets/link.png";

// import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import { createId } from "../redux/LinkSlice";

const Navbar = () => {
  // let data = useSelector((state) => state.LinkSlice);
  // const dispatch = useDispatch();
  // let keys = Object.keys(data);

  // if (keys.length === 0) {
  //   dispatch(createId(uuidv4()));
  // }
  return (
    <>
      <div className="flex justify-between p-3 bg-white mt-3 items-center container mx-auto rounded-lg text-black">
        <div>
          <Link to="/" className="font-bold text-xl text-gray-700">
            <img src={img} alt="logo" className="w-7 h-7 inline mr-1 -mt-1 " />
            <span className="hidden sm:hidden md:hidden lg:inline xl:inline">
              Sharelinks
            </span>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="px-5 sm:px-5 md:px-5 lg:px-12 xl:px-12  text-md font-semibold focus:bg-gray-200 active:bg-gray-200 py-2 rounded-lg hover:duration-500  text-gray-500 hover:bg-gray-200 hover:text-[#8d6ff8] focus:text-[#8d6ff8] active:text-[#8d6ff8] hover:text-[#8d6ff8]"
          >
            <LiaLinkSolid className="inline mr-0 sm:mr-0 md:mr-0 lg:mr-1 xl:mr-1 -mt-1" />
            <span className="hidden sm:hidden md:hidden lg:inline xl:inline">
              Links
            </span>
          </Link>
          <Link
            to={`/detail`}
            className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5  text-md font-semibold py-2 rounded-lg text-gray-500 hover:bg-gray-200 hover:text-[#8d6ff8] hover:duration-500 active:text-[#8d6ff8] focus:text-[#8d6ff8] focus:bg-gray-200 active:bg-gray-200"
          >
            <CgProfile className="inline mr-0 sm:mr-0 md:mr-0 lg:mr-1 xl:mr-1 -mt-1" />
            <span className="hidden sm:hidden md:hidden lg:inline xl:inline">
              Profile Detail
            </span>
          </Link>
        </div>
        {/* <div>
          <Link
            to={`/${keys[0]}`}
            className="border-2 border-[#8d6ff8] py-1 px-2 rounded-lg text-[#8d6ff8] font-semibold hover:bg-[#8d6ff8] hover:text-white hover:duration-500 "
          >
            <AiFillEye className="inline sm:inline md:inline lg:hidden xl:hidden -mt-1 " />
            <span className="hidden sm:hidden md:hidden lg:inline xl:inline">
              Preview
            </span>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
