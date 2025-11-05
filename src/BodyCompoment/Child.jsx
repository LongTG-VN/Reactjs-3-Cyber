import React, { useState } from "react";

const Child = (pros) => {
  const { item, setProduct, BuyItem } = pros;

  const HandleDetail = () => {
    setProduct(item);
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{item.name}</p>
        <p className="card-text">{item.price}</p>
        <button
          onClick={HandleDetail}
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Thông tin
        </button>
        <button onClick={() => BuyItem(item)}>Mua</button>
      </div>
    </div>
  );
};

export default Child;
