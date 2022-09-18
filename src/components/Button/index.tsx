import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonProps={
    background:string
}&ButtonTypes

export function Button({children}:ButtonProps){
    return <button className="rounded-md text-black bg-colisao-500  w-full sm:w-[35.5rem] h-14 mt-8">{children}</button>
}