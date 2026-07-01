import DjomoaEngine from './generator.js';

let currentTick = 0n;
const SPEED = 50000n;
const FINAL_DAY = 18262109n;

const monthsSolar = ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"];
const daysOfWeek = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

const colors = {
    reset: "\x1b[0m", cyan: "\x1b[36m", yellow: "\x1b[33m",
    green: "\x1b[32m", red: "\x1b[31m", magenta: "\x1b[35m"
};

function runMonitor() {
    if (currentTick >= FINAL_DAY) {
        process.exit(0);
    }

    currentTick += SPEED;
    const dateData = DjomoaEngine.getAdjustedDate(currentTick);
    const lockStatus = DjomoaEngine.getClosingStatus(currentTick);
    
    const totalDays = Number(currentTick);
    const years = Math.floor(totalDays / 365.24219);
    const monthIndex = Math.floor((totalDays % 365.24219) / 30.44);
    const dayOfWeekIndex = totalDays % 7;

    console.clear();
    console.log(`${colors.cyan}=== [ DJOMOA CHRONOLOGY ENGINE ] ===${colors.reset}`);
    console.log(`${colors.yellow}التاريخ:${colors.reset} ${daysOfWeek[dayOfWeekIndex]}, ${monthsSolar[monthIndex]}، السنة ${years}`);
    console.log(`${colors.magenta}النبضة (Tick):${colors.reset} ${dateData.absoluteIndex}`);
    console.log(`حالة المحرك: ${lockStatus.isLocked ? colors.red + "LOCKED" : colors.green + "STABLE"}${colors.reset}`);
    console.log(`${colors.cyan}===================================${colors.reset}`);
}

setInterval(runMonitor, 100);

