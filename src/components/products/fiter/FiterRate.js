import { Rate } from "antd";
const FiterRate = ({ value }) => (
  <Rate
    disabled
    defaultValue={value}
    style={{
      cursor: "pointer",
    }}
  />
);
export default FiterRate;
