import styled from "styled-components";

type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    background-color: rgb(78, 113, 254);
    margin: 0 20px 0 12px;
    color: ${props => props.color || "snow"};
    font-size: ${props => props.fontSize || "12px"};

`

export const SaveBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid ${props => props.color || "transparent"};
    color: ${props => props.color || "snow"};
    font-size: ${props => props.fontSize || "12px"};
`