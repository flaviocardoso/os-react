import { IClick } from "interfaces/IClick";
import { useSetRecoilState } from "recoil";
import { clickState } from "state/atom";

export default function useToggleClickEvento () {
    const setToggle = useSetRecoilState<IClick>(clickState);
    return (toggle: IClick) => {
        setToggle(toggle);
    }
}