import { IdeaType } from "../types";
import Idea from "./Idea";

interface IdeasProps {
  ideas: [] | IdeaType[];
  deleteIdea: (id: number) => void;
  toggleFavorite: (id: number) => void;
  showFavorites: boolean;
  query: string;
}

const Ideas = ({
  ideas,
  deleteIdea,
  toggleFavorite,
  showFavorites,
  query,
}: IdeasProps) => {
  const searchedIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(query.toLowerCase()) ||
      idea.body.toLowerCase().includes(query.toLowerCase())
  );

  const ideaElements = searchedIdeas.map((idea) => (
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

  const favoriteIdeas = searchedIdeas
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showFavorites ? favoriteIdeas : ideaElements}
      </div>
    </section>
  );
};

export default Ideas;
