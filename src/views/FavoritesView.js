// import { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap";

// // import { getAllFavorites } from "../services/favoriteServices";

// const FavoritesView = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getFavorites();
//   }, []);

//   const getFavorites = async () => {
//     setLoading(true);
//     setTimeout(async () => {
//       const response = await getAllFavorites();
//       setFavorites(response.data);
//       setLoading(false);
//     }, 2000);
//   };

//   const handleSearch = (event) => setSearch(event.target.value.toLowerCase());

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 col-sm-6">
//           <h2>Your Favorites</h2>
//         </div>
//         <div className="col-md-3 col-sm-6 mb-3">
//           <input
//             className="form-control"
//             onChange={handleSearch}
//             style={{ display: "flex", alignSelf: "flex-end" }}
//             type="text"
//             placeholder="Search"
//           />
//         </div>
//       </div>
//       <div className="container">
//         {loading && (
//           <div style={{ textAlign: "center", marginTop: 20 }}>
//             <Spinner
//               style={{ height: 80, width: 80, fontWeight: "bold" }}
//               animation="border"
//             />
//             <h4>Loading...</h4>
//           </div>
//         )}
//         {favorites === null && <h2>No Favorites yet</h2>}
//         <div className="row favoritesCards">
//           {favorites
//             .filter((favorite) =>
//               search ? favorite.toLowerCase().includes(search) : favorite
//             )
//             .map((favorite) => (
//               <div
//                 key={favorite._id}
//                 className="cardBox col-lg-3 col-md-4 col-sm-6 col-xs-12"
//               >
//                 <FavoriteCard obj={favorite} />
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FavoritesView;
