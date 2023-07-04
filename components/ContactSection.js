import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="bg-whiteButNotWhite flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-whiteButNotWhite-200">
          <div className="lg:py-16 lg:px-20 md:p-2 p-6">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>Find me on social media</SectionParagraph>

            <ContactItem
              label="Mail"
              value="fyordderen@gmail.com"
              icon="/mail.svg"
              className="mt-10"
            />
            <ContactItem
              label="LinkedIn"
              value="www.linkedin.com/in/derentanaphan/"
              icon="/linkedin.svg"
              className="mt-6"
            />
            <ContactItem
              label="Instagram"
              value="derentanaphan_"
              icon="/instagram.svg"
              className="mt-6"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="py-16 px-20 lg:py-16 lg:px-20 md:p-2 p-6">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-3">
                <Field label="Name" name="name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-3">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Email"
              name="email"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
