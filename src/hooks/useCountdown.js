import { useState } from "react";
import CountdownAlert from "../components/CountdownAlert";

export function useCountdown() {
    const [countdown, setCountdown] = useState({ active: false, timeout: 0, onFinish: () => null });

    const resetCountdown = () => {
        setCountdown({ active: false, timeout: 0, onFinish: () => null });
    }

    const CountdownComponent = () => (
        <>
            {countdown.active && (
                <CountdownAlert
                    timeout={countdown.timeout}
                    finish={() => {
                        countdown.onFinish()
                        resetCountdown();
                    }}
                    slideIn
                />
            )}
        </>
    );

    return [
        CountdownComponent,
        setCountdown,
    ];
}