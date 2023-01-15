import moment from "moment";
import { useState } from "react";
import { DetailedChart } from "@/components/Charts";
import { CoinData } from "@/utils/types";
import { parseClassName } from "@/utils/parseClassName";
import { formatDollar } from "@/utils/formatDollar";

const Card = ({
  id,
  image,
  symbol,
  name,
  current_price,
  price_change_percentage_24h,
  total_volume,
  sparkline_in_7d,
}: CoinData) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageId = image.split("/coins/images/")[1].split("/")[0];
  const miniChart = `https://www.coingecko.com/coins/${imageId}/sparkline`;

  const columns = [
    {
      id: "title",
      content: (
        <>
          <img src={image} alt={id} width="20px" />
          <div className="mx-2">{name}</div>
          <div className="text-xs text-zinc-400">{symbol?.toUpperCase()}</div>
        </>
      ),
      center: true,
    },
    {
      id: "chart",
      content: <img src={miniChart} alt="mini-chart" />,
      center: true,
    },
    {
      id: "volume",
      content: (
        <>
          <div>{formatDollar(total_volume)}</div>
          <div className="text-xs text-zinc-300">24h volume</div>
        </>
      ),
      center: true,
      column: true,
    },
    {
      id: "price",
      content: (
        <>
          <div>{formatDollar(current_price, 2)}</div>
          <div
            className={parseClassName([
              "text-xs",
              price_change_percentage_24h !== 0
                ? price_change_percentage_24h > 0
                  ? "text-green-400"
                  : "text-red-400"
                : "",
            ])}
          >
            {price_change_percentage_24h}%
          </div>
        </>
      ),
      end: true,
      column: true,
    },
  ];

  return (
    <div className="w-full m-2 mr-10">
      <div
        className={parseClassName([
          "cursor-pointer w-full flex items-center justify-between px-6",
          isOpen
            ? "rounded-t-xl bg-card-background/70"
            : "rounded-xl bg-card-background hover:bg-card-background/80",
        ])}
        onClick={() => setIsOpen(!isOpen)}
      >
        {columns.map(({ column, id, content, center, end }) => (
          <div
            className={parseClassName([
              "py-4",
              `flex basis-1/${columns.length}`,
              column ? "flex-col" : null,
              center ? "items-center" : null,
              end ? "items-end" : null,
            ])}
            key={id}
          >
            {content}
          </div>
        ))}
      </div>

      {isOpen ? (
        <div className="w-full bg-card-background/70 border-t border-gray-600 rounded-b-xl">
          <DetailedChart
            data={sparkline_in_7d?.price?.map((price, i) => ({
              date: moment()
                .subtract(167 - i, "hour")
                .format("ddd DD MMM YYYY, h A"),
              value: price?.toFixed(2),
              y: price,
            }))}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Card;
