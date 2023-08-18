import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);
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
          {products.slice(page * 10 - 10, page * 10).map((product) => {
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
          {[...Array(products.length / 10)].map((_, idx) => {
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
              display: page < products.length / 10 ? "block" : "none",
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
