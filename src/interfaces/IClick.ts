import { MouseEvent } from "react";

export interface IClick {
    toggle: Boolean,
    onClick?: (() => void) | ((e: MouseEvent) => void)
}