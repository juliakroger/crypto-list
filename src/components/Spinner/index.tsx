const Spinner = () => {
  return (
    <span className="flex justify-center p-4" data-testid="loading-spinner">
      <svg
        className="w-8 h-8 animate-spin"
        data-testid="spinner"
        viewBox="0 0 118 118"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
          <g id="spinner">
            <circle
              id="Oval"
              transform="translate(44.990713, 12.131899) rotate(-17.000000) translate(-44.990713, -12.131899) "
              cx="44.9907128"
              cy="12.1318987"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.88"
              transform="translate(78.462752, 13.886094) rotate(23.000000) translate(-78.462752, -13.886094) "
              cx="78.4627516"
              cy="13.8860939"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.77"
              transform="translate(102.976246, 36.745297) rotate(63.000000) translate(-102.976246, -36.745297) "
              cx="102.976246"
              cy="36.7452972"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.66"
              transform="translate(107.061059, 70.013433) rotate(103.000000) translate(-107.061059, -70.013433) "
              cx="107.061059"
              cy="70.0134334"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.55"
              transform="translate(88.805862, 98.123972) rotate(143.000000) translate(-88.805862, -98.123972) "
              cx="88.8058624"
              cy="98.1239717"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.44"
              transform="translate(56.752464, 107.923679) rotate(183.000000) translate(-56.752464, -107.923679) "
              cx="56.7524645"
              cy="107.923679"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.33"
              transform="translate(25.899007, 94.827163) rotate(223.000000) translate(-25.899007, -94.827163) "
              cx="25.8990067"
              cy="94.8271631"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.22"
              transform="translate(10.682165, 64.962430) rotate(263.000000) translate(-10.682165, -64.962430) "
              cx="10.6821649"
              cy="64.9624295"
              r="9"
            />
            <circle
              id="Oval"
              fillOpacity="0.11"
              transform="translate(18.222068, 32.303519) rotate(303.000000) translate(-18.222068, -32.303519) "
              cx="18.2220685"
              cy="32.303519"
              r="9"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

export default Spinner;
