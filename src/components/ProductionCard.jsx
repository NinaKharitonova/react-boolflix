import { useState } from "react";

export default function ProductionCard({ production }) {
  //Funzione per leggere le bandiere
  const formatLanguage = (lang) => (lang === "en" ? "GB" : lang.toUpperCase());

  //Funzione per inserire i poster nelle Card
  const buildPosterUrl = (poster) =>
    poster ? `https://image.tmdb.org/t/p/w342${poster}` : "default-poster.png";

  //Funzione per convertire il voto in numero intero fino al 5
  const stars = Math.ceil(production.vote_average / 2);

  //Card
  return (
    <ul key={production.id} className="card">
      <li>
        <img
          src={buildPosterUrl(production.poster)}
          alt={production.title || "poster"}
          className="poster"
        />
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
          className="flag"
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
      {production.overview && (
        <li>
          <strong>Descrizione:</strong>
          <p className="description">{production.overview}</p>
        </li>
      )}
    </ul>
  );
}
