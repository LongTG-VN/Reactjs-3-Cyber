import React from "react";

const Cart = (pros) => {
  const { data, Action } = pros;
  return (
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.quantity}</td>
      <td>
        <button onClick={() => Action(data, true)}>ADD</button>
        <button onClick={() => Action(data, false)}>Delete</button>
      </td>
    </tr>
  );
};

export default Cart;
