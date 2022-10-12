import { motion } from "framer-motion";
import React, { useContext } from "react";
import FeaturedCard from "../components/pageComponent/VideosAndAppearances/FeaturedCard";
import { ApplicationContext } from "../Routes";

function Videos() {
  const { getVideosAndAppearances } = useContext(ApplicationContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center py-10  h-full w-full snap-start scroll-mb-56 scroll-pb-56"
      id="videos-and-Appearances"
    >
      <h1 className="text-center text-white font-bold text-4xl mt-10">Videos and Appearances</h1>

      <div className="w-full self-start my-8">
        <h2 className="start my-6 font-medium text-lg title-bar">Featured In</h2>
        <div className="mx-auto justify-center lg:justify-between gap-x-5 gap-5 flex flex-wrap gap-y-10">
          {getVideosAndAppearances &&
            getVideosAndAppearances
              .filter((item) => item.attributes.Featured)
              .map((publication, index) => (
                <FeaturedCard key={publication.id} data={publication.attributes} index={index} />
              ))}
        </div>
      </div>

      <div className="w-full self-start my-8">
        <h2 className="start my-6 font-medium text-lg title-bar">Videos</h2>
        <div className="mx-auto justify-center lg:justify-between gap-x-5 gap-5 flex flex-wrap gap-y-10">
          {getVideosAndAppearances &&
            getVideosAndAppearances
              .filter((item) => item.attributes.Type == "Video")
              .map((publication, index) => (
                <FeaturedCard key={publication.id} data={publication.attributes} index={index} />
              ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Videos;
