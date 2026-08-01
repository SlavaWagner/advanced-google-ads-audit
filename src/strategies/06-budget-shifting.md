---
name: budget-shifting
description: Systematisches Budget-Shifting in Google Ads über alle 9 Reporting-Ebenen (Kampagnen, Asset Groups, Ad Groups, RSAs, Keywords, Locations, Uhrzeiten, Audiences, Age & Gender) nach Massenausrollprozessen. Verwende diesen Skill immer wenn der Nutzer Budget-Shift, Budget-Verlagerung, Asset-Shifting, Pausieren von Entitäten, Konsolidierung der Top-Performer, Overall-CPL senken, Looker Studio Auswertung, Most Specific Location, oder die Auswertung nach AI-Asset-Launch / Micro-Location-Test anspricht — auch ohne explizite Begriffe. Dieser Skill ist der monatliche Doppelschlag zum Ausrollen.
---

# SOP – Budget-Shifting für Google Ads

Systematische Budget- und Asset-Verlagerung über alle Reporting-Ebenen nach Massenausrollprozessen.

## Zweck & Zielsetzung

Konsequente Umverlagerung von Budget und Pausieren von Entitäten auf allen Reporting-Ebenen, um den gesamten Ad Spend auf die Entitäten mit den besten Lead-Kosten zu konzentrieren. Ziel: drastische Absenkung des Overall-CPL, insbesondere nach AI-Asset-Pipelines, Micro-Location-Tests, neuen Audiences oder PMax-Launches.

## Anwendungsbereich

- **Primär:** Konten nach Massenausrollprozessen
- **Hauptanwendungsfeld:** Hochpreis-Leadgenerierung mit messbaren Lead-Kosten
- **Rhythmus:** Monatlich – nach jedem Ausrollzyklus
- **Vorgehensweise:** Bevorzugt manuell. AI-Automatisierungen möglich, manuell liefert bessere Ergebnisse
- **Reporting-Basis:** Looker Studio mit allen Ebenen aus Google Ads API

## Strategische Begründung

### Warum nach Massenausrollprozessen Shifting Pflicht ist

Wenn über Pipelines tonnenweise neue Ansprachen, Micro-Locations, Keywords oder Audiences ausgerollt wurden, entsteht eine breite Testbasis. Erst der anschließende Shift macht die Investition profitabel: Streuverluste werden abgeschnitten, das gesamte Budget wandert auf Top-Performer.

### Zwei Shifting-Gangarten

- **Gangart 1 – Budget-Umverlagerung:** Budgets zwischen Entitäten verschieben (Top-Performer mehr, schwächere weniger)
- **Gangart 2 – Shifting durch Pausieren:** Schwache Entitäten konsequent pausieren

Beide Gangarten werden kombiniert über alle Ebenen angewendet.

### Warum manuell besser ist als automatisiert

Manuelle Durchführung liefert bessere Ergebnisse, weil unternehmenspolitische Rahmenbedingungen, Lead-Qualität jenseits der reinen Lead-Kosten und Kontext-Wissen einfließen können – Faktoren, die Automation nicht abbildet.

## Die 9 Reporting-Ebenen im Überblick

| Nr. | Ebene | Shift-Logik |
|---|---|---|
| 01 | Kampagnen | Budget von teuren Kampagnen abziehen und auf erfolgreichste verlagern; teuerste pausieren |
| 02 | Asset Groups (PMax) | Schwache Asset Groups pausieren; Budget bündelt sich automatisch |
| 03 | Ad Groups (Search) | Schwache Ad Groups mit teuren Lead-Kosten pausieren |
| 04 | RSAs (einzelne Anzeigen) | Anzeigen-Varianten ohne Performance entfernen |
| 05 | Keywords | Auf Keywords mit meisten Leads bei besten Lead-Kosten optimieren |
| 06 | Locations / Micro-Locations | Most Specific Location (Postleitzahl) – nur Top-Locations behalten |
| 07 | Uhrzeiten / Wochentage | Nur Slots mit besten Lead-Kosten beibehalten |
| 08 | Audiences | Auf Audience(n) mit besten Lead-Kosten konsolidieren |
| 09 | Age & Gender | Kohorten mit besten Lead-Kosten behalten |

## Voraussetzungen

- Looker Studio Reporting für alle 9 Ebenen
- Google Ads API-Daten, insbesondere Most Specific Location (Postleitzahl-ID)
- Massenausrollprozess abgeschlossen
- Mindestens 14 Tage seit letztem Ausrollprozess vergangen
- Conversion-Tracking inkl. CRM-Offline-Conversions für reale ROAS-Beurteilung
- Unternehmenspolitischer Rahmen geklärt (welche Kampagnen dürfen abgestellt werden)

