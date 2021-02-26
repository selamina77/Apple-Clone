import React, { useEffect, useState } from 'react'

function News() {
    const [appleNews, addNews] = useState([]);
    useEffect(() => {
        fetch(
            "http://newsapi.org/v2/everything?q=Apple&from=2021-01-09&sortBy=publishedAt&apiKey=461dcc38893a4fdb89a7f001fd3d9cf5"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const dog = data.articles;
                addNews(dog);
            })
    }, [])

    console.log(appleNews);
    return (
        <div className="allNewsWrapper">
            <div className="container">
                <div className="row justify-content text-center">
                    <div className="col-12">
                        <div className="title-wrapper bold newsTitle ">
                            Latest News <br />
                            <br />
                        </div>
                    </div>
                    {appleNews?.slice(0, 6).map((singleNews) => {
                        let newsTitle = singleNews.title;
                        let newsLink = singleNews.url;
                        let newsImage = singleNews.urlToImage;

                        let newsWrapper = (
                            <div className="col-sm-12 col-lg-4">
                                <div className="singleNewsWrapper">
                                    <div className="news-Image">
                                        <a href={newsLink} target="_blank">
                                            <img src={newsImage} />
                                        </a>
                                    </div>
                                    <div className="newsInfoWrapper">
                                        <div className="news-Title">
                                            <a href={newsLink}
                                                target="_blank">
                                                {singleNews.title}
                                            </a>
                                        </div>
                                        <div className="newDesc">
                                            {singleNews.description}
                                        </div>
                                    </div>
                                    <div className="news-Link">
                                        <a href={newsLink}
                                            target="_blank">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                        return newsWrapper;
                    })}
                </div>
            </div>
        </div>
    )
};

export default News



