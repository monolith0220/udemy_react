import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>HELLOo</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
