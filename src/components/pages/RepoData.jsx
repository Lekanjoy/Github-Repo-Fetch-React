import React, {useContext} from 'react'
import { useParams} from "react-router-dom";
import {RepoContext} from '../../App'


const RepoData = () => {
 const { details } = useParams();
  const { repos } = useContext(RepoContext);
  const repoDetails = repos.find((repo) => repo.id === parseInt(details));


  return (
    <section className="p-4">
      <div className="">
        <h1>{repoDetails?.name}</h1>
        <p>{repoDetails?.description}</p>
      </div>
    </section>
  );
}

export default RepoData