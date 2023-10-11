import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import styles from './common.module.css'

type ButtonProps = {
    icon?: IconType,
    border?: Boolean,
} & ComponentPropsWithoutRef<'button'>

export default function MyButton({ children, className = "", icon: Icon, border = true, ...props }: ButtonProps) {
    return (
        <button
            className={`g-center px-3 py-1 ${className}  ${border ? "border border-border" : ""} ${styles.button}`}
            {...props}
        >
            {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
            {children}
        </button>
    )

}