---
title: Levinud probleemid
sidebar_position: 2
description: "Mida kontrollida, kui konto ei registreeru, heli pole, kõnet või koosolekut ei salvestata, ülestähendust pole, etteütleja ei käivitu või link, otsetee või API ei tee midagi ning mida telefoni enda teated tähendavad."
---

Iga punkt viitab seadele, mis selle otsustab. Kui vastust siin pole, avage [Diagnostika](/troubleshooting/diagnostics): see näitab, mida telefon ja keskjaam teineteisele ütlevad.

## Konto ei registreeru {#the-account-will-not-register}

Konto kõrval olev täpp jaotises **Seaded → Kontod** jääb halliks või punaseks.

1. Kontrollige [konto vormis](/sip-accounts/setup) välju **Kasutajanimi**, **Parool** ja **Serveri aadress**.
2. Kui teie keskjaam kontrollib parooli muu nime kui sisenumbri all, täitke **Autentimise kasutaja** jaotises **Serveri seaded**.
3. Kontrollige **Transport** ja **Port** selle järgi, mida keskjaam ootab.
4. Avage [diagnostikaakna](/troubleshooting/diagnostics) vahekaart **SIP** ja vaadake päringut `REGISTER` ning serveri vastust.

## Ma ei kuule või mind ei kuulda {#i-cannot-hear-or-i-cannot-be-heard}

Avage [Seaded → Seadmed](/sip-accounts/devices).

- Öelge midagi: riba jaotise **Mikrofon** all peab liikuma. Kui ei liigu, valige teine mikrofon.
- Vajutage jaotise **Kõlarid** all **Kontrolli**, et kuulda valitud seadmest heli.
- Kontrollige **Helitugevus** liugureid. **Vaigista mikrofon** kõnekaardil ja [otsetee](/program/shortcuts) **Vaigista mikrofon** lülitavad kõne ajal mikrofoni välja.
- Helin võib olla seadistatud kõlama muus seadmes kui see, milles räägite — **Helin**, teine ripploend.

## Kõne kõlab halvasti või ei alga {#the-call-sounds-bad-or-does-not-start}

