import { selector } from "recoil";
import { clickState } from "state/atom";

export const eventoClickState = selector({
    key: 'eventoClickState',
    get: ({ get }) => {
        const { toggle, onClick } = get(clickState);
        return { toggle, onClick };
    }
});
