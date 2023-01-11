import {useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Repos from "./components/pages/Repos";
import RepoData from "./components/pages/RepoData";
import Error404 from "./components/pages/Error404";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBoundaryTest from "./components/pages/ErrorBoundaryTest";

export const RepoContext = createContext();

function App() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  //   Fetching Lekanjoy Github Repositories
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.github.com/users/Lekanjoy/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err)
        alert('Please check your Internet connection ⚠')
      });
      
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <RepoContext.Provider value={{ repos, isLoading }}>
          <Routes>
            <Route path="/">
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="repos" element={<Repos />} />
                <Route path="repos/:details" element={<RepoData />} />
                <Route path="/errorboundary" element={<ErrorBoundaryTest />} />
                <Route path="*" element={<Error404 />} />
              </Route>
            </Route>
          </Routes>
        </RepoContext.Provider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
