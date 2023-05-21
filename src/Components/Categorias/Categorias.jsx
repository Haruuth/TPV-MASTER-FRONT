import React from "react";
import { Link } from "react-router-dom";
import "./Categorias.scss";

export const Categorias = () => {
  return (
    <div className="containerCat">
      <div className="categories">
        <nav>
          <div className="product">
            <Link to="/cervezas">
              <img
                //   style={{
                //     width: "50px",
                //     height: "auto",
                //   }}
                src="https://res.cloudinary.com/db7uhnclh/image/upload/v1684432913/Cervezas/Untitled_xkljgv.png"
                alt="cervezas"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/ginebras">
              <img
                //   style={{
                //     width: "120px",
                //     height: "auto",
                //   }}
                src="https://jackmanstore.com/wp-content/uploads/2023/01/002378-GINEBRA-TANQUERAY-LONDON-DRY-GIN-700-ML-.png"
                alt="ginebras"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/rones">
              <img
                //   style={{
                //     width: "140px",
                //     height: "auto",
                //   }}
                src="https://www.mantequeriaandres.com/tienda/2244-large_default/ron-brugal-anejo.jpg"
                alt="rones"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/whiskey">
              <img
                //   style={{
                //     width: "170px",
                //     height: "auto",
                //   }}
                src="https://dicoval.com/977-large_default/johnnie-walker-black-label.jpg"
                alt="whiskey"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/vodka">
              <img
                //   style={{
                //     width: "170px",
                //     height: "auto",
                //   }}
                src="https://winedeliveryibiza.com/wp-content/uploads/2020/10/ibiza-wine-delivery_absolut-vodka.png"
                alt="vodka"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/cocteles">
              <img
                //   style={{
                //     width: "140px",
                //     height: "auto",
                //   }}
                src="https://metalgalamoth.files.wordpress.com/2013/05/mai-tai.png"
                alt="Cocteles"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/refrescos">
              <img
                //   style={{
                //     width: "140px",
                //     height: "auto",
                //   }}
                src="https://cdn.shopify.com/s/files/1/0566/4391/1854/products/7501055300075_45d66547-bf96-4c14-b32f-e1ae0e48b9ea.png?v=1675668132"
                alt="refrescos"
              />
            </Link>
          </div>

          <div className="product">
            <Link to="/café">
              <img
                //   style={{
                //     width: "140px",
                //     height: "auto",
                //   }}
                src="https://www.recetas.com/files/ingredient/thumb/c/cafe_vy4pu"
                alt="café"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
