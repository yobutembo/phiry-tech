import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../slices/cartSlice";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const [shippingAddress, setShippingAddress] = useState(
    cart.shippingAddress || {
      address: "",
      city: "",
      postalcode: "",
      country: "",
    }
  );

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ ...shippingAddress }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            type="text"
            placeholder="Enter address"
            value={shippingAddress.address}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            type="text"
            placeholder="Enter city"
            value={shippingAddress.city}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalcode" className="my-2">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            name="postalcode"
            type="text"
            placeholder="Enter postal code"
            value={shippingAddress.postalcode}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            name="country"
            type="text"
            placeholder="Enter country"
            value={shippingAddress.country}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
