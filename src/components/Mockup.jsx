/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Mockup = ({ user }) => {
  let p = {
    facebook: [<FaFacebook />, "bg-blue-500"],
    linkedin: [<FaLinkedin />, "bg-[#65C3E8]"],
    github: [<FaGithub />, "bg-black"],
    twitter: [<FaTwitter />, "bg-[#1D9BF0]"],
    medium: [<FaMedium />, "bg-black"],
    instagram: [<FaInstagram />, "bg-[#FF3040]"],
    youtube: [<FaYoutube />, "bg-red-500"],
    pinterest: [<FaPinterest />, "bg-[#DF0022]"],
    dribbble: [<FaDribbble />, "bg-[#F082AC]"],
  };
  return (
    <div className=" p-10 mt-3">
      <div className="relative text-center mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[270px] w-auto sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="text-center flex justify-center items-center rounded-[2rem] w-full overflow-hidden  h-[472px] bg-white dark:bg-gray-800">
          <div className="text-center">
            <img
              src={user.img_url}
              alt="profile"
              className="w-32 h-32 rounded-full inline-block mb-2"
            />
            <h1 className="text-xl font-bold text-gray-500">{user.name}</h1>
            <h1 className="text-md font-semibold text-gray-400">
              {user.email}
            </h1>
            {user.links.length < 4 ? (
              user.links.map(
                (link) =>
                  link.url.length !== 0 && (
                    <div className="px-5" key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${
                          p[link.platform][1]
                        } p-3 rounded-lg mt-4  w-full text-center capitalize text-white flex items-center justify-between`}
                      >
                        <span className="flex items-center">
                          {p[link.platform][0]}
                          <span className="ml-2">{link.platform}</span>
                        </span>

                        <span className="ml-2">
                          <AiOutlineArrowRight />
                        </span>
                      </a>
                    </div>
                  ),
              )
            ) : (
              <div className="flex gap-2 flex-wrap justify-center mx-2 ">
                {user.links.map(
                  (link) =>
                    link.url.length !== 0 && (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${
                          p[link.platform][1]
                        } p-3 rounded-lg mt-4 capitalize text-white block`}
                      >
                        <span>{p[link.platform][0]}</span>
                      </a>
                    ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
