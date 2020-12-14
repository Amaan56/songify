import './App.css';

const sampleData = {
  Indie: [],
  Bollywood: [],
  Pop: [],
  'Hip Hop': [],
  'Country Music': [],
};

const sampleDataKeys = Object.keys(sampleData);

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Songify</h1>
      </nav>
      <main>
        <section className="genres">
          {sampleDataKeys.map((option, i) => {
            return <button className="genre-option">{option}</button>;
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
