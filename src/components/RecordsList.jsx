import { Button } from "@mui/material"


const RecordsList = ({record , setListRecord}) => {

    const handleDelete = async () => {
      
        await fetch('http://localhost:5000/api/records/' + record.id, {
          method:"DELETE"
        })
        // console.log(record.id)
      
        let response = await fetch('http://localhost:5000/api/records')
        let body = await response.json()
      
        setListRecord(body)
  }

    return(
        <div>
            <li>{record.time}<Button onClick={handleDelete} color="error" >x</Button></li>
        </div>
    )
}

export default RecordsList;