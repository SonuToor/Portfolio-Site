import Button from "@material-ui/core/Button"
import { withStyles } from '@material-ui/core/styles';
import React from "react"


const StyledButton = ({ text }) => {
  const CustomButton = withStyles({
    root: {
      color: "white",
      backgroundColor: "rgb(145, 36, 134)",
      '&:hover': {
        backgroundColor: "rgb(222, 124, 4)"
      }
    }
  })(Button)

  return (
    <CustomButton>
      {text}
    </CustomButton>
  )
}

export default StyledButton