---
name: pmax-zielgruppensignale
description: Fünf Targeting-Stufen (Narrow, Standard, Broad, 30-Sekunden-Besucher, Competitors) für PMax-Asset-Gruppen zur systematischen Ermittlung der besten Lead-Kosten. Verwende diesen Skill immer wenn der Nutzer PMax-Zielgruppensignale, Targeting-Stufen, Audience-Setup für Performance Max, Narrow/Standard/Broad-Targeting, 30-Sekunden-Besucher als Audience, Competitor-Audiences, First-Party-Daten aus GA4, oder die Audience-Auswahl für Asset-Gruppen anspricht — auch ohne explizite Begriffe. Erfahrungsgemäß liefern Narrow und 30-Sekunden-Besucher am häufigsten die günstigsten Lead-Kosten.
---

# SOP – PMax-Zielgruppensignale für Google Ads

Targeting-Stufen von Narrow bis Broad für PMax-Asset-Gruppen zur Ermittlung der besten Lead-Kosten.

## Zweck & Zielsetzung

Standardisiertes Setup von Zielgruppensignalen in PMax-Asset-Gruppen. Durch fünf klar definierte Targeting-Stufen systematisch herausfinden, welche Signal-Kombination pro Offer die besten Lead-Kosten und höchsten Conversion-Werte liefert.

## Anwendungsbereich

- **Primär:** Performance-Max-Kampagnen mit mehreren parallelen Asset-Gruppen
- **Anwendungsfall:** Systematisches Testen unterschiedlicher Targeting-Tiefen
- **Voraussetzung:** GA4 sauber eingerichtet inkl. Page-Location-Daten und Audience-Sync zu Google Ads
- **Erfahrungswert:** Narrow und 30-Sekunden-Besucher liefern am häufigsten die günstigsten Lead-Kosten

## Strategische Begründung

### Warum gestaffelte Targeting-Stufen?

PMax-Asset-Gruppen reagieren je nach Offer und Branche unterschiedlich auf die Datenbreite der Signale. Eine zu enge Definition schneidet relevante Zielgruppen ab, eine zu breite verwässert die Lernsignale. Alle fünf Stufen werden parallel aufgesetzt und gegeneinander getestet.

### First-Party-Daten als Rückgrat

Zwei der fünf Stufen (Narrow und 30-Sekunden-Besucher) basieren ausschließlich auf First-Party-Daten aus GA4. Selbst erhobene Schnittmengen liefern dem Algorithmus die qualitativ hochwertigsten Hinweise.

## Übersicht der fünf Targeting-Stufen

| Nr. | Stufe | Kern | Datenquelle |
|---|---|---|---|
| 01 | Narrow | Sehr enge angebotsspezifische Zielgruppe – nur Besucher der Angebots-Unterseite | First-Party (GA4) |
| 02 | Standard | Ausgewogene Mischung aus eigenen Daten und Plattform-Zielgruppen | First-Party + Plattform |
| 03 | Broad | Maximale Datenbreite – gesamtes Signalfeld | First-Party + Plattform breit |
| 04 | 30-Sekunden-Besucher | Reine First-Party-Schnittmenge auf Sitzungsdauer > 30 Sek. | First-Party (GA4) |
| 05 | Competitors | Mitbewerber-Affinität – ähnlich zu Mitbewerber-Besuchern | Plattform (Google Ads) |

## Detail-Setup pro Targeting-Stufe

### 01 – Narrow
- **Quelle:** GA4-Audience auf Basis Page-Location
- **Filterlogik:** Page Location enthält den eindeutigen Angebots-Slug
- **Wichtig:** Nicht alle Website-Besucher pauschal – nur die Angebots-Besucher
- **Typische Performance:** Häufig günstigste Lead-Kosten + höchste Lead-Anzahl

### 02 – Standard
- Alle Nutzer mit höherer Sitzungsdauer (10–360 Sekunden, je nach Auswahl)
- Alle Nutzer aus GA4 mit Page-Location-Term
- Passende Keywords
- Zielgruppen aus Affinity Audiences und In-Market Audiences (z. B. Kaufinteressenten, Wohneigentümer)

### 03 – Broad
- Alle Website-Besucher aus GA4
- Alle Google-Ads-Besucher
- Alle relevanten Keywords
- Alle relevanten Competitors
- Alle relevanten Affinity- und In-Market Audiences

