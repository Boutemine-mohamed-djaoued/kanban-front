import { FaDeleteLeft } from "react-icons/fa6";
type AddInputProps = {
  index: number;
  value: any;
  setValue: any;
};
const AddInput = ({ index, value, setValue }: AddInputProps) => {
  const deleteColumn = () => {
    setValue(value.filter((column: any, i: number) => i !== index));
  };
  const handleChange = (e: any) => {
    value[index] = e.target.value;
    setValue([...value]);
  };
  return (
    <div className="flex items-center gap-2 my-2">
      <input
        onChange={(e) => handleChange(e)}
        value={value[index]}
        className="dark:bg-dark-grey border-2 border-light-lines dark:border-dark-lines px-5 py-2 rounded-md w-full"
        id="boardname"
      />
      <button onClick={deleteColumn}>
        <FaDeleteLeft className="text-meduim-grey" size={30}></FaDeleteLeft>
      </button>
    </div>
  );
};
export default AddInput;
