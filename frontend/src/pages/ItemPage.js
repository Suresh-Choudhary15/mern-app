import React from "react";
import ItemDetails from "../components/ItemDetails";
import CommentSection from "../components/CommentSection";

const ItemPage = ({ match }) => {
  return (
    <div>
      <ItemDetails match={match} />
      <CommentSection itemId={match.params.id} />
    </div>
  );
};

export default ItemPage;
