import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export function useFairyMode(value) {
    const [fairyMode, setFairyMode] = useLocalStorage(value);
    useEffect(() => {
        const body = document.querySelector("body")
        fairyMode
            ? body.classList.add("fairy-mode")
            : body.classList.remove("fairy-mode")
    }, [fairyMode]);
    return [fairyMode, setFairyMode];
}