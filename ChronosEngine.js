import fs from 'fs';
import path from 'path';

class ChronosEngine {
    constructor() {
        this.LUNAR_RATIO = 1.031267;
        this.LUNAR_YEAR_DAYS = 354.36;

        this.solarMonths = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];

        this.weekDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

        this.hijriMonths = [
            "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
            "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
        ];
    }

    isLeap(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getDaysInYear(year) {
        return this.isLeap(year) ? 366 : 365;
    }

    calculateTotalDaysUpTo(targetYear, targetDay) {
        let total = 0;
        for (let y = 1; y < targetYear; y++) {
            total += this.getDaysInYear(y);
        }
        return total + targetDay;
    }

    exportMillennium(startYear, endYear) {
        const folderName = `Millennium_${String(startYear).padStart(4, '0')}`;
        if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);

        console.log(`--- بدء الأرشفة في: ${folderName} ---`);

        for (let y = startYear; y <= endYear; y++) {
            if (y % 100 === 0) console.log(`[التقدم: ${((y / endYear) * 100).toFixed(0)}%] - تمت معالجة سنة ${y}`);

            const filePath = path.join(folderName, `GoldCalendar_${y}.txt`);
            let content = `الرزمانة الذهبية - السنة ${y}\n\n`;

            let currentDayOfYear = 1;
            const daysInY = this.getDaysInYear(y);

            for (let d = 1; d <= daysInY; d++) {
                const totalDays = this.calculateTotalDaysUpTo(y, d);
                
                // الحسابات
                const weekDay = this.weekDays[(totalDays + 4) % 7]; // يبدأ من الجمعة
                const totalLunarDays = totalDays * this.LUNAR_RATIO;
                const hYear = Math.floor(totalLunarDays / this.LUNAR_YEAR_DAYS) + 1;
                const mIdx = Math.floor((totalLunarDays % this.LUNAR_YEAR_DAYS) / 29.53);
                const dIdx = Math.floor((totalLunarDays % this.LUNAR_YEAR_DAYS) % 29.53) + 1;
                
                // تحديد الشهر الشمسي (تقريبي)
                const sMonth = this.solarMonths[Math.floor((d - 1) / 30.4) % 12];

                content += `${weekDay} | ${d} ${sMonth} | هجري: ${dIdx} ${this.hijriMonths[mIdx % 12]} ${hYear} هـ\n`;
            }
            fs.writeFileSync(filePath, content);
        }
        console.log("--- اكتملت الأرشفة بنجاح ---");
    }
}

export default ChronosEngine;

