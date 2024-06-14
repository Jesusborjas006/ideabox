interface SideBarProps {
  showFavorites: boolean;
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({
  showFavorites,
  setShowFavorites,
  query,
  setQuery,
}: SideBarProps) => {
  return (
    <nav className="sticky top-0 bg-[#1f1f3C] text-white min-h-screen px-10">
      <h1 className="text-5xl font-bold pt-10 tracking-wider">IdeaBox</h1>
      <button
        className="bg-[#eaeaf4] text-[#1f1f3C] text-lg font-bold w-[200px] mt-10 py-2"
        onClick={() => setShowFavorites((prev) => !prev)}
      >
        {showFavorites ? "Show All Ideas" : "Show Starred Ideas"}
      </button>
      <input
        className="border-2 mt-10 w-full indent-2 text-black py-1"
        type="text"
        placeholder="Search Idea..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </nav>
  );
};

export default SideBar;
