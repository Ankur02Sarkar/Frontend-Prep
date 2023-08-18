// The backend driven implementation doesn't fetch all the data
// instead it fetches 10 data one by one thus is faster

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
  return (
    <>
      {products.length > 0 && (
        <div
          className="products"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          {products.map((product) => {
            return (
              <span
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{ cursor: "pointer", display: page > 1 ? "block" : "none" }}
            onClick={() => pageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(totalPages)].map((_, idx) => {
            return (
              <span
                key={idx}
                onClick={() => pageHandler(idx + 1)}
                style={{
                  cursor: "pointer",
                  background: page === idx + 1 ? "black" : "#e2e2e2",
                  padding: "10px",
                  color: page === idx + 1 ? "white" : "black",
                }}
              >
                {idx + 1}
              </span>
            );
          })}
          <span
            style={{
              cursor: "pointer",
              display: page < totalPages ? "block" : "none",
            }}
            onClick={() => pageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </>
  );
}

export default App;
