const InputField = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold text-2xl" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="px-4 py-3 mt-2 w-full rounded-xl bg-soft"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
