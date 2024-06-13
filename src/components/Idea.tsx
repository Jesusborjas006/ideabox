import star from "../../public/assets/star.svg";
import activeStar from "../../public/assets/star-active.svg";

interface IdeaProps {
  id: number;
  title: string;
  body: string;
  isFavorite: boolean;
  deleteIdea: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const Idea = ({
  id,
  title,
  body,
  isFavorite,
  deleteIdea,
  toggleFavorite,
}: IdeaProps) => {
  return (
    <div
      key={id}
      className="bg-white text-[#1f1f3C] border-2 border-[#1f1f3C] h-[250px]  overflow-scroll"
    >
      <div className="bg-[#1f1f3C] text-white flex justify-between px-3 py-1 h-[40px]">
        <img
          src={isFavorite ? activeStar : star}
          alt="Star Symbol"
          onClick={() => toggleFavorite(id)}
        />
        <button
          className="text-2xl hover:text-red-500"
          onClick={() => deleteIdea(id)}
        >
          X
        </button>
      </div>
      <h3 className="text-2xl font-semibold my-4 ml-6">{title}</h3>
      <p className="mt-2 overflow-scroll break-words px-6">{body}</p>
    </div>
  );
};

export default Idea;
