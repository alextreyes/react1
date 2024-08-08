const App = () => {
  return (
    <div>
      <NamedComponent name="John Doe" />
      <FirstComponent />
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))