import useToggleEvento from "state/hooks/useToggleEvento";
import style from "./Overlay.module.scss";

const Overlay: React.FC = () => {
    const [ { toggle, onClick },  ] = useToggleEvento();
    // const [ click, setClick ] = useClickEvento();
    // altera para mostrar o overlay o não
    let overlay = 
        (toggle) ?  
        <div className={style.Overlay} onClick={onClick}></div> : 
        <></>
    return (
        overlay
    );
}

export default Overlay;
