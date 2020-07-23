import React from "react";
import {Container,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
}))


export default function HeroUnit(){
const classes = useStyles();
return(
<div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Check This Out
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Click on the images
            </Typography>
          </Container>
        </div>
);

}

