import React from "react"
import {Grid, Link,Typography,Button,Card, CardActions, CardContent, CardMedia} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Quick1 from "../Images/Quick1.png";

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

export default function ProjectTwo (){
const classes = useStyles();

return(
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
    <Link href="https://qiktik.herokuapp.com/">
            <CardMedia
              className={classes.cardMedia}
              image={Quick1}
              alt="Stock Search Bar"
              title="Quick Tick Stock Search"
            /></Link>
             <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Quick Tick
                    </Typography>
                    <Typography>
                     Uses Sequelize ORM, Express routing, and handlebars
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mfernandez225/Project2.0">
                      Repository
                    </Button>
                  </CardActions>
            </Card>
    </Grid>
)
}