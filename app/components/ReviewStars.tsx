export default function ReviewStars({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) {
  const filled = Math.round(rating);
  return (
    <span
      className={`text-gold-dark tracking-wider ${className}`}
      aria-label={`${rating} csillag az 5-ből`}
    >
      {"★".repeat(filled)}
      <span className="text-charcoal/20">{"★".repeat(5 - filled)}</span>
    </span>
  );
}