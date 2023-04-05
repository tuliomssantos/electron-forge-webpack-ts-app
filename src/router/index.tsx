import {
    HashRouter,
  Navigate,
  Route,
  Routes as RoutesWrapper,
} from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";

export default function Routes() {
  return (
    <HashRouter>
      <div className="app">
        <RoutesWrapper>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
        </RoutesWrapper>
      </div>
    </HashRouter>
  );
}
