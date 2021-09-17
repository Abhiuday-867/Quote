import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetails from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";
import AllQuotes from "./Pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./Pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
