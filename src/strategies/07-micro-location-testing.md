---
name: micro-location-testing
description: Standortbasiertes Targeting in Google Ads über 1-km-Nadelköpfe per Gemini & Google Maps-Koordinaten – pro Kampagne 100, 200 oder 500 Micro Locations. Verwende diesen Skill immer wenn der Nutzer Micro Locations, Mikrolagen, Nadelköpfe, 1-km-Radius, Koordinaten-Targeting, Längen- und Breitengrade, Postleitzahl-Targeting, Geo-Targeting für Immobilien oder andere standortabhängige Branchen, Gemini Pro mit Google Maps, oder Standort-Shifting in Google Ads anspricht — auch ohne explizite Begriffe. Geeignet für Immobranche, Premium-Retail, lokale Dienstleister, Finance.
---

# SOP – Micro Location Testing für Google Ads

Standortbasiertes Targeting via Gemini & Google Maps-Koordinaten.

## Zweck & Zielsetzung

Standardisiertes Vorgehen für Micro Location Testing unter Nutzung von Gemini (Pro) zur Koordinatenrecherche via Direktzugriff auf Google Maps. Ziel: valide Datenbasis ("Shifting-Grundlage") aufbauen, um Budgets gezielt auf die performantesten 1-km-Nadelköpfe zu verlagern und Conversion-Werte gegenüber breitem Geo-Targeting zu maximieren.

## Anwendungsbereich

- **Primär:** Immobilienbranche (Top-Lagen mit höchsten Immobilienwerten)
- **Sekundär:** Standortabhängige Zielgruppen (Premium-Retail, lokale Dienstleister, Finance/Investment, Luxury)
- **Kampagnentypen:** Search, Performance Max, Demand Gen mit "Conversion-Wert maximieren"

## Strategische Begründung

### Warum 1-km-Nadelköpfe statt Stadt-Targeting?

Erfahrungsgemäß liefert eine Handvoll 1-km-Mikrolagen nach einem Testing bessere Conversion-Werte als das Targeting auf eine gesamte Stadt (z. B. Berlin). Mikrolagen schaffen eine Shifting-Grundlage – breitere Zielregionen können pausiert und Budgets ausschließlich auf die performantesten Standorte verlagert werden.

### Demografische vs. psychografische Unterschiede

Zwei Mikrolagen mit identischem durchschnittlichem Haushaltseinkommen können sehr unterschiedlich performen, weil in der einen mehr Mieter, in der anderen mehr Eigentümer wohnen. Daraus resultieren unterschiedliche Affinitäten zu Themen wie Investment oder Vermögensbildung.

## Voraussetzungen & Tools

| Tool | Anforderung |
|---|---|
| Gemini | Pro-Modus aktiv (NICHT Fast – bei tiefen Recherchen mit Koordinaten unverzichtbar) |
| Google Maps | Direktzugriff über Gemini zur Koordinatenermittlung |
| Google Ads Editor | Aktuelle Version für Bulk Upload |
| Importvorlage | Formatierte CSV/Excel für Bulk Upload |
| Gebotsstrategie | "Conversion-Wert maximieren" |

## Prozessablauf

### Schritt 1 – Briefing & Zielbranche definieren
- Branche, Zielgruppe, Kampagnenziel klären
- Städte/Regionen festlegen
- Mikrolagen-Kriterien definieren (z. B. höchste Immobilienwerte, Premium-Wohnlagen, Eigentümerquote)

### Schritt 2 – Koordinatenrecherche via Gemini
- Gemini auf Pro-Modus stellen
- Prompt: gewünschte Stadt, Anzahl Mikrolagen (100/200/500), Auswahlkriterium
- Ausgabe: Liste mit Längen- und Breitengraden pro Mikrolage
- **Wichtig:** Gemini greift direkt auf Google Maps zu – manuelles Heraussuchen entfällt

### Schritt 3 – Daten in Importvorlage übertragen
- Gemini-Output in Importvorlage einfügen
- Radius auf 1 km pro Nadelkopf setzen
- Kampagnen-Zuordnung hinterlegen
- Format auf Editor-Kompatibilität prüfen

### Schritt 4 – Bulk Upload im Google Ads Editor
- Importvorlage importieren
- Mikrolagen werden als Standort-Targetings zugeordnet
- Vorschau-Check auf korrekte Radien und Zuordnung
- Veröffentlichen

### Schritt 5 – Kampagnenstart & Performance-Monitoring
- "Conversion-Wert maximieren" verteilt Budget auf performante Mikrolagen
- Lernphase und initiale Datensammlung abwarten
- Performance im Geo-Report regelmäßig auswerten

### Schritt 6 – Shifting (Budget-Konsolidierung)
- Mikrolagen mit schwacher Performance pausieren
- Breitere Zielregionen pausieren, sobald genug Daten vorliegen
- Budget auf erfolgreichste 1-km-Nadelköpfe konzentrieren
- Iteratives Re-Testing mit neuen Mikrolagen-Sets möglich

## Qualitätskriterien

- **Streuung kontrollierbar:** 100–500 Mikrolagen pro Kampagne sind valide bei "Conversion-Wert maximieren"
- **Datenbasis:** Genug Conversions pro Standort sammeln, bevor pausiert/geshiftet wird
- **Klare Hypothese:** Vorab psychografische Cluster definieren (Mieter vs. Eigentümer, Investment-Affinität)
- **Saubere Dokumentation:** Welche Mikrolagen kamen rein, welche performen, welche werden pausiert

## Troubleshooting

| Problem | Lösung |
|---|---|
| Gemini liefert ungenaue Koordinaten | Pro-Modus prüfen (nicht Fast), Prompt klarer formulieren |
| Bulk Upload schlägt fehl | Formatierung der Importvorlage prüfen – Spaltenstruktur muss Editor-konform sein |
| Zu wenig Conversions pro Mikrolage | Anzahl reduzieren oder Kampagnen mit ähnlichen Mikrolagen-Sets bündeln |
| Gleichmäßige Verteilung statt Konzentration auf Top-Lagen | Gebotsstrategie auf "Conversion-Wert maximieren" prüfen |