Koodekeid pakutakse jaotise [Seaded → Kõned](/sip-accounts/calls#audio-formats) loendi järjekorras. Jätke sisse koodekid, mida teie keskjaam kasutab, ja pange parim neist esimeseks. Muudatus kehtib alates järgmisest kõnest.

## Teine kõne ei helise {#a-second-call-does-not-ring}

Mis juhtub, kui keegi helistab ajal, mil olete kõnes, seadistatakse jaotises [Kõne ootel](/sip-accounts/calls#call-waiting).

## Kõnet ei salvestatud {#a-call-was-not-recorded}

- **Seaded → Salvestamine**, esimene ripploend, otsustab, milliseid kõnesid salvestatakse; vaikimisi valik **Käsitsi** salvestab ainult siis, kui vajutate kõnekaardil salvestamisnuppu. Vaadake [Salvestised](/recordings).
- Salvestamine algab kõnele vastamisel, nii et vastamata kõnel faili ei ole.
- Moodul **Salvestamine** peab olema jaotises [Moodulid](/application/modules) sisse lülitatud.
- Salvestisi eemaldatakse jaotise **Säilitamine** piiride järgi; kinnitatud salvestist ei eemaldata kunagi.

## Teise rakenduse koosolekut ei hõivatud {#a-meeting-in-another-application-was-not-captured}

Vaadake [Hõivamine](/capture/).

- **Luba heli hõivamine** jaotises **Seaded → Hõivamine** peab olema sisse lülitatud.
- Kui **Automaatne käivitamine** on **Küsi minult** (vaikimisi), vastake küsimusele, kui see ilmub; valikuga **Mitte kunagi** vajutage ise salvestusnuppu.
- Kasutage samal vahekaardil **Kontrolli**: ülemine tulp peab liikuma, kui räägite, alumine siis, kui midagi mängib.
- Moodul **Hõivamine** peab olema jaotises [Moodulid](/application/modules) sisse lülitatud.

## Salvestis on olemas, kuid ülestähendust või kokkuvõtet pole {#there-is-a-recording-but-no-transcript-or-summary}

- Vestlus kirjutatakse üles ja võetakse kokku iseenesest ainult siis, kui jaotises [Seaded → Töötlemine](/ai-processing/processing) on sisse lülitatud **Töötle vestlusi automaatselt**. Muul juhul paluge seda [salvestiste aknas](/interface/recordings).
- Peab olema [tuvastaja](/ai-processing/transcription) ja [keelemudel](/ai-processing/processing#language-models) ning kumbki peab oma aadressil vastama.
- Kui igakuine **Rahapiir** või **Märkide piir** on saavutatud, peatuvad automaatsed reeglid kuni kuu vahetumiseni. Seda, mida te ise palute, ei peatata kunagi.
- Jaotise [Seaded → Ülevaade](/interface/settings-overview) sammud näitavad, mis on veel seadistamata.

## Etteütleja ei ilmu või ei käivitu {#the-prompter-does-not-appear-or-does-not-start}

**Etteütleja** ilmub telefoni allosas olevasse loendisse ainult siis, kui olemas on kolm asja: tuvastaja, millel on **Aadress etteütleja jaoks** ja mis on läbinud **Kontrolli** jaotises [Seaded → Ülestähendus](/ai-processing/transcription#live-recognition-for-the-prompter), keelemudel ning märge **Luba etteütleja kasutamine** jaotises [Seaded → Etteütleja](/ai-processing/prompter). Moodul **Etteütleja** peab olema sisse lülitatud jaotises [Moodulid](/application/modules).

Kui aken avaneb, aga etteütleja ei käivitu, ütleb nuppude all olev rida, mis puudu on. [Kui see ei käivitu](/interface/prompter#when-it-does-not-start) loetleb kõik teated ja selle, mida teha.

## Telefon kadus, kui aken suleti {#the-phone-disappeared-when-i-closed-the-window}

Kui **Lase telefonil edasi töötada, kui aken suletakse** on sees, töötab telefon edasi ja kõned saabuvad endiselt. Teavitusala ikoon (macOS-is menüüribal) toob akna tagasi. Töölaual, kus teavitusala pole, on telefon tegumiribale minimeeritud. Vaadake [Käivitumine](/program/startup).

## Brauseris või CRM-is olev telefoninumber ei helista {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Vajutage **Ava kõnelingid selle telefoniga** jaotises [Seaded → Käivitumine](/program/startup#call-links). Klõpsatud number jõuab valijasse ja ootab seal, kui **Helista kohe, ilma Helista nuppu vajutamata** pole sisse lülitatud.

## Nupu tuli jääb halliks {#a-buttons-lamp-stays-grey}

Keskjaam ei ütle, kas sisenumber on vaba. Nupp helistab ikkagi. Vaadake [Nupud](/sip-accounts/buttons).

## REST API ei vasta {#the-rest-api-does-not-answer}

- **Luba teistel selle arvuti programmidel telefoni juhtida** peab olema sisse lülitatud jaotises [Seaded → Sidumine](/integration/rest-api) ja moodul **Sidumine** jaotises [Moodulid](/application/modules).
- Aadress on `http://127.0.0.1:8377`, kui te pole muutnud välja **Port**.
- Rühm, mida te pole jaotises **Juurdepääs** avanud, vastab igale päringule koodiga `404`.
- Kui olete määranud **Märgise**, peavad salvestatud andmeid muutvad päringud kandma seda päises `Authorization`.
- Rohkem sümptomeid on jaotises [Kui see ei tööta](/integration/rest-api#when-it-does-not-work).

## Veebikonksud ei jõua kohale {#webhooks-do-not-arrive}

Vajutage **Saada proovisündmus** jaotises [Seaded → Sidumine](/integration/webhooks). REST API loendurid `webhooks_failed_total` ja `webhooks_dropped_total` näitavad, kuidas kohaletoimetamine läheb; [Kui midagi kohale ei jõua](/integration/webhooks#when-nothing-arrives) selgitab, mida igaüks neist tähendab.

## Otsetee ei tee midagi {#a-hotkey-does-nothing}

Avage [Otseteed](/program/shortcuts). Otsetee töötab siis, kui telefon on programm, mida te kasutate; et seda igast programmist kasutada, märkige **Kõikjal**. Klõpsake otseteel ja vajutage kombinatsiooni uuesti, kui mõni teine programm on selle endale võtnud.

## Telefoni teated {#messages-the-phone-shows}

Kui midagi ei õnnestu, ütleb telefon eraldi real, miks. Loendi all olev rida kaob mõne sekundi pärast ise.

### Kui kõnet ei alustata {#when-a-call-is-not-placed}

| Teade | Mida teha |
| --- | --- |
| *Ühtegi kontot pole seadistatud* | Lisage konto jaotises [Seaded → Kontod](/sip-accounts/setup). |
| *Ükski konto pole sisse lülitatud, seega ei ole liini, millelt helistada.* | Märkige konto märkeruut jaotises **Seaded → Kontod**. |
| *Ühtegi liini pole veel registreeritud.* | Konto on sees, kuid keskjaamas veel registreerimata. Oodake, kuni selle täpp roheliseks läheb; kui ei lähe, vaadake [Konto ei registreeru](#the-account-will-not-register). |
| *Käib juba nii palju kõnesid, kui see telefon kannab.* | Lõpetage üks kõnedest ja helistage uuesti. |
| *Kontot, millelt see oleks helistatud, enam ei ole.* | Rida kuulub kontole, mis on vahepeal kustutatud. Valige number numbriklahvistikul. |
| *Sellel real ei ole numbrit, millele tagasi helistada.* | Helistaja peitis oma numbri, seega pole kuhu tagasi helistada. |

### Kui konto ei ühendu {#when-an-account-does-not-connect}

| Teade | Mida teha |
| --- | --- |
| *Seda serveriaadressi ei leitud. Kontrollige, ega selles pole kirjaviga.* | Kontrollige [konto vormis](/sip-accounts/setup) välja **Serveri aadress**. |
| *Serverini ei jõudnud. Kontrollige aadressi, porti ja oma võrku.* | Kontrollige välja **Serveri aadress** ning jaotises **Serveri seaded** välju **Transport** ja **Port**. SIP-i võib peatada ka tulemüür. |
| *Server lükkas selle kasutajanime või parooli tagasi.* | Kontrollige välju **Kasutajanimi** ja **Parool**. Kui keskjaam kontrollib parooli muu nime all, täitke **Autentimise kasutaja**. |
| *Serveri sertifikaati ei õnnestunud kontrollida. Kui serveri administraator on selle ise väljastanud, eemaldage märge „Kontrolli sertifikaati“ jaotises „Serveri seaded“.* | Ilmub TLS-ühenduse puhul. Kui keskjaam kasutab enda tehtud sertifikaati, eemaldage jaotises **Serveri seaded** märge **Kontrolli sertifikaati**. |
| *Selle konto parooli ei õnnestunud võtmehoidjast lugeda. Avage see lukust ja ühenduge uuesti.* | Avage arvuti võtmehoidja (macOS-is Keychain) ja vajutage siis konto juures **Ühenda**. |

### Kõne ajal {#during-a-call}

| Teade | Mida teha |
| --- | --- |
| *Ühist helivormingut pole* | Keskjaamal ja telefonil pole ühist koodekit. Lülitage jaotises [Helivormingud](/sip-accounts/calls#audio-formats) sisse mõni, mida keskjaam kasutab. |
| *Ei mikrofoni ega kõlareid* | Valige seadmed jaotises [Seaded → Seadmed](/sip-accounts/devices). |
| *Ei salvestata: ketas on langenud piirini. Vabastage ruumi või muutke piiri seadetes.* | Vaba ruum kettal on jõudnud piirini **Kettaruumi lävi** — vaadake [Salvestised](/recordings). Vabastage ruumi või alandage läve. |

### Telefoni käivitamisel {#when-the-phone-starts}

*Andmebaasi ei saa lugeda* tähendab, et andmebaasi tegi programmi teine versioon ja see versioon ei suuda seda lugeda. Tavaliselt käivitati vanem versioon uuema andmetel: kui paigaldate uuema versiooni uuesti, avab see andmebaasi sellisena, nagu see oli. **Alusta otsast** teeb seevastu tühja andmebaasi — kõik kontaktid ja kõik ajaloo kõned kaovad ning seda ei saa tagasi võtta. Enne vajutamist võite andmebaasi failist koopia teha; kus see asub, ütleb [Diagnostika](/troubleshooting/diagnostics#files).
