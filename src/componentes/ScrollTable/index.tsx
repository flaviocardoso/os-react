import React, { useRef, useEffect, useState } from "react";
import style from "./ScrollTable.module.scss";

interface Props {
    children: React.ReactNode
}

const ScrollTable: React.FC<Props> = ({ children }: Props) => {
    const refLeft = useRef<HTMLButtonElement>(null);
    const refRight = useRef<HTMLButtonElement>(null);
    const refDiv = useRef<HTMLDivElement>(null);
    const [ speedRight, setSpeedRight] = useState(1);
    const [ speedLeft, setSpeedLeft] = useState(1);
    const [ scrolling, setScrolling] = useState(undefined);
    let scrollingLeft: any;
    let speed = 1;

    // mouse enter
    const scrollLeftIn = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            left.style.backgroundColor = '#0000001f';
            scrollingLeft = setInterval(() => {
                div.scrollLeft -= 1;
                if (div.scrollLeft === 0) {
                    left.style.display = 'none';
                }
                if (div.scrollLeft > 0) {
                    rigth.style.display = 'block';
                }
            }, 10 / ((speedLeft === 0) ? 1 : speedLeft)); // velocidade
            setScrolling(scrollingLeft);
        }
    }
    // mouse leave
    const scrollLeftOut = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const left = refLeft.current;
        left?.style.removeProperty("background-color");
        setSpeedLeft(1);
        clearInterval(scrolling);
    }

    // mouse down
    const scrollLeftDown = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const rigth = refRight.current;
        if (div && left && rigth) {
            speed += speedLeft + div.offsetLeft - e.pageX;
            clearInterval(scrolling);
            scrollLeftIn(e);
            setSpeedLeft(speed);
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
            right.style.backgroundColor = '#0000001f';
            scrollingLeft = setInterval(() => {
                div.scrollLeft += 1;
                if (div.scrollLeft > 0) {
                    left.style.display = 'block';
                }
                if (div.offsetWidth >= div.scrollWidth - div.scrollLeft) {
                    right.style.display = 'none';
                }
            }, 10 / ((speedRight === 0) ? 1 : speedRight)); // velocidade
            setScrolling(scrollingLeft);
        }
    }
    // mouse leave
    const scrollRightOut = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const right = refRight.current;
        right?.style.removeProperty("background-color");
        setSpeedRight(1);
        clearInterval(scrolling);
    }
    // mouse down
    const scrollRightDown = (e: any) => {
        e = e || window.event;
        e.preventDefault();
        const div = refDiv.current;
        const left = refLeft.current;
        const right = refRight.current;
        if (div && right && left) {
            speed += speedRight + e.pageX - (div.offsetWidth + div.offsetLeft);
            clearInterval(scrolling);
            setSpeedRight(speed);
            scrollRightIn(e);
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
            let tamanho = 1;
            let borderRadious = '10px';
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
            left.style.borderRadius = `${borderRadious}`;
            rigth.style.position = position;
            rigth.style.cursor = mouseRight;
            rigth.style.top = `${positionTop}px`;
            rigth.style.left = `${positionRight}px`;
            rigth.style.height = `${positionHeight}px`;
            rigth.style.width = `${tamanho}rem`;
            rigth.style.borderRadius = `${borderRadious}`;
        }
    })
    
    return (
        <>
        <button className={style.ScrollButton} title='left' ref={refLeft} 
            onMouseEnter={scrollLeftIn} 
            onMouseLeave={scrollLeftOut}
            onMouseDown={scrollLeftDown}
        ><span></span><span></span></button>
        <button className={style.ScrollButton} title='right' ref={refRight} 
            onMouseEnter={scrollRightIn} 
            onMouseLeave={scrollRightOut}
            onMouseDown={scrollRightDown}
        ><span></span><span></span></button>
        <div ref={refDiv} className={style.TabelaStyle}>
            { children }
        </div>
        </>
    );
}

export default ScrollTable;
