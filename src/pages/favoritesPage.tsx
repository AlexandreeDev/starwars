import React, { useEffect, useState } from "react";

import { Button, HeaderContainer } from "@/src/styles/pages/app";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import { useRouter } from "next/router";

import { BoxNamesBar, FavoriteText } from "../components/CharacterList/styles";

const FavoritesPage = () => {
  const router = useRouter();

  const [favoriteCharacters, setFavoriteCharacters] = useState<String[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = JSON.parse(
        localStorage.getItem("favoritesPage") || "[]",
      );
      setFavoriteCharacters(favorites);
      console.log(favorites);
    };

    fetchFavorites();
  }, []);

  return (
    <>
      <Head>
        <title>StarWars</title>
      </Head>
      <HeaderContainer>
        <Button onClick={() => router.push("/")}>
          Home <MagnifyingGlassIcon />
        </Button>
      </HeaderContainer>
      <div>
        <BoxNamesBar>
          <h1>Favorites</h1>
          <ul>
            {favoriteCharacters.map((character, index) => (
              <FavoriteText key={index}>{character}</FavoriteText>
            ))}
          </ul>
        </BoxNamesBar>
      </div>
    </>
  );
};

export default FavoritesPage;
