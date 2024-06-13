import { useState } from "react";
import { IdeaType } from "../types";

interface FormProps {
  addIdea: (newIdea: IdeaType) => void;
}

const Form = ({ addIdea }: FormProps) => {
  const [ideaInputs, setIdeaInputs] = useState({
    title: "",
    body: "",
  });
  const formCondition = ideaInputs.title && ideaInputs.body;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdeaInputs({ ...ideaInputs, [e.target.name]: e.target.value });
  };

  const submitIdea = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ideaInputs.title || ideaInputs.body) {
      const newIdea = {
        id: Date.now(),
        title: ideaInputs.title,
        body: ideaInputs.body,
        isFavorite: false,
      };
      addIdea(newIdea);
      setIdeaInputs({ title: "", body: "" });
    }
  };

  return (
    <form className="bg-[#A8AAD2] flex items-center py-16">
      <div className="w-[50%] mx-auto flex flex-col gap-y-6">
        <div className="flex">
          <label className="text-lg" htmlFor="title">
            Title:
          </label>
          <input
            className="border-2 border-black ml-2 w-full"
            id="title"
            type="text"
            name="title"
            onChange={handleChange}
            value={ideaInputs.title}
          />
        </div>

        <div className="flex items-center">
          <label className="text-lg" htmlFor="body">
            Body:
          </label>
          <textarea
            className="border-2 border-black ml-1 w-full resize-none"
            id="body"
            rows={2}
            name="body"
            onChange={handleChange}
            value={ideaInputs.body}
          ></textarea>
        </div>

        <button
          className={`bg-[#1f1f3C] text-white font-semibold py-2 ${
            !formCondition
              ? "cursor-not-allowed opacity-50"
              : "cursor-auto opacity-100"
          }`}
          onClick={submitIdea}
          disabled={!formCondition}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
