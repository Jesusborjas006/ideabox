import { useState } from "react";
import Form from "./components/Form";
import Ideas from "./components/Ideas";
import SideBar from "./components/SideBar";
import { IdeaType } from "./types";

function App() {
  const [ideas, setIdeas] = useState<[] | IdeaType[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [query, setQuery] = useState("");

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

  return (
    <main className="flexG">
      <SideBar
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
        query={query}
        setQuery={setQuery}
      />
      <section className="w-full h-screen overflow-y-auto">
        <Form addIdea={addIdea} />
        <Ideas
          ideas={ideas}
          deleteIdea={deleteIdea}
          toggleFavorite={toggleFavorite}
          showFavorites={showFavorites}
          query={query}
        />
      </section>
    </main>
  );
}

export default App;
