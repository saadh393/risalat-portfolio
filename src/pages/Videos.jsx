import { motion } from "framer-motion";
import React, { useContext } from "react";
import FeaturedCard from "../components/pageComponent/VideosAndAppearances/FeaturedCard";
import { ApplicationContext } from "../Routes";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

function Videos() {
  const { getVideosAndAppearances } = useContext(ApplicationContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl xl:max-w-5xl flex flex-col items-center py-10 h-full w-full snap-start scroll-mb-80"
      id="videos-and-Appearances"
    >
      <h1 className="text-center text-white font-bold text-4xl mt-10">In the News</h1>

      <div className="w-full self-start my-10">
        {/* <div className="mx-auto justify-center lg:justify-between gap-x-5 gap-5 flex flex-wrap gap-y-10"> */}
        <div className="mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {getVideosAndAppearances &&
            getVideosAndAppearances
              // .filter((item) => item.attributes.Type == "Video")
              .map((publication, index) => <FeaturedCard key={publication.id} data={publication.attributes} index={index} />)}
        </div>
      </div>
    </motion.div>
  );
}

export default Videos;
