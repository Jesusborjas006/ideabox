import { IdeaType } from "../types";

interface IdeasProps {
  ideas: [] | IdeaType[];
}

const Ideas = ({ ideas }: IdeasProps) => {
  const ideaElements = ideas.map((idea) => (
    <div
      key={idea.id}
      className="bg-white text-[#1f1f3C] border-2 border-[#1f1f3C] h-[300px] text-center "
    >
      <h3 className="text-2xl font-semibold my-4">{idea.title}</h3>
      <p className="mt-2">{idea.body}</p>
    </div>
  ));
  return (
    <section className="p-10">
      <div className="grid grid-cols-3 gap-6">{ideaElements}</div>
    </section>
  );
};

export default Ideas;
