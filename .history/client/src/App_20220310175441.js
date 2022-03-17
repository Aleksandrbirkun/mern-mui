import React from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/material";

const userStyle = makeStyles({
  container:{
    textAlignLast:"center"
  }
})

function App() {
  const classes = userStyle()
  return (
    <div >
      <Button variant="outlined">type</Button>
    </div>
  )
}

export default App;
