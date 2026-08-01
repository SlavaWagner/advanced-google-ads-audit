---
name: angles-detection
description: Monatliche Ermittlung neuer Angles für Google Ads aus Wettbewerbs- und Marktanalysen mit AI-Systemen (Claude, Gemini, ChatGPT) und Make-Automatisierungen. Verwende diesen Skill immer wenn der Nutzer Angles, Customer Pain Points, Solution Frames, Competitor Analysis, Wettbewerbsanalyse für Ads, Hook-Recherche, Sub-Audiences-Recherche, Awareness Stages, neue Anzeigenstoßrichtungen, oder die inhaltliche Vorbereitung der AI-Asset-Pipeline anspricht — auch wenn das Wort "Angles Detection" nicht explizit fällt. Dieser Skill ist der inhaltliche Vorlauf zur AI-Asset-Pipeline.
---

# SOP – Angles Detection & Competitor Analysis

Monatliche Ermittlung neuer Angles aus Wettbewerbsdaten & Marktanalysen für günstigere Lead-Kosten in Google Ads.

## Zweck & Zielsetzung

Durch systematische Wettbewerbs- und Marktanalysen mit AI-Systemen ständig neue Angles auf Basis von Customer Pain Points und Solution Frames ermitteln. Diese Angles bilden das inhaltliche Fundament für die AI-Asset-Pipeline und sorgen dafür, dass dort kein "ins Blaue" generiert wird.

## Anwendungsbereich

- **Primär:** Konten mit aktiver AI-Asset-Pipeline (Angles sind dort das Input-Material)
- **Branchen-Eignung:** Hochpreis-Leadgenerierung (Immobilien, Bildung, Marketingagenturen, IT, Recht)
- **Rhythmus:** Monatlich – als fester Pipeline-Schritt vor der AI-Asset-Creation
- **NICHT geeignet für:** Hochspezialisierte Nischenangebote ohne Produkt-Markt-Fit

## Strategische Begründung

### Was ist ein Angle (und was NICHT)?

Ein Angle ist KEIN USP und KEIN technisches Feature. "Wir sind die einzigen mit 48-Stunden-Versand" ist KEIN Angle. Ein Angle ist ein starkes Verkaufsargument aus der Verbindung von Customer Pain Point und Solution Frame.

- **Customer Pain Point:** Ein konkreter Schmerzpunkt der Zielgruppe (z. B. Unsicherheit über Immobilienwert nach Zinsentwicklung)
- **Solution Frame:** Der konkrete Einsatzzweck, in dem das Angebot diesen Schmerzpunkt adressiert (z. B. "Preiskorrekturen prüfen mit Online-Rechner")
- **Angle:** Die Verbindung beider – nicht das Angebot wird vorgestellt, sondern Relevanz hergestellt

### Der Effekt: Halbierung der Lead-Kosten möglich

| Variante | Lead-Kosten |
|---|---|
| "Online-Immobilienbewertung" (reine Angebotsvorstellung) | 44,94 € pro Lead |
| "Preiskorrekturen prüfen" (Angle: Pain Point + Solution Frame) | 23,10 € pro Lead |

In manchen Konstellationen lassen sich Lead-Kosten von 257 € über mittelmäßige Angles auf 50 € absenken – und mit dem richtigen Angle auf 10–20 €.

### Warum monatlich?

Ohne monatlichen Rhythmus wiederholen sich AI-generierte Assets nach wenigen Monaten. Frische Angle-Recherchen sorgen für inhaltliche Erneuerung und verhindern Wiederholungsschleifen.

### Eigene Angles vs. Wettbewerber-Angles

Die wirkungsvollsten Angles sind oft die, die NIEMAND sonst bedient. Die Wettbewerbsanalyse dient zwei Zwecken: Inspiration für tragfähige Stoßrichtungen UND Ausschluss übersättigter Angles ("plattgetreten" vs. "unbesetzt").

## Datenquellen für die Recherche

| Quelle | Was wird extrahiert |
|---|---|
| AI-Grounding (Online-Suche) | Analyse von Wettbewerber-Websites, Markt-Trends und aktuellen Online-Daten |
| BigQuery / GA4 | Eigene Performance-Daten als Kontext |
| Eigene Hypothesen (Reißbrett) | Selbst gedachte Angles – oft am besten, weil unbesetzt |

## Was konkret recherchiert wird (4 Output-Kategorien)

### Angles (Customer Pain Point × Solution Frame)
- Top 10–25 Angles pro Offer, sortiert nach Reichweite
- Pro Angle: Pain Point, Solution Frame, Begründung
- Tagging: "plattgetreten" vs. "unbesetzt"

### Hooks (Headline-Aufhänger)
- Welche Hook-Typen dominieren in der Branche?
- Typen: Neugier, Beweis, Dringlichkeit, Paradox, Frage, Urgency, Story-Hook
- Beispiel Immobilien: "Wie viel ist Ihre Immobilie wert?", "Kennen Sie den wahren Wert?"

### CTAs (Call-to-Action-Buttons)
- Welche CTAs werden im Markt verwendet?
- Beispiele: "Termin vereinbaren", "Kostenlose Bewertung", "Jetzt prüfen"

### Awareness Stages / Funnelstufen
- **Top of Funnel:** Allgemeine Fragen, Grundlagen
- **Middle of Funnel:** Strategie-Fragen, Vergleiche
- **Bottom of Funnel:** Konkrete Conversion-Themen

