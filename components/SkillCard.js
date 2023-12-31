export default function SkillCard({ name, level, image, imageClassName }) {
  const addImageClassName = imageClassName ? imageClassName : "";
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <img src={image} className={`mr-6 ${addImageClassName}`} />
      <div>
        <h4 className="text-lg font-semibold font-sans">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
      </div>
    </div>
  );
}
