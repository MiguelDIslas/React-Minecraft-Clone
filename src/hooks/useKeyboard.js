import React, { useState, useEffect, useCallback } from 'react';
import { actionByKey } from '../helpers/action.helper';

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    });

    const handleKeyDown = useCallback((event) => {
        const action = actionByKey(event.code);
        if (action) {
            setActions((prev) => ({
                ...prev,
                [action]: true
            }))
        }
    }, []);

    const handleKeyUp = useCallback((event) => {
        const action = actionByKey(event.code);
        if (action) {
            setActions((prev) => ({
                ...prev,
                [action]: false
            }))
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyUp, handleKeyDown]);

    return actions;
}