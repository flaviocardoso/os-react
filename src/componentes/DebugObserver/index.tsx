import { useLayoutEffect } from "react";
import { useRecoilSnapshot } from "recoil";

export default function DebugObserver() {
    const snapshot = useRecoilSnapshot();
    useLayoutEffect(() => {
        console.log('The following atoms were modified.');
        for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
            console.log(node.key, snapshot.getLoadable(node));
        }

    }, [snapshot]);

    return null;
}
