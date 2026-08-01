---
name: conversion-value-hierarchy
description: Aufbau einer Conversion-Wert-Hierarchie mit Micro Conversions, Mid-Funnel-Aktionen und Offline Conversions als exponentieller Hockey Stick. Verwende diesen Skill immer wenn der Nutzer Conversion-Werte, Conversion-Tracking, Micro Conversions, Offline Conversions, Hockey-Stick-Werte, Conversion-Wert-Gewichtung, Lifecycle Stages in Google Ads, GA4-Events als Conversions, oder die Vorbereitung für Ziel-ROAS-Tests in Google Ads ansprechen — auch wenn das Wort "Hierarchie" nicht explizit fällt. Dieser Skill ist das Fundament für alle Smart-Bidding-Strategien mit "Conversion-Wert maximieren".
---

# SOP – Conversion-Wert-Hierarchie mit Micro Conversions

Aufbau einer exponentiellen Hockey-Stick-Hierarchie von Micro Conversions bis Offline Conversions als Fundament für Ziel-ROAS- und Ziel-CPA-Tests.

## Zweck & Zielsetzung

Stufenweise aufsteigende Hierarchie schaffen – von Mikro-Signalen (Sitzungsdauern, Page-View-Throughs, Scrolls) über Mid-Funnel-Aktionen (CTA-Klicks, Formular-Klicks) bis zur Hauptconversion (Formulareinsendung) und Offline Conversions aus dem CRM (MQL, SQL, Opportunity, Customer). Diese Hierarchie ist das Fundament, auf dem Ziel-ROAS-Tests und Ziel-CPA-Tests überhaupt erst greifen.

## Anwendungsbereich

- **Primär:** Performance-Max-Kampagnen mit "Conversion-Wert maximieren"
- **Sekundär:** Search-Kampagnen mit Conversion-Wert-basierten Smart-Bidding-Strategien
- **Voraussetzung:** Konsolidierte Kampagnenstruktur – bei granularer Struktur greift die Hierarchie nicht
- **Datenquellen:** GA4 (Micro Conversions), HubSpot oder anderes CRM (Offline Conversions)

## Strategische Begründung

### Warum eine Hockey-Stick-Hierarchie?

Damit das Maximieren von Conversion-Werten tatsächlich zu mehr Deals führt, müssen die Stufen exponentiell ansteigen – nicht linear. Die wichtigste Conversion (Customer) erhält einen deutlich höheren Ausschlag als alle vorgelagerten Stufen.

### Warum Micro Conversions zusätzlich zum Hauptziel?

Micro Conversions liefern dem Algorithmus deutlich mehr Lernsignale. Wer bereits einige Sitzungsdauern und Page-View-Throughs absolviert hat, hat eine höhere Wahrscheinlichkeit, später das Kontaktformular abzuschicken. Das ermöglicht massives Retargeting in PMax.

### Warum die Hierarchie das Fundament für ROAS-Tests ist

Ohne saubere Hierarchie laufen Ziel-ROAS-Tests ins Leere. Die Hierarchie ist kein optionales Extra, sondern Voraussetzung dafür, dass "Conversion-Wert maximieren" sinnvoll funktioniert.

## Die Hockey-Stick-Hierarchie im Überblick

| Ebene | Conversion-Aktion | Quelle | Beispielwert |
|---|---|---|---|
| Mikro | Sitzungsdauer 10 Sek. | GA4 | 1 € |
| Mikro | Sitzungsdauer 20 Sek. | GA4 | 2 € |
| Mikro | Sitzungsdauer 30+ Sek. | GA4 | 3 € |
| Mikro | 3 Page-View-Throughs | GA4 | 4 € |
| Mikro | 5 Page-View-Throughs | GA4 | 5 € |
| Mikro | 8 Page-View-Throughs | GA4 | 8 € |
| Mikro | 10+ Page-View-Throughs | GA4 | 10 € |
| Mid | CTA-Button-Klick | GA4 / Google Ads | 20 € |
| Mid | Formular-Klick | GA4 / Google Ads | 30 € |
| Mid | Formulareinsendung (Lead) | Google Ads | 100 € |
| Offline | Marketing Qualified Lead (MQL) | CRM | 250 € |
| Offline | Sales Qualified Lead (SQL) | CRM | 500 € |
| Offline | Opportunity | CRM | 1.000 € |
| **Offline – HAUPTCONVERSION** | **Customer (Hockey-Stick-Spitze)** | **CRM** | **2.500 €+** |

Wichtig ist die exponentielle Form (Hockey Stick) – nicht der absolute Wert. Der Customer-Wert sollte um ein Vielfaches höher liegen als alle vorgelagerten Stufen zusammen.

## Die drei Ebenen im Detail

### Micro Conversions (GA4)

Grundlage für massives Retargeting. Aus GA4 als Zielgruppe mit Ereignistrigger als Conversion-Aktion in Google Ads importiert.

- **Sitzungsdauern:** In 10-Sekunden-Schritten aufsteigend (10, 20, 30+ Sekunden)
- **Page-View-Throughs:** Stufenweise (3, 5, 8, 10+ Seitenaufrufe)
- **Scrolls:** Scroll-Tiefen-Ereignisse aus GA4
- **URL-Cluster-Besuche:** Bestimmte Unterseiten-Cluster
- **Wertebereich:** 1–10 € — Funktion ist Lernsignal, nicht Wertschöpfung

