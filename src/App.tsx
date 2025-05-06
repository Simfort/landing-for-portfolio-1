import "./App.css";
import Header from "./components/Header";
import GenerousWords from "./components/HomeSections/GenerousWords";
import RecentWork from "./components/HomeSections/RecentWork";

function App() {
  return (
    <div>
      <Header />
      <main className="w-[100%]">
        <RecentWork />
        <GenerousWords />
      </main>
    </div>
  );
}

export default App;
