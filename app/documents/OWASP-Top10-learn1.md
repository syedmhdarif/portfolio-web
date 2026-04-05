# 🔐 OWASP Top 10 — Key Takeaways
> A concise study guide covering the OWASP organization, its methodology, and the #1 security risk: Broken Access Control.

---

## 🌐 What is OWASP?

**OWASP** = Open Web Application Security Project

A **free, open, non-profit** global community founded in **2001** (non-profit since 2004), dedicated to making web applications safer worldwide.

| Core Value | What it Means |
|---|---|
| 🔓 Open | Everything is transparent — code, finances, documents |
| 💡 Innovation | Encourages experimentation, hackathons, CTFs |
| 🌍 Global | Inclusive of everyone, everywhere |
| 🤝 Integrity | Vendor-neutral — no product bias |

> Anyone can join — beginners welcome. Members are volunteers from all walks of the tech world.

---

## 📋 What is the OWASP Top 10?

An **awareness document** listing the **most critical web application security risks**, published roughly every **3–4 years**.

- Latest edition: **2021**
- Based on data from **500,000+ applications** — the largest dataset OWASP has ever used
- **8 of 10** categories derived from hard data
- **2 of 10** derived from security practitioner surveys
- Focus shifted to **root causes** (e.g. bad cryptography) over symptoms (e.g. exposed credit card data)

---

## 🔑 Key Terminology

| Term | Simple Definition |
|---|---|
| **CWE** | General category of a software weakness (e.g. "path traversal") |
| **CVE** | A specific, named vulnerability in a real product (e.g. Log4j) |
| **CVSS** | A scoring system (1–10) for how exploitable or impactful a vulnerability is |
| **ASVS** | OWASP's Application Security Verification Standard — an actionable checklist you run against your app |

---

## 🏆 The 2021 OWASP Top 10 at a Glance

| # | Risk | One-liner |
|---|---|---|
| 1 | 🔓 **Broken Access Control** | Users can access things they shouldn't |
| 2 | 🔑 **Cryptographic Failures** | Weak or missing encryption exposes data |
| 3 | 💉 **Injection** | Attackers execute unauthorized commands (was #1 in 2017) |
| 4 | 🏗️ **Insecure Design** | Poor architecture makes security impossible |
| 5 | ⚙️ **Security Misconfiguration** | Default settings, wrong configs left exposed |
| 6 | 📦 **Vulnerable & Outdated Components** | Unpatched third-party libraries |
| 7 | 🪪 **Identification & Auth Failures** | Weak login/session mechanisms |
| 8 | 🔄 **Software & Data Integrity Failures** | Untrusted updates, CI/CD pipeline risks |
| 9 | 📊 **Security Logging & Monitoring Failures** | No logs = no visibility into attacks |
| 10 | 🌐 **Server-Side Request Forgery (SSRF)** | Server tricked into making unintended requests |

---

## 🔓 Deep Dive: Broken Access Control (#1)

### Why it's #1 — The Numbers

| Metric | Value |
|---|---|
| CWEs mapped | 34 |
| Apps affected (max) | **55.97%** |
| Max coverage | **94.55%** — nearly every app tested had this issue |
| Exploit score | **6.92 / 10** |
| Impact score | **5.93 / 10** |
| Total vulnerable apps | **318,487** out of 500,000+ |
| Unique exploit paths (CVEs) | **19,013** |

### Authentication vs Authorization — Don't Confuse Them

```
Authentication  →  WHO are you? (Proving your identity)
Authorization   →  WHAT can you do? (Your permissions)
```

Both must be enforced. Failing either = broken access control.

### Types of Access Control

| Type | How it Works |
|---|---|
| **RBAC** (Role-Based) | Access based on your role: user / admin / superuser |
| **DAC** (Discretionary) | Access based on user identity or group membership |
| **MAC** (Mandatory) | Access based on sensitivity labels assigned to data |
| **Permission-Based** | Access based on specific action strings: read / write / delete |

### Common Attack Scenarios

- 🔗 Changing URL params: `?account=john` → `?account=admin`
- 🚶 Force-browsing to `/admin` without being an admin
- 🎭 Privilege escalation — acting as a higher-level user
- 🎟️ JWT token tampering or replay after logout
- 🌐 CORS misconfiguration exposing APIs to unintended origins
- 🗑️ Using unauthorized HTTP methods (e.g. DELETE) on API endpoints

---

## 🛡️ How to Protect Your App

| Principle | Action |
|---|---|
| **Deny by default** | Block everything unless explicitly granted |
| **Enforce server-side** | Never trust client-side access checks |
| **Implement once, reuse** | Standardize access control logic across the app |
| **Enforce record ownership** | Users should only CRUD their own data |
| **Disable directory listings** | Don't expose your app's file structure |
| **Invalidate JWT on logout** | Prevent token replay attacks |
| **Rate-limit APIs** | Minimize damage if a breach occurs |
| **Log all failures** | Track and alert on unauthorized access attempts |
| **Test like an attacker** | Include security-focused QA, not just happy-path |

---

## 💡 Final Takeaways

> **1. OWASP Top 10 ≠ Your Top 10**
> Use it as a baseline awareness document. Your specific app may have different priority risks.

> **2. Build security in from the start**
> Retrofitting access control is harder and costlier than doing it right during design.

> **3. Use ASVS alongside the Top 10**
> The Top 10 tells you *what the problems are*. ASVS tells you *how to build against them*.

> **4. Access control is only effective if enforced server-side**
> Client-side checks can always be bypassed. The server is the source of truth.

> **5. Keep watching for updates**
> The Top 10 refreshes every 3–4 years. Next edition expected around **2024–2025**.

---

*Based on the OWASP Top 10 (2021) — InfoSec Skills Learning Path by John Wagnon (F5 Networks)*