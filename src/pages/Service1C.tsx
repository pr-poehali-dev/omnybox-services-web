import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AmbientBackground from '@/components/AmbientBackground';
import LeadForm from '@/components/LeadForm';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/70c08813-52c6-4b83-841e-a32c44eb23fa/files/20615068-7101-4a84-bfc3-89c49c0f32aa.jpg';

const capabilities = [
  { icon: 'Package', title: 'Учёт и склад', text: 'Настройка складского учёта, партионного учёта, инвентаризаций.' },
  { icon: 'Users', title: 'Зарплата и кадры', text: 'Расчёт зарплаты, кадровый учёт, отчётность в фонды.' },
  { icon: 'ShoppingCart', title: 'Торговля', text: 'Автоматизация продаж, закупок, ценообразования.' },
  { icon: 'Plug', title: 'Интеграции', text: 'Обмен данными с сайтом, CRM, банками, маркетплейсами.' },
  { icon: 'FileBarChart', title: 'Отчётность', text: 'Управленческие и регламентированные отчёты в один клик.' },
  { icon: 'Wrench', title: 'Доработка', text: 'Индивидуальные конфигурации под задачи бизнеса.' },
];

const steps = [
  { n: '01', title: 'Анализ процессов', text: 'Изучаем текущие процессы и точки роста.' },
  { n: '02', title: 'Внедрение', text: 'Настраиваем и дорабатываем конфигурацию 1С.' },
  { n: '03', title: 'Обучение', text: 'Обучаем сотрудников работе в системе.' },
  { n: '04', title: 'Поддержка', text: 'Сопровождаем и оперативно решаем задачи.' },
];

export default function Service1C() {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden font-sans">
      <AmbientBackground />
      <SiteHeader />

      <section className="relative pt-40 pb-20 px-4">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-semibold text-[hsl(var(--brand))] bg-[hsl(var(--brand))]/10 rounded-full px-3 py-1 mb-4">
              1С:Предприятие
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Автоматизация на базе <span className="brand-text">1С</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Внедряем и дорабатываем 1С под ваши процессы: учёт, склад, зарплата, торговля,
              интеграции и отчётность — всё в одной системе.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="brand-gradient border-0 rounded-xl h-13 px-7 shadow-lg shadow-indigo-500/25 hover:opacity-90">
                <a href="#contacts">Обсудить внедрение</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative glass-strong rounded-[2rem] p-3 animate-float">
              <img src={HERO_IMG} alt="Автоматизация 1С" className="rounded-[1.5rem] w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">Возможности</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              Что мы настраиваем в 1С
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="glass rounded-3xl p-7 hover:-translate-y-1 hover:glass-strong transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="brand-gradient text-white h-12 w-12 rounded-xl grid place-items-center shadow-lg shadow-indigo-500/25">
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">Этапы внедрения</h2>
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
        title="Обсудим внедрение 1С"
        subtitle="Расскажите о задачах вашего бизнеса — предложим оптимальное решение."
      />
      <SiteFooter />
    </div>
  );
}
