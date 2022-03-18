import { useContext } from "react";
import { useQuery } from "react-query";
import { getIndices } from "../apis";
import { pageContext, TContext } from "../context";
import Indice from "./Indice";

function DisplayIndice() {
  const { page } = useContext(pageContext) as TContext;
  const { data } = useQuery(["getindices", page], () => getIndices(page), {
    keepPreviousData: true,
  });

  return (
    <div className="display_indice">
      <div className="title">
        <div>Indice</div>
        <div>Qty</div>
        <div>Remove</div>
      </div>

      {data?.map((line: { _id: string; indice: string; qty: number }) => (
        <Indice key={line._id} indice={line.indice} qty={line.qty} />
      ))}
    </div>
  );
}

export default DisplayIndice;
