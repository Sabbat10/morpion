import { useState } from "react";
export default function Square({ ...props }) {
  const [value, setValue] = useState(null);
  function handClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handClick}>
      {value}
    </button>
  );
}
