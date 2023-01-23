const Chevron = ({ className = "h-2 w-2 fill-active-blue" }) => (
  <svg
    data-testid="chevron"
    viewBox="0 0 20 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
      <g
        id="chevron"
        transform="translate(10.000000, 5.841121) rotate(90.000000) translate(-10.000000, -5.841121) translate(4.158879, -4.158879)"
      >
        <polygon
          id="Path"
          points="11.6005607 9.98654206 11.6537383 10.0397196 1.74102804 19.9523364 0.0887850467 18.3002804 8.36028037 10.0288785 0.0465420561 1.71495327 1.69869159 0.0629906542 11.6114019 9.97570093"
        />
      </g>
    </g>
  </svg>
);

Chevron.displayName = "Chevron";

export default Chevron;
