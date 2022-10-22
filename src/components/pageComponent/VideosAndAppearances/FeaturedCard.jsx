import { motion } from "framer-motion";
import React from "react";
import ProgressiveImage from "react-progressive-image-loading";
import LoadingGif from "../../../images/loading.gif";
import { DOMAIN } from "../../../Util";

const FeaturedCard = ({ data, index }) => {
  const { title, author, link, thumbnail, published_date } = data;
  const url = thumbnail?.data?.attributes
    ? DOMAIN + thumbnail?.data?.attributes.url
    : "https://dummyimage.com/600x400/031f47/ffffff&text=Image+not+found";
  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // transition={{ delay: index * 0.2, ease: "linear" }}
      className={`mx-auto cursor-pointer flex flex-col items-center max-w-xs h-fit hover:shadow-lg rounded-md overflow-hidden transition-transform hover:scale-105`}
    >
      <ProgressiveImage
        preview={LoadingGif}
        src={url}
        transitionTime={500}
        transitionFunction="ease"
        render={(src) => (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-[180px] object-cover rounded-md"
            src={src}
          />
        )}
      />

      <div className="bg-black/10 backdrop-blur px-2 py-6 w-full">
        <h1 className="text-base mt-2 font-bold ">{title}</h1>
        <div className="flex text-xs gap-2 mt-2 text-[#D2D2D2]">
          <p>{author}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default FeaturedCard;
