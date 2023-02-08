import { Select } from "antd";

const SelectStore = () => (
  <>
    <Select
      defaultValue="海神"
      style={{
        width: 200,
      }}
      onChange={() => {}}
      options={[
        {
          value: "海神",
          label: "海神",
        },
        {
          value: "千禧",
          label: "千禧",
        },
        {
          value: "福冠",
          label: "福冠",
        },
        {
          value: "台達電",
          label: "台達電",
        },
      ]}
    />
  </>
);
export default SelectStore;
