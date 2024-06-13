const Form = () => {
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
          ></textarea>
        </div>

        <button className="bg-[#1f1f3C] text-white font-semibold py-2">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
