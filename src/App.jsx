import { useEffect, useState } from "react";
import MyCities from "./Components/MyCities";
import Search from "./Components/Search";
import TempDetails from "./Components/TempDetails";
import { weatherData, hourlyData, dailyData } from "./Components/weatherMan";

import Footer from "./Components/Footer";

export default function App() {
  const [city, setCity] = useState("jaipur");
  const [unit, setUnit] = useState("C");
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [e404, setE404] = useState(false)

  useEffect(() => {
    setLoading(true);
    setE404(false); // Reset the error state

    weatherData(city, unit === "C" ? "Metric" : "Imperial")
      .then((data) => {
        setCityData(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log('error', err);
        setE404(true); // Update the error state
      });

    hourlyData(city, unit === "C" ? "Metric" : "Imperial")
      .then((data) => setHourly(data.list))
      .catch((err) => {
        // console.log('error', err);
        setE404(true); // Update the error state
      });

    dailyData(city, unit === "C" ? "Metric" : "Imperial")
      .then((data) => setDaily(data.list))
      .catch((err) => {
        // console.log('error', err);
        setE404(true); // Update the error state
      });
  }, [city, unit]);


  

  return (
    <>
      <div className={`p-4 bg-gradient-to-br from-blue-400 to-blue-800`}>
        <MyCities />
        <Search
          city={city}
          setCity={setCity}
          cityData={cityData}
          setCityData={setCityData}
          unit={unit}
          setUnit={setUnit}
        />
        <TempDetails
          city={city}
          setCity={setCity}
          cityData={cityData}
          setCityData={setCityData}
          unit={unit}
          setUnit={setUnit}
          loading={loading}
          hourly={hourly}
          daily={daily}
          e404={e404}
        />
      </div>
        <Footer />
    </>
  );
}
