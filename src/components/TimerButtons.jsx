import { Button } from "@mui/material"

const TimerButtons = ({timerOn , time, setTimerOn, setTime, setListRecord}) => {

  const handleSaveReset = async () => {

      let record = ("0" + Math.floor((time / 60000) % 60)).slice(-2)+":"
                  +("0" + Math.floor((time / 1000) % 60)).slice(-2)+":"
                  +("0" + ((time / 10) % 100)).slice(-2);
                  
  
      await fetch('http://localhost:5000/api/records', {
        method: "POST",
        body: JSON.stringify({time:record}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      let response = await fetch('http://localhost:5000/api/records')
      let body = await response.json()
  
      setListRecord(body)
      setTime(0)
  }

  return (
    <div>
        {!timerOn && time === 0 &&
        <Button 
                variant="outlined"
                color="success"
                onClick={() => setTimerOn(true)}
                >
                    Start</Button>
        }
        {timerOn && 
        <Button 
                variant="contained"
                color="error"
                onClick={() => setTimerOn(false)}
                >
                    Stop</Button>
        }
        {!timerOn && time !== 0 &&
        <Button onClick={() => setTimerOn(true)}>Resume</Button>
        }
        {!timerOn && time !== 0 &&
        <Button onClick={handleSaveReset}>Reset</Button>
        }
    </div>
  )
}

export default TimerButtons