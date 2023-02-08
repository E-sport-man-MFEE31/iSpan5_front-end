import { Button, Result } from "antd";
const Page500 = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button
        type="primary"
        style={{
          backgroundColor: "#FB570B",
        }}
      >
        返回首頁
      </Button>
    }
  />
);
export default Page500;
