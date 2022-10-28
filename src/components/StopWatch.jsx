import { useState, useEffect } from "react"
import RecordsList from "./RecordsList"
import SaveButton from "./SaveButton"
import './StopWatch.css'
import Time from "./Time"
import TimerButtons from "./TimerButtons"

const StopWatch = () => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  
  useEffect(() =>{
    let interval = null
    
    if(timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      },10)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  },[timerOn])
  
  // const timeRecord = ["00:10:56", "01:00:02", "00:51:62"];
  
  const[listRecord, setListRecord] = useState([])
  
  useEffect( () => {
      fetch('http://localhost:5000/api/records')
        .then(res => res.json())
        .then(data => setListRecord(data))
      },[])
      
  
  return (
    <div className="App">
        <Time time={time} />
        <TimerButtons 
                timerOn = {timerOn}
                time = {time}
                setTimerOn = {setTimerOn}
                setTime = {setTime}
                setListRecord= {setListRecord}
                />
        <SaveButton time= {time} setListRecord= {setListRecord} />
        <div>
          {listRecord.map((record) => <RecordsList key={record.id} record={record} setListRecord={setListRecord} />)}
        </div>
    </div>
  );
}

export default StopWatch