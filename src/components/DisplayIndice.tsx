import { QueryClient, useQuery } from "react-query";
import { getIndices } from "../apis";
import Indice from "./Indice";

function DisplayIndice() {
  // Queries

  const queryClient = new QueryClient();

  const { data, status } = useQuery("getindices", getIndices, {
    
    notifyOnChangeProps: ["data"],
    
  });

  console.log(status);

  console.log(data);

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
