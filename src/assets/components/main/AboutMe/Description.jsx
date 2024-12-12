const Description = () => {
  return (
    <>
      <p className="font-bold text-xl relative">
        <span className="relative z-10">{`"Hi, I'm Ahmad Irfan Faiz"`}</span>
        <span className="absolute bottom-1 left-[69px] w-44 h-5 bg-rose-500/70 transform -rotate-1 -z-0 animate-[highlight_1s_ease-in-out]"></span>
      </p>
      <p className="mt-1">
        {`I'm a full-stack web developer with a strong specialization in backend
          development. I have a passion for building robust, scalable, and
          efficient web applications that solve real-world problems. My
          expertise lies in designing and implementing complex backend systems,
          crafting seamless user experiences, and collaborating with
          cross-functional teams to deliver impactful solutions.`}
      </p>
      <p className="mt-2">
        {" "}
        {`With hands-on
          experience in technologies like Laravel and MySQL, and a growing proficiency in React, I
          excel in creating end-to-end solutions—from database design and API
          development to frontend integration. Whether working on team projects
          or independently, I bring a meticulous and results-oriented approach
          to every challenge.`}{" "}
      </p>
      <p className="mt-2">
        {" "}
        {`When I'm not coding, I enjoy exploring new tech
          trends, contributing to open-source projects, and sharing my knowledge
          with the developer community. I'm always on the lookout for
          opportunities to grow, innovate, and contribute to meaningful
          projects.`}
      </p>
      <p className="mt-3 text-xl font-bold">
        {`Let's create something`}{" "}
        <span className="text-secondary-text">incredible</span> together!
      </p>
    </>
  );
};

export default Description;
