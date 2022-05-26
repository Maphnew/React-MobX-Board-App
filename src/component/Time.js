import { useObserver } from "mobx-react";
import { useEffect } from "react";
import useStore from "../store/useStore";

const Time = () => {
    console.log("Time component rendered");
    const { saveInfoStore } = useStore();

    useEffect(() => {
        saveInfoStore.setDate(new Date());
        let timeInterval = setInterval(() => saveInfoStore.setDate(new Date()), 1000);
        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    return useObserver(() => (
        <div className="time">
            <label htmlFor="time">현재시간</label>
            <input
                id="time"
                className="userInfo__time"
                value={saveInfoStore.date.toLocaleTimeString()}
                readOnly
            ></input>
        </div>
    ));
};

export default Time;
