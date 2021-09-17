import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const Params = useParams();
  const Match = useRouteMatch();
  const { quoteId } = Params;
  const {
    sendRequest,
    status,
    data: laodedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "error") {
    return <div className="centered">{error}</div>;
  }

  if (!laodedQuote.text) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={laodedQuote.text} author={laodedQuote.author} />
      <Route path={Match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${Match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${Match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetails;