### Mid-Funnel Conversions (GA4 / Google Ads)

- **CTA-Button-Klick:** Aktiver Call-to-Action geklickt
- **Formular-Klick:** Kontaktformular geöffnet (ohne Absenden)
- **Formulareinsendung:** Lead – zentrale Online-Conversion
- **Wertebereich:** 20–100 €

### Offline Conversions (CRM)

Bilden die Hockey-Stick-Spitze. Via Offline-Conversion-Export aus HubSpot oder anderem CRM importiert, sobald die Lifecycle Stage erreicht wird.

- **MQL → SQL → Opportunity → Customer**
- **Wertebereich:** 250 € bis mehrere Tausend € — mit klarer exponentieller Steigerung

## Voraussetzungen

- Konsolidierte Kampagnenstruktur (nicht granular)
- GA4-Tracking: Sitzungsdauer-Ereignisse, Page-View-Throughs, Scroll-Tiefe, URL-Cluster sauber als Events angelegt
- GA4 → Google Ads Sync: Audiences und Events als Conversion-Aktionen importiert
- CRM-Anbindung mit Offline-Conversion-Export per Lifecycle Stage
- Gebotsstrategie "Conversion-Wert maximieren"
- Genug Traffic, damit Micro Conversions belastbare Lernsignale liefern

## Prozessablauf

### Schritt 1 – Kampagnenstruktur prüfen
- Bei granularer Struktur: Vor Hierarchie-Aufbau erst konsolidieren
- Gebotsstrategie auf "Conversion-Wert maximieren" umstellen

### Schritt 2 – GA4-Events für Micro Conversions anlegen
- Sitzungsdauer-Events (10 Sek., 20 Sek., 30+ Sek.)
- Page-View-Through-Events (3, 5, 8, 10+ Seitenaufrufe)
- Scroll-Tiefen-Events (25 %, 50 %, 75 %, 100 %)
- URL-Cluster-Besuche definieren
- Events als Zielgruppen UND als Conversions markieren

### Schritt 3 – Mid-Funnel-Events anlegen
- CTA-Button-Klicks tracken
- Formular-Klick-Events (Formular geöffnet, nicht abgesendet)
- Formulareinsendung tracken

### Schritt 4 – CRM-Anbindung mit Offline Conversions
- Offline-Conversion-Export an Google Ads einrichten
- Pro Lifecycle Stage eine eigene Offline-Conversion-Aktion
- Mapping zwischen CRM-Stages und Google-Ads-Conversions dokumentieren

### Schritt 5 – Conversion-Werte exponentiell staffeln
- Micro-Werte: 1–10 €
- Mid-Werte: 20–100 €
- Offline-Werte: 250 € bis mehrere Tausend €
- Customer-Wert mit klarem Hockey-Stick-Knick

### Schritt 6 – Conversion-Aktionen in Google Ads importieren
- Alle GA4-Events und CRM-Offline-Conversions importieren
- Primärziele (Customer) vs. Sekundärziele (Micro Conversions) definieren

### Schritt 7 – Lernphase und Validierung
- Mindestens 14–30 Tage Lernphase
- Conversion-Volumen pro Stufe prüfen
- Bei Lücken: Tracking nachjustieren

### Schritt 8 – Übergabe an Ziel-ROAS- und Ziel-CPA-Tests
- Realen ROAS auf Basis der Hierarchie messen
- Startwert für ROAS-Tests dokumentieren

## Retargeting-Logik mit Micro Conversions

- **Phase 1:** Nutzer kommt auf Website, absolviert Sitzungsdauern und Page-View-Throughs → bucht Micro-Werte
- **Phase 2:** Via PMax retargeted, kehrt zurück, klickt CTA → bucht Mid-Funnel-Werte
- **Phase 3:** Klickt Formular und sendet ab → bucht Lead-Wert, weiteres Retargeting
- **Phase 4:** Via CRM zu MQL → SQL → Opportunity → Customer; jede Stage triggert höhere Offline Conversion

## Qualitäts- & Erfolgskriterien

- Exponentielle Staffelung mit klarem Hockey-Stick-Ausschlag (nicht linear)
- Alle drei Ebenen abgedeckt (Micro / Mid / Offline)
- Saubere Datenflüsse: GA4 → Google Ads und CRM → Google Ads laufen stabil
- Konsolidierte Struktur als Voraussetzung
- Jede Stufe liefert regelmäßig Daten

## Troubleshooting

| Problem | Lösung |
|---|---|
| Algorithmus optimiert auf Micro Conversions statt Customer | Hockey-Stick-Ausschlag verstärken – Customer-Wert deutlich erhöhen |
| Offline Conversions kommen nicht an | CRM-Anbindung prüfen, GCLID-Übergabe validieren |
| Micro Conversions liefern unqualifizierte Signale | Schwellen anziehen (z. B. ab 20 Sek. statt 10 Sek.) |
| Werte sind linear gestaffelt | Customer-Wert auf ein Vielfaches der vorgelagerten Stufen anheben |
| Kampagnenstruktur zu granular | Erst konsolidieren, dann Hierarchie aufsetzen |
| GA4-Audiences erreichen Google Ads nicht | Property-Link, Mindestgrößen, Mitgliedschaftsdauer prüfen |
