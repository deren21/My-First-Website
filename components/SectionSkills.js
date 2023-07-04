import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SectionSkills() {
  return (
    <section className="py-28 bg-whiteButNotWhite" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Some of my skills.</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Beginner"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Beginner"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Beginner"
              image="/nodejs.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-fullpx-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Beginner"
              image="/nodejs.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="JavaScript"
              level="Beginner"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Beginner"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="React JS"
              level="Beginner"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="Node JS"
              level="Beginner"
              image="/nodejs.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              name="JavaScript"
              level="Beginner"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
