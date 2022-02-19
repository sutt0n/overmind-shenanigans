import React from "react";
import {
  Grid,
  Typography,
  Button,
  CardActionArea,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import { useActions, useAppState } from "../presenter";

export const Starships = () => {
  const { starships, isLoading } = useAppState();
  const { addFavoriteAction } = useActions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onClickBtnFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    url: string,
    idx: number
  ) => {
    // @todo: fix action call signature
    addFavoriteAction(url, idx);
  };

  return (
    <>
      <Grid container alignItems="center">
        {starships.map((starship, idx) => (
          <Card
            variant="outlined"
            key={starship.url}
            sx={{ width: 345, margin: 2, minHeight: 200 }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {starship.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {starship.model}
              </Typography>
              <Typography variant="body2">
                Manufactured by {starship.manufacturer}, this{" "}
                {starship.starship_class} came in at {starship.length} meters
                long with a hyperdrive rating of {starship.hyperdrive_rating}.
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    onClickBtnFavorite(e, starship.url, idx);
                  }}
                >
                  Favorite
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </>
  );
};
