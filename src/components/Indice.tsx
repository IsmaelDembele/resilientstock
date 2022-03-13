import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useMutation, focusManager, QueryClient } from "react-query";
import axios from "axios";
import { getIndices } from "../apis";

interface IIndice {
  indice: string;
  qty: number;
}

const Indice: React.FC<IIndice> = ({ indice, qty }) => {
  // const [myQty, setMyQty] = useState<number>(qty);

  const queryClient = new QueryClient({});

  const mutation = useMutation(
    (newIndice: IIndice) => {
      return axios.post("http://localhost:5000/removeOne", newIndice);
    },
    {
      onSuccess: async () => {
        focusManager.setFocused(true);
      },
    }
  );

  const handleClick = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    mutation.mutate({ indice: indice, qty: qty });
    // queryClient.re
  };

  return (
    <div className="indices">
      <div className="indice">{indice}</div>
      <div className="qty">{qty}</div>
      <div className="remove" onClick={e => handleClick(e)}>
        <RemoveCircleIcon />
      </div>
    </div>
  );
};

export default Indice;
