const App = () => {
  return (
    <div>
      <Tweet username="johndoe" name="John Doe" date="2024-08-07" message=" tweet!" />
      <Tweet username="janedoe" name="Jane Doe" date="2024-08-06" message="Hello!" />
      <Tweet username="bobby" name="Bobby Brown" date="2024-08-05" message="Hello!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))