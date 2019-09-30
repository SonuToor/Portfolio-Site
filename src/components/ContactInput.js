import React from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const StyledTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "rgb(222, 124, 4)"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "rgb(145, 36, 134);"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgb(222, 124, 4)"
        },
        "&:hover fieldset": {
          borderColor: "rgb(222, 124, 4)"
        },
        "&.Mui-focused fieldset": {
          borderColor: "rgb(222, 124, 4)"
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
    const classes = useStyles();
      return (
        <StyledTextField
        className={classes.margin}
        id="custom-css-standard-input"
        label={props.label}
      />
      )

  }