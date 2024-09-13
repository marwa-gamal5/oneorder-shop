import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from './ProductCard.module.css';
import Loading from "../Loading/Loading";
const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await axios.get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(`Oops! Something went wrong. Please try again later. 😔`);
          
          setLoading(false); 
        });
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className={styles.loader}><Loading /></div>; 
  }

  if (error) {
    return <div className={styles.error}>{error}</div>; 
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
