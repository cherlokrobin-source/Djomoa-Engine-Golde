import os

def get_calendar_by_year(year):
    path = f"Archive_50k_Final/Calendar_{year}.txt"
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            print("\n--- تفاصيل السنة المطلوبة ---")
            print(f.read())
    else:
        print("عذراً، السنة المطلوبة غير موجودة في الأرشيف.")

# استعلام سريع
target = input("أدخل السنة التي تريد استعراض رزمانتها: ")
get_calendar_by_year(target)

