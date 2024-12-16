import Index from "./Index";

const Home = () => {
  return (
    <Index>
      <div className="justify-center animate-[fadeIn_0.5s_ease-in-out]">
        <div className="text-left space-y-5 text-2xl md:text-4xl lg:text-5xl font-bold text-main-text dark:text-dark-main-text font-serif leading-9 md:leading-10 lg:leading-12">
          <h1>
            a passionate software developer striving to{" "}
            <span className="relative inline-block">
              learn
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
                viewBox="0 0 200 8"
              >
                <path
                  d="M0,3 Q50,0 100,3 T200,3"
                  className="stroke-main-stroke dark:stroke-dark-main-stroke fill-none animate-[drawForward_2s_ease-in-out]"
                  strokeWidth="2"
                />
                <path
                  d="M0,6 Q50,3 100,6 T200,6"
                  className="stroke-main-stroke dark:stroke-dark-main-stroke fill-none animate-[drawBackward_2s_ease-in-out]"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              improve
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
                viewBox="0 0 200 8"
              >
                <path
                  d="M0,3 Q50,0 100,3 T200,3"
                  className="stroke-rose-500 fill-none animate-[drawForward_2s_ease-in-out]"
                  strokeWidth="2"
                />
                <path
                  d="M0,6 Q50,3 100,6 T200,6"
                  className="stroke-rose-500 fill-none animate-[drawBackward_2s_ease-in-out]"
                  strokeWidth="2"
                />
              </svg>
            </span>{" "}
            everyday.
          </h1>
        </div>
        <div className="mt-6 text-left text-sm md:text-lg font-light text-main-text dark:text-dark-main-text">
          My personal hub for{" "}
          <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
            creativity
          </span>
          ,{" "}
          <span className="text-tertiary-text font-semibold">exploration</span>,
          and the
          <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
            {" "}
            occasional
          </span>{" "}
          deep thought.
        </div>
      </div>
    </Index>
  );
};

export default Home;
