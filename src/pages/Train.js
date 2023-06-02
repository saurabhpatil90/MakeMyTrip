import React, { useState, useEffect } from "react";
import Search from "../components/Search.js";
import Availability from "../components/Availability.js";
// import Bottom from "../components/Bottom.js";

const list = [
  { name: "From", type: "text" },
  { name: "To", type: "text" },
  { name: "Travel-date", type: "date" },
  { name: "Class", type: "text" },
];
const dropDown = ["Trip-Type", "OneWay", "BothWay"];

function Train() {
  const [storedData, setStoredData] = useState([]);
  const [apiData,setApiData]=useState([]);
  const [selectedDropdown, setSelectedDropdown] = useState("oneway");

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setApiData([...res]);
      });
  }, []);
  
  useEffect(()=>{
    let filterData=[];
    if(Object.entries(inputs).length!==0){
      apiData.map((item)=>
        {
          if(item["from"].toLowerCase() === inputs["FROM"] && item["to"].toLowerCase() === inputs["TO"] ){
            filterData=[...filterData,item];
          } return item;
        }
      )
      setStoredData(filterData)
    }
    else{
      setStoredData(apiData)
    }
  },[inputs,selectedDropdown,apiData])


  // useEffect(()=>{
  //   filteredData(apiData);
  // },[inputs,selectedDropdown,apiData]);


  // const filteredData = (data) => {
  //   console.log(selectedDropdown);
  //   console.log(data);
  //   let filterData = [];

  //   if (Object.entries(inputs).length > 0) {
  //     if (selectedDropdown === "bothway") {
  //       filterData = [
  //         ...data.filter(
  //           (data) =>
  //             (data["from"].toLowerCase() === inputs["from"] &&
  //               data.to.toLowerCase() === inputs["to"] 
  //               // &&
  //               // data.departure.departureDate === inputs["travel-date"]
  //               ) ||
  //             (data["from"].toLowerCase() === inputs["to"] &&
  //               data.to.toLowerCase() === inputs["from"] 
  //               // &&
  //               // data.departure.departureDate === inputs["travel-date"]
  //               )
  //         ),
  //       ];
  //     } else {
  //       filterData = [
  //         ...data.filter(
  //           (data) =>
  //             data["from"].toLowerCase() === inputs["from"] &&
  //             data.to.toLowerCase() === inputs["to"] 
  //             // &&
  //             // data.departure.departureDate === inputs["travel-date"]
  //         ),
  //       ];
  //     }
  //   }

  //   if (filterData.length === 0 && Object.entries(inputs).length === 0) {
  //     console.log(data);
  //     setStoredData([...data]);
  //   } else {
  //     console.log(filterData);
  //     setStoredData([...filterData]);
  //   }
  // };

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
      {/* <Bottom/> */}
    </>
  );
}

export default Train;
