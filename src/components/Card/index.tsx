import moment from "moment";
import { useState } from "react";
import { DetailedChart } from "@/components/Charts";

const Card = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    id,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h,
    total_volume,
    sparkline_in_7d,
  } = card;

  const imageId = image.split("/coins/images/")[1].split("/")[0];
  const miniChart = `https://www.coingecko.com/coins/${imageId}/sparkline`;

  return (
    <div className="card">
      <tr
        className={`card--header ${isOpen ? "card--header-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <td>
          <img src={image} alt={id} width="20px" />
        </td>

        <td>
          <div>{symbol?.toUpperCase()}</div>
          <div className="label">{name}</div>
        </td>

        <td>
          <img src={miniChart} alt="mini-chart" width="100px" height="37px" />
        </td>

        <td className="align-left">
          <div>${total_volume}</div>
          <div className="label">24h volume</div>
        </td>

        <td className="align-left">
          <div>$ {current_price?.toFixed(2)}</div>
          <div
            className={`label ${
              price_change_percentage_24h !== 0
                ? price_change_percentage_24h > 0
                  ? "label--positive-value"
                  : "label--negative-value"
                : ""
            }`}
          >
            {price_change_percentage_24h}%
          </div>
        </td>
      </tr>
      {isOpen ? (
        <div className="card--more-info">
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
