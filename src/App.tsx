import React from 'react';
import './App.css';
import {BoxCard} from "./components/BoxCard.styled";
import styled from "styled-components";
import {MainImage} from "./components/MainImage.styled";
import rectangle from './assets/rectangle.png'
import {SubTitle, TitleStyled} from "./components/Title.styled";
import {SaveBtn, StyledBtn} from "./components/Button.styled";

function App() {
    return (
        <div className="App">
            <Box>
                <BoxCard>
                    <MainImage src={rectangle}/>
                    <TitleStyled color={"green"} fontSize={"20px"}>Headline</TitleStyled>
                    <SubTitle fontSize={"12px"} color={"grey"}> Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                        Sit molestie
                        ornare in
                        venen.</SubTitle>
                    <StyledBtn color={"white"} fontSize={"15px"}>See more</StyledBtn>
                    <SaveBtn color={"blue"} fontSize={"15px"}>Save</SaveBtn>
                </BoxCard>
            </Box>

        </div>
    );
}

export default App;

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`