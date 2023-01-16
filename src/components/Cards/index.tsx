import Card from "@/components/Card";
import { ListOfCoins } from "@/utils/types";

interface Props {
  cards: ListOfCoins;
}

const Cards = ({ cards }: Props) => {
  return (
    <div className="w-full pt-10 px-20">
      {cards?.map((data, index) => (
        <Card
          key={index}
          {...data}
          isFavorite={false}
          setFavorite={(id: string) => {}}
        />
      ))}
    </div>
  );
};

export default Cards;
