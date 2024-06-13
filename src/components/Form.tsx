const Form = () => {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" />

      <label htmlFor="body">Body</label>
      <input id="body" type="text" />

      <button>Save</button>
    </form>
  );
};

export default Form;
