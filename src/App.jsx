import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Repo from "./components/pages/Repo";
import RepoData from "./components/pages/RepoData";
import Error404 from "./components/pages/Error404";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBoundaryTest from "./components/pages/ErrorBoundaryTest";

function App() {
  //Implement an API fetch of your GitHub portfolio,
  //show a page with a list of all your repositories on
  //GitHub(the page should implement pagination for the repo list),
  //and create another page showing data for a single repo clicked
  //from the list of repos using nested routes while using all the
  //necessary tools in react. Implement the proper SEO, Error Boundary
  //(show a page to test the error boundary) and 404 pages.
  // Good UI and Designs are important.

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="repo" element={<Repo />} />
            <Route path="repo/:details" element={<RepoData />} />
            <Route path="/errorboundary" element={<ErrorBoundaryTest />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
