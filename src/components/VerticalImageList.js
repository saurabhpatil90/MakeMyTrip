import { Box,Button} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ImageItem from './ImageItem'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function VerticalImageList( {title,data,type}) {
    const ref=useRef(null);
    const [scrollValue,setScrollValue]=useState(0);
    const [maxScrollWidth,setMaxScrollWidth]=useState(0);
    // total scroll length=156*total_no_of_items
    

    const PrevScroll=()=>{
        
        if(scrollValue-207>0){
            setScrollValue(scrollValue-207);
        }
        else{
            setScrollValue(0);
        }
    }
    useEffect(()=>{
        setMaxScrollWidth(Number(ref.current.scrollWidth)-Number(ref.current.offsetWidth));
    },[])
    useEffect(()=>{
        ref.current.scrollLeft=scrollValue;
        // console.log(scrollValue);
        setMaxScrollWidth(Number(ref.current.scrollWidth)-Number(ref.current.offsetWidth));
    },[scrollValue,data]);

    const NextScroll=()=>{
        if(scrollValue<maxScrollWidth-207){
            setScrollValue(scrollValue+207);
        }
        else{
            setScrollValue(maxScrollWidth);
        }
    }
    
  return (  
        <Box>
            <Box fontFamily={'sans-serif'} display={'flex'} justifyContent={'space-between'} margin={'10px 0px'} >
                <Box padding={'0px 5px'} fontSize={'32px'} fontWeight={'700'} letterSpacing={'-.5px'}> {title} </Box> 
                <Box sx={{'& > Button:hover':{backgroundColor:'white'},'& > Button':{color:'blue'}}}>
                    <Button onClick={PrevScroll} variant='standard' disabled={scrollValue===0 ? true:false} sx={{backgroundColor:'white',marginRight:'5px'}} startIcon={<ChevronLeftIcon/>}/>
                    <Button onClick={NextScroll} variant='standard' disabled={scrollValue===maxScrollWidth ? true:false} sx={{backgroundColor:'white'}} endIcon={<ChevronRightIcon/>}/>
                </Box>

            </Box>   
            {/* // total scroll length=156*total_no_of_items */}
            
            <Box zIndex={'5'} display={'flex'} alignItems={'center'} sx={{overflow:'hidden'}} ref={ref} >

                { data.map((item,i)=>{
                        return(
                            <ImageItem type={type==='trending'?item.media_type:type} key={'handpick'+item.id}  id={item.id} src={item.img} />
                        )
                    })
                }


                
                
            </Box>
        </Box>

  )
}

export default VerticalImageList