import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const CardProducts = ({ color, setTotalProduct, brand, setTotalCat, minPrice, maxPrice, filterPrice, category, sort, order, setloading, setPageUrl, pageUrl }) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [mta, setMta] = useState({});
  // const [pageUrl, setPageUrl] = useState(null);

  const navigate = useNavigate();

  const { keyword } = useSelector((state) => state.search);
  let baseUrl = `${process.env.REACT_APP_HOST_API}/product?`;

  if (sort) {
    baseUrl += `sort=${sort}&order=${order}&`;
  }
  if (keyword) {
    baseUrl += `find=${keyword}&`;
  }
  if (filterPrice) {
    if (category) {
      baseUrl += `categories=${category}&`;
    }
    if (brand) {
      baseUrl += `brand=${brand}&`;
    }
    if (minPrice || maxPrice !== 20000000) {
      baseUrl += `minPrice=${minPrice}&maxPrice=${maxPrice}&`;
    }
    if (color) {
      for (const colors in color) {
        if (!!color[colors]) {
          baseUrl += `color=${colors}`;
        }
      }
    }
  }
  if (!!pageUrl) {
    baseUrl += pageUrl;
  }
  const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        setloading(true)
        const result = await axios.get(baseUrl);
        const { meta } = result.data;
        setMta(meta);
        setTotalProduct(meta.totalProduct);
        setTotalCat(meta.totalCategory);
        setloading(false)

        const { data } = result.data;
        console.log(data)
        setError(null);
        setProduct(data);
      } catch (err) {
        setloading(false)
        setTotalProduct(0);
        setError(err.response ? err.response.data.error : err.message);
      }
    })();
    let paramsUrl = baseUrl.toLowerCase().split("?")[1];
    setSearchParams(paramsUrl);
  }, [baseUrl, setTotalCat, setSearchParams, setTotalProduct, setloading]);

  return (
    <React.Fragment>
      <div className="row">
        {error ? (
          <h1 className="mt-5">{error}</h1>
        ) : (
          product.map((items, i) => (
            <div className="col-md-4">
              <div className="card col card-product" key={i} onClick={() => navigate(`/product/${items.id}`)}>
                <div className="card-product-img">
                  <img src={items.image} alt="" />
                </div>
                <div className="card-body">
                  <div className="card-product-name">{items.name}</div>
                  <div className="card-product-price">IDR{formatter.format(items.price).split("Rp")[1]}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Pagination setPageUrl={setPageUrl} meta={mta} searchParams={searchParams} />
    </React.Fragment>
  );
};

export default CardProducts;
