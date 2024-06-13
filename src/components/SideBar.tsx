const SideBar = () => {
  return (
    <nav className="sticky top-0 bg-[#1f1f3C] text-white min-h-screen px-10">
      <h1 className="text-5xl font-bold pt-10 tracking-wider">IdeaBox</h1>
      <button className="bg-[#eaeaf4] text-[#1f1f3C] text-lg font-bold w-full mt-10 py-2">
        Show Starred Ideas
      </button>
    </nav>
  );
};

export default SideBar;
