import { personalInfo, stats } from './data/portfolioData';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { SectionTitle } from './components/common/SectionTitle';
import { Card } from './components/common/Card';
import { Icon } from './components/common/Icon';
import './App.css';

function App() {
  const pageNavCards = [
    {
      title: 'ჩემ შესახებ',
      desc: 'დეტალური ბიოგრაფია, გამოცდილება, ხედვა და პერსონალური მიზნები.',
      icon: 'user',
      href: 'about.html',
      badge: 'ბიოგრაფია',
      color: '#6366f1',
    },
    {
      title: 'სერვისები',
      desc: 'Full Stack ვებ-დეველოპმენტი, Frontend არქიტექტურა, API და UI/UX.',
      icon: 'layout',
      href: 'services.html',
      badge: 'შეთავაზებები',
      color: '#06b6d4',
    },
    {
      title: 'უნარები & Stack',
      desc: 'თანამედროვე ტექნოლოგიური სტეკი: React 19, TypeScript, Node.js და DevOps.',
      icon: 'cpu',
      href: 'skills.html',
      badge: 'ტექნოლოგიები',
      color: '#10b981',
    },
    {
      title: 'გამორჩეული პროექტები',
      desc: 'რეალური პროექტების პორტფოლიო კატეგორიებით, დემოებითა და ძებნით.',
      icon: 'layers',
      href: 'projects.html',
      badge: 'პორტფოლიო',
      color: '#f59e0b',
    },
    {
      title: 'მომხმარებლები (REST API)',
      desc: 'JSONPlaceholder API ინტეგრაცია: მომხმარებელთა სია, ცოცხალი ძებნა და მოდალი.',
      icon: 'users',
      href: 'users.html',
      badge: 'REST API',
      color: '#ec4899',
    },
    {
      title: 'სამუშაო გამოცდილება',
      desc: 'კარიერული განვითარების ეტაპები, პოზიციები, კომპანიები და მიღწევები.',
      icon: 'briefcase',
      href: 'experience.html',
      badge: 'კარიერა',
      color: '#8b5cf6',
    },
  ];

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Navbar name={personalInfo.name} currentPage="home" />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <Hero personalInfo={personalInfo} stats={stats} />

        {/* Section Navigation Hub */}
        <section className="section-container pt-0">
          <SectionTitle
            badge="გვერდების კატალოგი"
            title="გაეცანით"
            highlight="სექციებს"
            description="თითოეული მიმართულება განთავსებულია ცალკეულ გვერდზე სრული დეტალებითა და ინფორმაციით."
          />

          <div className="home-sections-grid">
            {pageNavCards.map((card) => (
              <a key={card.title} href={card.href} className="home-section-card-link">
                <Card className="home-section-card" hoverable={true}>
                  <div className="home-card-header">
                    <div
                      className="home-card-icon"
                      style={{ background: `rgba(99, 102, 241, 0.12)`, color: card.color }}
                    >
                      <Icon name={card.icon} size={24} />
                    </div>
                    <span className="home-card-badge">{card.badge}</span>
                  </div>

                  <h3 className="home-card-title">{card.title}</h3>
                  <p className="home-card-desc">{card.desc}</p>

                  <div className="home-card-footer">
                    <span>გვერდის ნახვა</span>
                    <Icon name="arrow-right" size={16} />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;
