
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    buttonText:string;
    buttonType?: "button" | "submit";
    containerStyles?:string;
    buttonMethod?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}