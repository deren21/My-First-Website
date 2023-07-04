export default function Field({ label, name, type, className }) {
  const addClassName = className ? className : "";
  const formControlClassName = `${addClassName} bg-transparent border border-whiteButNotWhite-300 py-3 px-6 w-full`;
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 text-sm font-semibold">
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}
