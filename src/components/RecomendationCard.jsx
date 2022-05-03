import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function RecomendationCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          className="swiper-recomendation"
          component="img"
          height="140"
          image={item.image}
          alt={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.price} USD
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
