import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    buttonText:string;
    containerStyles?:string;
    buttonMethod?: MouseEventHandler<HTMLButtonElement>;
}