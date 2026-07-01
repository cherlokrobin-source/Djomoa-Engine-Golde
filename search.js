import { MasterEngine } from './Master_Engine.js';

const engine = new MasterEngine();

// قراءة المدخل من سطر الأوامر
const args = process.argv.slice(2);
const totalDays = parseInt(args[0]);

if (isNaN(totalDays)) {
    console.log("الرجاء إدخال رقم يوم صحيح.");
    console.log("مثال: node search.js 50000");
} else {
    const result = engine.calc(totalDays);
    console.log(`--- نتائج الرزمانة الذهبية لليوم رقم: ${totalDays} ---`);
    console.log("يوم الأسبوع:", result.يوم_الاسبوع);
    console.log("النظام الشمسي:", result.النظام_الشمسي);
    console.log("النظام القمري:", result.النظام_القمري);
    console.log("-----------------------------------------");
}
