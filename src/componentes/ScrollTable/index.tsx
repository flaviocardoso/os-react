import React, { useRef, useEffect } from "react";
import style from "./ScrollTable.module.scss";

interface Props {
    titulos: React.ReactNode,
    conteudo: React.ReactNode,
}

const ScrollTable: React.FC<Props> = ({ titulos, conteudo }: Props) => {
    const refLeft = useRef<HTMLButtonElement>(null);
    const refRight = useRef<HTMLButtonElement>(null);
    const refDiv = useRef<HTMLDivElement>(null);
    let scrollingLeft: any;
    let speedLeft = 1;
    let speedRight = 1;

    // mouse enter
    const scrollLeftIn = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            scrollingLeft = setInterval(() => {
                left.style.backgroundColor = '#0000001f';
                div.scrollLeft -= 1;
                if (div.scrollLeft === 0) {
                    left.style.display = 'none';
                }
                if (div.scrollLeft > 0) {
                    rigth.style.display = 'block';
                }
            }, 10 / ((speedLeft === 0) ? 1 : speedLeft)); // velocidade
        }
    }
    // mouse leave
    const scrollLeftOut = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const left = refLeft.current;
        left?.style.removeProperty("background-color");
        speedLeft = 1;
        clearInterval(scrollingLeft);
    }

    // mouse down
    const scrollLeftDown = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            speedLeft = div.offsetLeft - e.pageX;
            clearInterval(scrollingLeft);
            scrollLeftIn(e);
            console.log(speedLeft);
            div.scrollLeft -= 10;
            if (div.scrollLeft === 0) {
                left.style.display = 'none';
            }
            if (div.scrollLeft > 0) {
                rigth.style.display = 'block';
            }
        }
    }
    
    // mouse enter
    const scrollRightIn = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const right = refRight.current;
        const left = refLeft.current;
        if (div && right && left) {
            scrollingLeft = setInterval(() => {
                right.style.backgroundColor = '#0000001f';
                div.scrollLeft += 1;
                if (div.scrollLeft > 0) {
                    left.style.display = 'block';
                }
                if (div.offsetWidth >= div.scrollWidth - div.scrollLeft) {
                    right.style.display = 'none';
                }
            }, 10 / ((speedRight === 0) ? 1 : speedRight)); // velocidade
        }
    }
    // mouse leave
    const scrollRightOut = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const right = refRight.current;
        right?.style.removeProperty("background-color");
        speedRight = 1;
        clearInterval(scrollingLeft);
    }
    // mouse down
    const scrollRightDown = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const right = refRight.current;
        if (div && right && left) {
            speedRight = e.pageX - div.offsetWidth;
            clearInterval(scrollingLeft);
            scrollRightIn(e);
            console.log(speedRight);
            div.scrollLeft += 10;
            if (div.scrollLeft > 0) {
                left.style.display = 'block';
            }
            if (div.offsetWidth >= div.scrollWidth - div.scrollLeft) {
                right.style.display = 'none';
            }
        }
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
            div.style.overflow = 'scroll';
            div.style.marginBottom = '1rem';
            div.style.whiteSpace = 'nowrap';
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
            rigth.style.left = `${positionRight}px`;
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
        <div ref={refDiv} className={style.TabelaStyle}>
            <table>
                <thead>
                    { titulos }
                </thead>
                <tbody>
                    { conteudo }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ScrollTable;
