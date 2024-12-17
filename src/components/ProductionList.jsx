import ProductionCard from "./ProductionCard";

export default function ProductionList({ children, productions }) {
  return (
    <section>
      {children}
      {productions.map((production) => (
        <ProductionCard key={production.id} production={production} />
      ))}
    </section>
  );
}
