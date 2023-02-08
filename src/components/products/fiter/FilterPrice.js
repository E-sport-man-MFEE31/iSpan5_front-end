import React from "react";

function FilterPrice() {
  return (
    <>
      <p>價格篩選</p>
      <br />
      <div className="filter-price">
        <input
          type="text"
          style={{
            width: "5rem",
            marginTop: "-6rem",
          }}
        />
        <div
          style={{
            backgroundColor: "black",
            display: "inline-block",
            height: "1px",
            width: "1rem",
            margin: "1.5px",
          }}
        ></div>
        <input
          type="text"
          style={{
            width: "5rem",
          }}
        />
        <button
          style={{
            width: "10rem",
            backgroundColor: "#FB570B",
            color: "white",
            borderRadius: "10px",
            marginTop: "1.5rem",
          }}
        >
          套用
        </button>
      </div>
    </>
  );
}

export default FilterPrice;
