import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import styles from './common.module.css'

type ButtonProps = {
    icon?: IconType
} & ComponentPropsWithoutRef<'button'>

export default function MyButton({ children, className = "", icon: Icon, ...props }: ButtonProps) {
    return (
        <button
            className={`g-cente px-3 py-1  ${className} ${styles.button}`}
            {...props}
        >
            {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
            {children}
        </button>
    )

}