import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AppDrawer from "./AppDrawer";
const Newspage = (props) => {
  const [Newsdata, setNewsdata] = useState([]);
  const [page, setpage] = useState(1);
  const [Totalresults, setTotalresults] = useState(0);
  const [laoder, setlaoder] = useState(false);
  const gEtnewsapidata = async () => {
    setlaoder(true);
    const responseNews = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=33fd02bacb984c2eae07a156e5dfcfca`
    );
    const parsedresponsNews = await responseNews.json();
    setlaoder(false);
    setNewsdata(parsedresponsNews.articles);
    setTotalresults(parsedresponsNews.totalResults);
  };

  useEffect(() => {
    gEtnewsapidata();
   // eslint-disable-next-line
  }, []);

  const prevPage = async () => {
    const responseNews = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=33fd02bacb984c2eae07a156e5dfcfca&page=${
        page - 1
      }`
    );
    setlaoder(true);
    const parsedresponsNews = await responseNews.json();
    setNewsdata(parsedresponsNews.articles);
    // setTotalresults(parsedresponsNews.totalResults);
    setpage(page - 1);
    setlaoder(false);
  };
  const nextPage = async () => {
    if (page + 1 > Math.ceil(Totalresults / 20)) {
    } else {
      const responseNews = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=33fd02bacb984c2eae07a156e5dfcfca&page=${
          page + 1
        }`
      );
      setlaoder(true);
      const parsedresponsNews = await responseNews.json();
      setNewsdata(parsedresponsNews.articles);
      setTotalresults(parsedresponsNews.totalResults);
      setpage(page + 1);
      setlaoder(false);
      console.log(Totalresults);
    }
  };

  return (
    <>
      {laoder && <Spinner />}
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#edf7ff",
        }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center my-4">
            <h3>News Page using NewsApi <span className="text-capitalize">{props.category}</span></h3>
          </div>
          <div className="col-12 d-flex justify-content-center mb-4">
            <AppDrawer category={props.category}/>
          </div>
          {!laoder && <Spinner /> &&
            Newsdata.map((datanews) => {
              return (
                <Newsitem
                  key={datanews.url}
                  title={datanews.title}
                  description={datanews.description}
                  urlToImage={datanews.urlToImage}
                  url={datanews.url}
                  publishedAt={new Date(datanews.publishedAt).toLocaleString()}
                  source={datanews.source.name}
                  author={datanews.author}
                />
              );
            })}
          <div className="col-12 d-flex justify-content-center py-4 mb-3">
            <Button
              variant="contained"
              className="mx-2"
              onClick={prevPage}
              disabled={page - 1 < 1}
            >
              <NavigateNextIcon className="rotate" />
              Previous
            </Button>
            <Button
              variant="contained"
              className="mx-2"
              onClick={nextPage}
              disabled={page + 1 > Math.ceil(Totalresults / 20)}
            >
              Next
              <NavigateNextIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newspage;
