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
    <nav className="sticky top-0 bg-[#1f1f3C] text-white min-h-screen p-6 hidden md:block">
      <div className="relative">
        <h1 className="text-3xl font-bold pt-10 tracking-wider">IdeaBox</h1>
        <button
          className="bg-[#eaeaf4] text-[#1f1f3C] font-bold mt-10 p-2 absolute"
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? "Show All Ideas" : "Show Starred Ideas"}
        </button>
        <input
          className="border-2 mt-32 w-fit indent-2 text-black py-1"
          type="text"
          placeholder="Search Idea..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default SideBar;
