import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const StyledTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "rgb(222, 124, 4)"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "rgb(145, 36, 134)"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgb(145, 36, 134)"
        },
        "&:hover fieldset": {
          borderColor: "rgb(145, 36, 134)"
        },
        "&.Mui-focused fieldset": {
          borderColor: "rgb(145, 36, 134)"
        }
      }
    }
  })(TextField);

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1)
    },
    }));


export default function CustomizedInputs(props)  {
      return (
        <StyledTextField
        label="Enter your message"
        variant="outlined"
        multiline
        rows="8"
        required
        name={props.name}
      />
      )

  }