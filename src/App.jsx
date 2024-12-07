// import { useState } from 'react'
import { Routes, Route } from "react-router";
import ProfileSection from "./assets/components/profile/ProfileSection";
import AboutMe from "./assets/components/main/AboutMe/AboutMe";
import Home from "./assets/components/main/Home";
import Projects from "./assets/components/main/Projects";
import Blog from "./assets/components/main/Blog";
import Experience from "./assets/components/main/Experience";

function App() {
  return (
    <>
      <section className="block md:flex justify-between px-5 py-5 lg:px-12 lg:py-10 space-x-0 md:space-x-4 space-y-2 md:space-y-0">
        <ProfileSection />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
