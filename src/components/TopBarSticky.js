import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import navImg from './assests/assestsData'



function TopBarSticky({activate,IsLoggedInComponent}) {
  return (
    <Box style={{top:'0',left:'0',position:'sticky',width:'100%',zIndex:'100'}} fontFamily={'sans-serif'} >
          <Box height={'70px'} width='100%' display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor:'white',boxShadow:'2px 2px 5px #888888'}}>
            <Box sx={{'&>a':{color:'#4a4a4a',fontSize:'12px',fontFamily:'sans-serif',textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center'}}} width={'80%'} padding={'20px '} display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
              <Link to='/' style={{marginBottom:'10px'}}>
                <img width={'110px'}  src='https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png' alt='makemytriplogo' />
              </Link>
              <Link to='/flight'>
                  <img width={'34px'} src={navImg.flight(activate===''||activate==='flight')} alt='flight'/>
                  {(activate===''||activate==='flight') ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Flights
                </Box>: 'Flights'}
              </Link>
              <Link to='/hotel'>
              <img width={'34px'} src={navImg.hotel(activate==='hotel')} alt='hotel'/>
              {activate==='hotel' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Hotels
                </Box>: 'Hotels'}
              </Link>
              <Link to='/homestay'>
              <img width={'34px'} src={navImg.homestay(activate==='homestay')} alt='homestay'/>
              {activate==='homestay' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Homestay
                </Box>:'Homestay'}
                  
              </Link>
              <Link to='/train'>
                <img width={'25px'} src={navImg.train(activate==='train')} alt='train'/>
                {activate==='train'?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Train
                </Box>:'Train'}
                
              </Link>
             
              <Link to='/holiday'>
                <img width={'50px'} src={navImg.package(activate==='holiday')} alt='holidaypackage'/>
                {activate==='holiday' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Holiday Package
                </Box>: 'Holiday Package'}
                
              </Link>
              <Link to='/bus'>
                <img width={'25px'} src={navImg.bus(activate==='bus')} alt='bus'/> 
                {activate==='bus' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Bus
                </Box>: 'Bus'}
              </Link>
              <Link to='/cabs'>
              <img width={'25px'} src={navImg.car(activate==='cabs')} alt='Cabs'/>
              {activate==='cabs' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Cabs
                </Box>: 'Cabs'}
              </Link>
              <Link to='/forex'>
                <img width={'30px'} src={navImg.forex(activate==='forex')} alt='Forex'/>
                {activate==='forex' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Forex
                </Box>: 'Forex'}
              </Link>
              <Link to='/charter'>
              <img width={'34px'} src={navImg.charter(activate==='charter')} alt='charter'/>
              {activate==='charter' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Charter Flights
                </Box>: 'Charter Flights'}
              </Link>
              <Link to='/activities'>
                  <img width={'34px'} src={navImg.activities(activate==='activities')} alt='activities'/>
                  {activate==='activities' ?
               <Box sx={{padding:'2px 5px',borderRadius:'15px',backgroundColor:'#008cff',color:'white'}}>
                  Activities
                </Box>: 'Activities'}
              </Link>
              <IsLoggedInComponent activate={activate}/>
            </Box>
          </Box>
        </Box>
  )
}

export default TopBarSticky