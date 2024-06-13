import { useState } from "react";
import Form from "./components/Form";
import Ideas from "./components/Ideas";
import SideBar from "./components/SideBar";
import { IdeaType } from "./types";

function App() {
  const [ideas, setIdeas] = useState<[] | IdeaType[]>([]);
  console.log(ideas);

  const addIdea = (newIdea: IdeaType) => {
    setIdeas([...ideas, newIdea]);
  };

  return (
    <main className="flex h-screen">
      <SideBar />
      <section className="w-full">
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} />
      </section>
    </main>
  );
}

export default App;
