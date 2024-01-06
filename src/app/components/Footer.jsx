import React from "react";

const Footer = () => {
  const em2 = "✌️";
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Nivedita Gudavalli</span>
        <p className="text-slate-1000">- Made by Me{em2}</p>
      </div>
    </footer>
  );
};

export default Footer;
