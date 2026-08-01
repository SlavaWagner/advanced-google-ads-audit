---
name: massen-asset-testing
description: Konkrete Mengenlogik für das Asset-Testing pro Offer in Google Ads – 5 bis 10 Anzeigen pro Framework-Cluster, ergibt 570 bis 1.380 Assets pro Kampagne. Verwende diesen Skill immer wenn der Nutzer Asset-Mengen, Test-Setup pro Offer, Massen-Asset-Testing, Skalierung der AI-Asset-Pipeline, 5-10 Anzeigen pro Cluster, Mengengerüst für RSAs oder PMax, Massen-Leadgenerierung, oder die operative Umsetzung der Ads-Frameworks anspricht — auch ohne explizite Nennung dieser Begriffe. Dieser Skill konkretisiert die Ads-Frameworks-SOP in messbare Mengen.
---

# SOP – Massen-Asset-Testing pro Offer mit 6 Frameworks

5–10 Anzeigen × 6 Frameworks pro Kampagne als Grundlage für Lead-Kosten-Shifting & Massen-Leadgenerierung.

## Zweck & Zielsetzung

Pro Kampagne werden zu jedem der sechs Framework-Cluster jeweils 5–10 Anzeigenvarianten getestet. Ziel ist es, durch diese Test-Architektur Ads mit günstigeren Lead-Kosten oder höheren Conversion-Werten zu identifizieren – um anschließend das Budget gezielt auf die Top-Performer zu shiften und in die Massen-Leadgenerierung zu skalieren.

## Anwendungsbereich

- **Primär:** Konten mit aktiver AI-Ads-Pipeline – ein Offer pro Durchlauf
- **Kampagnentypen:** Responsive Suchanzeigen (RSA) UND Performance Max (PMax)
- **Test-Zyklus:** 14 Tage Lernphase – danach Übergabe an Budget-Shifting
- **Skalierungsziel:** Massen-Leadgenerierung – Budget vollständig auf die Top-Performer
- **Voraussetzungen:** Conversion-Wert-Hierarchie, Angles Detection, Ads Frameworks SOP

## Test-Architektur pro Offer (Kern-Logik)

Pro Offer werden alle sechs Framework-Cluster parallel getestet:

- **1 Offer:** Ein klar definiertes Angebot
- **1 Kampagne pro Offer:** Das gesamte Framework-Testing erfolgt darin
- **6 Framework-Cluster:** Business Frameworks, Copywriting Frameworks, Market Sophistication, Lifecycle Stages, Angles, Sub-Audiences
- **5–10 Anzeigen pro Cluster:** Untergrenze bei knappen Budgets, Obergrenze bei stabilem Datenvolumen
- **Gesamtvolumen:** 30–60 Anzeigen pro Offer (6 × 5–10)

## Mengengerüst – Responsive Suchanzeigen (RSA)

Pro RSA-Anzeige: 15 Headlines + 4 Descriptions = **19 Assets pro Anzeige**

### Assets pro Cluster (RSA)

| Anzeigen pro Cluster | Headlines (15/Anzeige) | Descriptions (4/Anzeige) | Gesamt-Assets |
|---|---|---|---|
| 5 Anzeigen | 75 | 20 | **95 Assets** |
| 10 Anzeigen | 150 | 40 | **190 Assets** |

### Assets pro Kampagne (RSA, alle 6 Cluster zusammen)

| Anzeigen pro Cluster | Anzeigen gesamt (×6) | Assets pro Cluster | Assets pro Kampagne |
|---|---|---|---|
| 5 Anzeigen (Min) | 30 Anzeigen | 95 | **570 Assets** |
| 10 Anzeigen (Max) | 60 Anzeigen | 190 | **1.140 Assets** |

→ Pro Kampagne im RSA-Setup: **570 bis 1.140 Assets**, verteilt auf 30 bis 60 Anzeigen über sechs Cluster.

## Mengengerüst – Performance Max (PMax)

Pro PMax-Anzeige: 15 Headlines + 4 Descriptions + 4 Long Headlines = **23 Assets pro Anzeige**

### Assets pro Cluster (PMax)

| Anzeigen pro Cluster | Headlines (15) | Descriptions (4) | Long Headlines (4) | Gesamt-Assets |
|---|---|---|---|---|
| 5 Anzeigen | 75 | 20 | 20 | **115 Assets** |
| 10 Anzeigen | 150 | 40 | 40 | **230 Assets** |

### Assets pro Kampagne (PMax, alle 6 Cluster zusammen)

| Anzeigen pro Cluster | Anzeigen gesamt (×6) | Assets pro Cluster | Assets pro Kampagne |
|---|---|---|---|
| 5 Anzeigen (Min) | 30 Anzeigen | 115 | **690 Assets** |
| 10 Anzeigen (Max) | 60 Anzeigen | 230 | **1.380 Assets** |

→ Pro Kampagne im PMax-Setup: **690 bis 1.380 Assets**, verteilt auf 30 bis 60 Asset Groups über sechs Cluster.

## Zusammenfassung Mengen pro Kampagne

| Kampagnentyp | Minimum (5 Anzeigen/Cluster) | Maximum (10 Anzeigen/Cluster) |
|---|---|---|
| **RSA – Anzeigen** | 30 Anzeigen | 60 Anzeigen |
| **RSA – Assets** | 570 Assets | 1.140 Assets |
| **PMax – Asset Groups** | 30 Asset Groups | 60 Asset Groups |
| **PMax – Assets** | 690 Assets | 1.380 Assets |

## Verteilung auf die sechs Framework-Cluster

| Nr. | Cluster | Perspektive | Naming-Convention |
|---|---|---|---|
| 01 | Business Frameworks | PAS, MVP Pivots, Blue Ocean, DISG, OCEAN | `[Offer]_BF_PAS_01` |
| 02 | Copywriting Frameworks | Vorteil, Beweis, Dringlichkeit, Paradox, Neugier, Einzigartigkeit, Frage | `[Offer]_CW_Frage_01` |
| 03 | Market Sophistication | Niedrig / Mittel / Hoch | `[Offer]_MS_Hoch_01` |
| 04 | Lifecycle Stages | MQL, SQL, Opportunity, Customer | `[Offer]_LC_MQL_01` |
| 05 | Angles | Customer Pain Point × Solution Frame | `[Offer]_AN_Preiskorrekturen_01` |
| 06 | Sub-Audiences | Erbschaftler, Kapitalanleger, etc. | `[Offer]_SA_Erbschaft_01` |

## Prozessablauf

### Schritt 1 – Offer-Briefing & Anzeigenzahl festlegen
- Offer definieren (Angebot, Zielgruppe, Conversion-Aktion)
- Anzeigenzahl pro Cluster festlegen: 5 oder 10
- Kampagnentyp festlegen (RSA oder PMax)
- 14-Tage-Testzeitraum blockieren

### Schritt 2 – Input-Material pro Cluster vorbereiten
- Bestandsanzeigen via Google Ads API pullen
- Angles aus Angles-Detection-SOP übernehmen
- Sub-Audiences pro Offer recherchieren
- Lifecycle-Stage-Daten aus CRM bereitstellen

### Schritt 3 – Asset Creation pro Cluster
- Pro Cluster eigener AI-Asset-Pipeline-Strang mit Framework-Systeminstruktion
- Scoring-Pre-Selection mit Konservativ-Prompt aktivieren
- Pro Cluster: 5–10 Anzeigen mit 19 Assets (RSA) oder 23 Assets (PMax)
- Naming-Convention strikt einhalten

### Schritt 4 – Review (Pflicht vor Aktivierung)
- Alle Assets sichten: Markenkonformität, Faktentreue, Compliance
- Halluzinationen und problematische Formulierungen entfernen
- Zeichenlimits prüfen (30 Headlines, 90 Descriptions)

### Schritt 5 – Bulk Upload
- Reviewte Assets in Bulk-Upload-Vorlage
- Im Editor importieren, Cluster-Zuordnung verifizieren
- Anzeigen pausiert hochladen, dann gemeinsam aktivieren (massierter Launch)

### Schritt 6 – 14 Tage Lernphase
- Mindestens 14 Tage ohne Eingriffe
- Bei kleinen Budgets ggf. auf 21–28 Tage verlängern
- Daten täglich kurz monitoren – nicht eingreifen

### Schritt 7 – Auswertung & Ranking
- Pro Cluster und Anzeige Lead-Kosten und Conversion-Werte ermitteln
- Top-Performer-Anzeigen identifizieren
- Cluster-Ranking erstellen

### Schritt 8 – Budget-Shifting & Massen-Leadgenerierung
- Schwache Anzeigen pausieren
- Budget auf Top-Performer verlagern
- Bei klaren Top-Cluster-Mustern: eigene Skalierungskampagne ausgliedern
- Übergabe an Budget-Shifting-SOP

### Schritt 9 – Monatlicher Re-Run
- Neue Asset-Generierung mit Kontext der bereits getesteten Cluster
- Schwache Cluster anders prompten oder aussetzen
- Top-Cluster konsequent ausbauen

## Entscheidungshilfe: 5 oder 10 Anzeigen pro Cluster?

| 5 Anzeigen, wenn … | 10 Anzeigen, wenn … |
|---|---|
| Tagesbudget unter 50 € (RSA) bzw. 100 € (PMax) | Tagesbudget komfortabel, Lernphase stabil |
| Geringer monatlicher Lead-Anfall pro Offer | Hoher Lead-Anfall mit klarer Conversion-Datenbasis |
| Erst-Setup oder neue Branche | Etabliertes Konto mit Vormonats-Erfahrung |
| Review-Kapazität begrenzt | Review-Kapazität für 1.000+ Assets vorhanden |
| Branche mit knappem Suchvolumen | Hochvolumige Branche mit breiter Sub-Audience-Vielfalt |

## Qualitätskriterien

- Alle sechs Cluster aktiv – Parallelität liefert die Vergleichsbasis
- Mengentreue: 5–10 Anzeigen pro Cluster
- Naming-Convention strikt – Cluster-Tag im Asset-Namen
- Pre-Selection mit Konservativ-Prompt: Pflicht
- Pausiert-Upload: Niemals automatisch aktiv
- 14 Tage Disziplin: Keine vorzeitigen Eingriffe
- Budget-Shifting konsequent nach 14 Tagen
- Top-Performer in eigene Skalierungskampagne ausgliedern

## Troubleshooting

| Problem | Lösung |
|---|---|
| Mengenflut überfordert das Review | Auf 5 Anzeigen pro Cluster reduzieren (570/690 Assets), Review in Cluster-Blöcken |
| Performance pro Cluster nicht zuordenbar | Naming-Convention im Asset-Namen pflegen |
| Einzelne Cluster bekommen kaum Impressionen | Budget zu klein für 30–60 parallele Anzeigen – reduzieren oder Budget anheben |
| Lead-Qualität sinkt trotz besserer Lead-Kosten | Auswertung um Offline-Conversion-Daten erweitern |
| Cluster Lifecycle Stages liefert nichts | CRM-Anbindung prüfen |
| Mehrere Cluster liefern identische Anzeigen | Systeminstruktion pro Cluster schärfen |
| Top-Performer verliert nach Skalierung | Audience-Übersättigung – parallel weitere Varianten im selben Cluster generieren |
