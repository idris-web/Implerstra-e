# Kosova e.V. - Albanische Moschee München

Landing Page für die albanische Moschee Kosova e.V. in München.

## Features

- 🌍 Dreisprachig (Deutsch, Albanisch, Arabisch)
- 🕌 Gebetszeiten
- 📅 Veranstaltungen (Koranunterricht, Kinderspieltreffen, tägliche Koranlesung)
- 💝 Spendenbereich
- 📍 Kontakt & Anfahrt
- 👥 Vorstand
- 📸 Galerie
- 📱 Vollständig responsive

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Preview Production Build
npm run preview
```

## Deployment

Die Seite ist für Vercel konfiguriert. Einfach das Repository mit Vercel verbinden.

## Anpassungen

### Kontaktdaten ändern
Bearbeite die Dateien:
- `src/components/Contact.astro`
- `src/components/Footer.astro`

### Bankverbindung ändern
Bearbeite `src/components/Donate.astro`

### Gebetszeiten ändern
Bearbeite `src/components/PrayerTimes.astro`

### Bilder hinzufügen
Ersetze die Placeholder in:
- `src/components/Gallery.astro`
- `src/components/Team.astro`
- `src/components/About.astro`

---

© 2024 Kosova e.V. München
