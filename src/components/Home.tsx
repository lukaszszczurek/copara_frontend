import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import {Button, Card, CardMedia, Container, List, ListItem, Menu, MenuList, TextField} from "@mui/material";
import styled from "styled-components";
import ListItems from "../UI/comp/ListItems";
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import {Image} from "@mui/icons-material";




function Home() {


    //  get  respose from path /api/v1/users/{email}
    const url = 'http://localhost:8080/api/v1/users/';
    const TOKEN = localStorage.getItem("jwtToken");

    const [email, setEmail] = React.useState<string>("");

    //photo
    const [photoUrl, setPhotoUrl] = React.useState<string>("");
    const  reader = new FileReader();
    const [selectImage, setSelectImage] = React.useState<File | null>(null);

    // create function to get token from local storage and decode it
    const getTokenData =() : any => {
        const token = localStorage.getItem("jwtToken");
        if (token === null) return null;
        const tokenData = jwtDecode(token.toString());
        return tokenData;
    }

    const tokenData = getTokenData();
    console.log(tokenData.sub);
    const [data, setData] = React.useState<Object>(JSON.stringify(tokenData.sub));

    const getUserData = async (url : string) : Promise <any> => {

        return await axios.get(url+tokenData.sub,{headers:
                {'Authorization': 'Bearer ' + TOKEN}
        }).then(response => response.data).catch(error => console.log("pip"));
    }


    // set profile photo

    const setProfilePhoto = (event:ChangeEvent<HTMLInputElement>) =>{
       const file = event.target.files?.[0];
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                setPhotoUrl(reader.result);
            }
            if (file){
                reader.readAsDataURL(file);
            }
        }
    }


    useEffect(() => {
        console.log("DANE: "+ data)

        getUserData(url).then(data => {
            setData(data);
            setEmail(data.email)
            console.log(data.photoUrl)
            setPhotoUrl(data.photoUrl)
        }).catch(error => console.log("useEffect isue"));
    }, [10000]);


    return (
        <Mdiv>



            {/*<Menu open={true} sx={{*/}
            {/*    display: 'flex',*/}
            {/*    flexDirection: 'row',*/}
            {/*    justifyContent: 'flex-end',*/}
            {/*}}>*/}
       <MenuList>
           <ListItem>
                <MenuElement> Members</MenuElement>
           </ListItem>

           <ListItem> <MenuElement> Members</MenuElement></ListItem>

           <ListItem> <MenuElement> storage</MenuElement></ListItem>

           <ListItem> <MenuElement> My Lofts</MenuElement></ListItem>

           <ListItem> <MenuElement> Create Loft</MenuElement></ListItem>
           <ListItem> <MenuElement> Calendar</MenuElement></ListItem>









       </MenuList>
           {/*</Menu>*/}

            <Contain>
                <h1>Home</h1>
                <h1>{email}</h1>

                <Segregator>
                    <img src={photoUrl} style={
                        {
                            width: '100px',
                            height: '100px',
                        }
                    }/>

                </Segregator>













                {/*<h2>{JSON.stringify(data)}</h2>*/}
                <h1>{email}</h1>
                <Button variant="contained" color="success">Success</Button>
            </Contain>

        </Mdiv>



    );
}

export default Home;


const Contain = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    margin: 0px;
    //border: 1px solid black;
    border-radius: 10px;
    padding: 0;
   // box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: #f5f5f5;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 100;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    text-align: center;
    

  
    //transition: all 0.15s ease-in-out;
    width: 100%;
    height: 100%;
    `;


const Mdiv = styled.div`
    display: flex;
`;

const MenuElement = styled.div`
    display: block;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0px;
    
    border-radius: 5px;
    padding: 10px;
  //  box-shadow: 0 0 10px rgba(0,0,0,0.5);

    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 100;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    transition: all 0.15s ease-in-out;
    width: 100%;
    height: 100%;
  
  &:hover {
    transform: scale(1.05);
    color: black;
    cursor: pointer;
    
  }
    `;



const BurgerNav=styled.div`
      
        position: fixed;
        
        top: 0;
        right: 0;
        bottom: 0;
      
        background: white;
        width: 300px;
        z-index: 16;
        list-style: none;
        padding:20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align:start;
        transform: ${props=> props ? 'translateX(100%)' : 'translateX(0)'};
        transition:  0.2s;
      
      li{
        
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.4);
        
        a{
          font-weight: 600;
        }
      
        
        
      }
    `;
const CustomMenu=styled(MenuIcon)`
        cursor:pointer;
    
    `;
const ProfilePic=styled(Image)`
    width: 100px;
    height: 100px;
    `;

const Segregator = styled.div`
    display: block;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  :hover{
    opacity: 0.7 ;
    
    
  }
    `;