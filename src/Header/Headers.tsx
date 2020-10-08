import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`;
const StyledH1 = styled.h1`
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 0;
  text-align: center;
  font-size: xxx-large;
  color: white;
`;
const StyledH2 = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: xx-large;
  color: white;
`;

interface IProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<IProps> = ({ title, subtitle }: IProps) => (
  <StyledHeader>
    <StyledH1>{title}</StyledH1>
    {subtitle ? <StyledH2>{subtitle}</StyledH2> : null}
  </StyledHeader>
);

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
