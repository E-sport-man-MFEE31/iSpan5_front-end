import { HiMenu } from "react-icons/hi";
function Toggle() {
  return (
    <>
      <button className="btnAll">全部</button>
      <div className="d-flex align-items-center">
        <HiMenu className="menuBar" />
      </div>
    </>
  );
}
export default Toggle;
