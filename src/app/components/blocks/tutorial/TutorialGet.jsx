import Link from "next/link";
// Post list, includes the list op post in a category and the icon
const GetTutorialPosts = ({ articles, uri}) => {
    return (
      <div>
        <ul className={"custom-bullet"}>
          {/*ArticleList*/}
          {articles.map((article, index) => {
            return (
              <>
              <li key={index} className={"m-1"}>
                <Link className={" hover-gray flex text-sky-700 mb-4 text-decoration-none"} href={`/articles/${article.slug}`}>                 -
                  <span className={"mx-2"}>{article.name}</span>
                </Link>
              </li>
              </>
            );
          })}

          <li className={"m-1"}>
            <a className={"MainCard-readmore hover-gray"} href={uri}>
              {/*↲<span className={"mx-2"}>{count} דפים</span>*/}
            </a>
          </li>
        </ul>
      </div>
    );
  };

    export default GetTutorialPosts;