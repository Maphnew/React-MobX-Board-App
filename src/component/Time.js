import { useObserver } from "mobx-react";
import { useEffect } from "react";
import useStore from "../store/useStore";

const Time = () => {
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
            <label htmlFor="time">íėŽėę°</label>
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
