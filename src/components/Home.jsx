import React, { useState, useEffect, useContext} from "react";
import Profile from "./Profile";

const Home = () => {

  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetching My GitHub Portfolio
  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.github.com/users/lekanjoy')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPortfolio(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="p-4 ">
      <h1 className="my-4 text-center font-semibold text-lg italic">
        Olalekan Alabi's Github Portfolio
      </h1>
      {isLoading === true ? (
        "Loading"
      ) : <Profile portfolio={portfolio}/>}
    </section>
  );
};

export default Home;
