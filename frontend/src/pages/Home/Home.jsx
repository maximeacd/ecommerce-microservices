import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productApi";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Nos produits</h1>
      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}