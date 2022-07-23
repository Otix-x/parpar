import { Link } from "react-router-dom";

import Container from "../../components/Container";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button";

const ClientSubmit = () => {
  return (
    <MainLayout>
      <Container className="mt-40">
        <div className="mt-10 flex flex-grow justify-center items-center font-bold text-3xl">
          ORDER FAILED PLEASE TRY AGAIN 
        </div>
        <Link
          to="/"
          className="mt-20 flex flex-grow justify-center items-center font-bold text-3xl"
        >
          <Button className="text-lg md:text-2xl px-10 py-3 border mt-10 border-primary bg-[#f1f1f199]">
            BACK TO HOME
          </Button>
        </Link>
      </Container>
    </MainLayout>
  );
};

export default ClientSubmit;
