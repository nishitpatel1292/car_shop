import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    buttonText:string;
    buttonType?: "button" | "submit";
    containerStyles?:string;
    buttonMethod?: MouseEventHandler<HTMLButtonElement>;
}