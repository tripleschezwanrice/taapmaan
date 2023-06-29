    import React from "react";
    import { CiTempHigh } from "react-icons/ci";
    import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
    import { BiWind } from "react-icons/bi";
    import { BsFillSunFill } from "react-icons/bs";
    import { icons } from "./icons";
    import {VscLoading} from 'react-icons/vsc'
    import {MdArrowUpward,MdOutlineArrowDownward} from 'react-icons/md'

    const TempDetails = ({
    city,
    setCity,
    cityData,
    setCityData,
    unit,
    loading,
    hourly,
    daily,
    e404
    }) => {


    const unixToNormal = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        let amOrPm = "";

        if (hours >= 12) {
        amOrPm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
        } else {
        amOrPm = "AM";
        if (hours === 0) {
            hours = 12;
        }
        }

        const formattedHours = hours.toString().padStart(2, "0");
        const time = `${formattedHours}:${minutes} ${amOrPm}`;

        return time;
    };

    function unixToDay(unixTimestamp) {
        const milliseconds = unixTimestamp * 1000; // Multiply by 1000 to convert to milliseconds
        const date = new Date(milliseconds);
    
        // Define an array of weekday names
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
        // Get the day index (0-6) and return the corresponding weekday name
        const dayIndex = date.getDay();
        return weekdays[dayIndex].slice(0,3);
    }
    
    return (
        <>
        {cityData.cod != 404 && cityData?.length != 0 && loading == false && daily?.length!==0 && daily!==undefined && hourly?.length!==0 && hourly!==undefined && (
            <div className="max-w-[1080px] mx-auto mt-24 font-semibold text-white">
            <div className="flex  md:text-6xl text-5xl mx-auto justify-center gap-20">
                <div>{cityData.name + ", " + cityData.sys.country}</div>
            </div>
            <div className=" flex justify-center text-xl font-thin mx-auto text-center mt-8">
                {cityData.weather[0].main}
            </div>
            <div className="md:flex justify-center gap-24 mt-12 items-center ">
                <div className="md:text-9xl text-8xl font-thin flex  justify-center  ">
                <div className="flex">{Math.round(cityData?.main.temp)}<p className="text-6xl">°</p></div>
        
                </div>

                <div className="font-thin text-center flex flex-col md:text-xl text-lg mt-12 md:mt-0">
                <div className="flex gap-1 items-center mx-auto">
                    <CiTempHigh size={25} /> Feels Like :{" "}
                    <p className="font-bold">
                    {Math.round(cityData?.main.feels_like)}
                    <sup>°{unit}</sup>
                    </p>
                </div>
                <div className="flex gap-1 items-center text-center mx-auto">
                    <WiHumidity size={25} />
                    Humidity :{" "}
                    <p className="font-bold">
                    {Math.round(cityData?.main.humidity)}%
                    </p>
                </div>
                <div className="flex gap-1 items-center text-center mx-auto">
                    <BiWind size={20} />
                    Wind :{" "}
                    <p className="font-bold">
                    {cityData.wind.speed}
                    {unit == "C" ? ` km/h` : ` m/h`}
                    </p>
                </div>
                </div>
            </div>
            <div className="md:flex mx-auto text-center md:gap-3 gap-2 mt-12 justify-center font-thin sm:text-xl text-sm items-center ">
               <div className="flex justify-center items-center gap-3 mx-auto md:mx-0">
               <WiSunrise size={25}/>Rise:{" "}
                <p className="font-semibold">
                {unixToNormal(cityData.sys.sunrise)}
                </p>
       
                <WiSunset size={25}/>Set:{" "}
                <p className="font-semibold">{unixToNormal(cityData.sys.sunset)}</p>
           
               </div>
                <div className="flex justify-center items-center gap-3 mx-auto md:mx-0">
                    
                <MdArrowUpward size={25}/>High:{"  "}
                <p className="font-semibold">
                {Math.round(cityData.main.temp_max)}
                <sup>°{unit}</sup>
                </p>
            
                <MdOutlineArrowDownward size={25}/>Low:{" "}
                <p className="font-semibold">
                {Math.round(cityData.main.temp_min)}
                <sup>°{unit}</sup>
                </p>
                </div>
            </div>

            <div className="bg-blue-600 p-4 text-lg md:text-xl rounded-xl mt-12">
                <div className="flex justify-center pb-1">Hourly Forecast</div>
                <hr />
                <div className="overflow-x-scroll p-3">
                <div className="flex gap-2 pt-4">
                    {hourly.map((elem) => (
                    <div className=" bg-blue-500 rounded-xl grid md:min-w-[130px] min-w-[90px] p-1 md:p-2 justify-center font-thin" key={elem.dt}>
                        <p className="text-center">{unixToNormal(elem.dt)}</p>
                        {icons[elem.weather[0].main]}
                        <p className="text-center">
                        {Math.round(elem.main.temp)}
                        <sup className="text-sm">°{unit}</sup>
                        </p>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            <div className="bg-blue-600 p-4 text-lg md:text-xl rounded-xl mt-12 ">
                <div className="flex justify-center pb-1">Daily Forecast</div>
                <hr />
                <div className="overflow-x-scroll p-3">
                <div className="flex gap-2 pt-4">
                    {
                        daily?.map(elem=>(
                <div className="bg-blue-500 rounded-xl grid md:min-w-[130px] min-w-[90px] p-1 md:p-2 justify-center font-thin" key={elem.dt}>
                    <p className="text-center">{unixToDay(elem.dt)}</p>
                    {icons[elem.weather[0].main]}
                    <p className="text-center">{Math.round(elem.temp.day)}<sup className="text-sm">°{unit}</sup></p>
                    </div>
                        ))
                    }
                </div>
                </div>
            </div>

            
            </div>
        )}
        {cityData.cod == 404 && (
            <div>
            <div className="md:text-7xl text-5xl flex flex-col text-center mx-auto justify-center h-screen pb-72 font-semibold text-white my-auto">
                <div>City not found!</div>
                <div className="md:text-2xl text-sm">
                Check for spelling errors and try again
                </div>
            </div>
            </div>
        )}
         {e404==true && (
            <div>
            <div className="md:text-7xl text-5xl flex flex-col text-center mx-auto justify-center h-screen pb-72 font-semibold text-white my-auto">
                <div>404 :/</div>
                <div className="md:text-2xl text-sm">
                Come back later
                </div>
            </div>
            </div>
        )}
        { cityData.cod  != 404 && e404!=true &&  (loading == true || cityData?.length == 0 || daily?.length===0 || daily===undefined || hourly?.length===0 || hourly===undefined) && (
            <div className="text-7xl flex flex-col text-center mx-auto justify-center h-screen pb-72 font-semibold text-white my-auto">
            <VscLoading className="flex justify-center mx-auto animate-spin"/>
            </div>
        )}

        </>
    );
    };

    export default TempDetails;
