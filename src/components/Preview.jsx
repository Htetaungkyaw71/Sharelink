/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";

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
import { useGetlinksQuery } from "../redux/linkServices";
import { useGetpreviewQuery } from "../redux/userServices";
import Loading from "./Loading";
import { useEffect } from "react";

const Preview = () => {
  let { name } = useParams();
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

  const { data, isLoading, refetch } = useGetpreviewQuery({ name });
  const { data: links } = useGetlinksQuery();

  useEffect(() => {
    if (links) {
      refetch();
    }
  }, [links]);
  if (isLoading) {
    return <Loading />;
  }

  let obj = data?.data;

  return obj === null ? (
    <h1 className="text-center text-2xl pt-48 text-[#8d6ff8]">Invalid URL</h1>
  ) : (
    <div>
      <div className="h-60 bg-[#8F71F9] rounded-b-3xl  flex justify-center"></div>
      <div className="flex justify-center items-center -mt-24 mb-10">
        <div className="text-center flex justify-center items-center shadow-2xl rounded-[2rem] w-[272px] h-[420px] bg-gray-100">
          <div>
            <img
              src={obj?.img_url}
              alt="profile"
              className="w-32 h-32 rounded-full inline-block mb-2"
            />
            <h1 className="text-xl font-bold text-gray-500">{obj?.name}</h1>
            <h1 className="text-md font-semibold text-gray-400">
              {obj?.email}
            </h1>
            {obj?.links.length < 4 ? (
              obj?.links.map(
                (link) =>
                  link.url.length !== 0 && (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        p[link.platform][1]
                      } p-3 rounded-lg mt-4 w-full capitalize text-white flex items-center justify-between`}
                    >
                      <span className="flex items-center">
                        {p[link.platform][0]}
                        <span className="ml-2">{link.platform}</span>
                      </span>

                      <span>
                        <AiOutlineArrowRight />
                      </span>
                    </a>
                  ),
              )
            ) : (
              <div className="flex gap-2 flex-wrap mx-5 ">
                {obj?.links.map(
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

export default Preview;
