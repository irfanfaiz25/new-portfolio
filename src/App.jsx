// import { useState } from 'react'
import { Routes, Route } from "react-router";
import ProfileSection from "./assets/components/profile/ProfileSection";
import AboutMe from "./assets/components/main/AboutMe";
import Home from "./assets/components/main/Home";
import Projects from "./assets/components/main/Projects";
import Blog from "./assets/components/main/Blog";

function App() {
  return (
    <>
      <section className="block md:flex justify-between px-12 py-10 space-x-4">
        <ProfileSection />

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
