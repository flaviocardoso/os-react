import { IClick } from "interfaces/IClick";
import { atom } from "recoil";

export const clickState = atom<IClick>({
    key: 'clickState',
    default: { toggle: false }
});