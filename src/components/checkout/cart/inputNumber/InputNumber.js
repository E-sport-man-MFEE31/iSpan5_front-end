import { InputNumber } from "antd";
const onChange = (value) => {
  console.log("changed", value);
};
const InputNum = ({ value }) => (
  <InputNumber
    min={1}
    defaultValue={value}
    onChange={onChange}
  />
);
export default InputNum;
