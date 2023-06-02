import React, { useEffect, useState } from "react";
import Search from "../components/Search.js";
import Availability from "../components/Availability.js";
// import Bottom from "../components/Bottom.js";

// Input types data
const list = [
  { name: "From", type: "text" },
  { name: "To", type: "text" },
  { name: "Departure", type: "date" },
  { name: "Return", type: "date" },
];
const dropDown = ["Trip-Type", "OneWay", "BothWay"];

function Flight() {
  const [storedData, setStoredData] = useState([]);
  const [apiData,setApiData]=useState([]);

  const [selectedDropdown, setSelectedDropdown] = useState("oneway");

  const [flightInput, setInputs] = useState({});
  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // filteredData(res);
        setApiData([...res]);
        // setStoredData([...res]);
      });
  },[]);
  useEffect(()=>{
    let filterData=[];
    if(Object.entries(flightInput).length!==0){
      apiData.map((item)=>
        {
          if(item.from.toLowerCase()===flightInput["FROM"] && item.to.toLowerCase()===flightInput["TO"] ){
            filterData=[...filterData,item];
          }
          return item;
        }
        
      )
      setStoredData(filterData)
    }
    else{
      setStoredData(apiData)
    }
  },[flightInput,selectedDropdown,apiData])
  
  return (
    <>
      <Search
        list={list}
        onSubmit={setInputs}
        dropDown={dropDown}
        selectedDropdown={setSelectedDropdown}
        title={'Available Tickets'}
      ></Search>
        
        <Availability data={storedData}></Availability>
        {/* <Bottom></Bottom> */}
    </>
  );
}

export default Flight;
