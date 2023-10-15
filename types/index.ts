
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
export interface OptionProps {
    title: string;
    value: string;
  }
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }