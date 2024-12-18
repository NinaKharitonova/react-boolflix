import { useGlobalContext } from "../contexts/GlobalContext";
import ProductionList from "./ProductionList";

export default function Main() {
  const { movies, series } = useGlobalContext();
  return (
    <main>
      <ProductionList productions={movies}>
        <h2 className="title-main">Movies List</h2>
      </ProductionList>

      <ProductionList productions={series}>
        <h2 className="title-main">Serie tv List</h2>
      </ProductionList>
    </main>
  );
}
