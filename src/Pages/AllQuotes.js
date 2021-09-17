import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const Dummy_Data = [
  { id: "q1", author: "ABHI", text: "Learning React is fun" },
  { id: "q2", author: "ABHIUDAY", text: "React Library is great" },
];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    <p className="centered">
      <NoQuotesFound />
    </p>;
  }
  if ((status === "completed" && !loadedQuotes) || loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;
