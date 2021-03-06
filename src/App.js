import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ToDoItem from "./ToDoItem";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: "center",
  },
}));

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#D4E0E4",
    },
  },
});

const Pagination = () => {
  const [list, setList] = useState([]);
  const classes = useStyles();
  const [nextToken, setNextToken] = useState(undefined);
  const [nextNextToken, setNextNextToken] = useState();
  const [previousTokens, setPreviousTokens] = useState([]);
  const [nItems, setNItems] = useState(3);

  function handleNItems(e) {
    setNextToken(undefined);
    setPreviousTokens([]);
    setNItems(e.target.value);
  }

  useEffect(() => {
    fetch("https://af5xufo4j6.execute-api.us-east-1.amazonaws.com/test/all", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        LastEvaluatedKey: nextToken,
        limit: nItems,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNextNextToken(data.LastEvaluatedKey);
        data.Items.forEach(item =>{
          item.key = item.PK+nItems
        })
        setList(data.Items);
      })
      .catch((e) => console.log(e));
  }, [nextToken,nItems]);

  const next = () => {
    setPreviousTokens((c) => [...c, nextToken]);
    setNextToken(nextNextToken);
  };

  const prev = () => {
    const copy = [...previousTokens];
    const b = copy.pop();
    setPreviousTokens(copy);
    setNextToken(b);
  };
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />

      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The LiveRoom Pagination App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} className="main_container">
        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          style={{ marginTop: "1.3%", padding: "2%" }}
        >
          <div id="btn_container">
            <Typography variant="subtitle1" style={{ marginRight: "2%" }}>
              Rows per page
            </Typography>
            <Select value={nItems} disableUnderline onChange={handleNItems}>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
            <div style={{ flexGrow: 1 }} />
            <IconButton
              onClick={prev}
              className="pagination_btn"
              disableRipple
              style={{ padding: 0 }}
              disableFocusRipple
              disabled={previousTokens.length === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <p id="current_page">current page: {previousTokens.length + 1}</p>
            <IconButton
              onClick={next}
              className="pagination_btn"
              disableRipple
              disableFocusRipple
              disabled={!nextNextToken}
              style={{ padding: 0 }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
          {list.map((item, index) => {
            return (
              <ToDoItem
              key={item.key}
                timeout={250 * (index + 1)}
                name={item.PK}
                date={item.SK}
              />
            );
          })}
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Pagination;
