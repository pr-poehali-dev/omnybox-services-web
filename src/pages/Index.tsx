import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AmbientBackground from '@/components/AmbientBackground';
import LeadForm from '@/components/LeadForm';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/70c08813-52c6-4b83-841e-a32c44eb23fa/bucket/9853dff6-980a-4ec3-b4f6-fcaaf5524e61.jpg';

const services = [
  {
    icon: 'Boxes',
    tag: '1С:Предприятие',
    title: 'Автоматизация на базе 1С',
    text: 'Внедрение и доработка 1С под ваши процессы: учёт, склад, зарплата, торговля.',
    href: '/1c',
    grad: 'brand-gradient',
    shadow: 'shadow-indigo-500/25',
  },
  {
    icon: 'LayoutGrid',
    tag: 'Битрикс24',
    title: 'Настройка Битрикс24',
    text: 'CRM, воронки продаж, автоматизация задач, телефония и бизнес-процессы.',
    href: '/bitrix24',
    grad: 'brand-gradient-2',
    shadow: 'shadow-orange-500/25',
  },
  {
    icon: 'Globe',
    tag: '1С-Битрикс',
    title: 'Разработка сайтов',
    text: 'Сайты и интернет-магазины на «1С-Битрикс: Управление сайтом».',
    href: '/websites',
    grad: 'brand-gradient-3',
    shadow: 'shadow-teal-500/25',
  },
];

const stats = [
  { value: '10+', label: 'лет на рынке' },
  { value: '250+', label: 'проектов' },
  { value: '1С', label: 'сертификаты' },
  { value: '24/7', label: 'поддержка' },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden font-sans">
      <AmbientBackground />
      <SiteHeader />

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
                className="rounded-[1.5rem] w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 glass-strong rounded-2xl px-5 py-4 flex items-center gap-3">
              <span className="brand-gradient-2 text-white h-10 w-10 rounded-xl grid place-items-center">
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
              <Link
                key={s.title}
                to={s.href}
                className={`group glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:glass-strong animate-fade-in-up block`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className={`${s.grad} text-white h-14 w-14 rounded-2xl grid place-items-center shadow-lg ${s.shadow} group-hover:scale-110 transition-transform`}>
                  <Icon name={s.icon} size={26} />
                </div>
                <span className="inline-block mt-6 text-xs font-semibold text-[hsl(var(--brand))] bg-[hsl(var(--brand))]/10 rounded-full px-3 py-1">
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-xl mt-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.text}</p>
                <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[hsl(var(--brand))] group-hover:gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </span>
              </Link>
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
                { icon: 'ShieldCheck', title: 'Сертифицированные специалисты', text: 'Официальные партнёры 1С и Битрикс', grad: 'brand-gradient' },
                { icon: 'Clock', title: 'Сроки под контролем', text: 'Прозрачные этапы и отчётность', grad: 'brand-gradient-2' },
                { icon: 'Headphones', title: 'Поддержка после запуска', text: 'Сопровождаем и развиваем проект', grad: 'brand-gradient-3' },
                { icon: 'Layers', title: 'Комплексный подход', text: 'Все услуги в одной команде', grad: 'brand-gradient' },
              ].map((f) => (
                <div key={f.title} className="glass rounded-2xl p-4 flex gap-3">
                  <span className={`${f.grad} text-white shrink-0 h-9 w-9 rounded-lg grid place-items-center`}>
                    <Icon name={f.icon} size={18} />
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

      <LeadForm />
      <SiteFooter />
    </div>
  );
}