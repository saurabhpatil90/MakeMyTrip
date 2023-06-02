import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup,TextField } from "@mui/material";

import React, { useState } from "react";



function Search(props) {
  const [radioValue,setRadioValue]=useState(props.dropDown[1]);

  const [data, setData] = useState({})
  const updateData = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value.toLowerCase()
      })
  }
  const checkAllInputs=()=>{
      return !Object.values(data).includes('');
  }

  

  return (
    <>
    <div  className="availability searchContainer">
      <form className="search"
      style={{backgroundColor:'white',borderRadius:'10px'}}
      
        onSubmit={(e)=>{
          // const data = new FormData(e.target);
            e.preventDefault();
            if(Object.keys(data).length>0 && checkAllInputs()){
              props.onSubmit(data);
            }
            else{
              alert('Please fill input filled');
            }
            
            // e.target.reset();
          }}  
        >

         <div className="searchInputs"  style={{padding:'40px 0px 60px',borderBottom:'none'}}>
          <div className="dropDown">
            {/* <InputLabel>{props.dropDown[0]} : */}
              <FormControl>
                <FormLabel>
                  <RadioGroup
                  value={radioValue}
                  // defaultValue={props.dropDown[1]}
                    onChange={(e)=>{
                      setRadioValue(e.target.value);
                      props.selectedDropdown(e.target.value.toLowerCase());
                    }}
                    // name="controlled-radio-buttons-group"
                    sx={{display:'flex',flexDirection:'row'}}
                  >
                    <FormControlLabel control={<Radio/>} value={props.dropDown[1]} label={props.dropDown[1].toUpperCase()} />
                    <FormControlLabel control={<Radio/>} value={props.dropDown[2]} label={props.dropDown[2].toUpperCase()} />
                  </RadioGroup>
                </FormLabel>
              </FormControl>
              
            </div> 
          <div className="inputContainer" >
          {
              props.list.map((item,i)=>{
                  return (<>
                      <InputLabel>
                        {item.name.toUpperCase()}
                        <TextField fullWidth margin="10px" name={item.name.toUpperCase()} onChange={updateData} type={item.type}/>
                      </InputLabel>
                      
                  </>)
              })
          }
          </div>
            
         </div>
         <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'-18px' }} >
              {/* <button type="submit">Search &nbsp;<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></button> */}
              <button  type="submit">Search</button>

          </div>
        
      </form>
        <div style={{ paddingTop: "50px" }}>
          <h2 style={{color:'white'}} >{props.title}</h2>
          </div>
      </div>
    </>
  );
}

export default Search;
