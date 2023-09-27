import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
    icon?: IconType
} & ComponentPropsWithoutRef<'button'>

export default function Button({ children, className = "", icon: Icon, ...props }: ButtonProps) {
    return (
        <button
            className={`g-center border border-gray-600 rounded px-3 py-1 hover:bg-gray-300 active:bg-gray-400 ${className}`}
            {...props}
        >
            {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
            {children}
        </button>
    )

}