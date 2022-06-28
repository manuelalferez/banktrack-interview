import InfoCard from "./components/InfoCard";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <Layout>
      <div className="grid grid-cols-6 grid-rows-2">
        <Login />
        <InfoCard />
      </div>
    </Layout>
  );
}

export default App;
