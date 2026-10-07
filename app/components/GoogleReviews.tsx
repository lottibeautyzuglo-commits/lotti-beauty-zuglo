import { getGoogleReviews, WRITE_REVIEW_URL } from "../lib/googleReviews";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  const filled = Math.round(rating);
  return (
    <span className={`text-gold-dark tracking-wider ${className}`} aria-label={`${rating} csillag az 5-ből`}>
      {"★".repeat(filled)}
      <span className="text-charcoal/20">{"★".repeat(5 - filled)}</span>
    </span>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  const writeReviewButton = WRITE_REVIEW_URL && (
    <a
      href={WRITE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gold hover:bg-gold-dark text-black px-8 py-3 rounded-full text-lg transition-colors"
    >
      Írj véleményt
    </a>
  );

  // Ha nincs adat (például hiba vagy még nincs vélemény), egy meghívó szöveg jelenik meg
  if (!data || data.totalCount === 0) {
    return (
      <div className="flex flex-col items-center gap-8">
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-charcoal/70 italic">
          Jártál már nálam? Örülnék, ha megosztanád a tapasztalataidat.
        </p>
        {writeReviewButton}
      </div>
    );
  }

  // A Google összesítő száma néha késik a vélemények mögött,
  // ezért a kettő közül a nagyobbat mutatjuk.
  const reviewCount = Math.max(data.totalCount, data.reviews.length);

  const ratingText = data.rating.toLocaleString("hu-HU", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Összesítés */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-4">
          <span className="text-5xl md:text-6xl font-(family-name:--font-playfair) text-charcoal">
            {ratingText}
          </span>
          <Stars rating={data.rating} className="text-2xl md:text-3xl" />
        </div>
        <p className="mt-3 text-charcoal/70">
          {reviewCount} Google vélemény alapján
        </p>
      </div>

      {/* Vélemény kártyák */}
      {data.reviews.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 text-left">
          {data.reviews.map((review, index) => (
            <article
              key={`${review.authorName}-${index}`}
              className="bg-cream rounded-2xl p-8 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            >
              <Stars rating={review.rating} className="text-lg" />
              <p className="mt-4 text-charcoal/85 leading-relaxed line-clamp-6 flex-1">
                {review.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-semibold shrink-0">
                  {review.authorName.charAt(0).toUpperCase()}
                </span>
                <div className="text-sm">
                  {review.authorUrl ? (
                    <a
                      href={review.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal font-medium hover:text-gold-dark transition-colors"
                    >
                      {review.authorName}
                    </a>
                  ) : (
                    <span className="text-charcoal font-medium">{review.authorName}</span>
                  )}
                  <p className="text-charcoal/60">
                    {review.relativeTime}
                    {review.relativeTime ? ", " : ""}Google
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Gomb */}
      <div className="mt-12 flex justify-center">
        {writeReviewButton}
      </div>
    </div>
  );
}