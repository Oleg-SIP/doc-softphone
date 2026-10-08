---
title: Peaaken
sidebar_position: 1
description: "Telefon vasakul, teek ja seaded paremal — AI Softphone'i peaakna paigutus."
---

Peaaken on telefon ise. Vaikimisi paigutuse **Üks aken** puhul on telefon vasakul ja kõik muu avaneb paremal. [Paigutust saab muuta](../program/appearance.md).

<Shot name="03_contacts" full alt="Peaaken: telefon vasakul ja vahekaart Kontaktid paremal" />

## Telefon {#the-phone}

Ülevalt alla on vasakul pool:

- väli **Number**;
- klahvistik ja helistamisklahv;
- kontode märgid;
- nupud, mis jälgivad teisi sisenumbreid;
- neli sihtkohta: **Salvestised**, **Kontaktid**, **Ajalugu** ja **Seaded**.

### Valija {#the-dialler}

- **Number** — tippige või kleepige number, kuhu helistada. Välja lõpus olev kellaikoon avab nende numbrite loendi, kuhu olete hiljuti helistanud või kust teile on helistatud.
- Ümmargused klahvid **1–9**, **\***, **0** ja **#** täidavad numbri ning kõne ajal saadavad toone (DTMF).
- Torukujuline klahv alustab kõnet. See jääb halliks seni, kuni numbrit pole.

<Shot name="22_last_calls" full alt="Viimaste kõnede loend välja Number all, vahekaardi Ajalugu kõrval" />

Kui viimaste numbrite loend on avatud, näitab väli noolt ja helistamisklahv liigub sellest paremale. Iga kirje on nimi või number, kui helistaja ei ole [Kontaktides](contacts-history.md), koos kuupäevaga. Punane toru tähistab vastamata kõnet; sulgudes olev arv — näiteks *Kasutajatugi (4)* — tähendab mitut järjestikust kõnet samale osapoolele.

### Kontode märgid {#the-account-chips}

Klahvistiku all on iga [konto](../sip-accounts/setup.md) jaoks üks märk. Roheline täpp tähendab, et konto on keskjaamas registreeritud. Esiletõstetud märk (pildil **305 Tugi**) on konto, millelt järgmine kõne tehakse; vajutage teist märki, et seda muuta. Märkidest paremal olev ümmargune punane nupp on režiim „ära sega”.

### Nupud {#the-buttons}

Märkide all on [nupud](../sip-accounts/buttons.md), mille olete teinud kolleegide ja liinide jaoks, igaühel oma tuli — piltidel **Tamm** ja **Ladu**. Vajutage nuppu, et selle numbrile helistada.

### Salvestised, Kontaktid, Ajalugu, Seaded {#recordings-contacts-history-settings}

Need neli kirjet allosas avavad igaüks vahekaardi paremal, kõrvuti: [Salvestised](../interface/recordings.md), [Kontaktid ja ajalugu](contacts-history.md) ning [Seaded](settings-overview.md). Avatud vahekaardid jäävad paremal pool ülemisse ritta.

## Pooleliolev kõne {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Pooleliolev kõne" />

Kõne ajal liigub numbriväli üles, selle sees on klahvistiku ikoon, ja kõnet näidatakse kaardil:

- kõne olek ja kestus (**Kõnes · 0:21**), teise osapoole nimi, **Liin** ja selle konto nimi, millel kõne on, ning number;
- kaks vertikaalset taseme tulpa kaardi külgedel, üks kummagi helikanali jaoks;
- nuppude rida: salvesta (ring), vaigista (mikrofon), ootele (paus) ja punane nupp **Lõpeta**;
- teine rida: suuna ümber (toru noolega) ja klahvistik.

Kõne saab ümber suunata otse või pärast seda, kui olete inimesega enne ise rääkinud.

Kui number on **Kontaktides** teada, näidatakse numbri asemel nime. Samadel toimingutel on [otseteed](../program/shortcuts.md): vastamine, lõpetamine, ootele panemine ja vaigistamine.

## Mitu kõnet korraga {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Mitu kõnet" />

Sissetulevast kõnest teatatakse bänneriga, ükskõik kus te töötate, ka siis, kui telefon on peidetud. Uus sissetulev kõne ilmub oma kaardile loendi kohal, sellel on roheline, kollane ja punane nupp ning rida, mis ütleb, kellega te praegu räägite (**Kõnes kasutajaga …**). Allolev loend näitab iga kõnet koos olekuga — **Ootel**, **Kõnes**, **Sissetulev kõne** — ja kontot, millel see on. Pausi ikoon tähistab ootel kõnet ja kõlari ikoon seda, milles te räägite.

Mis juhtub, kui keegi helistab ajal, mil olete juba kõnes, seadistatakse jaotises [Kõnede seaded](../sip-accounts/calls.md#call-waiting).

## Konverents {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konverents" />

Ühendatud kõnesid näidatakse konto liinil ühe kaardina **Konverents**. Iga osaleja on loendis koos kõnes oldud aja ja oma nupuga **Lõpeta**. Allolevad nupud salvestavad, vaigistavad ja lõpetavad konverentsi kõigi jaoks; lai nupp allosas jagab konverentsi tagasi eraldi kõnedeks.

## Hõivamine {#capture}

Kui [hõive teistest rakendustest](../capture/capture.md) on lubatud jaotises **Seaded → Hõivamine**, ilmub kontode märkide ja nuppude vahele riba.

<Shot name="10_settings_capture" full alt="Hõivamise riba telefoni allosas: Hõivamine · valmis, Salvesta ja kaks taseme tulpa" />

- **Hõivamine · valmis** ütleb, et programm kuulab, kas teises rakenduses toimub vestlus.
- **Salvesta** alustab hõivamist käsitsi.
- Selle all olevad kaks peenikest tulpa näitavad helitaset: ülemine olete teie, alumine on see, mida arvuti mängib. Nende joonistamise viis seadistatakse jaotises **Pilt telefoni jalamil oleval ribal**.

Programm võib olla ka salves (macOS-is menüüribal) ja seda saab esile tuua [otseteega](../program/shortcuts.md).
