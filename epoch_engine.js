export class GoldCalendarEngine {
    constructor() {
        this.SOLAR_YEAR = 365.2425;
        this.LUNAR_RATIO = 1.031267;
        
        this.hijriMonths = [
            "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
            "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
        ];
        
        this.weekDays = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
    }

    // دالة تحويل اليوم المطلق إلى تاريخ هجري تفصيلي
    getHijriDate(totalDays) {
        let hijriDays = totalDays * this.LUNAR_RATIO;
        let year = Math.floor(hijriDays / 354.36) + 1;
        let remainingDays = hijriDays % 354.36;
        
        let monthIndex = Math.floor(remainingDays / 29.53);
        let day = Math.floor(remainingDays % 29.53) + 1;
        
        // حساب اسم اليوم (اليوم 1 هو الجمعة)
        let dayOfWeek = (totalDays + 5) % 7;

        return {
            year: year,
            month: this.hijriMonths[monthIndex] || "ذو الحجة",
            day: day,
            dayName: this.weekDays[dayOfWeek]
        };
    }

    calculate(totalDays) {
        return this.getHijriDate(totalDays);
    }
}

