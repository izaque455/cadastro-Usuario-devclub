import styled from "styled-components";

export const Button = styled.button`
  border: ${props => props.theme === "primary" ? 'none' : '1px solid #fff'};
  cursor: pointer;
  background: ${props => props.theme === "primary" ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'} ;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 30px;
  width: fit-content;

  &:hover {
    opacity: ${props => props.theme === "primary" ? '0.8' : 'none'} ;
    background: ${props => props.theme === "primary" ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : '#fff'};
    color:${props => props.theme === "primary" ? '#fff' : 'black'};
    font-weight:${props => props.theme === "primary" ? 'normal' : '600'} ;;
  }

  &:active{
    opacity: 0.5;
  }
`

