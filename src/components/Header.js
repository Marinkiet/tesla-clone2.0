import React from 'react'
import styled from 'styled-components'
import {selectCars2} from "../features/car/carSlice";
import {useSelector} from 'react-redux';
function Header() {

    const cars2 = useSelector(selectCars2);
    return (

       <Container>
           <a href="#"><img src="/Images/logo.svg"></img></a>
       <Menu>
       {cars2 && cars2.map((car,index) =>(
                <a key={index} href="#">{car}</a>))}
       </Menu>
       <RightMenu>
           <a href="Shop.js">Shop</a>
           <a href="TeslaAccount.js">Account</a>
           <a href="Menu.js">Menu</a>

       </RightMenu>
  {/*{cars2 && cars2.map((car,index) =>(
       <li key={index}><a href="#">{car}</a></li>))} */} 
       </Container>

    )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;

`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:300;
    margin-right:30px;
    text-decoration:none;
    font-size:14px;
    font-family:  Geneva, Verdana, sans-serif;

}
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:300;
    padding:0 20px;
    flex-wrap:no-wrap;
    text-decoration:none;
    font-size:14px;
    font-family:  Geneva, Verdana, sans-serif;




    @media(max-width:768px){
        display:none;
    }
}
`