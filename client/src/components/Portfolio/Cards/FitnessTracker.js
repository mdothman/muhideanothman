import React from "react"
import {Grid, Link,Typography,Button,Card, CardActions, CardContent, CardMedia} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Fitness from "../Images/Fitness.png";

const useStyles = makeStyles((theme)=>({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
}));

export default function FitnessTracker (){
const classes = useStyles();

return(
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
    <Link href="https://quiet-river-66262.herokuapp.com/">
            <CardMedia
              className={classes.cardMedia}
              image={Fitness}
              alt="Fitness Tracker"
              title="Fitness Tracker"
            /></Link>
             <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Fitness Tracker App
                    </Typography>
                    <Typography>
                      Uses Mongoose to store exercises and data
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mdothman/mongoFitnessDB">
                      Repository
                    </Button>
                  </CardActions>
            </Card>
    </Grid>
)
}