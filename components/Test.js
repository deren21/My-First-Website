import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Test() {
  return (
    <section className="py-28 bg-skill">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Some of my skills.</SectionParagraph>
        <div className="flex">
          <div className="w-4/12">
            <div clasName="bg-white shadow-lg rounded-lg">JavaScript</div>
          </div>
        </div>
      </div>
    </section>
  );
}
