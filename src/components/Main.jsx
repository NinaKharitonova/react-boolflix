import { useGlobalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";

export default function Main() {
  const { movies, series } = useGlobalContext();
  return (
    <main>
      <ProductionList productions={movies}>
        <h2>Movies List</h2>
      </ProductionList>
      <hr />
      <ProductionList productions={series}>
        <h2>Serie tv List</h2>
      </ProductionList>
    </main>
  );
}
