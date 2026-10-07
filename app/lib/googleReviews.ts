// A Google cégprofil értékelésének és véleményeinek lekérése
// a Places API (New) segítségével. Csak a szerveren fut,
// így az API kulcs soha nem jut el a látogató böngészőjébe.

export type GoogleReview = {
  authorName: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewsData = {
  rating: number;
  totalCount: number;
  mapsUrl?: string;
  reviews: GoogleReview[];
};

type PlacesApiReview = {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string; uri?: string };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesApiReview[];
};

export const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID ?? "";

// Ezen a linken a vendég egyből a véleményírás ablakba jut.
export const WRITE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : undefined;

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !GOOGLE_PLACE_ID) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=hu`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        // 6 óránként frissül, így az új vélemények pár órán belül megjelennek
        next: { revalidate: 21600 },
      }
    );

    if (!res.ok) {
      console.error("Google vélemények lekérése sikertelen:", res.status);
      return null;
    }

    const data = (await res.json()) as PlacesApiResponse;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? "Google felhasználó",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 0,
        text: r.originalText?.text ?? r.text?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
      }))
      .filter((r) => r.text.trim().length > 0);

    return {
      rating: data.rating ?? 0,
      totalCount: data.userRatingCount ?? 0,
      mapsUrl: data.googleMapsUri,
      reviews,
    };
  } catch (error) {
    console.error("Google vélemények lekérése sikertelen:", error);
    return null;
  }
}