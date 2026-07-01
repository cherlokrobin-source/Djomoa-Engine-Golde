import { MasterEngine } from './Master_Engine.js';

const e = new MasterEngine();

// اختبار المحرك بـ 50,000 يوم
const result = e.calc(50000);

console.log("--- نتائج اختبار التمبورة الزمنية ---");
console.log("اليوم رقم: 50,000");
console.log("يوم الأسبوع:", result.يوم_الاسبوع);
console.log("النظام الشمسي:", result.النظام_الشمسي);
console.log("النظام القمري:", result.النظام_القمري);
console.log("-----------------------------------");

