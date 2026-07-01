import fs from 'fs';
import path from 'path';

/**
 * ChronosEngine - المحرك المنطقي للرزنامة الذهبية
 * نسخة الأرشفة مع مؤشر تقدم
 */
class ChronosEngine {
    constructor() {
        this.LUNAR_RATIO = 1.031267;
        this.LUNAR_YEAR_DAYS = 354.36;
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
        
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }

        console.log(`--- بدء الأرشفة في المجلد: ${folderName} ---`);
        
        for (let y = startYear; y <= endYear; y++) {
            // مؤشر تقدم كل 100 سنة
            if (y % 100 === 0) {
                const progress = (((y - startYear + 1) / (endYear - startYear + 1)) * 100).toFixed(0);
                console.log(`[التقدم: ${progress}%] - تمت معالجة سنة ${y}`);
            }

            const fileName = `GoldCalendar_${y}.txt`;
            const filePath = path.join(folderName, fileName);
            
            const daysInYear = this.getDaysInYear(y);
            let content = `الرزمانة الذهبية - السنة ${y} (شمسي)\n`;
            content += `نوع السنة: ${this.isLeap(y) ? "كبيسة" : "بسيطة"}\n\n`;

            for (let day = 1; day <= daysInYear; day++) {
                const totalDays = this.calculateTotalDaysUpTo(y, day);
                const totalLunarDays = totalDays * this.LUNAR_RATIO;
                const hYear = Math.floor(totalLunarDays / this.LUNAR_YEAR_DAYS) + 1;
                const mIdx = Math.floor((totalLunarDays % this.LUNAR_YEAR_DAYS) / 29.53);
                const dIdx = Math.floor((totalLunarDays % this.LUNAR_YEAR_DAYS) % 29.53) + 1;
                
                content += `يوم ${day} | هجري: ${dIdx} ${this.hijriMonths[mIdx % 12]} ${hYear} هـ\n`;
            }

            fs.writeFileSync(filePath, content);
        }
        console.log(`--- اكتملت الأرشفة بنجاح! تم إنشاء ${endYear - startYear + 1} ملف في ${folderName} ---`);
    }
}

export default ChronosEngine;

