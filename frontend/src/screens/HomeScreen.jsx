import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "/api/products";
      try {
        const { data } = await axios(url);
        setProducts(data);
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
