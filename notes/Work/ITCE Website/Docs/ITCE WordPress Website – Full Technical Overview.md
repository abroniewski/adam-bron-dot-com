**Date**: 8 May 2025
**Created By**: Adam Broniewski
**Contact**: adam.broniewski@movingdatainsights.com

Full overview summary video: [ITCE Website Development Overview 🌐](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?sid=f0ee92be-796c-4041-aac0-2c59c97d4243)
## 00:00 Project Overview & Hosting Environment

[Jump to video at 00:00](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=0)

This video serves as a technical walkthrough of the ITCE website setup. The website is hosted via MyDomain using Web Hosting Plus, where all files and databases are managed.

* **Domain:** ITCEindhoven.com
* **Control Panel:** MyDomain (reskinned version of Plesk Obsidian)
* **Hosting Environment:** PHP-based WordPress installation
* **WordPress Toolkit:** Offers functionality to create/restore backups
* **File Location:** `/httpdocs/` directory

---

## 00:48 HTTPS, SSL Certificates & Domain Configuration

[Jump to video at 00:48](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=48)

The site uses Let's Encrypt SSL certificates managed via the Plesk dashboard.

* **Certificates:** Automatically renewed every 90 days
* **Configuration:** Covers both `www` and root domain
* **Security Redirect:** Enforces HTTP to HTTPS
* **Optional Features:** Maintenance mode, password-protected access

---

## 01:57 WordPress Setup, Subdomains & Installation Paths

[Jump to video at 01:57](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=117)

* **Subdomain Development:** `dev.itceinhoven.com` used for staging
* **Installation Path:** `/httpdocs/`
* **Toolkit Feature:** Easy install of new WordPress instances
* **Subdirectory Option:** Could be used instead of subdomain

---

## 03:00 Database Access, Plesk Backend & Migration Tips

[Jump to video at 03:00](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=180)

* **Database Type:** MySQL (PHP)
* **Access Method:** Plesk -> Databases -> User Management
* **Credentials:** Managed in Plesk UI
* **Migration Note:** Must replace domain pointers from dev -> live

---

## 04:29 Admin Login, User Roles & Access Control

[Jump to video at 04:29](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=269)

* **Login URL:** `yourdomain.com/wp-login.php`
* **Main User:** `administrator`
* **Other Roles:** Editors for Producty, Marketing
* **Permission Level:** Editors can manage posts but not settings

---

## 06:01 Themes, Backups & Elementor Compatibility

[Jump to video at 06:01](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=361)

* **Theme Used:** Hello Elementor
* **Purpose:** Serve as base for Elementor builder
* **Backup Importance:** Critical before updating theme
* **Warning:** Updating theme may break Elementor functionality

---

## 08:26 Plugins Overview & Spam Protection Challenges

[Jump to video at 08:26](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=506)

* **Key Plugins:**

  * Akismet Anti-Spam
  * Elementor
  * Smash Balloon (Instagram)
  * SMTP Mailer
  * WP Mail Logging
  * WP Super Cache
  * Yoast SEO & Yoast Duplicate Post
* **Spam Issue:** Bots target forms, especially during audition calls

---

## 10:04 Cookie Consent, GDPR, and Google Analytics Integration

[Jump to video at 10:04](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=604)

* **Cookie Banner Plugin:** Beautiful & Responsive Cookie Consent
* **Price:** €11/year
* **Consent Logic:** Must opt-in for marketing before analytics load
* **Dependencies:** SiteKit + WP Consent API
* **Developer Tip:** Use browser dev tools to check consent-triggered events

---

## 14:15 Instagram Feed Integration via Smash Balloon

[Jump to video at 14:15](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=855)

* **Plugin Used:** Smash Balloon
* **Feed Style:** 2x4 grid layout
* **Limitations:** No captions, likes, or Instagram metadata
* **Customization:** Manual color settings to match global palette

---

## 16:01 Email Setup: SMTP Mailer, Form Logic & Logging

[Jump to video at 16:01](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=961)

* **Main Email:** `info@itceinhoven.com`
* **Plugin:** SMTP Mailer
* **Email Logging:** Enabled via WP Mail Logging
* **Form Sync:** Forms must match sender email for successful delivery

---

## 18:32 Elementor Forms: Submission Tracking & Actions

[Jump to video at 18:32](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=1112)

* **Field IDs:** Used for email mapping
* **Actions After Submit:** Submit -> Email1 -> Email2 -> Pop-up
* **Submission Logs:** Accessible in Elementor submissions panel
* **Hidden Fields:** Capture UTM and event metadata

---

## 21:48 Performance Optimization: Caching & Cloning Posts

[Jump to video at 21:48](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=1308)

* **Caching Plugin:** WP Super Cache
* **Purpose:** Improve load time and SEO
* **Cloning Plugin:** Yoast Duplicate Post for post duplication

---

## 22:51 SEO Configuration with Yoast

[Jump to video at 22:51](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=1371)

* **Yoast SEO Dashboard:** Global and per-page options
* **Metrics:** SEO score, readability, keywords, featured images
* **Page-Level:** Shows impact of each page on search visibility

---

## 24:02 Website Architecture: Pages, Posts & Tag-Based Routing

[Jump to video at 24:02](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=1442)

* **Pages:** Navigation-level (Home, About, Support Us)
* **Posts:** Used for events, blog, and hidden marketing docs
* **Tags & Categories:** Define visibility and routing

  * `Featured`: Shows on homepage
  * `Archived`: Hidden from carousels
  * `Fundraising`, `Academy`: Used for specific sections

---

## 31:44 Templates, Shortcodes, and Design Consistency

[Jump to video at 31:44](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=1904)

* **Newsletter Signup:** Centralized via Elementor shortcode
* **Event Registration Logic:** Dynamic URL parameters fill hidden fields
* **Header/Footer Edits:** Through Elementor Theme Builder
* **Global Styles:** Fonts, colors, typography classed via Elementor settings
* **Templates:** Reduce duplication and keep styling consistent

---

## 44:46 Analytics Dashboard & Search Console Insights

[Jump to video at 44:46](https://www.loom.com/share/53994d73d5e741a5b98e48ba9e3eea37?t=2686)

* **Platform:** Google Analytics + Search Console
* **Data Accuracy:** Limited until consent system was fixed
* **Insights:**

  * CTR
  * Query positions
  * Country of origin (with skewed US data pre-consent)
  * Surprising Dutch keyword ranks

---
