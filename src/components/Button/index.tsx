
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const Button = ({ title, disabled,}: IButtonProps) => {
    return(<ButtonContainer disabled={disabled}  >{title} </ButtonContainer>)
;
  
};

export default Button;
