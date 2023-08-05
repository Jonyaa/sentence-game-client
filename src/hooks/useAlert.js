import { useState } from "react";
import Alert from "../components/Alert";

export function useAlert() {
    const [alert, setAlert] = useState({ active: false, message: '', timeout: 0, onFinish: () => null });

    const resetAlert = () => {
        setAlert({ active: false, message: '', timeout: 0, onFinish: () => null });
    };

    const AlertComponent = () => (
        <>
            {alert.active && (
                <Alert
                    message={alert.message}
                    timeout={alert.timeout}
                    finish={() => {
                        alert.onFinish()
                        resetAlert();
                    }}
                    slideIn
                />
            )}
        </>
    );

    return [
        AlertComponent,
        setAlert,
        resetAlert,
    ];
}