import { IdeaType } from "../types";

interface IdeasProps {
  ideas: [] | IdeaType[];
}

const Ideas = ({ ideas }: IdeasProps) => {
  const ideaElements = ideas.map((idea) => (
    <div
      key={idea.id}
      className="bg-white text-[#1f1f3C] border-2 border-[#1f1f3C] h-[250px]  overflow-scroll"
    >
      <div className="bg-[#1f1f3C] text-white flex justify-end pr-4 py-1">
        <p className="text-2xl cursor-pointer hover:text-red-500">X</p>
      </div>
      <h3 className="text-2xl font-semibold my-4 ml-6">{idea.title}</h3>
      <p className="mt-2 overflow-scroll break-words px-6">{idea.body}</p>
    </div>
  ));
  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-6">{ideaElements}</div>
    </section>
  );
};

export default Ideas;
