import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Work from "./Work";
import { Work as workType } from "../types";
const Works: React.FC = () => {
  const [works, setWorks] = useState<workType[]>([]);

  useEffect(() => {
    sanityClient
      .fetch<workType[]>(
        `*[_type=="work"]{
      _id, 
      title, 
      description,
      image{
      asset->{
      _id,
      url}}}`
      )
      .then((data) => setWorks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-8 md:p-20">
      <h1 className="flex justify-center mb-8">My Works</h1>
      <div className="flex flex-wrap gap-4">
        {works.map((work) => (
          <Work
            key={work._id}
            image={work.image.asset.url}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
