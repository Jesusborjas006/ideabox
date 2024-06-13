import { IdeaType } from "../types";
import star from "../../public/assets/star.svg";
import activeStar from "../../public/assets/star-active.svg";

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
  const favoriteIdeas = ideas.filter((idea) => {
    return idea.isFavorite;
  });

  const ideaElements = ideas.map((idea) => (
    <div
      key={idea.id}
      className="bg-white text-[#1f1f3C] border-2 border-[#1f1f3C] h-[250px]  overflow-scroll"
    >
      <div className="bg-[#1f1f3C] text-white flex justify-between px-3 py-1 h-[40px]">
        <img
          src={idea.isFavorite ? activeStar : star}
          alt="Star Symbol"
          onClick={() => toggleFavorite(idea.id)}
        />
        <button
          className="text-2xl hover:text-red-500"
          onClick={() => deleteIdea(idea.id)}
        >
          X
        </button>
      </div>
      <h3 className="text-2xl font-semibold my-4 ml-6">{idea.title}</h3>
      <p className="mt-2 overflow-scroll break-words px-6">{idea.body}</p>
    </div>
  ));

  const favoriteIdeaElements = favoriteIdeas.map((idea) => (
    <div
      key={idea.id}
      className="bg-white text-[#1f1f3C] border-2 border-[#1f1f3C] h-[250px]  overflow-scroll"
    >
      <div className="bg-[#1f1f3C] text-white flex justify-between px-3 py-1 h-[40px]">
        <img
          src={idea.isFavorite ? activeStar : star}
          alt="Star Symbol"
          onClick={() => toggleFavorite(idea.id)}
        />
        <button
          className="text-2xl hover:text-red-500"
          onClick={() => deleteIdea(idea.id)}
        >
          X
        </button>
      </div>
      <h3 className="text-2xl font-semibold my-4 ml-6">{idea.title}</h3>
      <p className="mt-2 overflow-scroll break-words px-6">{idea.body}</p>
    </div>
  ));

  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-6">
        {showFavorites ? favoriteIdeaElements : ideaElements}
      </div>
    </section>
  );
};

export default Ideas;
