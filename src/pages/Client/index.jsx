import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Container from "../../components/Container";
import MainLayout from "../../layouts/MainLayout";
import InputField from "./components/InputField";

import { useShoppingCart } from "../../context/ShoppingCartContext";

const Client = () => {
  const navigate = useNavigate();

  const { clearShoppingCart, getCart, getCartTotalPrice } = useShoppingCart();

  const navigateToSuccess = () => {
    navigate("/client/success");
  };

  const navigateToFail = () => {
    navigate("/client/fail");
  };

  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    telephone: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    // axios post to the server
    const res = await axios.post("http://localhost:5000/api/order/submit", {
      customerInfo: clientInfo,
      orderInfo: {
        cart: getCart(),
        total: getCartTotalPrice(),
      },
    });

    clearShoppingCart();
    res.data === "success" ? navigateToSuccess() : navigateToFail();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setClientInfo((prevClientInfo) => {
      return {
        ...prevClientInfo,
        [name]: value,
      };
    });
  }

  return (
    <MainLayout>
      <Container className="mt-40">
        <h2 className="text-4xl md:text-7xl font-bold text-center">
          YOUR <span className="text-primary">INFO</span>
        </h2>
        <section className="px-6 py-10 border rounded-lg mt-20 border-gray-200">
          <form
            className="space-y-4 rounded-lg bg-white"
            onSubmit={handleSubmit}
          >
            <InputField
              label="First Name"
              name="firstName"
              placeholder="Enter your first name..."
              onChange={handleChange}
              value={clientInfo.firstName}
            />
            <InputField
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name..."
              onChange={handleChange}
              value={clientInfo.lastName}
            />
            <InputField
              label="Address"
              name="address"
              placeholder="Enter your address..."
              onChange={handleChange}
              value={clientInfo.address}
            />
            <InputField
              label="Email"
              name="email"
              placeholder="Enter your email..."
              onChange={handleChange}
              value={clientInfo.email}
            />
            <InputField
              label="Telephone"
              name="telephone"
              placeholder="Enter your telephone number ..."
              onChange={handleChange}
              value={clientInfo.telephone}
            />
            <button
              type="submit"
              className="flex font-bold px-20 py-3 ml-auto mt-10 rounded-lg text-white bg-primary"
            >
              Order
            </button>
          </form>
        </section>
      </Container>
    </MainLayout>
  );
};

export default Client;
