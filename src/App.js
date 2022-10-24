import { memo, useState, useEffect } from "react";
import {
    Container,
    Main,
    Title,
    Time,
    Footer,
    FacebookIcon,
    PinterestIcon,
    InstagramIcon,
} from "./App.style";
import FlipCard from "./component/FlipCard";
const FlipCardMemo = memo(FlipCard);

function App() {
    const luanchTime = (day) => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const date = new Date().getDate();
        return new Date(year, month, date + day).getTime();
    };

    const [countdowmTime, setCountdownTime] = useState(
        luanchTime(14) - Date.now()
    );

    const countdownDays = Math.floor(countdowmTime / 1000 / 60 / 60 / 24);
    const countdownHours = Math.floor((countdowmTime / 1000 / 60 / 60) % 24);
    const countdownMins = Math.floor((countdowmTime / 1000 / 60) % 60);
    const countdownSecs = Math.floor((countdowmTime / 1000) % 60);

    const countDown = [
        { title: "days", time: countdownDays },
        {
            title: "hours",
            time: countdownHours,
        },
        {
            title: "minutes",
            time: countdownMins,
        },
        {
            title: "seconds",
            time: countdownSecs,
        },
    ];

    const countDownComponent = countDown.map((item) => (
        <FlipCardMemo key={item.title} time={item.time} title={item.title} />
    ));

    useEffect(() => {
        const timeID = setInterval(() => {
            const now = Date.now();
            setCountdownTime(luanchTime(14) - now);
        }, 1000);
        return () => {
            clearInterval(timeID);
        };
    }, []);

    return (
        <Container>
            <Main>
                <Title>we're launching soom</Title>
                <Time>{countDownComponent}</Time>
            </Main>
            <Footer>
                <FacebookIcon />
                <PinterestIcon />
                <InstagramIcon />
            </Footer>
        </Container>
    );
}

export default App;
