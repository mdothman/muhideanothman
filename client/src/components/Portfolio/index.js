import React from "react";
import Grid from "@material-ui/core/Grid"
import {ProjectOne, ProjectTwo, ProjectThree, BookSearch, BudgetTracker, FitnessTracker}from "./Cards"






export default function Portfolio() {
  
  return (
    // <Container className={classes.cardGrid} maxWidth="md">


    <Grid container spacing={4}>
    <ProjectOne />
    <ProjectTwo />
    <ProjectThree />
    <BookSearch />
    <BudgetTracker />
    <FitnessTracker />
      {/* {url.map((card) => (
        <Grid item key={6} xs={12} sm={6} md={4}>
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
      ))} */}
    </Grid>
  );
};

