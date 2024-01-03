import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {

    const [value, setValue] = useState<T>(() => {

        if (localStorage.getItem(key)) {

            return JSON.parse(localStorage.getItem(key) || "{}");

        } else {

            return initialValue;

        }

    });

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value));

    }, [value, key]);

    return [value, setValue] as [typeof value, typeof setValue];

}

export default useLocalStorage
