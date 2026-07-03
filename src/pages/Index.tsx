import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/70c08813-52c6-4b83-841e-a32c44eb23fa/files/4cbdfc70-dae8-4cfd-a073-1057ef20dd18.jpg';

const services = [
  {
    icon: 'Boxes',
    tag: '1С:Предприятие',
    title: 'Автоматизация на базе 1С',
    text: 'Внедрение и доработка 1С под ваши процессы: учёт, склад, зарплата, торговля. Настраиваем обмены, отчёты и интеграции.',
    points: ['Внедрение и доработка', 'Интеграции и обмены', 'Отчёты и аналитика'],
  },
  {
    icon: 'LayoutGrid',
    tag: 'Битрикс24',
    title: 'Настройка Битрикс24',
    text: 'Превращаем Битрикс24 в рабочий инструмент: CRM, воронки продаж, автоматизация задач, телефония и бизнес-процессы.',
    points: ['Настройка CRM и воронок', 'Бизнес-процессы', 'Телефония и интеграции'],
  },
  {
    icon: 'Globe',
    tag: '1С-Битрикс',
    title: 'Разработка сайтов',
    text: 'Создаём сайты и интернет-магазины на «1С-Битрикс: Управление сайтом» с интеграцией в 1С и Битрикс24.',
    points: ['Сайты и магазины', 'Интеграция с 1С', 'Поддержка и развитие'],
  },
];

