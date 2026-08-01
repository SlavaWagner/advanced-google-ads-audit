# Google Ads Strategy Skills

Eine modulare Sammlung von 11 SOPs als Markdown-Skills für die strategische Google-Ads-Betreuung. Jede Skill-Datei ist eigenständig verwendbar und nach dem Standard-Skill-Format aufgebaut (YAML-Frontmatter mit `name` und `description`, gefolgt vom Markdown-Body).

## Aufbau-Logik

Die 11 Skills gliedern sich in vier zusammenhängende Cluster:

### Fundament
- **01 – conversion-value-hierarchy** — Aufbau der Hockey-Stick-Conversion-Werte als Basis für alle weiteren Strategien

### AI-Ads-Pipeline (monatlicher 5-Schritte-Prozess)
- **02 – angles-detection** — Monatliche Ermittlung neuer Angles aus Wettbewerbs- und Marktanalysen
- **03 – ads-frameworks** — Sechs Framework-Cluster mit Scoring-Pre-Selection für die Asset Creation
- **04 – massen-asset-testing** — Mengenlogik 5–10 Anzeigen × 6 Frameworks pro Kampagne
- **05 – ai-assets-bulk-launch** — Bulk-Launch im Google Ads Editor inkl. 10×20-Architektur
- **06 – budget-shifting** — Systematische Budget-Verlagerung über 9 Reporting-Ebenen

### Ausroll-Strategien
- **07 – micro-location-testing** — 1-km-Nadelköpfe per Gemini & Google Maps
- **08 – pmax-zielgruppensignale** — 5 Targeting-Stufen von Narrow bis Broad

### Gebots- & Sonderstrategien
- **09 – ziel-cpa-tests** — Kontinuierliches Anheben & Absenken des Ziel-CPA
- **10 – ziel-roas-tests** — Stufenweise ROAS-Tests in "Conversion-Wert maximieren"
- **11 – kuenstliche-budget-ueberhoehung** — Last-Resort-Strategie für oberste Suchposition

## Verzahnung der Skills

Der monatliche Strategy-Workflow läuft idealerweise so:

```
Angles Detection (02)
        ↓
Ads Frameworks (03)
        ↓
Massen-Asset-Testing (04)
        ↓
AI Assets Bulk Launch (05)
        ↓
   14 Tage Lernphase
        ↓
Budget Shifting (06)
```

Das Fundament (01) ist Voraussetzung für die gesamte Pipeline. Die Ausroll- und Gebotsstrategien (07–11) werden parallel angewandt, je nach Konto-Situation.

## Verwendung

Jede Skill-Datei lässt sich einzeln verwenden – sei es als Claude Skill, in Custom GPTs, als Systeminstruktion für Make-AI-Agenten oder als Briefing-Dokument für das Team.

Die Skills sind so geschrieben, dass die `description` im Frontmatter das Triggering steuert (wann der Skill angewandt wird) und der Body die operative Anleitung liefert.
