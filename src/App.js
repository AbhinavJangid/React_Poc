// import logo from "./logo.svg";
// import "./App.css";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import RootLayout from "./Components/RootLayout";
// import Home from "./Components/Home";
// import ProductsLayout from "./Components/ProductsLayout";
// import Products, { loader as productsLoader } from "./Pages/Products";
// import About from "./Components/About";
// import ProductDetail, {
//   loader as productDetailLoader,
// } from "./Pages/ProductDetail";
// import ProductItem from "./Components/ProductItem";
// import AddProduct from "./Components/AddProduct";
// function App() {
//   // const router = createBrowserRouter([
//   //   {
//   //     path: "/",
//   //     element: <RootLayout />,
//   //     children: [
//   //       { index: true, element: <Home /> },
//   //       { path: "about", element: <About /> },
//   //       {
//   //         path: "products",
//   //         element: <ProductsLayout />,
//   //         children: [
//   //           {
//   //             path: "allProducts",
//   //             element: <Products />,
//   //             loader: productsLoader,
//   //             children: [{ path: ":id", children:
//   //           [{
//   //             index:true,element: <ProductDetail />, loader: productDetailLoader
//   //           }]
//   //         }],
//   //           },
//   //           //  element: <About />, loader: productDetailLoader}]},
//   //         ],
//   //       },
//   //       { path: "productDetail", element: <ProductItem /> },
//   //     ],
//   //   },
//   // ]);


//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "about", element: <About /> },
//         {
//           // path: "products",
//           // element: <ProductsLayout />,
//           // children: [
//           //   {
//               path: "products",
//               children: [
//                 {
//                   index:true,
//                   element: <Products />,
//                   loader: productsLoader,
//                 },
//                 {
//                   path: ":id",
//                   id: "product-detail",
//                   loader: productDetailLoader,
//                   element: <ProductDetail />,
//                 },
//              // ],
//             // },
//             //  element: <About />, loader: productDetailLoader}]},
//           ],
//         },
//         { path: "productDetail", element: <ProductItem /> },
//         { path: "addProduct", element: <AddProduct/>},
//       ],
//     },
//   ]);




//   return <RouterProvider router={router} />;
// }

// export default App;



import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import Stories from "./Stories";
import "./App.css";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;

