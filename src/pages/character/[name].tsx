import React, { useEffect, useState } from "react";

import {
  Birth,
  BoxNamesBar,
  Characterh1,
  FilmesTag,
  Gender,
} from "@/src/components/CharacterList/styles";
import DisplayList from "@/src/components/DisplayList";
import { starwarsService } from "@/src/services/starwarsService";
import { Button, ButtonAdd, HeaderContainer } from "@/src/styles/pages/app";
import { MagnifyingGlassIcon, StarIcon } from "@radix-ui/react-icons";
import { bouncyArc } from "ldrs";
import Head from "next/head";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <Button onClick={handleButtonClick}>
      Home
      <MagnifyingGlassIcon />
    </Button>
  );
};

bouncyArc.register();

export const LoadingContainer = {
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
};

export default function CharacterPage() {
  const router = useRouter();
  const { query } = router;
  const name = query.name as string;
  const { searchByName, getByUrl } = starwarsService();

  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState({
    birth_year: "",
    films: [],
    gender: "",
    homeworld: "",
    name: "",
  });
  const [filmData, setFilmData] = useState<string[]>([]);
  const [planetData, setPlanetData] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteButtonClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favoritesPage") || "[]");

    const updatedFavorites = isFavorite
      ? favorites.filter((fav: string) => fav !== characterData.name)
      : [...favorites, characterData.name];

    localStorage.setItem("favoritesPage", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const characterResponse = await searchByName(name);
        const character = characterResponse?.data?.results[0];
        setCharacterData(character);

        const filmPromises = character.films.map(async (filmUrl: string) => {
          try {
            const filmResponse = await getByUrl(filmUrl);
            const filmTitle = filmResponse.data.title;
            setFilmData((prevData) => [...prevData, filmTitle]);
          } catch (filmError) {
            console.log("Film Error:", filmError);
          }
        });

        try {
          const planetResponse = await getByUrl(character.homeworld);
          const planetTitle = planetResponse.data.name;
          setPlanetData([planetTitle]);
        } catch (planetError) {
          console.log("Planet Error:", planetError);
        }

        await Promise.all([...filmPromises]);

        const favorites = JSON.parse(
          localStorage.getItem("favoritesPage") || "[]",
        );
        setIsFavorite(favorites.includes(character.name));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (name) {
      fetchData();
    }
  }, [name]);

  return (
    <>
      <Head>
        <title>StarWars</title>
      </Head>
      <HeaderContainer>
        <BackButton />
      </HeaderContainer>
      <BoxNamesBar>
        <div style={LoadingContainer}>
          {loading && (
            <l-bouncy-arc size="100" speed="1.65" color="black"></l-bouncy-arc>
          )}
        </div>
        {!loading && (
          <>
            <Characterh1>{characterData.name}</Characterh1>
            <ButtonAdd onClick={handleFavoriteButtonClick}>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              <StarIcon />
            </ButtonAdd>
            <Birth>Birth Year: {characterData.birth_year}</Birth>
            <Gender>Gender: {characterData.gender}</Gender>
            <FilmesTag>
              <Gender>Films:</Gender>
              <DisplayList list={filmData} />
            </FilmesTag>
            <FilmesTag>
              <Gender>Homeworld:</Gender>
              <DisplayList list={planetData} />
            </FilmesTag>
          </>
        )}
      </BoxNamesBar>
    </>
  );
}