## Voraussetzungen

- AI-System mit Online-Suche/Grounding (Claude, ChatGPT, Gemini)
- BigQuery-Zugang (für eigene Performance-Daten)
- Output-Speicher (ClickUp, Airtable, Asana)
- Naming-Convention (Angle-Name in Kampagnen-Benennung)
- Kunden-Review-Prozess

## Prozessablauf

### Schritt 1 – Offer-Briefing erstellen
- Offer mit Kerneigenschaften dokumentieren
- Bestehende Performance pro Offer auswerten
- Branche und Region festlegen

### Schritt 2 – Wettbewerber-Inventar erstellen
- Top 5–10 Wettbewerber pro Offer identifizieren
- URLs der Wettbewerber-Websites sammeln
- AI-Prompt: "Finde mir die 5 größten Wettbewerber im Bereich X in Region Y"

### Schritt 3 – Daten über Grounding und BigQuery ziehen
- Eigene Performance-Daten aus BigQuery exportieren
- Wettbewerber-Websites und Marktdaten via AI-Grounding (Online-Suche) recherchieren
- Daten für die Analyse konsolidieren

### Schritt 4 – AI-Aggregation
- Rohdaten in AI-System laden
- Strukturierter Prompt: "Aggregiere die 10–25 wichtigsten Angles, sortiert nach Reichweite, nach Customer Pain Point und Solution Frame"
- Parallel: Hooks, CTAs, Awareness Stages aggregieren

### Schritt 5 – Tagging "plattgetreten" vs. "unbesetzt"
- Plattgetreten (alle Wettbewerber) → niedrige Priorität
- Unbesetzt (kaum jemand) → hohe Priorität

### Schritt 6 – Zoom-In und Zoom-Out Angles ergänzen
- **Zoom In:** Kleinere Details des Angebots (z. B. "Bauvorhaben im Kiez und Immobilienwert")
- **Zoom Out:** Größere Themen, in die das Angebot eingebettet ist (z. B. "Vermögensplanung", "Immobilienverkauf nach 10 Jahren")
- Oft die unbesetztesten und performance-stärksten Angles

### Schritt 7 – Output in Review-System
- Aggregierte Liste in ClickUp / Airtable / Asana
- Pro Angle: Name, Pain Point, Solution Frame, Tag, Quelle

### Schritt 8 – Review & Freigabe
- Kunde oder Strategy-Lead geht Angles durch
- Markenkonformität, rechtliche Tragfähigkeit
- Freigegebene Angles → Status "Aktiv"

### Schritt 9 – Übergabe an AI-Asset-Pipeline
- Freigegebene Angles als Input für Asset Creation
- Naming-Convention: Angle-Name als Teil der Kampagnen-Benennung

### Schritt 10 – Auswertung nach 14 Tagen → Budget-Shift
- Performance pro Angle auswerten
- Top-Performer identifizieren
- Übergabe an Budget-Shifting-SOP

### Schritt 11 – Monatlicher Re-Run
- Neue Detection mit Kontext der bereits getesteten Angles
- AI-Agent kennt Vormonats-Outputs
- Neue Marktthemen aufnehmen (Zinsen, Bauvorhaben, gesellschaftliche Trends)

## Zwei Methoden: Manuell vs. Automatisiert

| Manuell (Claude/Gemini mit Grounding) | Automatisiert (Make-Workflow) |
|---|---|
| Prompt-basiert – ad hoc nutzbar | Läuft monatlich automatisch durch |
| Schnell für einzelne Analysen | Skaliert über viele Kunden parallel |
| Höhere Flexibilität | Standardisierte Outputs |
| Höherer Zeitaufwand | Setup-Aufwand einmalig |
| Empfohlen für: Erst-Setup, Sonderfragen | Empfohlen für: Multi-Account-Skalierung |

## Qualitätskriterien

- Jeder Angle hat klar benannten Pain Point UND Solution Frame – kein USP
- Übersättigte Angles als "plattgetreten" getaggt
- Mindestens 2–3 Zoom-In/Zoom-Out-Angles (oft die Top-Performer)
- Jeder Angle ist auf Quelle rückführbar
- Kein Angle geht ohne Review in die Asset Creation
- Angle-Namen wandern in die Entitäten-Benennung in Google Ads

## Troubleshooting

| Problem | Lösung |
|---|---|
| AI liefert nur USPs statt Angles | Prompt schärfen: explizit nach Pain Point UND Solution Frame fragen |
| Angles wirken austauschbar | Zoom-In- und Zoom-Out-Schicht fehlt – gezielt nach Detail-Angles fragen |
| Datenberge ohne Erkenntnis | Strukturierten Aggregations-Prompt nutzen (sortiert nach Reichweite, Pain Point) |
| Im Folgemonat dieselben Angles | AI-Agent muss Conversation-Verlauf der Vormonate kennen |
| Nischen-Offer – Angles greifen nicht | Bei fehlendem Produkt-Markt-Fit ist Angles Detection nicht der richtige Hebel |
| Angle-Performance nicht zuordenbar | Naming-Convention war nicht eingehalten |
| Kunde lehnt fast alle Angles ab | Briefing schärfen: Marken-Guidelines, No-Gos im Vorfeld |
