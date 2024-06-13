import { IdeaType } from "../types";

interface IdeasProps {
  ideas: [] | IdeaType[];
}

const Ideas = ({ ideas }: IdeasProps) => {
  const ideaElements = ideas.map((idea) => (
    <div key={idea.id}>
      <h3>{idea.title}</h3>
      <p>{idea.body}</p>
    </div>
  ));
  return (
    <section className="bg-[#EAEAF4] h-[60%]">
      <h2>Ideas Go Here</h2>
      {ideaElements}
    </section>
  );
};

export default Ideas;
