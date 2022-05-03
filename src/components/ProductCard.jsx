import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../contexts/ClientContext";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const [liked, setLiked] = React.useState(false);

  const data = React.useContext(clientContext);
  const {
    addProductToCart,
    checkProductInCart,
    deleteProductInCart,
    likeCounter,
  } = data;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/details/${item.id}`}>
        <CardHeader title={item.name} subheader={`${item.price} USD`} />

        <CardMedia
          className="products-card-image"
          component="img"
          height="194"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography
            className="products-card-desc"
            variant="body2"
            color="text.secondary"
          ></Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton
          disabled={liked}
          onClick={() => {
            likeCounter(item.id, item.likes || 0);
            setLiked(true);
          }}
          aria-label="add to favorites"
        >
          <FavoriteIcon color={liked ? "error" : "info"} />
          <span>{item.likes}</span>
        </IconButton>

        {checkProductInCart(item.id) ? (
          <IconButton onClick={() => deleteProductInCart(item.id)}>
            <ShoppingCart color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCart color="inherit" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
