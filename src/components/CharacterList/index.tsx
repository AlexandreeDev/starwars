import Link from "next/link";

import { MainContent, ResultWrapper } from "./styles";
export interface IcharacterList {
  name: string;
}
export interface IcharacterListProps {
  characterList: IcharacterList[];
}
const CharacterList: React.FC<IcharacterListProps> = ({ characterList }) => {
  return (
    <MainContent>
      <ResultWrapper>
        {characterList.map((item: IcharacterList, index: number) => {
          return (
            <Link href={`/character/${item.name}`} key={index}>
              {item.name}
            </Link>
          );
        })}
      </ResultWrapper>
    </MainContent>
  );
};

export default CharacterList;
