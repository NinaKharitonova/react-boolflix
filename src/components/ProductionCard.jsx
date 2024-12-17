export default function ProductionCard({ production }) {
  const formatLanguage = (lang) => {
    if (lang === "en") return "GB";
    return lang.toUpperCase();
  };

  const buildPosterUrl = (poster) => {
    const imageUrl = `https://image.tmdb.org/t/p/`;
    const size = `/w185`;
    return imageUrl + size + poster;
  };

  return (
    <ul key={production.id}>
      <li>
        <strong>Poster:</strong>
        <img src={buildPosterUrl(production.poster)} />
      </li>
      <li>
        <strong>Titolo:</strong>
        {production.title}
      </li>
      <li>
        <strong>Titolo Originale:</strong>
        {production.original_title}
      </li>
      <li>
        <strong>Lingua:</strong>
        {production.original_language}
        <img
          src={`https://flagsapi.com/${formatLanguage(
            production.lang
          )}/flat/64.png`}
          alt={`Flag of ${production.original_language || "unknown"}`}
        />
      </li>
      <li>
        <strong>Voto:</strong>
        {production.vote_average}
      </li>
    </ul>
  );
}
