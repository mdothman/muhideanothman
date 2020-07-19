import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";


const useStyles = makeStyles((theme) => ({
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));




export default function Portfolio() {
  const classes = useStyles();

// const [cards,setCards]=useState([]);
  const [url, setUrl] = useState([]);
  useEffect(()=>{
    getGitHubUrl();
},[])


function getGitHubUrl (){
  API.getRepos()
  .then(response =>{
     const data =[]
     response.data.forEach(element => {
     data.push(element.html_url)
    }); 
    
    const filteredData = [data[0],data[6],data[20]]

    setUrl(filteredData)
    
  })
  .catch(err=>{console.log(err)})
}
console.log(url)
// function createCard(){
//     url.forEach(element=>{
//     setCards(element)
    
//   })
//   console.log(cards)
  
// }
  return (
    // <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4}>
      {url.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={card}>
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

