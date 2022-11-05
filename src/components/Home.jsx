import React, { useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";
import Profile from "./Profile";
import ProfileSkeletonLoading from "./ProfileSkeletonLoading";

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
    <section className="px-8 bg-teal-50 min-h-[90vh] flex justify-center items-center">
      <Helmet>
        <title>GitHub Portfolio Fetch</title>
        <meta
          name="description"
          content="Olalekan Alabi GitHub Profile Fetch."
        />
      </Helmet>
      {isLoading === true ? (
        <ProfileSkeletonLoading />
      ) : (
        <Profile portfolio={portfolio} />
      )}
    </section>
  );
};

export default Home;
