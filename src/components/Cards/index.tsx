import Card from "@/components/Card";
import { ListOfCoins } from "@/utils/types";

interface Props {
  cards: ListOfCoins;
  favorites: string[];
  saveFavorites: (id: string) => void;
}

const Cards = ({ cards, saveFavorites, favorites }: Props) => {
  return (
    <div>
      {cards?.map((data, index) => (
        <Card
          key={index}
          {...data}
          isFavorite={favorites.includes(data.id)}
          setFavorite={saveFavorites}
        />
      ))}
    </div>
  );
};

export default Cards;
