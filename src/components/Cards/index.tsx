import Card from "@/components/Card";
import { ListOfCoins } from "@/utils/types";

interface Props {
  cards: ListOfCoins;
}

const Cards = ({ cards }: Props) => {
  return (
    <table className="card">
      <tbody>
        {cards?.map(
          ({
            id,
            image,
            symbol,
            name,
            current_price,
            price_change_percentage_24h,
            total_volume,
            sparkline_in_7d,
          }) => (
            <Card
              key={id}
              id={id}
              image={image}
              symbol={symbol}
              name={name}
              current_price={current_price}
              price_change_percentage_24h={price_change_percentage_24h}
              total_volume={total_volume}
              sparkline_in_7d={sparkline_in_7d}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default Cards;
