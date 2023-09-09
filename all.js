/**
 * مقادیر دراپ داون شهرها را با توجه به استان انتخاب شده به روز می کند
 */
function updateCities() {
    const provincesElement = document.getElementById('provinces');
    const selectedProvince = provincesElement.value;
    const citiesElement = document.getElementById('cities');
    citiesElement.innerHTML = ""; // پاک کردن تمام گزینه‌ها

    const cities = getCities(selectedProvince);
    cities.forEach(function(value) {
        const optionElement = document.createElement('option');
        optionElement.value = value;
        optionElement.innerText = value;
        citiesElement.appendChild(optionElement);
    });
}

function getCities(province) {
    const cityData = {
        'hamedan': [
            "همدان",
            "نهاوند",
            "ملایر",
            "فامنین",
            "قهاوند",
            "لالجین"
        ],
        'tehran': [
            "تهران",
            "ورامین",
            "تجریش"
        ]
        
    };

    return cityData[province] || [];
}

// صفحه را با شهرهای استان اولیه (همدان) بارگذاری کنید
updateCities();


کشکسرای
سهند
سیس
دوزدوزان
تیمورلو
صوفیان
سردرود
هادیشهر
هشترود
زرنق
ترکمانچای
ورزقان
تسوج
زنوز
ایلخچی
شرفخانه
مهربان
مبارک شهر
تیکمه داش
باسمنج
سیه رود
میانه
خمارلو
خواجه
بناب مرند
قره آغاج
وایقان
مراغه
ممقان
خامنه
خسروشاه
لیلان
نظرکهریزی
اهر
بخشایش
آقکند
جوان قلعه
کلیبر
مرند
اسکو
شندآباد
شربیان
گوگان
بستان آباد
تبریز
جلفا
اچاچی
هریس
یامچی
خاروانا
کوزه کنان
خداجو(خراجو)
آذرشهر
شبستر
سراب
ملکان
بناب
هوراند
کلوانق
ترک
عجب شیر
آبش احمد
