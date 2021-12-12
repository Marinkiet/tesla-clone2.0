import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,description,rightBtnText,leftBtnText,backgroundImg,carlink}) {
    return (
       <Wrap bgImage={backgroundImg}>
                  <Fade bottom >

           <ItemText>
              <h1>{title}</h1> 
              <p>{description}<a href={title}>{carlink}</a></p> 
           </ItemText>
           </Fade >

    
       <Buttons>
       <Fade bottom >
       <ButtonGroup>
               <LeftButton>
                    {leftBtnText}
               </LeftButton>
               
               
                {rightBtnText &&
                    
                    <RightButton>
                     {rightBtnText}
                  </RightButton>
                }
           </ButtonGroup>
           <DownArrow src="/Images/down-arrow.svg"></DownArrow>

        </Fade>

        </Buttons> 
       </Wrap>
    )
}

export default Section
const Wrap = styled.div`
width:100vw;
height:100vh;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
background-image:${props=>`url("/Images/${props.bgImage}")`};
align-items:center;

background-position:center;
justify-content:space-between; //justifyvertically
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const Buttons=styled.div`
`
const ButtonGroup=styled.div`
 display:flex;
 margin-bottom:30px;
 //make buttons go on top of each other if
 //screen is small
 @media (max-width:768px){
    flex-direction:column;
 }
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8); //dark grey
height:40px;
width:256px;
color:white;
opacity:0.85;
justify-content:center; //keep text inside in center
align-items:center; //keep button text in center
border-radius:100px; //round buttons
text-transform:uppercase;
display:flex; //keep in middle with top+bottom padding
font-size:12px;
cursor:pointer;
margin:8px;//keep space between buttons
`
const RightButton=styled(LeftButton)`
background:white;
color:black;
opacity:0.65;
`
const DownArrow = styled.img`
height:40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
`