import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { useState } from "react";
import { useMutation, focusManager } from "react-query";
import { postIndice } from "../apis";

function AddNew() {
  const [stock, setStock] = useState<string>("");

  const mutation = useMutation(
    (newIndice: string) => {
      return axios.post("http://localhost:5000/addindice", { indice: newIndice });
    },
    {
      onSuccess: () => {
        focusManager.setFocused(true);
      },
    }
  );

  const handleClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    // console.log(stock);

    mutation.mutate(stock);

    setStock("");
  };

  return (
    <>
      {mutation.isError && "Error..."}

      <form action="" className="add_new" onSubmit={e => handleClick(e)}>
        <input
          type="text"
          placeholder="Enter a stock indice"
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
        <AddCircleIcon className="add_btn" onClick={e => handleClick(e)} />
      </form>
    </>
  );
}

export default AddNew;
