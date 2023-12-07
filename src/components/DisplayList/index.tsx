import { Wrapper } from "./styles";

export interface IDisplayListProps {
  list: string[];
}
const DisplayList: React.FC<IDisplayListProps> = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item: string, index: number) => {
        return <span key={index}>{item}</span>;
      })}
    </Wrapper>
  );
};

export default DisplayList;
