import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  // const flex={display:'flex',alignItems:'center'};
  return (
    <div className='footer'>
          <ul>
            <li>
              <Link to="/" >
                <img width={'40px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFzDoUTxXStvqtcsyi3S9e1oSVliP53ZS6w&usqp=CAU' alt=''/>
              </Link>
              <Link to='/'>
                <img width={'40px'} style={{borderRadius:'10px',marginLeft:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO5wMDIR7EXVB9jbRhQA1wie3AlefV-0N6w&usqp=CAU" alt="favebook" />
              </Link>
            </li>
        </ul>
          <ul style={{display:'flex',flexDirection:'column',alignItems:'flex-end',fontFamily:"sans-serif",justifyContent:'flex-end'}}>
            <div style={{'fontSize':'16px',fontWeight:'600'}} >© 2023 MAKEMYTRIP PVT. LTD.</div>
            <div>Country <span style={{'fontSize':'14px',fontWeight:'600'}}>India USA UAE</span></div>
          </ul>
        
    </div>
  )
}

export default Footer