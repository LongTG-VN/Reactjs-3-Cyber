import React, { useState } from "react";
import data from "./../../data.json";
import Child from "./Child";
const BodyCompoment = () => {
  const [List, SetList] = useState(data);
  const [ItemDetail, setDetail] = useState(null);
  const RenderList = () => {
    const listUI = List.map((p) => {
      return <Child item={p} setProduct={SetItemDetail} />;
    });
    return listUI;
  };

  const SetItemDetail = (item) => {
    setDetail(item);
  };

  return (
    <>
      {RenderList()}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {ItemDetail && ItemDetail.name}
              </h1>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>id : {ItemDetail && ItemDetail.id}</p>
              <p>Alias :{ItemDetail && ItemDetail.alias} </p>
              <p>Price : {ItemDetail && ItemDetail.price}</p>
              <p>Description :{ItemDetail && ItemDetail.description} </p>
              <p>
                shortDescription :{ItemDetail && ItemDetail.shortDescription}
              </p>
              <p>Quantity : {ItemDetail && ItemDetail.quantity}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyCompoment;
