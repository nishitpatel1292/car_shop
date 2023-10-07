"use client";
import { CustomButtonProps } from '@/types';
import React from 'react'

const CustomButton = ({buttonText, containerStyles,buttonType,buttonMethod}:CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type='button'
    className={`custom-btn ${containerStyles}`}
    onClick={buttonMethod}>
        {buttonText}
    </button>
  )
}

export default CustomButton