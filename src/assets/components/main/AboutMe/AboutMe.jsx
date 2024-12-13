import Index from "../Index";
import { useInView } from "react-intersection-observer";
import { SkillsData } from "../../../data/skills";
import SkillCard from "./SkillsCard";
import { EducationData } from "../../../data/education";
import EducationList from "./EducationList";
import { CertificationData } from "../../../data/certification";
import CertificationList from "./CertificationList";
import Description from "./Description";
import { ImageModal } from "../ImageModal";
import { useState } from "react";

const AboutMe = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <Index>
      <div>
        <Description />
      </div>

      <h1
        ref={titleRef}
        className={`mt-10 mb-10 -ms-2 text-left text-3xl font-bold transition-opacity duration-1000 ease-in-out relative
  ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <span className="text-main-text">Core Skills</span>
        <div
          className={`absolute -bottom-2 left-0 w-16 h-1 bg-tertiary-bg transition-transform duration-1000 ease-in-out ${
            titleInView ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transformOrigin: "left" }}
        ></div>
      </h1>

      <div className="mt-10 flex flex-wrap justify-center md:justify-between gap-y-8">
        {Object.entries(SkillsData).map(
          ([category, { notes, skills }], categoryIndex) => (
            <div key={category}>
              <h3 className="text-lg font-bold">{category}</h3>
              <div className="mt-3 block lg:flex gap-4 space-y-2 lg:space-y-0">
                {skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    logo={skill.logo}
                    borderColor={skill.borderColor && skill.borderColor}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
              {notes && (
                <div className="mt-3 flex space-x-2 items-center">
                  <div className="bg-fourtiary-bg h-2 w-2 rounded-full shadow-sm shadow-black"></div>
                  <p className="text-sm font-semibold">Currently Exploring</p>
                </div>
              )}
            </div>
          )
        )}
      </div>

      <div ref={educationRef} className="block lg:flex justify-between px-3">
        <div>
          <h1
            className={`mt-10 mb-10 -ms-2 text-left text-3xl font-bold transition-opacity duration-1000 ease-in-out relative
  ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <span className="text-main-text">Education Journey</span>
            <div
              className={`absolute -bottom-2 left-0 w-16 h-1 bg-tertiary-bg transition-transform duration-1000 ease-in-out ${
                educationInView ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            ></div>
          </h1>

          <ol className="relative mt-3 border-s border-gray-200 dark:border-main-border">
            {EducationData.map((item, index) => (
              <EducationList
                key={index}
                institution={item.institution}
                note={item.note ? item.note : ""}
                major={item.major}
                timeSpan={item.timeSpan}
                delay={index * 200}
              />
            ))}
          </ol>
        </div>

        <div>
          <h1
            className={`mt-10 mb-10 -ms-2 text-left text-3xl font-bold transition-opacity duration-1000 ease-in-out relative
  ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <span className="text-main-text">Certification</span>
            <div
              className={`absolute -bottom-2 left-0 w-16 h-1 bg-tertiary-bg transition-transform duration-1000 ease-in-out ${
                educationInView ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            ></div>
          </h1>

          <ol className="relative mt-3 border-s border-gray-200 dark:border-main-border">
            {CertificationData.map((item, index) => (
              <CertificationList
                key={index}
                name={item.name}
                year={item.year}
                image={item.image}
                delay={index * 200}
                selectedImage={(selectedImage) => {
                  setSelectedImage(selectedImage);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </ol>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          imageSrc={selectedImage}
          alt="certification"
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Index>
  );
};

export default AboutMe;
