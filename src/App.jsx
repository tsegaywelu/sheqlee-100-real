import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/onetimecmponent/Footer";
import Alljobs from "./pages/Alljobs";
import Lost from "./components/onetimecmponent/Lost";
import Header from "./components/onetimecmponent/Header";
import Catagoris from "./pages/Catagoris";
import Clients from "./pages/Clients";
import Jobdetail from "./pages/Jobdetail";
import Catagprydetail from "./pages/Catagprydetail";
import Alltags from "./pages/Alltags";
import Tagdetail from "./pages/Tagditail";
import Companys from "./pages/Companys";
import Contact from "./pages/Contact";
import FAQ1 from "./pages/FAQ1";
import Companysignup from "./pages/authpages/Companysignup";
import Employersignup from "./pages/authpages/Employersignup";
import Login from "./pages/authpages/Login";
import Inputfields from "./pages/privatepages/postjob/Vacancyform";
const App = () => {
  console.log("<App/> rendered");
  return (
    <BrowserRouter>
      <div className="mx-3 md:mx-6 lg:mx-12 ">
        <Header />
        <Routes>
          <Route path="/sheqlee" element={<Landing />} />
          <Route path="/sheqlee/alljobs" element={<Alljobs />} />

          <Route path="/sheqlee/catagoris" element={<Catagoris />} />
          <Route path="/sheqlee/tags" element={<Alltags />} />
          <Route
            path="/sheqlee/alljob/:theidtodisplay"
            element={<Jobdetail />}
          />
          <Route
            path="/sheqle/catagory/:theidtodisplay"
            element={<Catagprydetail />}
          />
          <Route path="/sheqlee/tag/:theidtodisplay" element={<Tagdetail />} />
          <Route path="/sheqlee/client" element={<Clients />} />
          <Route path="/sheqlee/company" element={<Companys />} />
          <Route path="/sheqlee/contact" element={<Contact />} />
          <Route path="/sheqlee/FAQ" element={<FAQ1 />} />
          {/* /////auth pages  */}
          <Route path="/sheqlee/companysignup" element={<Companysignup />} />
          <Route path="/sheqlee/employersignup" element={<Employersignup />} />
          <Route path="/sheqlee/login" element={<Login />} />
          {/* below are all the private routes  */}

          <Route path="/sheqlee/vacancy" element={<Inputfields />} />
          <Route path="*" element={<Lost />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
