interface MobileNavProps {
  showFavorites: boolean;
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MobileNav = ({
  showFavorites,
  setShowFavorites,
  query,
  setQuery,
}: MobileNavProps) => {
  return (
    <nav className="bg-[#1f1f3C] text-white text-center md:hidden">
      <div className="py-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-wider">IdeaBox</h1>
        <button
          className="bg-[#eaeaf4] text-[#1f1f3C] font-bold mt-6 py-1 w-[180px] mx-auto"
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? "Show All Ideas" : "Show Starred Ideas"}
        </button>
        <input
          className="border-2 mt-4 w-fit indent-2 text-black py-1"
          type="text"
          placeholder="Search Idea..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default MobileNav;
