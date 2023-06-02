import { ArrowRightAltOutlined, KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerticalImageList from "../components/VerticalImageList";
import HandpickImgData from '../components/assests/HandpickImgData'
import UnlockWonderData  from '../components/assests/unlockWonderLocationData'

function Home() {
  const navigate=useNavigate();
  const [raturnField,setReturnField]=useState(true);

  const clickHandler=()=>{
    navigate('/flight');
  }
 
  return (
    <Box width={'100%'} display={'flex'} fontFamily={'sans-serif'} justifyItems={'center'} flexDirection={'column'} margin={'40px 0px 0px'} alignItems={'center'} sx={{backgroundColor:'initial'}}>
      <Box width={'80%'} minHeight={'340px'}  borderRadius={'10px'} padding={'40px 20px 40px'} sx={{backgroundColor:'white'}} display={'flex'} flexDirection={'column'}>
          <Box display={'flex'} width={'100%'} justifyContent={'space-between'} alignItems={'center'} >
              <FormControl>
                <FormLabel >
                  <RadioGroup onClick={(e)=>{e.target.value==='roundtrip'?setReturnField(false):setReturnField(true)}} defaultValue={'oneway'} sx={{display:'flex',flexDirection:'row'}}>
                   <FormControlLabel  value={'oneway'} label={'One Way'} control={<Radio size="small" />}></FormControlLabel>
                   <FormControlLabel  value={'roundtrip'} label={'Round Trip'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'multicity'} label={'Multi City'} control={<Radio size="small"/>}></FormControlLabel>
                  </RadioGroup>
                </FormLabel>
              </FormControl>
              <Box fontSize={'14px'}>
                  Book International and Domestic Flights
              </Box>
          </Box>
          <Box flex={1} display='flex' alignItems={'center'} justifyContent={'space-between'} sx={{'& fieldset':{border:'0',fontSize:'20px'}}} margin={'10px 0px 20px'} padding='0px 10px 10px' borderRadius={'10px'} border={'1px solid #ccc'}>
              <InputLabel sx={{maxWidth:'240px'}}>
                <Box  marginLeft={'14px'} fontSize={'14px'}>From</Box>
                <TextField  sx={{'& input':{'fontSize':'26px',fontWeight:'600',padding:'0px 10px'}}} defaultValue={'New Delhi'}/>
                <Box maxWidth={'150px'} marginLeft={'14px'} fontSize={'14px'} width='100%' style={{overflow:'hidden'}}>DEL, Indira Gandhi Internation Airport</Box>
              </InputLabel>
              <InputLabel sx={{maxWidth:'240px'}}>
                <Box  marginLeft={'14px'} fontSize={'14px'}>To</Box>
                <TextField  sx={{'& input':{'fontSize':'26px',fontWeight:'600',padding:'0px 10px'}}} defaultValue={'Mumbai'}/>
                <Box maxWidth={'150px'} marginLeft={'14px'} fontSize={'14px'} width='100%' style={{overflow:'hidden'}}>BOM,  Chhatrapati Shivaji International Airport India</Box>
              </InputLabel>
              <InputLabel sx={{maxWidth:'240px'}}>
                <Box  marginLeft={'14px'} fontSize={'14px'}>Departure</Box>
                <TextField  sx={{fontSize:'20px','& input':{'fontSize':'22px',fontWeight:'600',padding:'0px 10px'}}} type="date"/>
                <Box maxWidth={'150px'} marginLeft={'14px'} fontSize={'14px'} width='100%' style={{overflow:'hidden'}}>Monday</Box>
              </InputLabel>
              <InputLabel sx={{maxWidth:'240px'}}>
                <Box  marginLeft={'14px'} fontSize={'14px'}>Return</Box>
                <TextField  disabled={raturnField} sx={{'& input':{'fontSize':'22px',fontWeight:'600',padding:'0px 10px'}}} type="date"/>
                <Box maxWidth={'220px'} marginLeft={'14px'} fontSize={'14px'} width='100%' style={{overflow:'hidden'}}>Sunday</Box>
              </InputLabel>
              <InputLabel sx={{maxWidth:'240px'}}>
                <Box  marginLeft={'14px'} fontSize={'14px'}>Travellers & Class</Box>
                <TextField  sx={{'& input':{'fontSize':'24px',fontWeight:'500',padding:'0px 10px'}}} defaultValue={'1 Traveller'}/>
                <Box marginLeft={'14px'} fontSize={'14px'} width='100%' style={{overflow:'hidden'}}>Economy/Premium Economy</Box>
              </InputLabel>
          </Box>
          <Box display={'flex'} width={'100%'} justifyContent={'space-between'}  alignItems={'center'}>
              <FormControl sx={{flex:'1'}}>
                <FormLabel  sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <Box  fontSize={'11px'} fontWeight={'600'} color='black' width='100px'><span>Select A </span><br></br><span>Fare Type :</span></Box>
                  <RadioGroup defaultValue={'regular'} sx={{display:'flex',flexDirection:'row'
                  ,marginLeft:'5px',flexWrap:'nowrap','& span':{fontSize:'11px'},'& label:first-child':{borderRadius:'5px 0px 0px 5px'},'& label:last-child':{borderRadius:'0px 5px 5px 0px'},
                  '& label':{backgroundColor: '#ececec',padding: '5px'}}}>
                   <FormControlLabel  value={'regular'} label={'Regular Fires'} control={<Radio  size="small" />}></FormControlLabel>
                   <FormControlLabel value={'armedforce'} label={'Armed Force Fires'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'student'} label={'Student Fires'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'seniorcitizen'} label={'Senior Citizen Fires'} control={<Radio  size="small" />}></FormControlLabel>
                   <FormControlLabel value={'docterandnurse'} label={'Doctor & Nurse Fires'} control={<Radio size="small"/>}></FormControlLabel>
                   <FormControlLabel value={'doubleseat'} label={'Double Seat Fires'} control={<Radio size="small"/>}></FormControlLabel>
                  </RadioGroup>
                </FormLabel>
              </FormControl>
              <Box display={'flex'} sx={{'& *':{fontSize:'13px'}}} alignItems={'center'}>
                  <Box color={'black'} fontSize={'14px'} fontWeight={'600'}>
                    Trending Searches :
                  </Box>
                  <Box display={'flex'} sx={{backgroundColor:'#ececec'}} padding='6px 8px' alignItems={'center'} marginLeft={'3px'}>
                    <span> Delhi</span> <ArrowRightAltOutlined/> <span>Paris</span>
                  </Box>
                  <Box display={'flex'} sx={{backgroundColor:'#ececec'}} padding='6px 8px' alignItems={'center'} marginLeft={'3px'}>
                    <span> Delhi</span> <ArrowRightAltOutlined/> <span>Kolkata</span>
                  </Box>
              </Box>
          </Box>
      </Box>
      <Box marginTop={'-25px'} className='search' display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <button onClick={clickHandler} style={{fontSize:'22px',fontWeight:'600',padding:'10px 60px',borderRadius:'60px'}}>SEARCH</button>
          </Box>
      <Box>
      </Box>
      <Box width='100%' display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box marginTop={'40px'} color={'white'} fontSize={'12px'} display={'flex'} justifyItems={'center'} alignItems={'center'}>
          <KeyboardDoubleArrowDown/><span style={{padding:'0px 10px',fontWeight:'600'}}> Explore More </span><KeyboardDoubleArrowDown/>
        </Box>
      </Box>
      <Box width='100%' sx={{backgroundColor:'#f2f2f2'}} display={'flex'} alignItems={'center'} flexDirection={'column'}  marginTop={'40px'}  overflow={'hidden'}>
        <Box width={'80%'} padding={'30px 20px 30px'} sx={{'backgroundColor':'white'}} marginTop={'40px'} marginBottom={'20px'} borderRadius={'13px'} boxShadow={'-2px -2px 4px #ccc'} border={'1px solid #f2f2f2'}>
          <VerticalImageList title={'Handpicked Collections for You'} data={HandpickImgData}/>
        </Box>
        <Box width={'80%'} padding={'30px 20px 30px'} sx={{'backgroundColor':'white'}} marginTop={'10px'} marginBottom={'40px'} borderRadius={'13px'} boxShadow={'-2px -2px 4px #ccc'} border={'1px solid #f2f2f2'}>
          <VerticalImageList title={'Unlock Lesser-Known Wonders of India'} data={UnlockWonderData}/>
        </Box>
      </Box>
      

    </Box>
  );
}

export default Home;
