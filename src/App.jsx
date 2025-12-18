import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Room from "./pages/Room";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/room" element={<Room />} />
<Route path="/service" element={<Service />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</BrowserRouter>
);
}


export default App;