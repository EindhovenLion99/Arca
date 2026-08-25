import styles from "./AccountCardDetails.module.css";

interface Props {
  color?: string;
  children?: React.ReactNode;
}

const CardImage = ({ color, children }: Props) => {
  return (
    <div className={styles.card}>
      <svg
        className={styles.background}
        viewBox="0 0 400 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="cardGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#705600" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>

        <rect
          x="10"
          y="10"
          width="380"
          height="230"
          rx="20"
          fill="url(#cardGradient)"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <line
          x1="10"
          y1="110"
          x2="390"
          y2="110"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle
          cx="330"
          cy="205"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="350"
          cy="205"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {children}
      </svg>
    </div>
  )
}

export default CardImage

