import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";
const Dummy_Data = [
  { id: "q1", author: "ABHI", text: "Learning React is fun" },
  { id: "q2", author: "ABHIUDAY", text: "React Library is great" },
];

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${props.Id}`}>
        View FullScreen
      </Link>
    </li>
  );
};

export default QuoteItem;
