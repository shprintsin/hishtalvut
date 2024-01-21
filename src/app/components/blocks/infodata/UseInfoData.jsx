import { useState, useEffect } from "react";
export function UseInfoData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:3000/api/main/info");
                const jsonData = await res.json();
                setData(jsonData);
                console.log(jsonData);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    return data;
}