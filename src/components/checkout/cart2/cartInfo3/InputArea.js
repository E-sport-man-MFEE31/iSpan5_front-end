import { Input } from "antd";

const { TextArea } = Input;

const InputArea = ({ placeholder }) => (
  <>
    <TextArea rows={4} placeholder={placeholder} />
  </>
);
export default InputArea;
