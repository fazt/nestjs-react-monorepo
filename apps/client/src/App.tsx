function App() {
  return (
    <div>
      <button
        onClick={() => {
          fetch("/api")
            .then((res) => res.text())
            .then((data) => console.log(data));
        }}
      >
        get data
      </button>
    </div>
  );
}

export default App;
