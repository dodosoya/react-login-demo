import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FormattedMessage } from "react-intl";
import { AuthContext } from "../App";
import { actionTypes } from "../action";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Language() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = e => {
    dispatch({
      type: actionTypes.SET_LANGUAGE,
      payload: {
        language: e.target.value
      }
    });
  };
  const { state, dispatch } = React.useContext(AuthContext);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="select-language-label">
          <FormattedMessage id="app.language.name" />
        </InputLabel>
        <Select
          labelId="select-language-label"
          id="select-language"
          value={state.language}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="en">
            <FormattedMessage id="app.language.english" />
          </MenuItem>
          <MenuItem value="zh-TW">
            <FormattedMessage id="app.language.chinese" />
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}