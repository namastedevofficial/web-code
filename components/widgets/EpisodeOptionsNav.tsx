import React, { useEffect, useRef } from "react";
import NavLink from "../NavLink";

export default function EpisodeOptionsNav() {
  const episodesNav = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleResize() {
      const episodesNavBottomPosition = episodesNav.current?.getBoundingClientRect()?.bottom ?? 0
      const episodesMenuHeight = window.innerHeight - episodesNavBottomPosition
      document.body.setAttribute('style', `--episodes-position: ${episodesMenuHeight}px`)
    }
    handleResize()
    window.addEventListener("resize", handleResize);
  });
  return (
    <nav
      className="episode-options-nav flex border-b border-neutral-700"
      ref={episodesNav}
    >
      <NavLink href="#episodes" className="py-2 opacity-80 bp1:hidden">
        All Episodes
      </NavLink>
      <NavLink href="#quizzes" className="py-2 opacity-80 ml-6 bp1:ml-0">
        Quizzes
      </NavLink>
      <NavLink href="#qna" className="py-2 opacity-80 ml-6 ">
        QnA
      </NavLink>
      <NavLink href="#discussions" className="py-2 opacity-80 ml-6 ">
        Discussions
      </NavLink>
    </nav>
  );
}
