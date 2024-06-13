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

  console.log(ideaInputs);

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
      console.log("Clicked");
      const newIdea = {
        id: Date.now(),
        title: ideaInputs.title,
        body: ideaInputs.body,
      };
      addIdea(newIdea);
    }
  };

  return (
    <form className="bg-[#A8AAD2] h-[40%] flex items-center">
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
          ></textarea>
        </div>

        <button
          className="bg-[#1f1f3C] text-white font-semibold py-2"
          onClick={submitIdea}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
