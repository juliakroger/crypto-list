import Card from "@/components/Card";
import { ListOfCoins } from "@/utils/types";
import { useEffect, useState } from "react";

interface Props {
  cards: ListOfCoins;
}

const FAVORITES_KEY = "crypto-list-favorites";

const Cards = ({ cards }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const items = localStorage.getItem(FAVORITES_KEY);
    if (items) setFavorites(JSON.parse(items) || []);
  }, []);

  const saveFavorites = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((item) => item !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  };

  return (
    <div className="w-full pt-10 px-20">
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
