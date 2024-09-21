import { useParams } from "react-router-dom";
// import products from "../products";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";

const ProductScreen = () => {
  const [product, setProduct] = useState(null);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `http://localhost:5000/api/products/${productId}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (productId) {
      fetchProduct();
    }
  }, [productId]);
  // const product = products.find((product) => product._id === productId);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      {product && (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
