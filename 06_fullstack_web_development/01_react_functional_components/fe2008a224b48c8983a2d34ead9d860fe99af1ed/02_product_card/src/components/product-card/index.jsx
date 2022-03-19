import React from "react";

const ProductCard = ({ product }) => {
  const [flashProduct, setProduct] = React.useState(true);
  return (
    <div>
      <button onClick={() => setProduct(!flashProduct)}>
        {flashProduct ? product[0].question : product[0].reponse}
      </button>
    </div>
  );
};

// function componentParent() {
//   const nom = "vielvoye";
//   const prenom = "martin";

//   const nomComplet = componentEnfant(nom, prenom)

//   return nomComplet
// }

// // ====================================

// function componentEnfant(nom, prenom) {
//   return nom + prenom;
// }

export default ProductCard;
