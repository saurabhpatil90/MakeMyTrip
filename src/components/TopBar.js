import { Box, Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/topbar.css'

import loginImg from './assests/loginLogoBlue.jpeg'
import offer  from './assests/offer.png'
import navImg from './assests/assestsData'
import { ExpandMore } from '@mui/icons-material'
import tripImg from './assests/mytrip.png'
import mybizImg from './assests/myBiz.png'
import indiaLogo from './assests/India.jpeg'



function IsLoggedInComponent(){
  const isLoggedIn=JSON.parse(localStorage.getItem("isLoggedIn"));
  // const navigate=useNavigate();
    return(
        <Link to='/login'   
        style={{display:'flex',flexDirection:'row',alignItems:'center'
        ,justifyContent:'space-between',fontSize:'12px',textDecoration:'none',padding:'10px',borderRadius:'5px'
        ,color:'white',backgroundImage: 'linear-gradient(93deg,#53b2fe,#065af3),linear-gradient(93deg,#53b2fe,#065af3)'}}>
          <Box width={'100%'} display={'flex'} alignItems={'center'}>
            <Box  padding={'0px'} >
              <img style={{paddingRight:'2px'}} width={'25px'} src={loginImg} alt="loginImg" />
            </Box>
            <Box margin={'0px 20px 0px 5px'}  fontWeight={'400'}>
                { isLoggedIn ? <>{isLoggedIn.name.split(" ")[0]}</>: 'Login or Create a account' }
            </Box>
          </Box>
          <ExpandMore/>
      </Link>
    )
  // }
   
}

function SelectCountry(){
  return(
    <Link   to={'/'} 
    style={{display:'flex',flexDirection:'row',alignItems:'center'
    ,justifyContent:'space-between',fontSize:'10px',textDecoration:'none',padding:'10px 5px',borderRadius:'5px'
    ,color:'white',backgroundColor: '#293742'}}>
      <Box width={'100%'} display={'flex'} alignItems={'center'}>
        <Box borderRadius={'50%'}>
          <img width={'22px'} src={indiaLogo} alt="loginImg" />
        </Box>
        <Box fontWeight='700' margin={'0px 10px 0px 5px'} >
            IN | ENG | INR
        </Box>
      </Box>
      <ExpandMore/>
  </Link>
)
}

function SuperOffer({logo,spin='',percentage,width='29px',title,description}){
  return (<Link   to={'/'} 
    style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'
    ,justifyContent:'space-between',fontSize:'12px',textDecoration:'none',borderRadius:'7px',padding:'0px 10px'
    ,color:'white'}}>
      <Box width={'100%'} display={'flex'} alignItems={'center'}>
        <Box display={'flex'} alignItems={'center'}>
          <Box >
            <img className={spin} width={width} src={logo} alt="loginImg" />
            {percentage && <Box zIndex={'10'} width={"15px"} position={'absolute'} fontWeight={'800'} marginTop={'-28px'} marginLeft={'7px'} fontSize={'15px'}>%</Box>}
          </Box>
          {logo===mybizImg && <Box fontWeight={'600'} marginTop={'4px'}>Biz</Box>}
          
        </Box>
        <Box marginLeft={'10px'}>
          <Box fontWeight={'600'}>
              {title}
          </Box>
          <Box fontSize={'10px'} marginTop={'2px'} color={'#9c9c9c'}>
          {description}
          </Box>
      </Box>
      </Box>
      
  </Link>)
}


