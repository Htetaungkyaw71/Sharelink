/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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

const Preview = () => {
  let { id } = useParams();
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
  let data = useSelector((state) => state.LinkSlice);
  let obj = data[id];
  return (
    <div className="h-60 bg-[#8F71F9] rounded-3xl flex justify-center">
      <div className="text-center flex justify-center items-center mt-24 shadow-2xl rounded-[2rem] w-[272px] h-[420px] bg-gray-100">
        <div>
          <h1 className="text-xl font-bold text-gray-500">{obj.name}</h1>
          <h1 className="text-md font-semibold text-gray-400">{obj.email}</h1>
          {obj.links.length < 4 ? (
            obj.links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className={`${
                  p[link.platform][1]
                } p-3 rounded-lg mt-4 block w-full capitalize text-white flex items-center justify-between`}
              >
                <span className="flex items-center">
                  {p[link.platform][0]}
                  <span className="ml-2">{link.platform}</span>
                </span>

                <span>
                  <AiOutlineArrowRight />
                </span>
              </a>
            ))
          ) : (
            <div className="flex gap-2 flex-wrap mx-5 ">
              {obj.links.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`${
                    p[link.platform][1]
                  } p-3 rounded-lg mt-4 capitalize text-white block`}
                >
                  <span>{p[link.platform][0]}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
