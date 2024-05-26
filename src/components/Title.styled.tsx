import styled from "styled-components";

type TitleStyledPropsType = {
    color?: string;
    fontSize?: string;
}

export const TitleStyled = styled.h1<TitleStyledPropsType>`
    width: 70px;
    font-size: ${props => props.fontSize || "16px"};
    color: ${props => props.color || "black"};
    margin: 0 20px;
`

export const SubTitle = styled.p<TitleStyledPropsType>`
    height: 40px;
    color: ${props => props.color || "rgb(171, 179, 186)"};;
    margin: 20px 20px;
    font-size: ${props => props.fontSize || "12px"};
`