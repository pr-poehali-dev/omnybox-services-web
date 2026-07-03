import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const LEAD_URL = 'https://functions.poehali.dev/2129fb8c-af59-48fe-a37a-4b9af759d11c';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
}

export default function LeadForm({
  title = 'Расскажите о задаче',
  subtitle = 'Оставьте заявку — обсудим ваш проект и предложим решение.',
}: LeadFormProps) {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch(LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', contact: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacts" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="glass-strong rounded-3xl p-8 sm:p-10">
          <span className="brand-text font-semibold text-sm uppercase tracking-widest">Контакты</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-4">{subtitle}</p>
          <div className="mt-8 space-y-4">
            {[
              { icon: 'Phone', label: 'Телефон', value: '+7 (900) 000-00-00', grad: 'brand-gradient' },
              { icon: 'Mail', label: 'Почта', value: 'hello@omnybox.ru', grad: 'brand-gradient-2' },
              { icon: 'MapPin', label: 'Офис', value: 'Россия, Москва', grad: 'brand-gradient-3' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <span className={`${c.grad} text-white h-11 w-11 rounded-xl grid place-items-center`}>
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

        <form className="glass rounded-3xl p-8 sm:p-10 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium">Ваше имя</label>
            <input
              type="text"
              placeholder="Иван"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full h-12 rounded-xl bg-white/70 border-2 border-slate-300 px-4 outline-none focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/30 transition"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Телефон или почта</label>
            <input
              type="text"
              placeholder="+7 900 000-00-00"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="mt-1.5 w-full h-12 rounded-xl bg-white/70 border-2 border-slate-300 px-4 outline-none focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/30 transition"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Опишите задачу</label>
            <textarea
              rows={4}
              placeholder="Например: нужно настроить CRM в Битрикс24 и связать с 1С"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full rounded-xl bg-white/70 border-2 border-slate-300 px-4 py-3 outline-none focus:border-[hsl(var(--brand))] focus:ring-2 focus:ring-[hsl(var(--brand))]/30 transition resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={status === 'sending'}
            className="w-full brand-gradient border-0 rounded-xl h-16 shadow-lg shadow-indigo-500/25 hover:opacity-90"
          >
            {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
          </Button>
          {status === 'success' && (
            <p className="text-sm text-green-600 text-center font-medium">
              Заявка отправлена! Мы скоро свяжемся с вами.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500 text-center font-medium">
              Не удалось отправить. Попробуйте ещё раз.
            </p>
          )}
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
}
