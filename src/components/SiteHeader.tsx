import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/1c', label: '1С' },
  { href: '/bitrix24', label: 'Битрикс24' },
  { href: '/websites', label: 'Сайты' },
  { href: '/#contacts', label: 'Контакты' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => href !== '/#contacts' && location.pathname === href;

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="container max-w-6xl mx-auto glass-strong rounded-2xl px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <span className="brand-gradient text-white h-8 w-8 rounded-lg grid place-items-center">
            <Icon name="Hexagon" size={18} />
          </span>
          omnybox
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(l.href)
                  ? 'text-white brand-gradient shadow-md shadow-indigo-500/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/60'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex brand-gradient-2 border-0 rounded-xl shadow-lg shadow-orange-500/20 hover:opacity-90">
            <a href="/#contacts">Обсудить проект</a>
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
  );
}
