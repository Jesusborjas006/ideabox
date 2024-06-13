import { IdeaType } from "../types";
import Idea from "./Idea";

interface IdeasProps {
  ideas: [] | IdeaType[];
  deleteIdea: (id: number) => void;
  toggleFavorite: (id: number) => void;
  showFavorites: boolean;
}

const Ideas = ({
  ideas,
  deleteIdea,
  toggleFavorite,
  showFavorites,
}: IdeasProps) => {
  const ideaElements = ideas.map((idea) => (
    <Idea
      key={idea.id}
      id={idea.id}
      title={idea.title}
      body={idea.body}
      isFavorite={idea.isFavorite}
      deleteIdea={deleteIdea}
      toggleFavorite={toggleFavorite}
    />
  ));

  const favoriteIdeas = ideas
    .filter((idea) => {
      return idea.isFavorite;
    })
    .map((idea) => (
      <Idea
        key={idea.id}
        id={idea.id}
        title={idea.title}
        body={idea.body}
        isFavorite={idea.isFavorite}
        deleteIdea={deleteIdea}
        toggleFavorite={toggleFavorite}
      />
    ));

  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-6">
        {showFavorites ? favoriteIdeas : ideaElements}
      </div>
    </section>
  );
};

export default Ideas;
