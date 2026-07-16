export const Menu = ({ showDemo, onToggleDemo }) => {
  return (
    <div className="menu">
      <img className="menu__logo" src="logo.png" alt="logo" />
      <div className="menu__buttons">
        {!showDemo && (
          <>
            <a className="menu__button" href="#home">
              Home
            </a>
            <a className="menu__button" href="#skills">
              Skills
            </a>
            <a className="menu__button" href="#projects">
              Projects
            </a>
            <a className="menu__button" href="#contact">
              Contact
            </a>
            <a className="menu__button" href="#mission">
              Mission
            </a>
            <a className="menu__button" href="#vision">
              Vision
            </a>
          </>
        )}
        <button
          onClick={onToggleDemo}
          className="menu__button px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-[#ccff00] hover:text-[#0D1734] hover:border-[#ccff00] transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer"
        >
          {showDemo ? "Portfolio" : "Reveal Lab"}
        </button>
      </div>
    </div>
  );
};

