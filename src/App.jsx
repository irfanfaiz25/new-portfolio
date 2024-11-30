// import { useState } from 'react'
import ProfileSection from "./assets/components/profile/ProfileSection";
import Main from "./assets/components/main/Index";

function App() {
  return (
    <>
      <section className="flex justify-between px-12 py-10 space-x-4">
        <ProfileSection />

        <Main />
      </section>
    </>
  );
}

export default App;
