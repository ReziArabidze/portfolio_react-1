# React Multi-Page Portfolio & REST API Project

სრული Multi-Page Application (MPA) არქიტექტურით აგებული თანამედროვე პორტფოლიოს პროექტი (React 19, TypeScript, Vite MPA).

## 📄 პროექტის HTML გვერდები

თითოეული სექცია გამოტანილია თავის დამოუკიდებელ HTML ფაილში:

1. **[index.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/index.html)** — მთავარი გვერდი (Hero, სექციების კატალოგი/Explorer Hub, Contact & Footer)
2. **[about.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/about.html)** — ჩემ შესახებ (ბიოგრაფია, პერსონალური მონაცემები, სტატისტიკა)
3. **[services.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/services.html)** — სერვისები (Full Stack, Frontend, UI/UX გადაწყვეტები)
4. **[skills.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/skills.html)** — უნარები (ტექნოლოგიური სტეკი დონეებითა და კატეგორიებით)
5. **[projects.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/projects.html)** — პროექტები (კატეგორიების ფილტრი, ცოცხალი ძებნა და მოდალი)
6. **[experience.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/experience.html)** — სამუშაო გამოცდილება (კარიერული თაიმლაინი და მიღწევები)
7. **[users.html](file:///c:/Users/Zura/Desktop/fullstack/node/portfolio_react-1/users.html)** — მომხმარებლები (JSONPlaceholder REST API, ძებნა, სორტირება და მოდალი)

## 🧭 ერთიანი ნავიგაცია (Navbar)

- **ავტომატური აქტიური გვერდის ინდიკატორი**: ნავიგაციის ზოლი ავტომატურად ცნობს, რომელ `.html` გვერდზე იმყოფება მომხმარებელი და უნთებს მანათობელ ხაზს.
- **პირდაპირი გადასვლები**: ნებისმიერი გვერდიდან ნებისმიერ სხვა გვერდზე გადასვლა ხდება პირდაპირი ბმულით (`about.html`, `projects.html` და ა.შ.).
- **მობილური მენიუ**: Glassmorphism ეფექტით, ბექდროპით, ავტომატური დახურვითა და სრული რესპონსიულობით.

## 💻 გაშვების ბრძანებები

```bash
# დამოკიდებულებების ინსტალაცია
npm install

# დეველოპმენტ სერვერის გაშვება (Vite)
npm run dev

# პროექტის აწყობა — ქმნის 7-ვე ცალკეულ HTML ფაილს dist საქაღალდეში
npm run build

# კოდის ხარისხის შემოწმება (Oxlint)
npm run lint
```
