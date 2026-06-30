// Master_Engine.js

// --- إعدادات النطاق الزمني للرزمانة الذهبية ---
export const ENGINE_CONFIG = {
    START_DATE: { day: 1, month: 1, year: 1 }, 
    MAX_LUNAR: { year: 49999, month: 12, day: 30 } 
};

export const WEEK_DAYS = ["الجمعة", "السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];

// --- دالة استخراج اسم اليوم ---
export function getDayName(totalDaysOffset) {
    return WEEK_DAYS[totalDaysOffset % 7];
}

// --- دالة التوافق والمزامنة ---
export function synchronizeSystems(solarDate, lunarDate) {
    if (lunarDate.year >= ENGINE_CONFIG.MAX_LUNAR.year &&
        lunarDate.month >= ENGINE_CONFIG.MAX_LUNAR.month &&
        lunarDate.day >= ENGINE_CONFIG.MAX_LUNAR.day) {

        return {
            status: "LOCKED",
            message: "تم الوصول إلى الحد الأقصى للتقويم القمري: 30 ذو الحجة 49999",
            lunarDate: ENGINE_CONFIG.MAX_LUNAR
        };
    }

    return {
        status: "RUNNING",
        solarDate: solarDate,
        lunarDate: lunarDate
    };
}

