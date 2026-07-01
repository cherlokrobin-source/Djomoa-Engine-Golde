import ChronosEngine from './engines/ChronosEngine.js';

const engine = new ChronosEngine();

console.log("--- بدء عملية أرشفة الألفية الأولى (1-1000) ---");

try {
    // هذه الدالة ستقوم بإنشاء مجلد Millennium_0001 وتوليد 1000 ملف داخله
    engine.exportMillennium(1, 1000);
    
    console.log("--------------------------------------------------");
    console.log("تمت العملية بنجاح! تحقق من المجلد الجديد في مسار مشروعك.");
} catch (error) {
    console.error("حدث خطأ تقني أثناء عملية الأرشفة:", error);
}

