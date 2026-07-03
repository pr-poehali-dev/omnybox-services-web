import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AmbientBackground from '@/components/AmbientBackground';
import LeadForm from '@/components/LeadForm';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/70c08813-52c6-4b83-841e-a32c44eb23fa/files/aa8f1a6b-c0b4-4ab7-8d8b-990ae9eecd51.jpg';

const capabilities = [
  { icon: 'LayoutTemplate', title: 'Корпоративные сайты', text: 'Разработка сайтов-визиток и промо-страниц.' },
  { icon: 'Store', title: 'Интернет-магазины', text: 'Каталог, корзина, оплата и доставка под ключ.' },
  { icon: 'Link', title: 'Интеграция с 1С', text: 'Обмен товарами, остатками и заказами.' },
  { icon: 'Users2', title: 'Интеграция с Битрикс24', text: 'Заявки с сайта сразу попадают в CRM.' },
  { icon: 'Smartphone', title: 'Адаптивный дизайн', text: 'Сайты одинаково хорошо работают на любых устройствах.' },
  { icon: 'LifeBuoy', title: 'Поддержка', text: 'Развиваем и дорабатываем сайт после запуска.' },
];

const steps = [
  { n: '01', title: 'Прототип', text: 'Проектируем структуру и логику сайта.' },
  { n: '02', title: 'Дизайн', text: 'Создаём современный визуальный стиль.' },
  { n: '03', title: 'Разработка', text: 'Верстаем и программируем на 1С-Битрикс.' },
  { n: '04', title: 'Запуск', text: 'Тестируем, публикуем и сопровождаем.' },
];

export default function ServiceWebsites() {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden font-sans">
      <AmbientBackground />
      <SiteHeader />

      <section className="relative pt-40 pb-20 px-4">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-semibold text-[hsl(var(--brand-5))] bg-[hsl(var(--brand-5))]/10 rounded-full px-3 py-1 mb-4">
              1С-Битрикс
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Разработка <span className="brand-text">сайтов</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Создаём сайты и интернет-магазины на «1С-Битрикс: Управление сайтом»
              с интеграцией в 1С и Битрикс24.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="brand-gradient-3 border-0 rounded-xl h-13 px-7 shadow-lg shadow-teal-500/25 hover:opacity-90">
                <a href="#contacts">Обсудить сайт</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative glass-strong rounded-[2rem] p-3 animate-float">
              <img src={HERO_IMG} alt="Разработка сайтов" className="rounded-[1.5rem] w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">Возможности</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              Что мы разрабатываем
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="glass rounded-3xl p-7 hover:-translate-y-1 hover:glass-strong transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="brand-gradient-3 text-white h-12 w-12 rounded-xl grid place-items-center shadow-lg shadow-teal-500/25">
                  <Icon name={c.icon} size={22} />
                </div>
                <h3 className="font-display font-bold text-lg mt-4">{c.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto glass-strong rounded-[2.5rem] p-8 sm:p-14">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">Как работаем</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">Этапы разработки</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="font-display font-extrabold text-4xl brand-text">{s.n}</div>
                <h3 className="font-semibold mt-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        title="Обсудим разработку сайта"
        subtitle="Расскажите о задаче — предложим концепцию и сроки."
      />
      <SiteFooter />
    </div>
  );
}
