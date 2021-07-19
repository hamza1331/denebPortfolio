import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const GetInTouch = lazy(() => import("./components/contact/GetInTouch"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/services" component={Services} exact />
        {/* <Route path="/blogs" component={Blogs} exact /> */}
        <Route path="/contact" component={ContactUs} exact />
        <Route path="/Portfolio" component={Portfolio} exact />
        {/* <Route path="/blogs/:id" component={BlogDetails} exact /> */}
        <GetInTouch />
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