function TopBar({activate}) {
  const navigate=useNavigate();
  return (
    <Box width={'100%'} display={'flex'} fontFamily={'sans-serif'} alignItems={'center'} flexDirection={'column'}>
          <Box minWidth={'80%'} marginBottom={'30px'} height='70px' padding='10px 10px 0px' display={'flex'} justifyContent={'space-between'}>
            <Box>
              <Link to='/' style={{marginBottom:'10px'}}>
                  <img width={'110px'}  src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" alt='makemytriplogo' />
            </Link>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box alignSelf={'flex-start'} paddingTop={'5px'} borderRight='1px dashed #ccc'>
                <SuperOffer spin={'OfferImageSpin'} title={'Super Offers'} description={'Explore great deals & offers'} logo={offer} percentage={true}/>
              </Box>
              <Box alignSelf={'flex-start'}  paddingTop={'5px'} borderRight='1px dashed #ccc'>
                <SuperOffer width='28px' title={'Introducing myBiz'} description={'Business Travel Solution'} logo={mybizImg}/>
              </Box>
              <Box alignSelf={'flex-start'} paddingTop={'5px'}>
                <SuperOffer title={'My Trips'} description={'Manage your bookings'}  width='24px' logo={tripImg}/>
              </Box>
              <Box height={'100%'}>
                <IsLoggedInComponent/>
              </Box>
              <Box height={'100%'}>
                <SelectCountry/>
              </Box>
              <Box height={'100%'} marginLeft={'10px'}>
                {
                  JSON.parse(localStorage.getItem("isLoggedIn")) 
                  // true
                  && 
                  <Button fullWidth sx={{color:'white',fontSize:'10px',textTransform:'capitalize',backgroundImage: 'linear-gradient(93deg,#53b2fe,#065af3),linear-gradient(93deg,#53b2fe,#065af3)'}}
                  onClick={()=>{localStorage.removeItem('isLoggedIn');
                    navigate('/')}}
                  >Logout</Button>
                }
              </Box>
            </Box>
          </Box>
          <Box borderRadius={'10px'} top='90px' position={'absolute'} sx={{backgroundColor:'white',
            '&>a':{color:'#4a4a4a',fontSize:'14px',
            textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center'},boxShadow:'2px 2px 5px #888888'}}
            minWidth={'60%'} padding={'15px 20px 5px'} display={'flex'} 
           justifyContent={'space-between'} alignItems={'flex-end'} >
               <Link to='/flight'>
                   <img width={'37px'} src={navImg.flight(activate===''||activate==='flight')} alt='flight'/>
                   {activate===''||activate==='flight' ?
               <Box sx={{ paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Flights
                </Box>: 'Flights'}
              </Link>
              <Link to='/hotel'>
              <img width={'37px'} src={navImg.hotel(activate==='hotel')} alt='hotel'/>
              {activate==='hotel' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Hotels
                </Box>: 'Hotels'}
              </Link>
              <Link to='/homestay'>
              <img width={'37px'} src={navImg.homestay(activate==='homestay')} alt='homestay'/>
              {activate==='homestay' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Homestay
                </Box>:'Homestay'}
                  
              </Link>
              <Link to='/train'>
                <img width={'30px'} src={navImg.train(activate==='train')} alt='train'/>
                {activate==='train'?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Train
                </Box>:'Train'}
                
              </Link>
             
              <Link to='/holiday'>
                <img width={'55px'} src={navImg.package(activate==='holiday')} alt='holidaypackage'/>
                {activate==='holiday' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Holiday Package
                </Box>: 'Holiday Package'}
                
              </Link>
              <Link to='/bus'>
                <img width={'30px'} src={navImg.bus(activate==='bus')} alt='bus'/> 
                {activate==='bus' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Bus
                </Box>: 'Bus'}
              </Link>
              <Link to='/cabs'>
              <img width={'30px'} src={navImg.car(activate==='cabs')} alt='Cabs'/>
              {activate==='cabs' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Cabs
                </Box>: 'Cabs'}
              </Link>
              <Link to='/forex'>
                <img width={'34px'} src={navImg.forex(activate==='forex')} alt='Forex'/>
                {activate==='forex' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Forex
                </Box>: 'Forex'}
              </Link>
              <Link to='/charter'>
              <img width={'37px'} src={navImg.charter(activate==='charter')} alt='charter'/>
              {activate==='charter' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Charter Flights
                </Box>: 'Charter Flights'}
              </Link>
              <Link to='/activities'>
                  <img width={'37px'} src={navImg.activities(activate==='activities')} alt='activities'/>
                  {activate==='activities' ?
               <Box sx={{paddingBottom:'3px', borderBottom:'3px solid #008cff', color:'#008cff'}}>
                  Activities
                </Box>: 'Activities'}
              </Link>
          </Box>
        </Box>
  )
}

export default TopBar