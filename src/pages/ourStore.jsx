import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import Meta from "../components/meta";

const OurStore = () => {
  const [store, setStore] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = "https://fakestoreapi.com";

  useEffect(() => {
    async function getStore() {
      const response = await fetch(`${baseUrl}/products`);
      const APIResponse = await response.json();
      console.log("APIResponse", APIResponse);
      if (APIResponse) {
        setStore(APIResponse);
      } else {
        console.error("couldnt fetch products");
      }
    }

    getStore().catch(console.log(error));
  }, []);

  console.log("store", store);

  return (
    <>
      {/* {" "}
      <Meta title={"Our Store"} />
      <Breadcrumb title={"Our Store"} />{" "}
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          {" "}
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                {" "}
                <h3 className="filter-title">Shop By Categories</h3>{" "}
                <div>
                  {" "}
                  <ul className="ps-0">
                    {" "}
                    <li>Watches</li> <li>Televisions</li> <li>Cellphones</li>{" "}
                    <li>Laptops</li> <li>Cameras</li>{" "}
                  </ul>{" "}
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By </h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>{" "}
              <div className="filter-card mb-3">
                {" "}
                <h3 className="filter-title">Random Product</h3>
              </div>
              <div className="col-9"></div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        //{" "}
      </div>{" "} */}
      <div>
        {store.map(function (product, id) {
          return (
            <div className="products" key={id}>
              <h1>{product.title}</h1>
              {<img src={product.image} alt={product.title} />}
              <li>Price: {product.price}</li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurStore;
