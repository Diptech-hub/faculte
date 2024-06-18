import "../styles/dropdown.css"

interface DropdownProps {
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <select className="drop" onChange={handleChange} defaultValue="">
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value} className="dropOption">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
