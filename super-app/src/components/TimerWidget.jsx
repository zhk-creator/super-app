import { useEffect, useState } from "react";
import "./TimerWidget.css";

function TimerWidget() {

    const [seconds,setSeconds]=useState(300);

    useEffect(()=>{

        if(seconds===0) return;

        const timer=setInterval(()=>{

            setSeconds(prev=>prev-1);

        },1000);

        return ()=>clearInterval(timer);

    },[seconds]);

    const minutes=Math.floor(seconds/60);
    const secs=seconds%60;

    return(

        <div className="widget timer-widget">

            <h2>Timer</h2>

            <div className="time">

                {String(minutes).padStart(2,"0")} :
                {String(secs).padStart(2,"0")}

            </div>

            <button
                onClick={()=>setSeconds(300)}
            >
                Reset
            </button>

        </div>

    )

}

export default TimerWidget;