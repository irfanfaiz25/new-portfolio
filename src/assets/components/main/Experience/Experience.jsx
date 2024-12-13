import { useInView } from "react-intersection-observer";
import Index from "../Index";
import ExperienceList from "./ExperienceList";
import { ExperienceData } from "../../../data/experiences";
import HighlightsList from "./HighlightsList";
import { ImpactHighlightsData } from "../../../data/ImpactHighlights";
import { FutureGoalsData } from "../../../data/futureGoals";
import GoalsList from "./GoalsList";

const Experience = () => {
  const { ref: impactRef, inView: impactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: goalsRef, inView: goalsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const reversedData = [...ExperienceData].reverse();
  return (
    <Index>
      <div className="mx-3">
        <ol
          className={`relative mt-3 border-s border-gray-200 dark:border-main-border`}
        >
          {reversedData.map((item, index) => (
            <ExperienceList
              key={index}
              companyName={item.companyName}
              as={item.as}
              position={item.position}
              note={item.note}
              timeSpan={item.timeSpan}
              details={item}
              delay={index * 200}
            />
          ))}
        </ol>
      </div>

      <div ref={impactRef} className="mt-12 mx-3">
        <h1
          className={`mt-10 mb-10 -ms-2 text-left text-3xl font-bold transition-opacity duration-1000 ease-in-out relative
  ${impactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <span className="text-main-text">Impact Highlights</span>
          <div
            className={`absolute -bottom-3 left-0 w-16 h-1 bg-tertiary-bg transition-transform duration-1000 ease-in-out ${
              impactInView ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          ></div>
        </h1>
        <ul className="space-y-4 text-gray-300">
          {ImpactHighlightsData.map((item, index) => (
            <HighlightsList
              key={index}
              text={item.text}
              highlight={item.highlight}
              suffix={item.suffix}
              delay={index * 200}
            />
          ))}
        </ul>
      </div>

      <div ref={goalsRef} className="mt-12 mx-3">
        <h1
          className={`mt-10 mb-10 -ms-2 text-left text-3xl font-bold transition-opacity duration-1000 ease-in-out relative
  ${goalsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <span className="text-main-text">Future Goals</span>
          <div
            className={`absolute -bottom-3 left-0 w-16 h-1 bg-tertiary-bg transition-transform duration-1000 ease-in-out ${
              goalsInView ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          ></div>
        </h1>
        <ul className="space-y-4 text-gray-300">
          {FutureGoalsData.map((item, index) => (
            <GoalsList
              key={index}
              text={item.text}
              highlight={item.highlight}
              suffix={item.suffix}
              delay={index * 200}
            />
          ))}
        </ul>
      </div>
    </Index>
  );
};

export default Experience;
