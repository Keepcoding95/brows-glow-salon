# Punctul 5: Analitică (Google Analytics 4 + evenimente WhatsApp)

Documentul descrie ce s-a implementat, ce beneficii aduce și **unde poți vedea analiza** în contul Google Analytics.

---

## Pas 1: Configurare GA4 în Laravel

**Ce s-a făcut**

- În **`config/services.php`** a fost adăugată secțiunea `ga4` cu cheia `measurement_id`, citită din variabila de mediu `GA4_MEASUREMENT_ID`.
- În **`.env.example`** a fost adăugat `GA4_MEASUREMENT_ID=` ca model. Poți copia în `.env` și completa cu ID-ul tău (format `G-XXXXXXXXXX`).

**De ce**

- ID-ul rămâne în `.env`, nu în cod, deci e sigur și poate fi diferit pe local / producție.
- Dacă nu pui niciun ID, scriptul GA4 nu se încarcă deloc (util în development).

---

## Pas 2: Încărcarea scriptului GA4 în layout

**Ce s-a făcut**

- În **`resources/views/app.blade.php`** a fost adăugat blocul pentru Google Analytics 4:
  - Se încarcă `gtag.js` de la Google (doar dacă `GA4_MEASUREMENT_ID` este setat).
  - Se apelează `gtag('config', 'G-XXX')` pentru a înregistra automat **page view** la prima încărcare.

**De ce**

- Toate paginile care folosesc acest layout vor trimite date către GA4.
- Fără ID în `.env`, nu se adaugă niciun script, deci nu ai erori și nici trafic fals.

---

## Pas 3: Utilitar pentru evenimente

**Ce s-a făcut**

- A fost creat **`resources/js/utils/analytics.js`** cu funcția `trackWhatsAppClick(options)`.
- Funcția verifică dacă există `window.gtag` (deci dacă GA4 e activ) și trimite un eveniment **`whatsapp_click`** cu parametri:
  - `event_category`: `'engagement'`
  - `event_label` / `section`: locul de pe site (`'services'`, `'packages'`, `'contact'`)
  - La servicii: `service_name`, `service_price`
  - La pachete: `package_name`, `package_price`

**De ce**

- Un singur loc unde se definește cum se trimit evenimentele către GA4.
- Componentele doar apelează funcția la click; dacă GA4 nu e încărcat, nu se întâmplă nimic.

---

## Pas 4: Legarea evenimentelor de butoanele WhatsApp

**Ce s-a făcut**

- **Services.vue** – pe linkul „Vreau programare” s-a adăugat `@click="trackWhatsAppClick({ location: 'services', serviceName: service.name, servicePrice: service.price })"`.
- **Packages.vue** – pe linkul „Alege pachetul (WhatsApp)” s-a adăugat `@click="trackWhatsAppClick({ location: 'packages', packageName: pkg.name, packagePrice: pkg.price })"`.
- **Contact.vue** – pe linkul „Scrie-ne pe WhatsApp” s-a adăugat `@click="trackWhatsAppClick({ location: 'contact' })"`.

Click-ul nu este blocat: după ce se trimite evenimentul, browserul deschide WhatsApp ca înainte.

**De ce**

- Poți vedea în GA4 **câte click-uri** sunt pe fiecare zonă (servicii, pachete, contact).
- Poți vedea **ce servicii și ce pachete** atrag cel mai mult (după `service_name` / `package_name` și număr de evenimente).

---

## Beneficii

| Beneficiu | Explicație |
|-----------|------------|
| **Trafic** | Vezi câți vizitatori unici, câte sesiuni, de unde vin (rețea socială, Google, direct). |
| **Dispozitive** | Vezi câți accesează de pe mobil vs desktop (important pentru site-ul tău). |
| **Interes pentru servicii** | Evenimentul `whatsapp_click` cu `section: 'services'` și `service_name` arată ce servicii generează cele mai multe cereri. |
| **Interes pentru pachete** | La fel pentru pachete: `section: 'packages'` și `package_name` / `package_price`. |
| **Contact general** | Click-urile pe „Scrie-ne pe WhatsApp” din secțiunea Contact sunt separate (programări generale, fără serviciu/pachet ales). |
| **Decizii** | Poți prioritiza în conținut sau oferte serviciile/pachetele cu cele mai multe click-uri. |

---

## Unde vezi analiza (în Google Analytics)

1. **Cont și proprietate**
   - Intră pe [analytics.google.com](https://analytics.google.com).
   - Selectează proprietatea GA4 în care ai configurat Measurement ID-ul (`G-XXXXXXXXXX`).

2. **Rapoarte de bază (trafic, dispozitive)**
   - **Report → Engagement → Pages and screens** – ce pagini sunt văzute.
   - **Report → User → Tech → Device category** – desktop vs mobil vs tablet.
   - **Report → Acquisition → User acquisition** – surse de trafic (Google, social, direct etc.).

3. **Evenimente WhatsApp**
   - **Report → Engagement → Events**.
   - Caută evenimentul **`whatsapp_click`**.
   - Aici vezi **câte click-uri** au fost în total.
   - Pentru detalii pe secțiune (servicii / pachete / contact) sau pe serviciu/pachet:
     - Deschide evenimentul `whatsapp_click` și folosește dimensiunile (parameters) **`section`**, **`service_name`**, **`package_name`** (dacă le ai expuse în raport sau în Explorations).

4. **Rapoarte în timp real**
   - **Report → Real-time** – vizitatori activi acum și evenimente live (util pentru testare: dai click pe WhatsApp și verifici că apare evenimentul).

5. **Explorations (analiză avansată)**
   - **Explore → Free form** (sau alte tipuri).
   - Adaugi evenimentul `whatsapp_click` și dimensiunile `section`, `service_name`, `package_name` pentru tabele și grafice personalizate (ex: „top servicii după click-uri WhatsApp”).

---

## Cum activezi analitica

1. Creezi (dacă nu ai deja) o proprietate **Google Analytics 4** în [analytics.google.com](https://analytics.google.com) și obții **Measurement ID** (format `G-XXXXXXXXXX`).
2. În proiectul Laravel, în fișierul **`.env`**, adaugi sau completezi:
   ```env
   GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. La următoarea încărcare a site-ului (și după ce GA4 procesează datele, de obicei câteva minute), vei vedea:
   - în **Real-time** – sesiuni și evenimente;
   - în **Events** – evenimentul `whatsapp_click` cu parametrii atașați.

Dacă lași `GA4_MEASUREMENT_ID` gol (sau șters), site-ul funcționează normal, doar că nu se trimit date către Google Analytics.