### 04 – 30-Sekunden-Besucher
- **Quelle:** GA4-Audience
- **Filterlogik:** Sitzungsdauer > 30 Sekunden
- **Typische Performance:** Häufig zweitbester Performer nach Narrow

### 05 – Competitors
- **Quelle:** Google Ads (Custom Audiences mit Mitbewerber-URLs)
- **Anwendungsfall:** In manchen PMax-Kampagnen branchenabhängig die beste Wahl
- **Achtung:** Performance stark schwankend

## Voraussetzungen

- GA4 sauber implementiert (Page-Location-Tracking, Sitzungsdauer)
- Pro Offer: Page-Location-Audience, 30-Sekunden-Audience, Allgemein-Besucher-Audience
- Audience-Sync GA4 → Google Ads aktiv
- Custom Audiences mit Mitbewerber-URLs
- Keyword-Listen (Brand/Generic/Competitor) pro Offer
- Affinity/In-Market-Auswahl pro Branche kuratiert
- Conversion-Tracking für saubere Vergleichbarkeit

## Prozessablauf

### Schritt 1 – Audience-Inventar prüfen
- Vorhandene GA4-Audiences sichten
- Fehlende anlegen und an Google Ads syncen
- Custom Audiences für Competitors anlegen

### Schritt 2 – Signal-Pakete vorbereiten
- Pro Offer ein dediziertes Paket pro Stufe (Narrow/Standard/Broad/30s/Competitors)
- Pro Stufe dokumentieren: welche Audiences, Keywords, Custom-Segmente
- Sitzungsdauer-Schwelle für Standard festlegen (10–360 Sek.)

### Schritt 3 – Asset-Gruppen-Struktur in PMax aufsetzen
- Pro Offer fünf Asset-Gruppen anlegen – eine pro Stufe
- Naming-Convention: `[Offer]_[Stufe]` (z. B. `Immo_Bewertung_Narrow`)
- Signal-Pakete als Zielgruppensignale einbuchen
- Assets (Headlines, Descriptions, Bilder, Videos) pro Asset-Gruppe IDENTISCH halten – damit nur das Signal getestet wird

### Schritt 4 – Launch & Lernphase
- Alle fünf Asset-Gruppen gleichzeitig live setzen
- Mindestens 14 Tage Lernphase ohne Eingriffe
- Bei sehr kleinen Budgets ggf. 4 Wochen

### Schritt 5 – Auswertung & Ranking
- Pro Asset-Gruppe Lead-Kosten, Lead-Volumen, Conversion-Wert ermitteln
- Stufen-Ranking pro Offer (Top 1 bis Top 5)
- Erkenntnisse pro Branche festhalten

### Schritt 6 – Budget-Shift & Konsolidierung
- Budget auf Top-1- und Top-2-Stufen verlagern
- Schwächere pausieren oder reduzieren
- Top-Performer-Stufen ggf. in eigenständige Kampagnen ausgliedern

### Schritt 7 – Re-Test im Turnus
- Targeting-Stufen-Test pro Offer alle 1–3 Monate wiederholen
- Marktdynamik, neue Wettbewerber, saisonale Verschiebungen

## Qualitätskriterien

- Alle fünf Stufen parallel – erst Vergleich zeigt echte Top-Stufe
- Saubere Naming-Convention
- Assets identisch halten – nur das Signal wird getestet
- 14 Tage Lernphase – keine vorzeitigen Eingriffe
- First-Party priorisieren bei mehrdeutigen Ergebnissen
- Branchen-Patterns dokumentieren

## Troubleshooting

| Problem | Lösung |
|---|---|
| Narrow liefert kaum Reichweite | Page-Location-Filter zu eng – Slug breiter fassen oder Cluster zusammenfassen |
| Broad performt besser als Narrow | First-Party-Audiences zu klein – Reichweite in GA4 prüfen |
| Competitors-Stufe nur teure Klicks | Mitbewerber-Auswahl prüfen – nur direkte Wettbewerber einbuchen |
| Alle Stufen liefern ähnliche Lead-Kosten | Lernphase verlängern, Budgets möglicherweise zu klein |
| GA4-Audiences kommen nicht in Google Ads an | Property-Link, Mitgliedschaftsdauer, Mindestschwellen prüfen |
| Asset-Gruppen kannibalisieren sich | Top-Performer in eigene Kampagnen ausgliedern |
