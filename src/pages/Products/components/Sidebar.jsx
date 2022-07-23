import { formatCurrency } from "../../../utilities/formatCurrency";

import {
  forPets,
  stockStatus,
  productTypes,
} from "../../../assets/data/productQueryObject";

const Sidebar = ({ queryObject, setQueryObject }) => {
  /*
  queryObject {
    forPets: [],
    stockStatus: [], // notInStock, inStock 
    productTypes: [], 
    price : {min: 0, max: 100000000},
  })
  */

  function handleChange(e) {
    const { name, checked, value } = e.target;

    if (name === "minPrice") {
      setQueryObject((prevQueryObject) => {
        return {
          ...prevQueryObject,
          price: { min: value, max: prevQueryObject.price.max },
        };
      });
    }

    if (name === "maxPrice") {
      setQueryObject((prevQueryObject) => {
        return {
          ...prevQueryObject,
          price: { min: prevQueryObject.price.min, max: value },
        };
      });
    }

    if (forPets.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            forPets: prevQueryObject.forPets.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            forPets: prevQueryObject.forPets.filter((e) => e !== name),
          };
        });
      }
    }

    if (stockStatus.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            stockStatus: prevQueryObject.stockStatus.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            stockStatus: prevQueryObject.stockStatus.filter((e) => e !== name),
          };
        });
      }
    }

    if (productTypes.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            productTypes: prevQueryObject.productTypes.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            productTypes: prevQueryObject.productTypes.filter(
              (e) => e !== name
            ),
          };
        });
      }
    }
  }

  return (
    <aside className="h-screen sticky top-0 w-80 lg:w-[400px] flex-shrink-0 rounded-lg">
      <h3 className="mt-8 font-bold text-3xl md:text-4xl">FOR PET</h3>
      <div className="mt-2 grid grid-cols-2 gap-x-2">
        {forPets.map((p) => (
          <label className="inline-flex items-center" key={p}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.forPets.includes(p)}
              onChange={handleChange}
              name={p}
            />
            <span className="whitespace-nowrap ml-2">{p}</span>
          </label>
        ))}
      </div>

      <h3 className="mt-8 font-bold text-3xl md:text-4xl">STOCK</h3>
      <div className="grid grid-cols-2 gap-y-2">
        {stockStatus.map((stock) => (
          <label className="inline-flex items-center" key={stock}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.stockStatus.includes(stock)}
              onChange={handleChange}
              name={stock}
            />
            <span className="whitespace-nowrap ml-2">{stock}</span>
          </label>
        ))}
      </div>

      <h3 className="font-bold text-3xl md:text-4xl mt-10">PRICE</h3>
      <div className="mt-2 space-x-8">
        <select
          value={queryObject.price.min}
          onChange={handleChange}
          name="minPrice"
        >
          <option value={0}>No minimum</option>
          <option value={10000}>{formatCurrency(10000)}</option>
          <option value={30000}>{formatCurrency(30000)}</option>
          <option value={50000}>{formatCurrency(50000)}</option>
          <option value={100000}>{formatCurrency(100000)}</option>
          <option value={200000}>{formatCurrency(200000)}</option>
          <option value={400000}>{formatCurrency(400000)}</option>
          <option value={800000}>{formatCurrency(800000)}</option>
          <option value={1000000}>{formatCurrency(1000000)}</option>
          <option value={2000000}>{formatCurrency(2000000)}</option>
          <option value={4000000}>{formatCurrency(4000000)}</option>
        </select>

        <select
          value={queryObject.price.max}
          onChange={handleChange}
          name="maxPrice"
        >
          <option value={100000000}>No maximum</option>
          <option value={10000}>{formatCurrency(10000)}</option>
          <option value={30000}>{formatCurrency(30000)}</option>
          <option value={50000}>{formatCurrency(50000)}</option>
          <option value={100000}>{formatCurrency(100000)}</option>
          <option value={200000}>{formatCurrency(200000)}</option>
          <option value={400000}>{formatCurrency(400000)}</option>
          <option value={800000}>{formatCurrency(800000)}</option>
          <option value={1000000}>{formatCurrency(1000000)}</option>
          <option value={2000000}>{formatCurrency(2000000)}</option>
          <option value={4000000}>{formatCurrency(4000000)}</option>
        </select>
      </div>
      <h3 className="font-bold text-3xl md:text-4xl mt-10">TYPE</h3>
      <div className="grid grid-cols-2 gap-y-2">
        {productTypes.map((productType) => (
          <label className="inline-flex items-center" key={productType}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.productTypes.includes(productType)}
              onChange={handleChange}
              name={productType}
            />
            <span className="ml-nowrap-nowrap ml-2">{productType}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
