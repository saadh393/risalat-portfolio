import { motion } from "framer-motion";
import React, { useContext } from "react";
import PublicationCard from "../components/pageComponent/Publications/PublicationCard";
import { ApplicationContext } from "../Routes";

function Publications() {
  const { publications } = useContext(ApplicationContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center h-full py-10 "
    >
      <h1 className="text-center text-white font-bold text-4xl mt-10">Publications</h1>

      <div className="mx-auto mt-10 justify-center lg:justify-between gap-x-5 gap-5 px-2 flex flex-wrap gap-y-10">
        {publications &&
          publications.map((publication, index) => (
            <PublicationCard key={publication.id} data={publication.attributes} index={index} />
          ))}
      </div>
    </motion.div>
  );
}

export default Publications;
