export default function ProductionCard({ production }) {
  //Funzione per leggere le bandiere
  const formatLanguage = (lang) => {
    if (lang === "en") return "GB";
    return lang.toUpperCase();
  };

  //Funzione per inserire i poster nelle Card
  const buildPosterUrl = (poster) => {
    const imageUrl = `https://image.tmdb.org/t/p/`;
    const size = `/w342`;
    return imageUrl + size + poster;
  };

  //Funzione per convertire il voto in numero intero fino al 5
  const convertVoteToStars = (vote) => {
    return Math.ceil(vote / 2);
  };

  const stars = convertVoteToStars(production.vote_average);

  //Card
  return (
    <ul key={production.id}>
      <li>
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
        <div>
          {/* Stelle piene */}
          {Array.from({ length: stars }, (_, index) => (
            <i
              key={index}
              className="fa-solid fa-star"
              style={{ color: "gold" }}
            ></i>
          ))}
          {/* Stelle vuote */}
          {Array.from({ length: 5 - stars }, (_, index) => (
            <i key={index} className="fa-regular fa-star"></i>
          ))}
        </div>
      </li>
    </ul>
  );
}
