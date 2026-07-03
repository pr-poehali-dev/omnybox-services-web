import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AmbientBackground from '@/components/AmbientBackground';
import LeadForm from '@/components/LeadForm';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/70c08813-52c6-4b83-841e-a32c44eb23fa/files/6ed43f0a-8fe9-4a40-ad2e-bd1300bac99f.jpg';

const capabilities = [
  { icon: 'Filter', title: 'CRM и воронки', text: 'Настройка стадий сделок, полей, автоматических действий.' },
  { icon: 'Workflow', title: 'Бизнес-процессы', text: 'Автоматизация согласований, задач, уведомлений.' },
  { icon: 'PhoneCall', title: 'Телефония', text: 'Интеграция АТС, запись звонков, распределение лидов.' },
  { icon: 'Plug', title: 'Интеграции', text: 'Связь с сайтом, 1С, мессенджерами и почтой.' },
  { icon: 'BarChart3', title: 'Аналитика', text: 'Отчёты по продажам, воронкам и сотрудникам.' },
  { icon: 'GraduationCap', title: 'Обучение команды', text: 'Помогаем сотрудникам освоить систему.' },
];

const steps = [
  { n: '01', title: 'Аудит продаж', text: 'Изучаем воронку и точки потери клиентов.' },
  { n: '02', title: 'Настройка CRM', text: 'Выстраиваем процессы под ваш бизнес.' },
  { n: '03', title: 'Автоматизация', text: 'Внедряем роботов и триггеры.' },
  { n: '04', title: 'Сопровождение', text: 'Развиваем систему вместе с бизнесом.' },
];

export default function ServiceBitrix24() {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden font-sans">
      <AmbientBackground />
      <SiteHeader />

      <section className="relative pt-40 pb-20 px-4">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-xs font-semibold text-[hsl(var(--brand-4))] bg-[hsl(var(--brand-4))]/10 rounded-full px-3 py-1 mb-4">
              Битрикс24
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Настройка <span className="brand-text">Битрикс24</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Превращаем Битрикс24 в рабочий инструмент продаж: CRM, воронки, автоматизация
              задач, телефония и интеграции.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="brand-gradient-2 border-0 rounded-xl h-13 px-7 shadow-lg shadow-orange-500/25 hover:opacity-90">
                <a href="#contacts">Настроить CRM</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative glass-strong rounded-[2rem] p-3 animate-float">
              <img src={HERO_IMG} alt="Настройка Битрикс24" className="rounded-[1.5rem] w-full aspect-square object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="brand-text font-semibold text-sm uppercase tracking-widest">Возможности</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              Что мы настраиваем в Битрикс24
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className="glass rounded-3xl p-7 hover:-translate-y-1 hover:glass-strong transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="brand-gradient-2 text-white h-12 w-12 rounded-xl grid place-items-center shadow-lg shadow-orange-500/25">
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">Этапы настройки</h2>
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
        title="Обсудим настройку Битрикс24"
        subtitle="Расскажите, как устроены продажи в вашей компании — подберём решение."
      />
      <SiteFooter />
    </div>
  );
}
