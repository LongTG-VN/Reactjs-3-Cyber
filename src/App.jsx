import { useState } from "react";
import BodyCompoment from "./BodyCompoment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" mt-4 container d-flex gap-4 justify-content-evenly flex-wrap ">
        <BodyCompoment />
        <BodyCompoment />
        <BodyCompoment />
      </div>
    </>
  );
}

export default App;
