import { Compass, Home, PlayCircle, Layers } from "lucide-react";
import { useAppLanguage } from "@/lib/i18n";

export type TabName = "home" | "discover" | "player" | "tabs";

export function BottomTabs({
  active,
  onChange,
  tabCount = 1,
}: {
  active: TabName;
  onChange: (t: TabName) => void;
  tabCount?: number;
}) {
  const { t, lang } = useAppLanguage();

  const items = [
    { id: "home" as const, label: t("home"), Icon: Home },
    { id: "discover" as const, label: t("discover"), Icon: Compass },
    { id: "player" as const, label: t("player"), Icon: PlayCircle },
    {
      id: "tabs" as const,
      label: lang === "es" ? "Pestañas" : "Tabs",
      Icon: Layers,
      badge: tabCount,
    },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-background py-2 shadow-lg">
      {items.map(({ id, label, Icon, badge }) => {
        const on = active === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`relative flex flex-col items-center justify-center gap-1 px-3 py-1 text-xs font-medium ${on ? "text-primary" : "text-muted-foreground"}`}
          >
            <div className="relative">
              <Icon className={`size-6 ${on ? "stroke-[2.5]" : "stroke-2"}`} />
              {badge !== undefined && badge > 0 && (
                <span className="absolute -top-1.5 -right-2 flex size-4 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-brand-foreground">
                  {badge}
                </span>
              )}
            </div>
            {label}
          </button>
        );
      })}
    </nav>
  );
}
