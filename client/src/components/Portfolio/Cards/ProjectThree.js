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

export default function ProjectThree (){
const classes = useStyles();

return(
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
    <Link href="https://qiktik2.herokuapp.com/">
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            /></Link>
             <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Full Stack Group Project (QikTik (2.0))
                    </Typography>
                    <Typography>
                      Uses Sequelize, Node.js, Express Routing, and Handlebars.js
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://github.com/mfernandez225/qiktik2.0">
                      Repository
                    </Button>
                  </CardActions>
            </Card>
    </Grid>
)
}