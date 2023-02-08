import { Select } from "antd";
const handleChange = (value) => {
  console.log(`CouponSelect ${value}`);
};
// const SelectValue = (`CouponSelect ${value}`);

const CouponSelect = () => (
  <>
    <Select
      placeholder="Search to Select"
      style={{
        width: 430,
      }}
      onChange={handleChange}
      options={[
        {
          value: "50",
          label: "折50",
        },
        {
          value: "100",
          label: "折100",
        },
        {
          value: "150",
          label: "折150",
        },
      ]}
    />
  </>
);
export default CouponSelect;
