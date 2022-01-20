import React  from "react";
function Stopwatch ()
{
    const [time, setTime] = React.useState(0)
    const [resetDisabled, setResetDisabled] = React.useState(true)
    const [pause, setPause] = React.useState(true)
    const [action, Setaction] =  React.useState("Start")
    React.useEffect(() => {
        let interval = null;

        if(resetDisabled === true)
        {
            document.getElementById("reset").style.cursor="not-allowed";
            document.getElementById("reset").style.opacity="0.6";
            document.getElementById("reset").style.backgroundColor="grey";
        }

        else if(resetDisabled === false)
        {
            document.getElementById("reset").style.cursor="pointer";
            document.getElementById("reset").style.opacity="1";
            document.getElementById("reset").style.backgroundColor="black";
        }
      
        if (pause === false) 
        {
          interval = setInterval(() => {
            setTime((time) => time + 10);
          }, 10);
        } 
        else 
        {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [pause, resetDisabled]);

    function pauseResumeTimer(options)
    {
        setResetDisabled(false)

        if(options === "Start")
        {
            setPause(false)
            Setaction("Pause")
        }
        if(options === "Pause")
        {
            setPause(true)
            Setaction("Resume")
        }

        else if(options === "Resume")
        {
            setPause(false)
            Setaction("Pause")
        }
    }

    function resetTimer()
    {
        setTime(0)
        setPause(true)
        Setaction("Start")
        setResetDisabled(true)
    }

    return(
        <div className="stopwatchMain">
            <div className="stopwatch">
                <h1>REACT STOPWATCH</h1>
                {/* <p>{time}</p> */}
                <div className="timer">
                    <span className="digits">
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    </span>
                    <span className="digits">
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    </span>
                    <span className="digits mili-sec">
                        {("0" + ((time / 10) % 100)).slice(-2)}
                    </span>
                </div>
                <div className="actionBtn">
                    <button data-testid={action.toLowerCase()} id={action.toLowerCase()} onClick={()=>{pauseResumeTimer(action)}}>{action}</button>
                    <button data-testid="reset" id="reset" onClick={()=>{resetTimer()}} disabled={resetDisabled}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Stopwatch;

// React.useEffect(() => {
//     let interval = null;
  
//     if (isActive && isPaused === false) {
//       interval = setInterval(() => {
//         setTime((time) => time + 10);
//       }, 10);
//     } else {
//       clearInterval(interval);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, isPaused]);