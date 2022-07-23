import { formatCurrency } from "../../../utilities/formatCurrency";
import {
  colors,
  dogBreeds as breeds,
  genders,
  availabilities,
} from "../../../assets/data/queryObject";

const Sidebar = ({ queryObject, setQueryObject }) => {
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

    if (genders.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            genders: prevQueryObject.genders.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            genders: prevQueryObject.genders.filter((e) => e !== name),
          };
        });
      }
    }

    if (availabilities.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            availabilities: prevQueryObject.availabilities.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            availabilities: prevQueryObject.availabilities.filter(
              (e) => e !== name
            ),
          };
        });
      }
    }

    if (breeds.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            breeds: prevQueryObject.breeds.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            breeds: prevQueryObject.breeds.filter((e) => e !== name),
          };
        });
      }
    }

    if (colors.includes(name)) {
      if (checked) {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            colors: prevQueryObject.colors.concat(name),
          };
        });
      } else {
        setQueryObject((prevQueryObject) => {
          return {
            ...prevQueryObject,
            colors: prevQueryObject.colors.filter((e) => e !== name),
          };
        });
      }
    }
  }

  return (
    <aside className="h-screen sticky top-0 w-80 lg:w-[400px] flex-shrink-0 rounded-lg">
      <h3 className="mt-8 font-bold text-3xl md:text-4xl">GENDER</h3>
      <div className="mt-2 grid grid-cols-2 gap-x-2">
        {genders.map((gender) => (
          <label className="inline-flex items-center" key={gender}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.genders.includes(gender)}
              onChange={handleChange}
              name={gender}
            />
            <span className="whitespace-nowrap ml-2">{gender}</span>
          </label>
        ))}
      </div>

      <h3 className="mt-8 font-bold text-3xl md:text-4xl">AVAILABILITY</h3>
      <div className="grid grid-cols-2 gap-y-2">
        {availabilities.map((a) => (
          <label className="inline-flex items-center" key={a}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.availabilities.includes(a)}
              onChange={handleChange}
              name={a}
            />
            <span className="whitespace-nowrap ml-2">{a}</span>
          </label>
        ))}
      </div>

      <h3 className="font-bold text-3xl md:text-4xl mt-10">COLOR</h3>
      <div className="grid grid-cols-2 gap-y-2">
        {colors.map((color) => (
          <label className="inline-flex items-center" key={color}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.colors.includes(color)}
              onChange={handleChange}
              name={color}
            />
            <span className="whitespace-nowrap ml-2">{color}</span>
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
          <option value={1000000}>{formatCurrency(1000000)}</option>
          <option value={2500000}>{formatCurrency(2500000)}</option>
          <option value={5000000}>{formatCurrency(5000000)}</option>
          <option value={7500000}>{formatCurrency(7500000)}</option>
          <option value={10000000}>{formatCurrency(10000000)}</option>
          <option value={12500000}>{formatCurrency(12500000)}</option>
          <option value={15000000}>{formatCurrency(15000000)}</option>
          <option value={17500000}>{formatCurrency(17500000)}</option>
          <option value={20000000}>{formatCurrency(20000000)}</option>
          <option value={22500000}>{formatCurrency(22500000)}</option>
          <option value={25000000}>{formatCurrency(25000000)}</option>
          <option value={27500000}>{formatCurrency(27500000)}</option>
          <option value={30000000}>{formatCurrency(30000000)}</option>
        </select>

        <select
          value={queryObject.price.max}
          onChange={handleChange}
          name="maxPrice"
        >
          <option value={100000000}>No maximum</option>
          <option value={1000000}>{formatCurrency(1000000)}</option>
          <option value={2500000}>{formatCurrency(2500000)}</option>
          <option value={5000000}>{formatCurrency(5000000)}</option>
          <option value={75000000}>{formatCurrency(7500000)}</option>
          <option value={10000000}>{formatCurrency(10000000)}</option>
          <option value={12500000}>{formatCurrency(12500000)}</option>
          <option value={15000000}>{formatCurrency(15000000)}</option>
          <option value={17500000}>{formatCurrency(17500000)}</option>
          <option value={20000000}>{formatCurrency(20000000)}</option>
          <option value={22500000}>{formatCurrency(22500000)}</option>
          <option value={25000000}>{formatCurrency(25000000)}</option>
          <option value={27500000}>{formatCurrency(27500000)}</option>
          <option value={30000000}>{formatCurrency(30000000)}</option>
        </select>
      </div>
      <h3 className="font-bold text-3xl md:text-4xl mt-10">BREED</h3>
      <div className="grid grid-cols-2 gap-y-2">
        {breeds.map((breed) => (
          <label className="inline-flex items-center" key={breed}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-400 rounded border-gray-300"
              checked={queryObject.breeds.includes(breed)}
              onChange={handleChange}
              name={breed}
            />
            <span className="whitespace-nowrap ml-2">{breed}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
