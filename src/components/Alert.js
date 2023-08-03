import "./Alert.css";
import { useEffect } from "react";

export default function Alert({ message, timeout, slideIn = false, finish }) {
    useEffect(() => {
        const timeOut = setTimeout(() => {
        finish();
        }, timeout);
        return () => clearTimeout(timeOut);
    }, [])

    return (
        <div className="alert">
            <h2 className={slideIn ? 'slide-in': ''}>{ message }</h2>
        </div>
    )
};