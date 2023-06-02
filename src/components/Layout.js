import React, {useState } from "react";
import { Link, useLocation} from "react-router-dom";
import "../styles/App.css";
import { Box,  } from "@mui/material";
import loginImg from './assests/loginImg.png'
import TopBarSticky from "./TopBarSticky";
import TopBar from "./TopBar";


function IsLoggedInComponent({activate}){
  const isLoggedIn=JSON.parse(localStorage.getItem("isLoggedIn"));
  // const navigate=useNavigate();
  
  


  // if(isLoggedIn){
  //   return(
  //       <button 
  //       onClick={(e)=>{
  //         if(window.confirm('Are you sure for log out.')){
  //           localStorage.removeItem('isLoggedIn');
  //           navigate('/');
  //         }
  //       }} >
        
  //       &nbsp; {isLoggedIn.name.split(" ")[0]}
  //       {/* {changeUser?isLoggedIn.name.split(" ")[0]:'Logout'} */}
  //     </button>
  //   )
  // }else{
    return(
        <Link  to={'/login'} style={{display:'flex',flexDirection:'row',alignSelf:'flex-start'}}>
          <Box borderRadius={'50%'} padding={'6px 3px 0px'} sx={{backgroundImage:'linear-gradient(45deg,#ace143,#219393)'}}>
            <img src={loginImg} width={'22px'} alt="loginImg" />
          </Box>
          <Box padding={'10px'} fontWeight={'600'}>
            { !isLoggedIn ?<> <Box>Login or</Box>
            <Box>Create a account</Box></> : <Box>{isLoggedIn.name.split(" ")[0]}</Box>}
          </Box>
      </Link>
    )
  // }
   
}

//
function Layout() {
  const location=useLocation();
  let activate=location.pathname.split("/")[1];
  
  const [visible, setVisible] = useState(true)

  

  return (<>
       {(!visible || (activate ==='login' || activate === 'register' || activate==='checkout' ) )  && <TopBarSticky activate={activate} IsLoggedInComponent={IsLoggedInComponent} /> }

        {window.onscroll=()=>{
          if(window.scrollY>95){
              setVisible(false);
              // window.scrollY+=20;
          }
          else if(window.scrollY>95){
            window.scrollY+=50;
          }
          else{
            setVisible(true);
          }
        }}
        
        { visible && (activate !=='login' && activate !== 'register' && activate!=='checkout'  ) && <TopBar activate={activate} IsLoggedInComponent={IsLoggedInComponent}/>}
      
      </>
      
      
  );
}
export default Layout;
