import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";

const HomeScreen = () => {
  const params = useParams();
  const { pageNumber } = useParams();
  console.log(params);
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products ? (
              data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            ) : (
              <Loader />
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
