const App = () => {
  return (
    <div>
      <Person name="Alexander" age={20} hobbies={['Reading', 'Swimming', 'Coding']} />
      <Person name="Beth" age={16} hobbies={['Dancing', 'Drawing']} />
      <Person name="Christopher" age={25} hobbies={['Gaming', 'Hiking']} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"))
