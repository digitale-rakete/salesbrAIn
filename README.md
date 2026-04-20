# Salesbrain Landing — Version 2

Statische HTML/CSS-Version der Salesbrain-Landingpage inkl. Dashboard-Graphics, Brand-Identity-Board und Case-Studies-Seite.

## Struktur

```
landing/
  Salesbrain Landing.html   # Haupt-Landing
  Case Studies.html         # Case-Studies-Seite
  styles.css                # Gesamt-Styles
dashboard/
  Dashboard Hero Graphic.html
  Dashboard Opportunities Graphic.html
  Dashboard Redesign.html
Brand Identity Board.html
Brand Identity Board v2.html
screenshots/                # Hero-Iterations-Screenshots
uploads/                    # Assets
```

## Lokal starten

```bash
python3 -m http.server 8080
# http://localhost:8080/landing/Salesbrain%20Landing.html
```

## Mobile-Adaption

- Burger-Menü, responsive Nav
- Hero-Seal (rotierender Planet) skaliert via Media Queries
- Dashboard- + Opportunities-Iframes 2× skaliert auf Mobile, nur linke Hälfte sichtbar (~5% Abstand vom linken Rand)
- Vergleichs-Tabelle ohne horizontales Scrolling
- Alle Card-Sektionen (Problems, Multi-Channel, Pricing) mit klarer Trennung

Customer-Journey-Sektion bewusst unverändert gelassen.
