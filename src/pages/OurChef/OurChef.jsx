import React, {useEffect, useState} from "react";
import ChefCard from "./ChefCard";

const OurChef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://flaver-server-habibullahraju.vercel.app/all-chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-16 py-5">
        Our Professional Chef
      </h2>
      <p className="text-center px-5 mb-6 text-gray-500 md:px-40">
        {" "}
        Led by our executive chef, each member of our kitchen staff is
        passionate about using the freshest ingredients and incorporating bold
        flavors and innovative techniques to elevate classic recipes.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 ">
        {chefs.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
