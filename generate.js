import { MasterEngine } from './Master_Engine.js';
import fs from 'fs';

const engine = new MasterEngine();

console.log("الرزمانة الذهبية: جاري توليد بيانات التزامن لـ 100 سنة...");

try {
    const data = engine.generateSync(100);
    fs.writeFileSync('Golden_Calendar_100_Years.txt', data);
    console.log("تم بنجاح! تم حفظ الرزمانة في ملف: Golden_Calendar_100_Years.txt");
} catch (error) {
    console.error("حدث خطأ أثناء الكتابة:", error);
}

