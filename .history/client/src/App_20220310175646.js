import React from "react"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/material";

const useStyle = makeStyles({
  container:{
    textAlignLast:"center"
  }
})

function App() {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <Button variant="outlined">Click</Button>
    </div>
  )
}

export default App;
