import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getNbIndice } from "../apis";
import { pageContext, TContext } from "../context";

const nbPage = (nbItem: number) => {
  const value = nbItem / 10;
  let page: number;
  const arr = [];
  if (nbItem % 10 === 0) {
    page = value;
  } else {
    page = Math.ceil(value);
  }

  for (let i = 0; i < page; i++) {
    arr.push(i + 1);
  }

  return arr;
};

function Pagination() {
  const { page, setPage } = useContext(pageContext) as TContext;
  const { data, isSuccess } = useQuery("nbindice", () => getNbIndice());
  const testPrevious: boolean = page !== 1;
  const testNext: boolean = isSuccess && page !== nbPage(data.len).length;

  return (
    <div className="page">
      <div
        className={testPrevious ? "previous" : "previousInactif"}
        onClick={() => testPrevious && setPage(page - 1)}
      >
        {"<Previous"}
      </div>
      {isSuccess &&
        nbPage(data.len).map((el, index) => {
          return (
            <div
              key={index}
              className={page === el ? "pageNumberCurrent" : "pageNumber"}
              onClick={() => page !== el && setPage(el)}
            >
              {el}
            </div>
          );
        })}
      <div
        className={testNext ? "next" : "nextInactif"}
        onClick={() => testNext && setPage(page + 1)}
      >
        {"Next>"}
      </div>
    </div>
  );
}

export default Pagination;
