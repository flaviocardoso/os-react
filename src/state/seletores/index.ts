import { selector } from "recoil";
import { toggleState } from "state/atom";

export const toogleEventoState = selector({
    key: 'toogleEventoState',
    get: ({ get }) => get(toggleState),
    set: ({ set }, newValue) => set(toggleState, newValue)
});
