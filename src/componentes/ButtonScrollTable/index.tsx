import React, { useRef, MouseEvent, useEffect } from "react";

interface Props {
    refDiv: React.RefObject<HTMLDivElement>
}

const ButtonScrollTable: React.FC<Props> = ({ refDiv }: Props) => {
    const refLeft = useRef<HTMLButtonElement>(null);
    const refRight = useRef<HTMLButtonElement>(null);
    let scrollingLeft: any;
    // mouse enter
    const scrollLeftIn = (e: MouseEvent) => {
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            scrollingLeft = setInterval(() => {
                console.log(div.offsetLeft - e.pageX);
                div.scrollLeft -= 1;
                if (div.scrollLeft === 0) {
                    left.style.display = 'none';
                }
                if (div.scrollLeft > 0) {
                    rigth.style.display = 'block';
                }
            }, 10 / (div.offsetLeft - e.pageX) ); // velocidade
        }
    }
    // mouse down
    const scrollLeftDown = (e: MouseEvent) => {
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            div.scrollLeft -= 10;
            if (div.scrollLeft === 0) {
                left.style.display = 'none';
            }
            if (div.scrollLeft > 0) {
                rigth.style.display = 'block';
            }
        }
    }
    // mouse leave
    const scrollLeftOut = (e: MouseEvent) => {
        e.preventDefault();
        clearInterval(scrollingLeft);
    }
    // mouse enter
    const scrollRightIn = (e: MouseEvent) => {
        e.preventDefault();
        const div = refDiv.current;
        const right = refRight.current;
        const left = refLeft.current;
        if (div && right && left) {
            scrollingLeft = setInterval(() => {
                div.scrollLeft += 1;
                console.log(div.offsetWidth + div.offsetLeft - 10 - e.pageX);
                if (div.scrollLeft > 0) {
                    left.style.display = 'block';
                }

                if (div.offsetWidth < (div.scrollLeft - 15)) {
                    right.style.display = 'none';
                }
            }, 10 / (div.offsetWidth + div.offsetLeft - 10 - e.pageX) ); // velocidade
        }
    }
    // mouse down
    const scrollRightDown = (e: MouseEvent) => {
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const right = refRight.current;
        if (div && right && left) {
            div.scrollLeft += 10;
            if (div.scrollLeft > 0) {
                left.style.display = 'block';
            }

            if (div.offsetWidth <= (div.scrollLeft - 15)) {
                right.style.display = 'none';
            }
        }
    }
    // mouse leave
    const scrollRightOut = (e: MouseEvent) => {
        e.preventDefault();
        clearInterval(scrollingLeft);
    }
    // mudando o style
    useEffect(() => {
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            if (div.scrollLeft === 0) {
                left.style.display = 'none';
            }
            let position = 'fixed';
            let mouseLeft = 'w-resize';
            let mouseRight = 'e-resize';
            let tamanho = 5;
            let positionTop = div.offsetTop; // top
            let positionLeft = div.offsetLeft; // left
            let positionRight = div.offsetWidth + div.offsetLeft; // rigth
            let positionHeight = div.offsetHeight; // height

            left.style.position = position;
            left.style.cursor = mouseLeft;
            left.style.top = `${positionTop}px`;
            left.style.left = `calc(${positionLeft}px - ${tamanho}rem)`;
            left.style.height = `${positionHeight}px`;
            left.style.width = `${tamanho}rem`;
            rigth.style.position = position;
            rigth.style.cursor = mouseRight;
            rigth.style.top = `${positionTop}px`;
            rigth.style.left = `${positionRight - 10}px`;
            rigth.style.height = `${positionHeight}px`;
            rigth.style.width = `${tamanho}rem`;
        }
    })
    
    return (
        <>
        <button title='left' ref={refLeft} 
            onMouseEnter={scrollLeftIn} 
            onMouseLeave={scrollLeftOut}
            onMouseDown={scrollLeftDown}
        ></button>
        <button title='right' ref={refRight} 
            onMouseEnter={scrollRightIn} 
            onMouseLeave={scrollRightOut}
            onMouseDown={scrollRightDown}
        ></button>
        </>
    );
}
export default ButtonScrollTable;