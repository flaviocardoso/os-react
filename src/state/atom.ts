import { atom } from "recoil";
import { MouseEvent } from "react";
import { IClick } from "interfaces/IClick";

export const toggleState = atom<IClick>({
    key: 'toggleState',
    default: { toggle: false }
});

export const clickState = atom<any>({
    key: 'clickState',
    default: ((e: MouseEvent) => { e.preventDefault();})
})
