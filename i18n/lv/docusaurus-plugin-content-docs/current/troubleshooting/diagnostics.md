---
title: Diagnostika
sidebar_position: 1
description: Logs, kas rāda katru vārdu, ko tālrunis un centrāle saka viens otram, žurnāla fails un vieta, kur programma glabā savus failus.
---

Logs **Diagnostika** rāda, ko tālrunis un centrāle saka viens otram, tieši tad, kad viņi to saka. Tā ir pirmā vieta, kur skatīties, ja konts nereģistrējas vai zvans nesavienojas, un logs, ko IT nodaļa lūgs jums nosūtīt.

To atver no **Iestatījumi → Diagnostika** ar pogu **Atvērt diagnostiku**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Logs Diagnostika" />

Tas rāda katru SIP ziņojumu, ko tālrunis nosūta vai saņem, tā norises laikā, kopā ar notiekošo zvanu skaņas statistiku. Tas vāc datus tikai tad, kad ir atvērts, un pēc aizvēršanas neko nepatur.

## SIP {#sip}

Cilne **SIP** ir signalizācijas žurnāls.

- Katrs ziņojums ir rinda ar laiku (līdz milisekundei), tā veidu un to, kurp tas devās: bultiņa pa labi ir tālruņa nosūtīta, bultiņa pa kreisi ir saņemta no servera. Zem tās: `to` vai `from` servera adrese un transports (piemēram, *pa UDP*).
- Ziņojumu var izvērst, lai redzētu tā galvenes pilnībā (trešais ziņojums attēlā).
- **Meklēt** atrod tekstu žurnālā.
- **Iztukšot** to iztukšo.

Ekrānuzņēmuma piemērs ir veselīga reģistrācija: tālrunis nosūta `REGISTER`, serveris atbild `200 OK (REGISTER)`.

## Zvani {#calls}

Otrā cilne, **Zvani**, rāda katra notiekošā zvana kvalitātes rādītājus.

## Iestatījumu cilne Diagnostika {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Iestatījumi → Diagnostika" />

### Žurnāla detalizācija {#log-detail}

Nolaižamais saraksts izvēlas, cik daudz programma raksta savā žurnāla failā; attēlā tas ir **Detalizēts**. Tas stājas spēkā uzreiz, arī jau notiekošā zvanā — kas ir tieši tas, par kuru vēlaties ierakstu. Detalizētākais iestatījums pieraksta katru SIP ziņojumu. Tas ir apjomīgs, taču paroles tiek izņemtas, pirms kaut kas tiek ierakstīts, tāpēc failu var droši nosūtīt kopā ar atbalsta pieprasījumu.

**Sūtīt kopiju sistēmas žurnālā** raksta žurnālu arī pašas sistēmas žurnālā datoram, kura žurnāli tiek vākti centralizēti. Zemāk esošais fails tiek rakstīts jebkurā gadījumā, un tieši to pievieno atbalsta pieprasījumam.

### Faili {#files}

Cilne uzskaita, kur programma glabā savus failus un cik liels ir katrs. macOS:

| Fails | Kur | Satur |
| --- | --- | --- |
| Iestatījumi | `~/Library/Preferences/ai-softphone/settings.json` | Iestatījumus. Nekad paroles vai pilnvaras. |
| Datubāze | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontaktus, vēsturi, atšifrējumus un apkopojumus. |
| Ieraksti | `~/Library/Application Support/ai-softphone/recordings` | Ierakstu skaņu. |
| Žurnāls | `~/Library/Logs/ai-softphone/ai-softphone.log` | Žurnālu. |

Zem saraksta **Atvērt** parāda žurnālu, un **Iztukšot** to iztukšo. Iztukšojiet žurnālu tieši pirms problēmas atkārtošanas; iztukšošanu nevar atsaukt.

## Ko sūtīt atbalstam {#what-to-send-to-support}

1. Iestatiet **Žurnāla detalizācija** uz detalizētāko līmeni.
2. Nospiediet **Iztukšot** un tad atkārtojiet problēmu.
3. Nosūtiet žurnāla failu vai atveriet **Iestatījumi → Par programmu**, rakstiet mums no turienes un atzīmējiet **Pievienot žurnālu** — skatiet [Par programmu](../application/about.md#feedback).

Ja problēma ir ar reģistrāciju vai zvanu, nosūtiet arī neveiksmīgā mēģinājuma rindas no cilnes **SIP**.

Programmas daļu, kas ir aiz visa šī — SIP izsekošanu, mediju statistiku un skaitītājus —, var izslēgt sadaļā [Moduļi](../application/modules.md) (**Diagnostika**).
