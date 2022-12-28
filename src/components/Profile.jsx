import github from "../assets/github_icon.svg";
import twitter from "../assets/twitter.svg";
import website from "../assets/website icon_icon.svg";
import location from "../assets/location_icon.svg";
import coding from '../assets/coding.jpg'

const Profile = ({ portfolio }) => {
  
  return (
    <section
      className="relative w-full bg-white shadow-xl flex flex-col justify-center border-t 
    rounded-xl items-center  pt-6 max-w-lg z-10"
    >
      <img src={coding} alt="background image" className="absolute -z-[10] top-0 rounded-t-xl w-full h-[150px]" />
      <img
        src={portfolio.avatar_url}
        alt="Profile_image"
        className="w-28 h-28 rounded-full mt-16"
      />
      <div className="mt-4 text-center px-4">
        <h1 className="text-2xl font-semibold mb-1">{portfolio.name}</h1>
        <p className="text-sm text-gray-500">{portfolio.bio}</p>
      </div>
      <div className=" flex items-center gap-x-2">
        <img src={location} alt="location icon" />
        <p className="italic font-light my-3">{portfolio.location}</p>
      </div>
      
      {/* Get twitter, website and gitbub icon */}
      <div className="flex justify-center gap-x-2 items-center my-4">
        <a
          href={`https://twitter.com/${portfolio.twitter_username}`}
          target="_blank"
          className=" h-[30px] w-[30px] rounded-full"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href={portfolio.blog}
          target="_blank"
          className="bg-gray-200 p-1 h-[30px] w-[30px] rounded-full"
        >
          <img src={website} alt="" />
        </a>
        <a
          href={portfolio.html_url}
          target="_blank"
          className=" h-[30px] w-[30px] rounded-full"
        >
          <img src={github} alt="" />
        </a>
      </div>

      <div className="bg-gray-400 text-white rounded-b-xl flex place-content-center items-center mt-8 gap-x-1 w-full">
        
        <div className=" border-r text-center px-1 md:px-4">
          <p className="uppercase font-extralight text-xs md:text-base ">Repositories</p>
          <p className="font-semibold text-lg mt-1">{portfolio.public_repos}</p>
        </div>

        <div className=" border-r text-center px-1 md:px-4">
          <p className="uppercase font-extralight text-xs md:text-base">Followers</p>
          <p className="font-semibold text-lg mt-1">{portfolio.followers}</p>
        </div>

        <div className="pl-1 text-center md:px-4">
          <p className="uppercase font-extralight text-xs md:text-base">Following</p>
          <p className="font-semibold text-lg mt-1">{portfolio.following}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
