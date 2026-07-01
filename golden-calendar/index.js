/**
 * Al-Djomoa Engine - The Golden Calendar Core
 * -------------------------------------------
 * نقطة التأسيس: الجمعة 1 يناير سنة 1 م = 1 محرم سنة 1 هـ
 */

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const year = parseInt(url.searchParams.get("year")) || 1;

    // حساب التزامن انطلاقاً من التأسيس
    const data = calculateSynchronization(year);

    return new Response(JSON.stringify(data, null, 2), {
      headers: { "content-type": "application/json;charset=UTF-8" },
    });
  },
};

function calculateSynchronization(year) {
  // عدد السنوات المنقضية منذ التأسيس
  const yearsPassed = year - 1;
  
  // حساب تقريبي للتزامن القمري (السنة القمرية ≈ 354.36 يوم)
  // السنة الشمسية ≈ 365.2422 يوم
  const lunarYear = Math.floor(yearsPassed * (365.2422 / 354.367));

  return {
    era_start: "1 January 1 AD / 1 Muharram 1 AH",
    requested_year_ad: year,
    estimated_year_ah: 1 + lunarYear,
    details: {
      message: "الحساب يبدأ من نقطة التزامن التاريخية المحددة.",
      solar_basis: "Gregorian",
      lunar_basis: "Hijri"
    }
  };
}

