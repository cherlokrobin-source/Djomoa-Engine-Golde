// test_engine.js
import { synchronizeSystems } from './Master_Engine.js';

// تاريخ اختبار يتجاوز الحدود (سيتم تجميده)
const testDate = { year: 49999, month: 12, day: 31 };

const result = synchronizeSystems({year: 49999, month: 12, day: 31}, testDate);

console.log("--- فحص استجابة المحرك ---");
console.log("الحالة:", result.status);
console.log("الرسالة:", result.message);

