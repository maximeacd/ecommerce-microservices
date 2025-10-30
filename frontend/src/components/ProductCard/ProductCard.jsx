import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const productImage = `/images/${product.name}.png`
  return (
    <div className={styles.card}>
      <img src={productImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{product.price} €</span>
    </div>
  );
}