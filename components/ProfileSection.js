import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";

export default function Profile() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto mt-10 px-10 2xl:px-0">
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>Know me more.</SectionParagraph>
        <div className="flex lg:items-center md:items-start flex-wrap xl:w-8/12 mx-auto mt-10">
          <div className="md:w-5/12 w-full px-10 mb-10 md:md-0">
            <img src="/profile.png" className="w-full" />
          </div>
          <div className="md:w-7/12 w-full px-10">
            <p className="text-lg leading-relaxed">
              I am an information engineering student at Universitas Gadjah
              Mada. I love to explore anything related to computers. Currently,
              i am trying to learn about web development. I also interested in
              Cyber Security. Data security issues that have become an issue
              lately motivate me to be able to create a system that is secure
              and not vulnerable to Cyber Security Attacks. To increase my skill
              in Cyber Security, i also tried to take a part in several Capture
              the Flag competitions with my team.
            </p>
            <p className="text-lg mt-6 leading-relaxed">
              I am someone who is responsible, disciplined, and easy to learn
              new things. As an IT student, i try to always consistenly in
              coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
