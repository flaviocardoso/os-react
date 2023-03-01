import { useRecoilValue } from "recoil";
import { eventoClickState } from "state/seletores";

export default function useGetClickEvento() {
    return useRecoilValue(eventoClickState);
}