const stats = [
  { value: '10+', label: 'лет на рынке' },
  { value: '250+', label: 'проектов' },
  { value: '1С', label: 'сертификаты' },
  { value: '24/7', label: 'поддержка' },
];

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden font-sans">
      {/* Ambient blobs background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[hsl(var(--brand))]/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-[hsl(var(--brand-2))]/20 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-sky-300/20 blur-3xl animate-blob [animation-delay:8s]" />
      </div>

      {/* Header */}
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="container max-w-6xl mx-auto glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">OMNIBOX</a>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex brand-gradient border-0 rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-90">
              <a href="#contacts">Обсудить проект</a>
            </Button>
            <button
              className="md:hidden h-10 w-10 grid place-items-center rounded-lg hover:bg-white/60"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Меню"
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="container max-w-6xl mx-auto mt-2 glass-strong rounded-2xl p-3 md:hidden animate-fade-in-up">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg font-medium hover:bg-white/60"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-40 pb-24 px-4">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Автоматизация бизнеса под ключ
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Порядок в бизнесе на <span className="brand-text">1С и Битрикс</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Внедряем 1С:Предприятие, настраиваем Битрикс24 и разрабатываем сайты на
              1С-Битрикс. Всё в одной команде — от идеи до поддержки.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="brand-gradient border-0 rounded-xl h-13 px-7 shadow-lg shadow-indigo-500/25 hover:opacity-90">
                <a href="#contacts">Получить консультацию</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl h-13 px-7 glass border-0">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-4 gap-3 max-w-lg">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-3 text-center">
                  <div className="font-display font-bold text-xl brand-text">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative glass-strong rounded-[2rem] p-3 animate-float">
              <img
                src={HERO_IMG}
                alt="Автоматизация бизнеса omnybox"
                className="rounded-[1.5rem] w-full aspect-square object-cover mx-0"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-5 py-4 flex items-center gap-3">
              <span className="brand-gradient text-white h-10 w-10 rounded-xl grid place-items-center">
                <Icon name="TrendingUp" size={20} />
              </span>
              <div>
                <div className="font-bold text-sm">+40% скорости</div>
                <div className="text-xs text-muted-foreground">процессов после внедрения</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">Услуги</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              Три направления — один подрядчик
            </h2>
            <p className="text-muted-foreground mt-4">
              Закрываем задачи автоматизации, продаж и веб-разработки в единой экосистеме.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:glass-strong animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="brand-gradient text-white h-14 w-14 rounded-2xl grid place-items-center shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={26} />
                </div>
                <span className="inline-block mt-6 text-xs font-semibold text-[hsl(var(--brand))] bg-[hsl(var(--brand))]/10 rounded-full px-3 py-1">
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-xl mt-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.text}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-[hsl(var(--brand))]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto glass-strong rounded-[2.5rem] p-8 sm:p-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">О компании</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              omnybox — команда, которая говорит с бизнесом на одном языке
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Мы помогаем компаниям навести порядок в процессах: от учёта в 1С до продаж
              в Битрикс24 и сайта, который приносит заявки. Работаем прозрачно, фиксируем
              результат в цифрах и остаёмся на связи после запуска.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'ShieldCheck', title: 'Сертифицированные специалисты', text: 'Официальные партнёры 1С и Битрикс' },
                { icon: 'Clock', title: 'Сроки под контролем', text: 'Прозрачные этапы и отчётность' },
                { icon: 'Headphones', title: 'Поддержка после запуска', text: 'Сопровождаем и развиваем проект' },
                { icon: 'Layers', title: 'Комплексный подход', text: 'Все услуги в одной команде' },
              ].map((f) => (
                <div key={f.title} className="glass rounded-2xl p-4 flex gap-3">
                  <span className="text-[hsl(var(--brand))] shrink-0">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <div className="font-semibold text-sm">{f.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="brand-gradient rounded-[2rem] p-10 text-white shadow-2xl shadow-indigo-500/30">
              <Icon name="Quote" size={40} className="opacity-40" />
              <p className="text-xl font-display font-medium mt-4 leading-snug">
                «Наша цель — чтобы технологии работали на бизнес, а не наоборот».
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/20 grid place-items-center">
                  <Icon name="User" size={22} />
                </div>
                <div>
                  <div className="font-semibold">Команда omnybox</div>
                  <div className="text-white/70 text-sm">Автоматизация и разработка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">Контакты</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              Расскажите о задаче
            </h2>
            <p className="text-muted-foreground mt-4">
              Оставьте заявку — обсудим ваш проект и предложим решение.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (900) 000-00-00' },
                { icon: 'Mail', label: 'Почта', value: 'hello@omnybox.ru' },
                { icon: 'MapPin', label: 'Офис', value: 'Россия, Москва' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="brand-gradient text-white h-11 w-11 rounded-xl grid place-items-center">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="glass rounded-3xl p-8 sm:p-10 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm font-medium">Ваше имя</label>
              <input
                type="text"
                placeholder="Иван"
                className="mt-1.5 w-full h-12 rounded-xl bg-white/70 border-2 border-slate-300 px-4 outline-none focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/30 transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Телефон или почта</label>
              <input
                type="text"
                placeholder="+7 900 000-00-00"
                className="mt-1.5 w-full h-12 rounded-xl bg-white/70 border-2 border-slate-300 px-4 outline-none focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/30 transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Опишите задачу</label>
              <textarea
                rows={4}
                placeholder="Например: нужно настроить CRM в Битрикс24 и связать с 1С"
                className="mt-1.5 w-full rounded-xl bg-white/70 border-2 border-slate-300 px-4 py-3 outline-none focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/30 transition resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full brand-gradient border-0 rounded-xl h-16 shadow-lg shadow-indigo-500/25 hover:opacity-90">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pb-10">
        <div className="container max-w-6xl mx-auto glass rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold">
            <span className="brand-gradient text-white h-7 w-7 rounded-lg grid place-items-center">
              <Icon name="Hexagon" size={15} />
            </span>
            omnybox
          </div>
          <p className="text-sm text-muted-foreground">© 2026 omnybox. Автоматизация бизнеса.</p>
          <div className="flex gap-2">
            {['Send', 'MessageCircle', 'Mail'].map((ic) => (
              <a
                key={ic}
                href="#contacts"
                className="h-9 w-9 grid place-items-center rounded-lg hover:bg-white/70 text-muted-foreground hover:text-foreground transition"
              >
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}