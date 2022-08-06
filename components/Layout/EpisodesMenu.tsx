import EpisodeCard from "../widgets/EpisodeCard";

export default function EpisodesMenu() {
  const episodesList = [
    {
      id: "0",
      title: "Namaste JavaScript Intro",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/namaste-javascript.jpg",
      description: "Learn all about how JavaScript works behind the scenes",
      duration: 4.5,
    },
    {
      id: "1",
      title: "Map, Filter and Reduce",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/map-filter-reduce.jpg",
      description: "Learn most used array methods in JavaScript",
      duration: 8.25,
    },
    {
      id: "2",
      title: "Closures in JavaScript",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/closure.jpg",
      description: "Learn all about how closures work in JavaScript",
      duration: 8,
    },
    {
      id: "3",
      title: "Higher Order Functions",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/higher-order-functions.jpg",
      description: "Higher Order Functions in JavaScript",
      duration: 12.5,
    },
    {
      id: "4",
      title: "Callbacks in JavaScript",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/callbacks.jpg",
      description: "Learn all about callbacks in JavaScript",
      duration: 9,
    },
    {
      id: "5",
      title: "JavaScript Engine Architecture",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/js-engine.jpg",
      description: "Learn all about how JS Engine works behind the scenes",
      duration: 16,
    },
    {
      id: "10",
      title: "Namaste JavaScript Intro",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/namaste-javascript.jpg",
      description: "Learn all about how JavaScript works behind the scenes",
      duration: 4.5,
    },
    {
      id: "11",
      title: "Map, Filter and Reduce",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/map-filter-reduce.jpg",
      description: "Learn most used array methods in JavaScript",
      duration: 8.25,
    },
    {
      id: "12",
      title: "Closures in JavaScript",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/closure.jpg",
      description: "Learn all about how closures work in JavaScript",
      duration: 8,
    },
    {
      id: "13",
      title: "Higher Order Functions",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/higher-order-functions.jpg",
      description: "Higher Order Functions in JavaScript",
      duration: 12.5,
    },
    {
      id: "14",
      title: "Callbacks in JavaScript",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/callbacks.jpg",
      description: "Learn all about callbacks in JavaScript",
      duration: 9,
    },
    {
      id: "15",
      title: "JavaScript Engine Architecture",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/js-engine.jpg",
      description: "Learn all about how JS Engine works behind the scenes",
      duration: 16,
    },
    {
      id: "20",
      title: "Namaste JavaScript Intro",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/namaste-javascript.jpg",
      description: "Learn all about how JavaScript works behind the scenes",
      duration: 4.5,
    },
    {
      id: "21",
      title: "Map, Filter and Reduce",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/map-filter-reduce.jpg",
      description: "Learn most used array methods in JavaScript",
      duration: 8.25,
    },
    {
      id: "22",
      title: "Closures in JavaScript",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/closure.jpg",
      description: "Learn all about how closures work in JavaScript",
      duration: 8,
    },
    {
      id: "23",
      title: "Higher Order Functions",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/higher-order-functions.jpg",
      description: "Higher Order Functions in JavaScript",
      duration: 12.5,
    },
    {
      id: "24",
      title: "Callbacks in JavaScript",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/callbacks.jpg",
      description: "Learn all about callbacks in JavaScript",
      duration: 9,
    },
    {
      id: "25",
      title: "JavaScript Engine Architecture",
      episodeUrl: "/courses/namastejs",
      imageUrl: "/course-images/js-engine.jpg",
      description: "Learn all about how JS Engine works behind the scenes",
      duration: 16,
    },
  ];
  return (
    <nav className="episodes-menu slim-scrollbar bg-grey5 overflow-y-scroll h-[var(--episodes-position)] bp1:fixed bp1:top-[58px] bp1:left-0 bp1:h-screen bp1:w-80 bp2:w-96">
      {episodesList.map((episode, i) => (
        <EpisodeCard
          key={episode.id}
          episodeNumber={i + 1}
          {...episode}
        />
      ))}
    </nav>
  );
}
