import { useRecoilState } from "recoil";
import { toogleEventoState } from "state/seletores";

export default function useToggleEvento () {
    return useRecoilState(toogleEventoState);
}
