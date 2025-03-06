import { SetStateAction } from "react";

interface ButtonProps {
    label:string;
    active:string;
    setActive:React.Dispatch<SetStateAction<string>>;
}

const Button = ({label,active,setActive}:ButtonProps) =>{
    const handleClick = (label:string)=> setActive(label.toLowerCase())
    return (
        <button onClick={()=>handleClick(label)} className={`flex items-center transition-all duration-300 justify-center px-8 py-3  rounded-full border outline-none ${label.toLowerCase() === active ? "text-white bg-primary" : "text-black bg-white"}`}>{label}</button>
    )
}
export default Button
