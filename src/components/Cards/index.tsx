import Card from "@/components/Card";

const Cards = ({ cards }) => {
  return (
    <table className="card">
      <tbody>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </tbody>
    </table>
  );
};

export default Cards;
