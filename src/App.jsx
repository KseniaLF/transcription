import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="fex flex-col p-4 max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        <HomePage />
      </section>
    </div>
  );
}

export default App;
