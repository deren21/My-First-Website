export default function SectionParagraph({ left, children }) {
  return (
    <p
      className={`text-lg mt-2 text-grey-600 opacity-60 ${
        !left ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
