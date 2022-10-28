import { Button } from "@mui/material"
// import { useState } from "react";


const SaveButton = ({time, setListRecord}) => {

  // const[input, setInput] = useState();


const handleSaveRecord = async () => {
    let record = ("0" + Math.floor((time / 60000) % 60)).slice(-2)+":"
                +("0" + Math.floor((time / 1000) % 60)).slice(-2)+":"
                +("0" + ((time / 10) % 100)).slice(-2);

    // setInput(record)
    console.log(record)

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

}

  return (
    <Button 
        onClick={handleSaveRecord}
        variant="contained" 
        style={{margin:10}}>Save Record</Button>
  )
}

export default SaveButton