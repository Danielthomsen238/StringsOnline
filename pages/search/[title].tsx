import { useSearchApi, StoreApi } from "../../helpers/useSearchApi";

const Search = () => {
  const { searchApi } = useSearchApi() as StoreApi;
  console.log(searchApi);
  return <h1>search</h1>;
};

export default Search;
