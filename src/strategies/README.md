# Google Ads Strategy Skills & Standard Operating Procedures (SOPs)

A modular collection of 11 actionable SOP markdown skills for strategic Google Ads management in High-Ticket Lead Generation. Each skill file is completely self-contained and formatted according to the standard skill specification (YAML frontmatter containing `name` and `description`, followed by an operational markdown body).

## Architecture & Clusters

The 11 skills are organized into four cohesive functional clusters:

### Foundation
- **Strategy 1: Conversion Value Hierarchy (`conversion-value-hierarchy.md`)** — Establishes hockey-stick conversion values, two-tier qualification, and Offline Conversion Imports (OCI) as the prerequisite foundation for all subsequent strategies.

### AI Ads Pipeline (Monthly 5-Step Continuous Workflow)
- **Strategy 2: Angles Detection (`angles-detection.md`)** — Systematic monthly extraction of new customer pain points and angles from competitive intelligence and landing page scraping.
- **Strategy 3: Ads Frameworks (`ads-frameworks.md`)** — Six proven framework clusters with quantitative pre-selection scoring for structured asset copy generation.
- **Strategy 4: Mass Asset Testing (`massen-asset-testing.md`)** — Volume testing methodology deploying 5–10 ad variants across 6 framework matrices per campaign.
- **Strategy 5: AI Assets Bulk Launch (`ai-assets-bulk-launch.md`)** — Bulk rollout protocol via Google Ads Editor utilizing a 10×20 architecture with strict PAUSED safeguard states.
- **Strategy 6: Budget Shifting (`budget-shifting.md`)** — Dynamic budget reallocation across 9 granular reporting dimensions based on real conversion margin.

### Algorithmic Rollout Strategies
- **Strategy 7: Micro Location Testing (`micro-location-testing.md`)** — High-precision 1 km radius pin-drop targeting and postal code segmentation.
- **Strategy 8: Performance Max Audience Signals (`pmax-zielgruppensignale.md`)** — 5 targeting tiers progressing from narrow custom intent to broad contextual signals.

### Bidding Calibration & Specialized Routines
- **Strategy 9: Target CPA Tests (`ziel-cpa-tests.md`)** — Systematic step-wise bidding calibration (+15% / -10%) to stimulate auction competitiveness.
- **Strategy 10: Target ROAS Tests (`ziel-roas-tests.md`)** — Multi-phase ROAS calibration in "Maximize Conversion Value" bidding based on closed deal values.
- **Strategy 11: Artificial Budget Inflation (`kuenstliche-budget-ueberhoehung.md`)** — High-ticket market dominance strategy pairing 5x-10x budget headroom with strict Max CPC bid caps.

## Pipeline Interlocking

The standard monthly operational workflow interlocks as follows:

```
Angles Detection (Strategy 2)
        │
Ads Frameworks (Strategy 3)
        │
Mass Asset Testing (Strategy 4)
        │
AI Assets Bulk Launch (Strategy 5)
        │
   14-Day Algorithmic Learning Phase
        │
Budget Shifting (Strategy 6)
```

The Foundation (Strategy 1) is an absolute prerequisite for the pipeline. Algorithmic Rollout and Bidding Calibration SOPs (Strategies 7–11) are executed concurrently based on account scale and competitive auction density.

## Usage & Execution

Every SOP skill file can be executed individually via the CLI:
```bash
advanced-google-ads-audit <strategy-name>
```

Examples:
```bash
advanced-google-ads-audit conversion-value-hierarchy
advanced-google-ads-audit angles-detection
advanced-google-ads-audit budget-shifting
```
