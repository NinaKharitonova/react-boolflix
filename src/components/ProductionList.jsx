import ProductionCard from "./ProductionCard";

export default function ProductionList({ children, productions }) {
  return (
    <section className="section-page">
      {children}
      <div className="wrap-card">
        {productions.map((production) => (
          <ProductionCard key={production.id} production={production} />
        ))}
      </div>
    </section>
  );
}
