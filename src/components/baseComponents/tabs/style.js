import styled from "styled-components";

export const StyledTab = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1%;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  border: solid 1px darkgray;
`;

export const InputItem = styled.input`
  display: none;
  font-weight: 900;
  width: 100%;
  border: solid 1px red;
  color: blue;
`;

export const InputLabel = styled.label`
  order: -1;
  font-weight: 900;
  display: inline-block;
  background-color: ${props => (props.theme.bg ? props.theme.bg : "#336699")};
  color: ${props => (props.theme.color ? props.theme.color : "black")};
  text-align: center;
  cursor: pointer;

  padding: 0.5em;
  border-right: 1px solid white;
  flex: auto;

  @media (max-width: 781px) {
    flex: 1 1 100%;
    order: 0;
  }
`;

export const TabContent = styled.div`
  padding: 1%;
  display: none;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: red;
  background: url(${props => (props.background ? props.background : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
