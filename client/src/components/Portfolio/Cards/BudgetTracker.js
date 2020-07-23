import React from "react"
import {Grid, Link,Typography,Button,Card, CardActions, CardContent, CardMedia} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

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
    <Link href="*">
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
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
                    <Button size="small" color="primary">
                      Repository
                    </Button>
                  </CardActions>
            </Card>
    </Grid>
)
}