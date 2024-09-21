import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "http://localhost:5000/api/products";
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products ? (
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </Row>
    </>
  );
};

export default HomeScreen;
