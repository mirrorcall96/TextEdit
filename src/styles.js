import styled from "styled-components";
import {FormControl} from 'react-bootstrap';

export const NewFormControl = styled(FormControl)`
text-decoration : ${props => props.theme.textDecoration};
font-weight : ${props => props.theme.fontWeight};
font-style : ${props => props.theme.fontStyle};
color : ${props => props.theme.color};`

export const ColorCard = styled.span`
float: left !important;
width: 20px !important;
height: 20px !important;
margin: 5px !important;
border: 1px solid rgba(0, 0, 0, .2) !important;
background:${props => props.background};
&:hover{
    cursor:pointer
}
`
