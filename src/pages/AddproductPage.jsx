import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { adminContext } from "../contexts/AdminContext";

const AddproductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    memory: "",
    color: "",
    category: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      memory: "",
      color: "",
      category: "",
      feedbacks: [],
      likes: 0,
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Add product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Enter the name"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            label="Enter the description"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            type="number"
            value={newProduct.price}
            label="Enter the price"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Add picture URL"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Choose a color</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
              label="Choose a color"
              labelId="color-select-label"
            >
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
              <MenuItem value="pink">Pink</MenuItem>
              <MenuItem value="red">Red</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="size-select-label">Choose a memory</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, memory: e.target.value })
              }
              value={newProduct.memory}
              label="Choose a memory"
              labelId="size-select-label"
            >
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="32">32</MenuItem>
              <MenuItem value="64">64 </MenuItem>
              <MenuItem value="128">128</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="size-select-label">Choose a category</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              value={newProduct.category}
              label="Choose a category"
              labelId="category-select-label"
            >
              <MenuItem value="Cell phones">Cell phones</MenuItem>
              <MenuItem value="5G phones">5G phones</MenuItem>
              <MenuItem value="Tablets">Tablets</MenuItem>
              <MenuItem value="Smartwatches">Smartwatches</MenuItem>
              <MenuItem value="Hotspotes & more">Hotspotes & more</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            SAVE
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddproductPage;
