import React, { useState } from "react";
import data from "./../../data.json";
import Child from "./Child";
import Cart from "./Cart";
const BodyCompoment = () => {
  const [List, SetList] = useState(data);
  const [ItemDetail, setDetail] = useState(null);
  const [ListCart, setListCart] = useState([]);

  const AddCart = (item) => {
    const NewItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };

    const index = ListCart.findIndex((p) => p.id === NewItem.id);
    console.log(index);

    if (index !== -1) {
      ListCart[index].quantity += 1;
      const NewArr = [...ListCart];
      setListCart(NewArr);
    } else {
      const NewArr = [...ListCart, NewItem];
      setListCart(NewArr);
    }
  };

  const RenderList = () => {
    const listUI = List.map((p) => {
      return <Child item={p} setProduct={SetItemDetail} BuyItem={AddCart} />;
    });
    return listUI;
  };

  const ActionCart = (item, isADD) => {
    const index = ListCart.findIndex((p) => p.id === item.id);

    if (isADD) {
      ListCart[index].quantity += 1;
      const NewArr = [...ListCart];
      setListCart(NewArr);
    } else {
      if (ListCart[index].quantity <= 1) {
        ListCart.splice(index, 1);
        const NewArr = [...ListCart];
        setListCart(NewArr);
      } else {
        ListCart[index].quantity -= 1;
        const NewArr = [...ListCart];
        setListCart(NewArr);
      }
    }
  };

  const RenderListCart = () => {
    const ListC = ListCart.map((p) => {
      return <Cart data={p} Action={ActionCart} />;
    });
    return ListC;
  };

  const SetItemDetail = (item) => {
    setDetail(item);
  };

  const total = () => {
    if (!ListCart || ListCart.length === 0) {
      return 0;
    }

    const totalSp = ListCart.reduce((total, p) => {
      return total + p.quantity;
    }, 0);

    return totalSp;
  };

  return (
    <>
      <h1>Tổng sản phẩm : {total()}</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>{RenderListCart()}</tbody>
      </table>

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
