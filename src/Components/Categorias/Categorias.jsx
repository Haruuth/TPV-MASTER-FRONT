import React from "react";
import { Link } from "react-router-dom";
import "./Categorias.scss";

export const Categorias = () => {
  return (
    <div className="categories">
      <Link className="link" to="/cervezas">
        <img
          className="bebida"
          src="https://res.cloudinary.com/db7uhnclh/image/upload/v1684432913/Cervezas/Untitled_xkljgv.png"
          alt="cervezas"
        />
      </Link>

      <Link className="link" to="/ginebras">
        <img
          className="bebida"
          src="https://jackmanstore.com/wp-content/uploads/2023/01/002378-GINEBRA-TANQUERAY-LONDON-DRY-GIN-700-ML-.png"
          alt="ginebras"
        />
      </Link>

      <Link className="link" to="/rones">
        <img
          className="bebida"
          src="https://www.mantequeriaandres.com/tienda/2244-large_default/ron-brugal-anejo.jpg"
          alt="rones"
        />
      </Link>

      <Link className="link" to="/whiskey">
        <img
          className="bebida"
          src="https://dicoval.com/977-large_default/johnnie-walker-black-label.jpg"
          alt="whiskey"
        />
      </Link>

      <Link className="link" to="/vodka">
        <img
          className="bebida"
          src="https://winedeliveryibiza.com/wp-content/uploads/2020/10/ibiza-wine-delivery_absolut-vodka.png"
          alt="vodka"
        />
      </Link>

      <Link className="link" to="/cocteles">
        <img
          className="bebida"
          src="https://metalgalamoth.files.wordpress.com/2013/05/mai-tai.png"
          alt="Cocteles"
        />
      </Link>

      <Link className="link" to="/refrescos">
        <img
          className="bebida"
          src="https://cdn.shopify.com/s/files/1/0566/4391/1854/products/7501055300075_45d66547-bf96-4c14-b32f-e1ae0e48b9ea.png?v=1675668132"
          alt="refrescos"
        />
      </Link>

      <Link className="link" to="/café">
        <img
          className="bebida"
          src="https://www.recetas.com/files/ingredient/thumb/c/cafe_vy4pu"
          alt="café"
        />
      </Link>
    </div>
  );
};
