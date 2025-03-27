import React, { ReactElement, isValidElement } from "react";
import * as S from "./styles";

interface IconButtonProps {
  onClick: () => void;
  icon: ReactElement<{ size?: number }>;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  size = 24,
}) => {
  const clonedIcon = isValidElement(icon)
    ? React.cloneElement(icon, { size })
    : null;

  return <S.Button onClick={onClick}>{clonedIcon}</S.Button>;
};

export default IconButton;
