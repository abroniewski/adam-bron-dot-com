### 🛠️ What you'll need:

- Your **MijnDomein email address** (`you@yourdomain.com`)
- Your **MijnDomein email password**
- The **IMAP/POP3 and SMTP server settings** (provided below)

---
### 🔁 Part 1: Receive MijnDomein emails in Gmail

1. **Go to Gmail** → click the **gear icon** > **“See all settings”**
2. Navigate to **Accounts and Import** tab
3. Find **“Check mail from other accounts”** → Click **“Add a mail account”**
4. Enter your MijnDomein email (`you@yourdomain.com`) and hit **Next**
5. Select **“Import emails from my other account (POP3)”**
6. Fill in the following details:
    - **Username**: your full email address (e.g., `you@yourdomain.com`)
    - **Password**: your MijnDomein email password
    - **POP Server**: `mail.mijndomein.nl`
    - **Port**: `995`
    - ✅ Check **"Always use a secure connection (SSL)"**
    - Optional: "Label incoming messages" so you can spot them easily
7. Click **Add Account**

---
### ✉️ Part 2: Send emails as `you@yourdomain.com` from Gmail

1. Still under **Accounts and Import** → go to **“Send mail as”** → Click **“Add another email address”**
2. Enter:
    - **Name**: How you want it to appear (e.g., Your Name)
    - **Email**: `you@yourdomain.com`
3. Click **Next Step**, then enter:
    - **SMTP Server**: `mail.mijndomein.nl`
    - **Username**: `you@yourdomain.com`
    - **Password**: your MijnDomein email password
    - **Port**: `587`
    - Secure connection using **TLS**
4. Click **Add Account**
5. Gmail will send a **verification code** to your MijnDomein email. Grab that code (either from Gmail if you already set up incoming mail, or by logging in at MijnDomein webmail), paste it in, and **verify**.

---
### 💡 Optional: Log into MijnDomein Webmail

If you want to manually check or confirm things:
- Go to [https://webmail.mijndomein.nl](https://webmail.mijndomein.nl/)
- Log in using your email and password