import React from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/material";

const userStyle = makeStyles({
  container:{
    textAlignLast:"center"
  }
})

function App() {
  return (
    <div className="container">
      <Button variant="outlined">type</Button>
    </div>
  )
}

export default App;
