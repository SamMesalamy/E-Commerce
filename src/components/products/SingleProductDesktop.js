import { useEffect, useState } from "react";
import {
  ExtraActionsWrapper,
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/product";
import { Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product, matches }) {


  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {(showOptions || matches) && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton >
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} />
    </>
  );
}
