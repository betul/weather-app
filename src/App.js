import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { City } from "./City";

function App() {
  const key = "1045f8ac647e5c8616ca7924059b6345";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    let timerId;

    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        console.log(search);

        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    function startTimer() {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        getApi();
      }, 1000);
    }

    startTimer();

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="City Search"
          className="my-5 px-4 py-3 text-sm text-gray-800 bg-white rounded border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {city && <City city={city} />}
    </div>
  );
}

export default App;
