import { getGoogleReviews, WRITE_REVIEW_URL } from "../lib/googleReviews";
import ReviewStars from "./ReviewStars";
import ReviewsCarousel from "./ReviewsCarousel";

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
  if (!data || (data.totalCount === 0 && data.reviews.length === 0)) {
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
          <ReviewStars rating={data.rating} className="text-2xl md:text-3xl" />
        </div>
        <p className="mt-3 text-charcoal/70">
          {reviewCount} Google vélemény alapján
        </p>
      </div>

      {/* Vélemények, lapozható formában */}
      {data.reviews.length > 0 && <ReviewsCarousel reviews={data.reviews} />}

      {/* Gomb */}
      <div className="mt-12 flex justify-center">{writeReviewButton}</div>
    </div>
  );
}
