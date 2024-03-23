import { Routes, Route } from "react-router-dom";
import { lazyLoad } from "./utils/lazyLoad";
import { Suspense } from "react";
import Loader from "./pages/Loader/index.js";

const HomePage = lazyLoad(import("./pages/Homepage/index.js"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
