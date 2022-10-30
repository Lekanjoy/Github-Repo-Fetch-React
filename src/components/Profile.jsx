import github from "../assets/github_icon.svg";
import twitter from "../assets/twitter.svg";
import website from "../assets/website icon_icon.svg";

const Profile = ({ portfolio }) => {
  // console.log(portfolio);
  return (
    <section className="flex flex-col justify-center items-center border px-5 py-6">
      <img
        src={portfolio.avatar_url}
        alt="Profile_image"
        className="w-28 h-28 rounded-full"
      />
      <div className="mt-4 text-center">
        <h1 className="text-2xl font-semibold mb-1">{portfolio.name}</h1>
        <p className="text-sm">{portfolio.bio}</p>
        <p className="italic font-light my-3">{portfolio.location}</p>
      </div>
      {/* Get twitter, website and gitbub icon */}
      <div className="flex justify-center gap-x-2 items-center my-4">
        <a
          href={portfolio.twitter_username}
          target="_blank"
          className=" h-[50px] w-[50px] rounded-full"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href={portfolio.blog}
          target="_blank"
          className="bg-white h-[50px] w-[50px] rounded-full"
        >
          <img src={website} alt="" />
        </a>
        <a
          href={portfolio.html_url}
          target="_blank"
          className=" h-[50px] w-[50px] rounded-full"
        >
          <img src={github} alt="" />
        </a>
      </div>

      <div className="flex justify-between gap-x-2 text-center">
        <div className=" border-r pr-2">
          <p className="uppercase font-light">Repositories</p>
          <p className="font-semibold text-lg mt-1">{portfolio.public_repos}</p>
        </div>

        <div className=" border-r pr-2">
          <p className="uppercase font-light">Followers</p>
          <p className="font-semibold text-lg mt-1">{portfolio.followers}</p>
        </div>

        <div className="">
          <p className="uppercase font-light">Followings</p>
          <p className="font-semibold text-lg mt-1">{portfolio.following}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
//  <div className="">
//    <p>{portfolio.bio}</p>
//    <a href={portfolio.blog}>
//      <p>{portfolio.blog}</p>
//    </a>
//    <img src={portfolio.avatar_url} alt="" />
//    <span className="mr-2 mt-3"></span>
//    <span></span>
//    <span></span>
//    <span>{portfolio.location}</span>
//    <span>{portfolio.url}</span>
//    <span>{portfolio.name}</span>
//    <p>{portfolio.twitter_username}</p>
//  </div>
