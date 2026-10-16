BLADE STUDIO: САЙТ-ПОРТФОЛІО ПРОЄКТУ «СЛОВО ЗА ТОБОЮ»

ЩО Є В ПАПЦІ
index.html          сторінка. Тексти редагуються тут. Шукайте коментарі <!-- EDIT -->.
css/style.css       кольори, шрифти, розміри. Кольори — у блоці :root вгорі файлу.
js/main.js          часова капсула і появи блоків при прокрутці.
media/video/        ВАШЕ ВІДЕО.
media/photos/       фото для героя і обкладинки відео.
media/locations/    фото локацій (необов'язково).

ЩО ВИ ЗАЛИВАЄТЕ САМІ
1. media/video/main.mp4: відео інтерв'ю. Формат MP4, 16:9, H.264, до 50 МБ.
   Файл має називатися саме main.mp4.
2. media/video/capsule.mp4: відео часової капсули. Рекомендую 6-8 секунд.
   Якщо файлу немає, працює запасна анімація з роками 2026 → 2035.
3. media/locations/: фото локацій. Уже на місці: studio.png, khreshchatyk.png,
   andriivskyi.png, vdnh.png, arka.jpg. Ще немає: lavra.jpg (покладіть файл,
   і картка покаже фото). Без файлу картка показує градієнт.
4. media/photos/: studio-hero.png (фон героя) і poster.png (обкладинка відео).
   Щоб замінити, покладіть новий файл з тим самим іменем.

ЯК ПОДИВИТИСЯ ЛОКАЛЬНО
Двічі клацніть index.html. Сайт відкриється у браузері.

ЯК ВИКЛАСТИ НА GITHUB (через Termux)
1. На github.com створіть порожній ПУБЛІЧНИЙ репозиторій blade-studio (без README).
2. У Termux виконайте:
     pkg update && pkg install git unzip
     termux-setup-storage
     unzip blade-studio.zip
     cd blade-studio
     cp ~/storage/dcim/Camera/ВАШ_ФАЙЛ.mp4 media/video/main.mp4
     git init
     git branch -M main
     git add .
     git commit -m "Blade Studio site"
     git remote add origin https://github.com/ВАШ_ЛОГІН/blade-studio.git
     git push -u origin main
3. Пароль GitHub більше не приймається. Створіть Personal Access Token:
   GitHub → Settings → Developer settings → Personal access tokens.
   Вставте його замість пароля.
Шлях до галереї в Termux може відрізнятися. Перевірте в папці ~/storage/dcim.

ЯК ПІДКЛЮЧИТИ NETLIFY
1. app.netlify.com → Add new site → Import an existing project → GitHub → blade-studio.
   Назви кнопок можуть трохи відрізнятися.
2. Build command і Publish directory залиште порожніми (сайт без збірки).
3. Site configuration → Change site name → blade-studio.
   Адреса сайту: https://blade-studio.netlify.app
4. Щоб оновити сайт: змініть файл, потім у Termux:
     git add .
     git commit -m "оновлення"
     git push
   Netlify оновить сайт сам.

ВАЖЛИВО
- Кожен деплой на безкоштовному плані Netlify витрачає кредити. За оглядами тарифів,
  це 15 кредитів на деплой із 300 на місяць. Перевіряйте лічильник у панелі.
- Відео більше 50 МБ стисніть: H.264, 1080p, близько 3 Мбіт/с.
- Перетягувати відео в Netlify Drop не варто: для великих файлів це ненадійно.
- Сайт буде публічним. Перед публікацією погодьте її з учасницями й учасниками.
