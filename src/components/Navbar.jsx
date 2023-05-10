import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, alpha, makeStyles } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    toolbar: {
        display : "flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display : "none",
        [theme.breakpoints.up("sm")] : {
            display: "block",
        },
    },
    logoSm: {
        display : "block",
        [theme.breakpoints.up("sm")] : {
            display: "none",
        },
    },
    search: {
        display : "flex",
        alignItems : "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")] : {
            display: (props) => props.open ? "flex" : "none",
            width: "70%",
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel : {
        [theme.breakpoints.up("sm")] : {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")] : {
            display: "none",
        },
    },
    icons: {
        display: "flex",
        alignItems: "center",
        display: (props) => props.open ? "none" : "flex",
    },
    badge: {
        marginRight: theme.spacing(2),
    }
}));

export default function Navbar() {
const [open, setOpen] = useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Lama Dev
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                LAMA
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="Search..." className={classes.input} />
                <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={4} color="secondary" className={classes.badge} >
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color="secondary" className={classes.badge} >
                    <Notifications />
                </Badge>
                <Avatar alt="Reny Moe" src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </Toolbar>
    </AppBar>
  )
}