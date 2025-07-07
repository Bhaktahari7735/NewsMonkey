import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatenews = async () => {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06d3524ea99a45388cee3e9753309785&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setprogress(30);
    let paresdata = await data.json();
    props.setprogress(70);
    setArticles(paresdata.articles);
    setLoading(false);
    setTotalResults(paresdata.totalResults); // fixed this line
    props.setprogress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)} - NewsMonkey`;
    updatenews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06d3524ea99a45388cee3e9753309785&page=${page + 1}&pagesize=${props.pagesize}`;
     setPage(page + 1);
    let data = await fetch(url);
    let paresdata = await data.json();
    setArticles(articles.concat(paresdata.articles));
    setTotalResults(paresdata.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop:"90px" }}>
        NewsMonkey - Top {capitalizeFirstletter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pagesize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
