import React, { useState } from "react";
import ReactLoading from "react-loading";

import { MagnifyingGlassIcon, StarIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import { useRouter } from "next/router";

import logoImg from "../assets/logo.png";
import CharacterList, { IcharacterList } from "../components/CharacterList";
import { starwarsService } from "../services/starwarsService";
import {
  Button,
  HeaderContainer,
  MainContent,
  Image,
  Input,
  SearchButton,
  SearchBarWrapper,
  ResultListWrapper,
} from "../styles/pages/app";

export default function Home() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [characterList, setCharacterList] = useState<IcharacterList[]>([
    { name: "" },
  ]);
  const { searchByName } = starwarsService();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButton = (searchPeople: any) => {
    setLoading(true);

    searchByName(searchPeople)
      .then((response) => {
        setCharacterList(response.data.results);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>StarWars</title>
      </Head>
      <div>
        <HeaderContainer>
          <Button onClick={() => router.push("/")}>
            Home
            <MagnifyingGlassIcon />
          </Button>
          <Button onClick={() => router.push("/favoritesPage")}>
            Favorites
            <StarIcon />
          </Button>
        </HeaderContainer>

        <Image src={logoImg.src} alt="" />
        <MainContent>
          <SearchBarWrapper>
            <Input
              type="text"
              placeholder="character"
              onChange={handleInputChange}
              value={searchInput}
            />
            <SearchButton
              onClick={() => {
                handleSearchButton(searchInput);
              }}
            >
              Search
              <MagnifyingGlassIcon />
            </SearchButton>
          </SearchBarWrapper>

          <ResultListWrapper>
            {loading && (
              <ReactLoading
                type={"bubbles"}
                color={"black"}
                height={100}
                width={100}
              />
            )}

            <CharacterList characterList={characterList} />
          </ResultListWrapper>
        </MainContent>
      </div>
    </>
  );
}
