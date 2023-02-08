import { Input } from "antd";
const { TextArea } = Input;

const InputReceiver = ({ placeholder }) => {
  return (
    <>
      <TextArea placeholder={placeholder} autoSize />
      <div
        style={{
          margin: "24px 0",
        }}
      />
    </>
  );
};
export default InputReceiver;
