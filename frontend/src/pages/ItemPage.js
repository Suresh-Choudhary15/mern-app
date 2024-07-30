// import React from "react";
// import ItemDetails from "../components/ItemDetails";
// import CommentSection from "../components/CommentSection";

// const ItemPage = ({ match }) => {
//   return (
//     <div>
//       {console.log(match)}
//       <ItemDetails match={match} />
//       <CommentSection itemId={match.params.id} />
//     </div>
//   );
// };

// export default ItemPage;

import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BACKEND_BASE_URL from "../constants";

const ItemPage = () => {
  const { id } = useParams(); // Access route parameters

  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${BACKEND_BASE_URL}/api/items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemPage;