## Prozessablauf

### Schritt 1 – Reporting-Basis prüfen
- Looker Studio öffnen, alle 9 Ebenen auf Datenfrische prüfen
- Zeitraum festlegen (typisch letzte 14–30 Tage seit Pipeline-Launch)
- Unternehmenspolitische Vorgaben klären

### Schritt 2 – Ebene 01: Kampagnen-Shift
- Lead-Kosten pro Kampagne auswerten
- Mono-Offer: Schwache Kampagnen abstellen, Budget auf erfolgreichste
- Multi-Offer: Budget innerhalb der Offer-Cluster shiften

### Schritt 3 – Ebene 02: Asset-Groups in PMax
- Alle PMax-Asset-Groups auf Lead-Kosten prüfen
- Schwach performende pausieren

### Schritt 4 – Ebene 03 & 04: Ad Groups & RSAs
- Lead-Kosten pro Ad Group prüfen, teure pausieren
- Innerhalb der verbleibenden: einzelne RSAs prüfen

### Schritt 5 – Ebene 05: Keywords
- Lead-Kosten pro Keyword auswerten
- Auf Keyword mit meisten Leads bei besten Lead-Kosten konsolidieren
- Schwache pausieren oder als Negative übernehmen

### Schritt 6 – Ebene 06: Locations / Micro-Locations
- Most Specific Location (Postleitzahl-ID) aus Google Ads API
- In Ballungsräumen prüfen, welche Postleitzahlen die besten Leads brachten
- Auf Top-Postleitzahlen konsolidieren
- Bei aktivem Offline-Conversion-Export: zusätzlich nach realem ROAS filtern

### Schritt 7 – Ebene 07: Uhrzeiten & Wochentage
- Lead-Kosten nach Tageszeit und Wochentag
- Nur Top-Slots behalten

### Schritt 8 – Ebene 08: Audiences
- Bei automatischen Audience-Tests: Lead-Kosten pro Audience prüfen
- Auf Top-Audience konsolidieren

### Schritt 9 – Ebene 09: Age & Gender
- Demografische Kohorten auf Lead-Kosten prüfen
- Top-Kohorten behalten

### Schritt 10 – Overall-CPL nach Shift prüfen
- Gesamt-CPL kontrollieren
- Konto 7–14 Tage beobachten
- Erkenntnisse für nächsten Massenausrollprozess festhalten

## Entscheidungslogik pro Entität

| Situation | Aktion |
|---|---|
| Entität liefert beste Lead-Kosten und viele Leads | Behalten, ggf. Budget erhöhen |
| Entität liefert gute Lead-Kosten, aber wenig Volumen | Behalten – kann sich in Folgeperioden ausweiten |
| Entität liefert teure Lead-Kosten | Pausieren oder Budget abziehen |
| Entität liefert keine Leads bei nennenswertem Spend | Pausieren |
| Entität ist unternehmenspolitisch geschützt | Status quo – außerhalb der Shift-Logik |

## Qualitätskriterien

- Alle 9 Ebenen durchgehen – Shift auf 2–3 Ebenen lässt Potenzial liegen
- Manuell statt automatisiert – Kontext fließt ein
- Datenbasis groß genug: mindestens 14 Tage nach Pipeline-Launch
- Lead-Qualität mitschauen – nicht nur Lead-Kosten
- Pro Ebene dokumentieren: welche Entitäten pausiert/behalten
- Monatlicher Rhythmus: nach jedem Ausrollprozess ein neuer Shift

## Troubleshooting

| Problem | Lösung |
|---|---|
| Overall-CPL sinkt nur leicht | Shift nicht radikal genug – über alle 9 Ebenen konsequent |
| Lead-Volumen bricht ein | Zu aggressiv pausiert – einzelne Mittelstarke reaktivieren, 7–14 Tage warten |
| Most Specific Location nicht in Looker Studio | Google-Ads-API-Anbindung prüfen, Postleitzahl-Mapping aufbauen |
| Unternehmenspolitik blockiert Pausieren | Innerhalb erlaubter Kampagnen budgetbasiert shiften, andere Ebenen umso konsequenter |
| Niedrige Lead-Kosten, schlechte Qualität | Offline-Conversion-Export aktivieren, nach realem ROAS shiften |
| Top-Entitäten ändern sich stark | Datenbasis pro Ebene zu klein – Lernphase verlängern oder Budgets bündeln |
