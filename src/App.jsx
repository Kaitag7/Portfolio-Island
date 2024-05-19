import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contacts, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
