import { useEffect, useState, useRef } from "react";
import { Card, FlipTop, FlipBottom, Number } from "./FlipCard.style";

const FlipCard = ({ time, title }) => {
    const [mounted, setMounted] = useState(true);
    const curRef = useRef(time);

    const next = curRef.current;
    const cur = time.toString().padStart(2, "0");

    useEffect(() => {
        setMounted(true);
        const timeID = setTimeout(() => {
            curRef.current = cur;
            setMounted(false);
        }, 600);
        return () => {
            clearTimeout(timeID);
        };
    }, [time]);

    return (
        <Card>
            <FlipTop animate={mounted} data-next={next} data-cur={cur}>
                <Number>{cur}</Number>
            </FlipTop>
            <FlipBottom data-cur={next} data-title={title}></FlipBottom>
        </Card>
    );
};

export default FlipCard;
