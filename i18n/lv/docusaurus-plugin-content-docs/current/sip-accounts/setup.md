---
title: SIP konta iestatīšana
sidebar_position: 1
description: Savienojiet AI Softphone ar savu IP centrāli vai SIP pakalpojumu sniedzēju sadaļā Iestatījumi → Konti.
---

AI Softphone darbojas ar jebkuru IP centrāli vai SIP pakalpojumu sniedzēju. Jūs varat būt pieteicies tik daudzos kontos (līnijās), cik jums ir, un katram kontam ir savi iestatījumi.

Atveriet **Iestatījumi → Konti**.

<Shot name="05_settings_accounts" alt="Iestatījumi → Konti: divi konti, abi reģistrēti" />

## Kontu saraksts {#the-list-of-accounts}

Katrs konts ir rinda ar:

- **izvēles rūtiņu**, kas ieslēdz vai izslēdz kontu;
- **punktu**, kas ir zaļš, kad konts ir reģistrēts centrālē;
- nosaukumu un zem tā `lietotājs@serveris`;
- pogu **Atvienot**, kas izraksta kontu no centrāles;
- pogām **▲** un **▼**, kas pārvieto kontu sarakstā uz augšu vai uz leju. Kontu žetoni [galvenajā logā](../interface/main-window.md) seko tai pašai secībai.

Poga **Pievienot** augšējā labajā stūrī pievieno kontu. Noklikšķiniet uz rindas, lai zem tās atvērtu veidlapu.

## Konta pievienošana {#adding-an-account}

<Shot name="05d_account_add" alt="Jauna konta tukša veidlapa" />

Nospiediet **Pievienot**. Zem saraksta atveras tukša veidlapa, kursors ir laukā **Nosaukums (nav obligāts)**. Aizpildiet zemāk esošos laukus, atveriet **Servera iestatījumi**, ja centrālei tie vajadzīgi, un nospiediet **Saglabāt**. Jauns konts sākas ar parastajām vērtībām: UDP portā 5060, reģistrācija tiek atjaunota ik pēc 300 sekundēm.

## Konta veidlapa {#the-account-form}

<Shot name="05b_account_edit" alt="Konta veidlapa" />

| Lauks | Ko ievadīt |
| --- | --- |
| **Nosaukums (nav obligāts)** | Nosaukums, kas redzams uz konta žetona galvenajā logā un tā zvanos. Ja tas ir tukšs, konts tiek rādīts kā `lietotājs@serveris`. |
| **Lietotājvārds** | Lietotājvārds vai iekšējais numurs, ko devusi jūsu centrāle vai pakalpojumu sniedzējs. |
| **Parole** | Tā parole. Atgriežoties veidlapā, lauks ir tukšs. Tā tiek glabāta datora atslēgu saišķī, nekad iestatījumu failā. |
| **Servera adrese** | Centrāles vai pakalpojumu sniedzēja SIP servera adrese, piemēram, `pbx.example.com`. |
| **Servera iestatījumi** | Izvērš retāk vajadzīgos savienojuma iestatījumus; skatiet zemāk. |
| **Atbildēt automātiski** | Sadaļā **Atbildēšana**: atbild uz šī konta ienākošajiem zvaniem, jums neko nespiežot. Pēc noklusējuma izslēgts. |

Nospiediet **Saglabāt**, lai paturētu izmaiņas. **Atcelt** tās atmet, un **Dzēst** noņem kontu.

Kad punkts pie konta ir zaļš, konts ir reģistrēts, un to rāda arī konta žetons galvenajā logā. Ja tas paliek pelēks vai sarkans, atveriet [Diagnostika](../troubleshooting/diagnostics.md): cilne **SIP** rāda pieprasījumu `REGISTER` un servera atbildi.

## Servera iestatījumi {#server-settings}

Lielākajai daļai centrāļu šeit nekas nav vajadzīgs. Nospiediet **Servera iestatījumi**, lai tos parādītu; tā pati poga tad saucas **Paslēpt servera iestatījumus**.

<Shot name="05c_account_server_settings" alt="Konta servera iestatījumi, izvērsti" />

| Lauks | Noklusējums | Kas tas ir |
| --- | --- | --- |
| **Autentifikācijas lietotājs** | tukšs | Vārds, pēc kura centrāle pārbauda paroli, ja tas nav tāds pats kā **Lietotājvārds**. Attēlā iekšējais numurs ir `201`, un centrāle to autentificē kā `birojs201`. |
| **Transports** | UDP | Savienojuma ar serveri protokols. Nolaižamais saraksts. |
| **Ports** | 5060 | Servera ports. |
| **Izejošais starpniekserveris** | tukšs | Starpniekserveris, caur kuru jāiet katram pieprasījumam, ja jūsu pakalpojumu sniedzējs tādu norāda. |
| **Registrar** | tukšs | Adrese, kurā reģistrēties, ja tā nav **Servera adrese**. |
| **Atkārtota reģistrācija, sekundes** | 300 | Cik bieži tālrunis atjauno savu reģistrāciju. |
| **Taustiņu toņi** | Skaņas plūsma | Kā tastatūras toņi tiek nosūtīti centrālei. Nolaižamais saraksts. Mainiet to tikai tad, ja centrāle toņus nedzird. |

Tālruņa piedāvātie kodeki netiek iestatīti katram kontam atsevišķi; tie ir sadaļā [Zvanu iestatījumi](calls.md#audio-formats).
