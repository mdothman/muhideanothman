import React from "react"
import {Grid, Link,Typography,Button,Card, CardActions, CardContent, CardMedia} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Budget from "../Images/Budget.png";

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

export default function BudgetTracker (){
const classes = useStyles();

return(
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
    <Link href="https://afternoon-reef-13754.herokuapp.com/">
            <CardMedia
              className={classes.cardMedia}
              image={Budget}
              alt="Offline Budget Tracker"
              title="Offline Budget Tracker"
            /></Link>
             <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Budget Tracking App
                    </Typography>
                    <Typography>
                      Uses Webpack for offline functionality
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mdothman/budgetingTracker.git">
                      Repository
                    </Button>
                  </CardActions>
            </Card>
    </Grid>
)
}