// import { useEffect, useState } from "react";
// import "./NewsWidget.css";

// const news = [

// "Breaking News 1",

// "Breaking News 2",

// "Breaking News 3",

// "Breaking News 4"

// ];

// function NewsWidget(){

//     const[index,setIndex]=useState(0);

//     useEffect(()=>{

//         const interval=setInterval(()=>{

//             setIndex(prev=>(prev+1)%news.length);

//         },2000);

//         return()=>clearInterval(interval);

//     },[]);

//     return(

//         <div className="widget news-widget">

//             <h2>Latest News</h2>

//             <p>{news[index]}</p>

//         </div>

//     )

// }

// export default NewsWidget;
import { useEffect, useState } from "react";
import { getNews } from "../services/newsApi";
import "./NewsWidget.css";

function NewsWidget() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    if (!articles.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  const loadNews = async () => {
    const data = await getNews();
    setArticles(data);
  };

  if (!articles.length) {
    return (
      <div className="widget news-widget">
        <h2>Loading News...</h2>
      </div>
    );
  }

  const article = articles[currentIndex];

  return (
    <div className="widget news-widget">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-image"
      />

      <div className="news-content">
        <h3>{article.title}</h3>

        <p>
          {article.description || "No description available."}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsWidget;