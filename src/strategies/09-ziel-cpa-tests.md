---
name: ziel-cpa-tests
description: Kontinuierliches Anheben und Absenken des Ziel-CPA in der Google-Ads-Gebotsstrategie "Conversions maximieren" als Algorithmus-Training über 2–3 Monate. Verwende diesen Skill immer wenn der Nutzer Ziel-CPA, Target CPA, CPA-Tests, Kostenpunkt pro Conversion, Algorithmus-Training, "durch das Ziel eingeschränkt", Conversions maximieren mit Ziel-CPA, oder die stufenweise Optimierung des CPA in Google Ads anspricht — auch ohne explizite Begriffe. Nicht für Ad-hoc-Optimierungen geeignet.
---

# SOP – Ziel-CPA Tests in Google Ads

Kontinuierliches Anheben und Absenken des Ziel-CPA bei "Conversions maximieren".

## Zweck & Zielsetzung

Den Algorithmus durch kontinuierliches Anheben und Absenken des Ziel-CPA langfristig auf einen niedrigeren Kostenpunkt pro Conversion trainieren – insbesondere wenn ein einzelner statischer Ziel-CPA nicht die gewünschten Resultate liefert.

## Anwendungsbereich

- **Primär:** Kampagnen, in denen der CPA über dem KPI liegt
- **Sekundär:** Kampagnen, in denen ein einzelner realistischer Ziel-CPA keine nachhaltige Verbesserung brachte
- **Gebotsstrategie:** "Conversions maximieren" mit Ziel-CPA
- **Nicht geeignet für:** Ad-hoc-Optimierungen – braucht 2–3 Monate Laufzeit

## Strategische Begründung

### Warum überhaupt mit Ziel-CPA arbeiten?

Ein Ziel-CPA trainiert den Algorithmus darauf, Conversions zu einem definierten Kostenpunkt zu erzielen. In den meisten Fällen reicht ein realistischer Ziel-CPA, um den CPA deutlich zu senken.

### Wann ein statischer Ziel-CPA nicht ausreicht

In manchen Konstellationen funktioniert ein einzelner Ziel-CPA nicht: keine Conversions, höhere CPA, oder Budget wird kaum ausgegeben. Hinweis "durch das Ziel eingeschränkt" ist ein klares Signal, dass der Ziel-CPA zu niedrig ist.

### Warum die kontinuierliche Anhebung/Absenkung funktioniert

Durch stufenweises Anheben/Absenken bekommt der Algorithmus laufend neue Datenpunkte. Die Strategie führt in den meisten Kampagnen zu nachhaltiger Verbesserung bei gleichbleibender Lead-Qualität.

## Voraussetzungen & Rahmenbedingungen

| Voraussetzung | Anforderung |
|---|---|
| Gebotsstrategie | "Conversions maximieren" mit Ziel-CPA |
| Conversion-Tracking | Sauber eingerichtet und stabil |
| Testturnus | 2 Wochen pro Stufe (Standard); 4 Wochen bei Tagesbudgets unter 20 € |
| Gesamtlaufzeit | Mindestens 2 Monate, optimal 3 Monate |
| Ausgangswert | Aktueller CPA als Referenz dokumentieren |
| Google-Empfehlungen | Ziel-CPA-Schätzungen sind Richtwert, wie weit man realistisch nach unten gehen kann |

## Prozessablauf

### Schritt 1 – Ausgangslage dokumentieren
- Aktuellen CPA festhalten (Referenzwert)
- Ziel-CPA definieren (z. B. von 26,06 € auf 10 €)
- Lead-Qualitätskriterien festlegen
- Tagesbudget prüfen (Testturnus 2 oder 4 Wochen)

### Schritt 2 – Ersten Ziel-CPA setzen
- Wert unter aktuellem CPA (z. B. bei 26,06 € mit 20 € starten)
- Google-Ziel-CPA-Schätzungen prüfen – nicht so niedrig, dass Auslieferung abklemmt
- Setzungstag dokumentieren

### Schritt 3 – 2-Wochen-Beobachtung
- CPA am Ende der Lernphase auswerten
- Lead-Qualität gegenchecken
- Hinweis "durch das Ziel eingeschränkt" beachten
- Entscheidung: Ausgang 1 (Erfolg) oder Ausgang 2 (kein Erfolg)

### Schritt 4 – Iteration nach Entscheidungsbaum

## Entscheidungsbaum

### Ausgang 1 – Kostenpunkt pro Conversion hat sich verbessert

Beispiel: CPA sinkt von 26,06 € auf 15 € nach Setzen eines Ziel-CPA von 20 €.

- **Aktion:** Niedrigeren Ziel-CPA setzen (z. B. 10 €)
- **Wartezeit:** 2 Wochen
- Bei weiterem Erfolg → noch niedrigeren Ziel-CPA → Ausgang 1 erneut
- Bei kein Erfolg → Ziel-CPA komplett entfernen, 2 Wochen beobachten → in Ausgang 2

### Ausgang 2 – Kostenpunkt pro Conversion hat sich verschlechtert

Beispiel: CPA sinkt initial auf 18,66 €, steigt dann auf 21,94 €.

- **Aktion:** Ziel-CPA entfernen, 2 Wochen beobachten
- Bei Erfolg → niedrigeren Ziel-CPA setzen → in Ausgang 1
- Bei kein Erfolg → höheren Ziel-CPA als zuvor, aber unter dem ursprünglichen CPA
- Bei weiterhin kein Erfolg → Ziel-CPA entfernen, 2 Wochen, dann nochmals höher
- Sobald Erfolg → in Ausgang 1

## Beispielverlauf

| Stufe | Ziel-CPA | Ergebnis nach 2 Wochen | Nächste Aktion |
|---|---|---|---|
| Start | kein Ziel-CPA | CPA bei 26,06 € | Ziel-CPA auf 20 € |
| 1 | 20 € | CPA sinkt auf 15 € | Ausgang 1 – auf 10 € absenken |
| 2 | 10 € | CPA sinkt auf 18,66 €, dann Anstieg auf 21,94 € | Ausgang 2 – Ziel-CPA entfernen |
| 3 | kein Ziel-CPA | CPA stabilisiert sich | Neuen, niedrigeren Ziel-CPA testen |
| … | Iteration | Schrittweise Annäherung | Stabile Endstufe finden |

## Qualitätskriterien

- Geduld einplanen: 2–3 Monate Laufzeit
- Lead-Qualität mitschauen – nicht auf Kosten der Qualität sinken
- Realistisch absenken – nie unter Google-Schätzung springen
- Dokumentation pro Stufe: Datum, Ziel-CPA, Ergebnis, Folgeaktion
- Bei starken CPA-Reduzierungen: CRM-/Sales-Funnel gegenchecken

## Troubleshooting

| Problem | Lösung |
|---|---|
| "Durch das Ziel eingeschränkt" – Budget nicht ausgeschöpft | Ziel-CPA war zu niedrig – höheren Wert ansetzen, unter aktuellem CPA |
| CPA steigt nach Absenkung | Ausgang 2 ausführen: entfernen, 2 Wochen beobachten, höher setzen |
| Keine Conversions mehr | Zu aggressiv – komplett entfernen, Lernphase neu starten, milder einsteigen |
| Tagesbudget unter 20 € – Schwankungen | Testturnus auf 4 Wochen pro Stufe verlängern |
| Ad-hoc-Optimierung gewünscht | SOP ist NICHT geeignet – Kunden vorab klar kommunizieren |
