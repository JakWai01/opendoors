import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    appbar:{
        background: "none",
    },
    appbarTitle: {
        flexGrow: "1",
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    icon:{
        color: "#fff",
        fontSize: '2rem',
    },
    title: {
        color: "#428df5",
    },
    color: {
        color: "#fff",
        fontSize: "100px",
    }
}));

export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>

                
            <h1 className={classes.appbarTitle}><span className={classes.title}>Open</span>Doors</h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
            </Toolbar>
            </AppBar>
            <div>
                <h1 className={classes.color}>We open what is closed!</h1>
            </div>
        </div>
    )
}