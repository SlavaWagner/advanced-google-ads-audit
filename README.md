# Advanced Google Ads Audit (High Ticket Lead Gen)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![AI Framework: Antigravity](https://img.shields.io/badge/AI_Framework-Antigravity_CLI-blue.svg)](https://github.com/SlavaWagner)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)

> **Advanced Google Ads Account Audit & Strategy SOP Compliance Engine for High Ticket Lead Gen**  
> Evaluates live account structures against 11 Strategy SOPs and provides step-by-step implementation instructions to reach 100% strategy compliance.

> [!IMPORTANT]
> **Prerequisite for AI Processing:**
> Please start Google Antigravity beforehand using the command **`agy`** in your console!
> Interactive chat sessions, asset generation workflows, and AI processing run exclusively **INSIDE the Antigravity CLI**. In a standard terminal shell outside Antigravity, no AI processing takes place, and static execution outputs are intercepted with a guidance notice.

---

## Overview & Purpose

**Advanced Google Ads Audit (High Ticket Lead Gen)** is an autonomous AI agent package designed to check and audit Google Ads accounts against battle-tested High-Ticket Lead Generation Standard Operating Procedures (SOPs).

It connects via the **Google Ads API (v24)** using Google Cloud OAuth2 credentials, retrieves live campaign structures, conversion goals, bid strategies, RSA/PMax assets, and negative keyword lists, and evaluates percentage compliance for each strategy SOP.

---

## Architecture & Audit Flow

```
 [Google Ads Account (API v24)]
               │
               ▼
 ┌───────────────────────────┐
 │ 1. Account Checkup Engine │ ──► Queries SearchStream for Live Campaigns,
 └─────────────┬─────────────┘     Budgets, Bidding Strategies & Asset Groups
               │
               ▼
 ┌───────────────────────────┐
 │ 2. Strategy SOP           │ ──► Evaluates Compliance (%) against 11 SOPs
 │    Compliance Auditing    │     (Conversion Hierarchy, PMax Signals, Angles, etc.)
 └─────────────┬─────────────┘
               │
               ▼
 ┌───────────────────────────┐
 │ 3. Actionable Roadmap     │ ──► Outputs Step-by-Step Implementation Instructions
 │    & Report Generation    │     Saves Markdown & JSON Audit Reports
 └─────────────┬─────────────┘
```

---

## Strategy SOPs Audited

The Audit Agent evaluates account compliance against 11 Standard Operating Procedures:

1. **01 Conversion Value Hierarchy**: Checks for two-stage conversion tracking (Qualified Lead vs Unqualified Form Submissions) and Offline Conversion Imports (OCI).
2. **02 Angles Detection**: Audits headline and description copy for Pain Point + Solution Frame alignment.
3. **03 Ads Frameworks**: Evaluates structured copy formulas (PAS, AIDA, FAB) and high-ticket metaphors.
4. **04 Massen Asset Testing**: Audits creative test volume and pre-production matrix filtering.
5. **05 AI Assets Bulk Launch**: Verifies PAUSED launch status and asset variation safeguards.
6. **06 Budget Shifting**: Evaluates budget allocation agility toward top-performing campaigns.
7. **07 Micro Location Testing**: Checks geographic targeting granularity and location bid adjustments.
8. **08 PMax Zielgruppensignale**: Audits Custom Intent signals, competitor URL targeting, and negative keyword exclusions.
9. **09 Ziel CPA Tests**: Verifies Target CPA thresholds and conversion volume stability.
10. **10 Ziel ROAS Tests**: Audits Target ROAS rules and conversion value weighting.
11. **11 Künstliche Budget-Überhöhung**: Evaluates budget headroom vs bid cap limits.

---

## Installation & Setup

### 1. Install Globally via Antigravity CLI Ecosystem
```bash
npm install -g advanced-google-ads-audit
```

### 2. Clone Repository & Install Dependencies
```bash
git clone https://github.com/SlavaWagner/advanced-google-ads-audit.git
cd advanced-google-ads-audit
npm install
```

### 3. Setup Google Ads Credentials
Run the interactive setup command to configure OAuth2 credentials and authenticate your account on port 8085:
```bash
advanced-google-ads-audit setup
```

---

## CLI Usage & Commands

### 1. Run Full Account Checkup & Strategy Audit
```bash
advanced-google-ads-audit audit
```
Or use the short alias:
```bash
google-ads-audit checkup --customer-id 1234567890
```

### 2. Interactive Strategy Advisor (Chat with SOPs)
Chat interactively with any strategy SOP knowledge base:
```bash
advanced-google-ads-audit skills
```

### 3. Launch Visual Web Dashboard
Start the visual dashboard server on port 8080:
```bash
advanced-google-ads-audit dashboard
```

---

## Example Output

```text
=== Advanced Google Ads Account Audit (High Ticket Lead Gen) ===

Validating Google Ads OAuth2 Access Token...
[OK] Access Token ready.

ACCOUNT STRATEGY AUDIT SCOREBOARD:
  - Conversion Value Hierarchy         : 45% Compliance (Kritisch - Handlungsbedarf)
  - Angles Detection                   : 70% Compliance (Ausreichend)
  - Ads Frameworks                     : 60% Compliance (Ausreichend)
  - Massen Asset Testing               : 50% Compliance (Kritisch - Handlungsbedarf)
  - Budget Shifting                    : 80% Compliance (Optimal)
  - Pmax Zielgruppensignale            : 55% Compliance (Kritisch - Handlungsbedarf)

[OVERALL AUDIT SCORE]: 62.6% Compliance across High Ticket Lead Gen SOPs.

Strategy: Conversion Value Hierarchy
  Erfüllungsgrad: 45% (Kritisch - Handlungsbedarf)
  Fehlende Komponenten:
    - Zweistufiges Conversion-Tracking (Qualified Lead + Closed Deal Value Import).
    - Offline Conversion Imports (OCI) via Zapier / CRM Integration.
  Handlungsanweisung zur 100% Umsetzung:
    1. Erstelle in Google Ads eine primäre Conversion-Aktion "Qualifizierter Lead".
    2. Setze Formular-Absendungen ohne CRM-Prüfung als "Sekundäre Conversion".
    3. Richte den täglichen Offline Conversion Import (OCI) ein.
    4. Stelle die Kampagnengebotsstrategie auf "Conversion-Wert maximieren" mit Ziel-ROAS um.

[OK] Complete Audit Report saved persistently to:
  JSON: storage/runs/audit-report-2026-08-01.json
  Markdown: storage/runs/audit-report-2026-08-01.md
```

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

*Created with the help of Google Antigravity CLI*
