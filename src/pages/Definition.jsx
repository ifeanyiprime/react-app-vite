import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  useEffect(() => {
    /* const url = "https://httpstat.us/101"; */
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
    fetch(url)
      .then((response) => {
        console.log(response.status)
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401)  {
          navigate('/login')
        }
        if (!response.ok) {
          setError(true)
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      })
      .catch((e) => {
        setError(true)
        console.log(e.message);
      });
  }, []);
  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to={"/dictionary"}>Search another</Link>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again later.</p>
        <Link to={"/dictionary"}>Search another</Link>
      </>
    );
  }
  return (
    <>
      {!word ? (
        ""
      ) : (
        <>
          <h1>Here is a definition for: {search}</h1>
          {word.map((meaning, i) => {
            return (
              <p key={i}>
                {meaning.partOfSpeech}
                {": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again:</p>
          <DefinitionSearch />
        </>
      )}
    </>
  );
}
