import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FiltersBlock = ({ getProduct }) => {
  const location = useLocation("");
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");
  const [memoryValue, setMemoryValue] = useState(filter.get("memory") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setMemoryValue(filter.get("memory") || "");

    console.log(filter.toString());
    getProduct(filter.toString());
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setMemoryValue("");
    navigate("/");
    getProduct(filter.toString());
  };
  useEffect(() => {
    getProduct(filter.toString());
  }, []);

  return (
    <div className="filters-block">
      <TextField
        variant="standard"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        label="Live Search ..."
      />
      <FormControl variant="standard">
        <InputLabel id="color-label">Choose a color</InputLabel>
        <Select
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Pick a color"
          labelId="color-label"
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
        <InputLabel id="size-label">Choose a memory</InputLabel>
        <Select
          value={memoryValue}
          onChange={(e) => handleFilters("memory", e.target.value)}
          label="Pick a memory"
          labelId="size-label"
        >
          {/* <MenuItem value="6">6</MenuItem> */}
          <MenuItem value="8">8</MenuItem>
          <MenuItem value="16">16</MenuItem>
          <MenuItem value="32">32</MenuItem>
          <MenuItem value="64">64</MenuItem>
          <MenuItem value="128">128</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        style={{ backgroundColor: "#FF1493" }}
        onClick={resetFilter}
      >
        {" "}
        Reset filters
      </Button>
    </div>
  );
};

export default FiltersBlock;
