import Form from "./components/Form";
import Ideas from "./components/Ideas";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="flex h-screen">
      <SideBar />
      <section className="w-full">
        <Form />
        <Ideas />
      </section>
    </main>
  );
}

export default App;
