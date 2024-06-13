import { useState } from "react";
import Form from "./components/Form";
import Ideas from "./components/Ideas";
import SideBar from "./components/SideBar";
import { IdeaType } from "./types";

function App() {
  const [ideas, setIdeas] = useState<[] | IdeaType[]>([]);

  console.log("All Idea: ", ideas);

  const addIdea = (newIdea: IdeaType) => {
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id: number) => {
    const updatedIdeas = ideas.filter((idea) => {
      return idea.id !== id;
    });
    setIdeas(updatedIdeas);
  };

  const toggleFavorite = (id: number) => {
    setIdeas(
      ideas.map((idea) => {
        if (idea.id === id) {
          return { ...idea, isFavorite: !idea.isFavorite };
        } else {
          return idea;
        }
      })
    );
  };

  if (ideas.map((idea) => idea))
    return (
      <main className="flex">
        <SideBar />
        <section className="w-full h-screen overflow-y-auto">
          <Form addIdea={addIdea} />
          <Ideas
            ideas={ideas}
            deleteIdea={deleteIdea}
            toggleFavorite={toggleFavorite}
          />
        </section>
      </main>
    );
}

export default App;
