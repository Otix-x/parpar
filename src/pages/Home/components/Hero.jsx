import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { catImg, dogImg } from "../../../assets/images";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-40">
      <h1 className="text-center text-6xl md:text-8xl">
        bar for the <span className="text-primary">pets</span>
      </h1>
      <div className="flex text-center -mt-28 px-10">
        <div
          className="hidden lg:block w-[541px] translate-x-12 bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${catImg})`,
          }}
        />
        <div className="mt-40 lg:mt-72">
          <p className="text-2xl md:text-4xl">
            “now it is easy to <span className="text-primary">find</span>,{" "}
            <span className="text-primary">choose</span> and{" "}
            <span className="text-primary">care</span> your best buddy”
          </p>
          <Link to="/puppies">
            <Button className="text-lg md:text-2xl px-10 py-3 border mt-10 border-primary bg-[#f1f1f199]">
              SHOP NOW
            </Button>
          </Link>
        </div>
        <div
          className="hidden lg:block w-[541px] -translate-x-12 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${dogImg})`,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
