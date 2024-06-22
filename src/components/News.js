import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const  News =(props)=> {
 
  const CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  
    // document.title = `${this.CapitalizeFirstLetter(
    //   props.category
    // )} - News Wala`;
  
  const UpdateNews= async () => {
    props.setProgress(10)
    const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cba6d68c52e54231aeff4285ef8d31e4&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(Url);
    props.setProgress(30);
    let ParsedData = await data.json();
    props.setProgress(70);
    setArticles(ParsedData.articles)
    setTotalResults(ParsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  useEffect(() => {
    UpdateNews();
  }, [])
  
  
  // HandleNextClick = async () => {
  // if (!(state.page + 1 > Math.ceil(totalResults/props.pageSize))) {
  // let Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cba6d68c52e54231aeff4285ef8d31e4&page=${
  //     page + 1
  //   }&pageSize=${props.pageSize}`;
  //   setLoading(true)
  //   let data = await fetch(Url);
  //   let ParsedData = await data.json();
  //   setPage(page+1)
  //   setArticles(ParsedData.articles)
  //   setLoading(false)
  //  }
  //    setPage(page+1)
  //    UpdateNews();
  // };

  // HandlePrevClick = async () => {
  // let Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cba6d68c52e54231aeff4285ef8d31e4&page=${
    // setPage(page-1)
  // }&pageSize=${props.pageSize}`;
  // setLoading(true)
  // let data = await fetch(Url);
  // let ParsedData = await data.json();
  // console.log(ParsedData);
  // setArticles(ParsedData.articles)
  //   setLoading(false)
  //    setPage(page-1)
  // }
  // setPage(page-1)
  // UpdateNews();
  // };
 

  const fetchMoreData = async () => {
    const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`;
    setPage(page+1)
    //   setLoading(true)
    let data = await fetch(Url);
    let ParsedData = await data.json();
    setArticles(articles.concat(ParsedData.articles))
    setTotalResults(ParsedData.totalResults)
    // setLoading(false)
  };
  
    return (
      <>
        {/* // <div className="container my-3"> */}
        <h1 className="text-center" style={{ margin: "35px" }}>
          NEWS APP - Top {CapitalizeFirstLetter(props.category)}
          Headlines
        </h1>
          {loading && <Spinner/>} 
        {/* we do'nt require spinner component for infinite loading  */}
        {/*  <div className="row"> */}
        {/* {" "} */}
        {/* {!loading && articles.map((element) => {
            // return (
              // <div className="col-md-4" key={element.url}>
                // <NewsItems 
                  // title={element.title ? element.title.slice(0, 40) : ""}
                  // description={
                    // element.description ? element.description.slice(0, 88) : ""
                  // } */}
        {/* we will not use this code as we will be using infinite loading done below */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* {!loading &&  we do'nt require this in infinite scroll*/}
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      ImageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* We do'nt require next and previous buttons as we are using infinite scrolling */}
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={HandlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={HandleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
        {/* </div> */}
      </>
    );
  
    
}
News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
