import Icon from '@/components/ui/icon';

export default function SiteFooter() {
  return (
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
              href="/#contacts"
              className="h-9 w-9 grid place-items-center rounded-lg hover:bg-white/70 text-muted-foreground hover:text-foreground transition"
            >
              <Icon name={ic} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
