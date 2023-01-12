import moment from "moment";
import { useState } from "react";
import { DetailedChart } from "@/components/Charts";
import { CoinData } from "@/utils/types";
import { parseClassName } from "@/utils/parseClassName";

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

  return (
    <div className="w-full m-2 mr-10">
      <tr
        className={parseClassName([
          "cursor-pointer w-full flex items-center justify-between p-4",
          isOpen
            ? "rounded-t bg-card-open-background"
            : "rounded bg-card-background",
        ])}
        onClick={() => setIsOpen(!isOpen)}
      >
        <td className="py-4">
          <img src={image} alt={id} width="20px" />
        </td>

        <td className="py-4">
          <div>{symbol?.toUpperCase()}</div>
          <div className="text-xs text-zinc-300">{name}</div>
        </td>

        <td className="py-4">
          <img src={miniChart} alt="mini-chart" width="100px" height="37px" />
        </td>

        <td className="py-4flex flex-col items-end">
          <div>${total_volume}</div>
          <div className="text-xs text-zinc-300">24h volume</div>
        </td>

        <td className="py-4flex flex-col items-end">
          <div>$ {current_price?.toFixed(2)}</div>
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
        </td>
      </tr>
      {isOpen ? (
        <div className="w-full bg-card-open-background border-t border-gray-600 rounded-b">
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
