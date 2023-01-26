import Card from "@/components/Card";
import { ListOfCoins } from "@/utils/types";

interface Props {
  cards: ListOfCoins;
  favorites: string[];
  saveFavorites: (id: string) => void;
  currency: string;
}

const Cards = ({ cards, saveFavorites, favorites, currency }: Props) => {
  return (
    <div>
      {cards?.map((data, index) => (
        <Card
          key={index}
          isFavorite={favorites.includes(data.id)}
          setFavorite={saveFavorites}
          currency={currency}
          {...data}
        />
      ))}
    </div>
  );
};

export default Cards;
