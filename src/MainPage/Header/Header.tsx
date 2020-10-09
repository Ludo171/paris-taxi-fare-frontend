import * as React from "react";
import "./Header.scss";

interface IProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<IProps> = ({ title, subtitle }: IProps) => (
  <div className="styled-header">
    <h1>{title}</h1>
    {subtitle ? <h2>{subtitle}</h2> : null}
  </div>
);

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
