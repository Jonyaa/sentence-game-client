import { useEffect, useState } from "react";
import Alert from "./Alert";

export default function CountdownAlert({ time, finish }) {
    const [countdown, setCountdown] = useState(time / 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((countdown) => {
                if (countdown === 1) { finish() }
                return (countdown - 1)
            });
        }, 1000)

        return (() => clearInterval(interval))
    }, [])
    return (
        <Alert message={countdown} timeout={1000} finish={() => { }} />
    )

}