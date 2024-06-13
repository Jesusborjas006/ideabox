import { useState } from "react";
import Form from "./components/Form";
import Ideas from "./components/Ideas";
import SideBar from "./components/SideBar";
import { IdeaType } from "./types";

function App() {
  const [ideas, setIdeas] = useState<[] | IdeaType[]>([]);

  const addIdea = (newIdea: IdeaType) => {
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id: number) => {
    const updatedIdeas = ideas.filter((idea) => {
      return idea.id !== id;
    });
    setIdeas(updatedIdeas);
  };

  return (
    <main className="flex">
      <SideBar />
      <section className="w-full h-screen overflow-y-auto">
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} deleteIdea={deleteIdea} />
      </section>
    </main>
  );
}

export default App;
