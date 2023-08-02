import React from 'react';
import styled from "styled-components";
function ListItems(props: any) {
    return (
        <AList className={"ListElement"}>
            <ImgList src={props.img}/>
            <AList>{props.text}</AList>
        </AList>
    );
}


export default ListItems;


const AList = styled.a`
    max-width: 100px;
  margin-left: 10px;
  transition: var(--speed);
    &:hover {
    color: var(--primary);
    }
    `;


const  ImgList = styled.img`
     position: absolute;
  top: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  `;