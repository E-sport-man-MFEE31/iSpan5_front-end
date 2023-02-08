import Form from "react-bootstrap/Form";

function FiterBrand() {
  return (
    <Form>
      <div
        className="brand"
        style={{
          marginTop: "3px",
        }}
      >
        品牌
      </div>
      {["ASUS-ROG", "Razer", "logitech"].map((brand) => (
        <div
          key={`default-${brand}`}
          className="mb-3 d-flex"
          style={{
            marginLeft: "3.5rem",
          }}
        >
          <Form.Check
            type="checkbox"
            id={`default-${brand}`}
            label={`${brand}`}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      ))}
    </Form>
  );
}

export default FiterBrand;
