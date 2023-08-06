import { useEffect, useState } from "react";
import Alert from "./Alert";

export default function CountdownAlert({ timeout, finish }) {
    const [countdown, setCountdown] = useState(timeout / 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((countdown) => {
                countdown === 1 && finish();
                return (countdown - 1)
            });
        }, 1000)

        return (() => clearInterval(interval))
    }, [])
    return (
        <Alert message={countdown} timeoutout={1000} finish={() => { }} />
    )

}