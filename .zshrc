# --- إعدادات الرزمانة الذهبية ---
COLOR_RED="\e[38;5;196m"
COLOR_GREEN="\e[38;5;46m"
COLOR_YELLOW="\e[38;5;226m"
COLOR_CYAN="\e[1;36m"
COLOR_PURPLE="\e[38;5;135m"
COLOR_RESET="\e[0m"

clear
echo -e "${COLOR_RED}"
echo "  ================================================="
echo -e "${COLOR_GREEN}   الـرزمـانـة الـذهـبـيـة | The Golden Calendar${COLOR_RED}"
echo "  -------------------------------------------------"
echo -e "${COLOR_GREEN}   حسبان الشمس والقمر بـبـيـان آدم عليه السلام${COLOR_RED}"
echo -e "${COLOR_YELLOW}   Developed by: Nemimeche Benaissa${COLOR_RED}"
echo "  ================================================="
echo -e "${COLOR_RESET}"

# عرض الوقت
echo -e "${COLOR_GREEN}التوقيت الحالي:${COLOR_RESET} ${COLOR_CYAN}$(date +'%A, %d %B %Y | %H:%M:%S')${COLOR_RESET}"

# جلب الأخبار بالفرنسية
echo -e "\n${COLOR_PURPLE}--- Dernières actualités ---${COLOR_RESET}"
curl -s "https://news.google.com/rss?hl=fr&gl=FR&ceid=FR:fr" | grep -E '<title>.*</title>' | sed -n '3,7p' | sed 's/<title>//;s/<\/title>//' | sed 's/^/  • /'
echo ""

# الأوامر المختصرة
alias golden='cd ~/storage/documents/Djomoa && node epoch_engine.js'
PROMPT="${COLOR_GREEN}%n@termux${COLOR_RESET}:${COLOR_RED}%~${COLOR_RESET}$ "
