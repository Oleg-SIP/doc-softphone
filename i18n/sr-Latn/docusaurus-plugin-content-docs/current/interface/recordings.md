---
title: Prozor snimaka
sidebar_position: 2
description: Biblioteka razgovora — filtriranje, puštanje, čitanje prepisa i obrade.
---

**Snimci** su mesto gde živi svaki razgovor, kako god da je stigao: poziv, sastanak uhvaćen iz druge aplikacije ili uvezena datoteka. Svaki je naveden sa već gotovom obradom.

<Shot name="01_recordings" alt="Kartica Snimci: spisak razgovora" />

## Pronalaženje razgovora {#finding-a-conversation}

Traka na vrhu ima četiri filtera, polje za pretragu i meni:

| Kontrola | Sužava spisak prema |
| --- | --- |
| **Vrsta** | načinu na koji je razgovor stigao |
| **Razdoblje** | datumu |
| **Kategorija** | kategoriji u koju je svrstan — pogledajte [Rečnici](../ai-processing/dictionaries.md) |
| **Znak** | znakovima koje nosi |
| **Pretraga** | onome što je u njemu rečeno — pretraga prolazi kroz prepise svega što ste snimili |

Dugme **⋮** desno na traci otvara dodatne radnje za spisak: **Uvezi iz datoteka**, **Izvezi u CSV** i **Otvori u pregledaču**.

## Spisak {#the-list}

Svaki red prikazuje:

- ikonu vrste razgovora: slušalicu za poziv, prozor za sastanak u drugoj aplikaciji;
- naslov — ime druge strane, broj ili **Druga aplikacija** za uhvaćeni sastanak — a ispod njega datum i sažetak u jednom redu;
- desno kategoriju sa njenom ocenom (broj, na primer *Podrška · 2*), zatim oznake i na kraju trajanje.

Oznake nacrtane crveno su **upozorenja** (na slici *Ljutit kupac* i *Opasnost od odlaska*); ostale su obične oznake (*Pritužba*, *Obećan povratni poziv*). Razgovor bez sažetka i kategorije još nije obrađen — prvi red na slici.

## Plejer {#the-player}

Izaberite red da se ispod spiska otvori plejer.

<Shot name="02_recording_details" alt="Izabran snimak: plejer i prepis ispod spiska" />

- Dva talasna oblika su dva kanala snimka, po jedan za svaku stranu razgovora. Traka ispod njih pomera dug snimak.
- **▶** pušta i pauzira; vremena levo su položaj i ukupno trajanje.
- **1×** menja brzinu; **Oboje** bira koji kanal čujete.
- Dugme sa diskom čuva zvuk, **×** zatvara plejer.

## Prepis i obrada {#the-transcript-and-the-write-up}

Ispod plejera je prepis, sa jednim redom po replici, vremenom kada je izgovorena i imenom govornika (**Vi**, ime druge strane ili, za uhvaćeni sastanak, **Druga aplikacija**). Kliknite red da čujete taj trenutak; red ispod glave za puštanje je istaknut, a izgovarana reč u njemu je označena.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Prepis uz zvuk" />

Padajući meni iznad prepisa bira šta da se prikaže — prepis koji je napravio jedan od vaših [prepoznavača](../ai-processing/transcription.md) (zvezdica označava glavni prepis snimka) ili obradu kao što je **Radnje**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Zadaci koje je razgovor ostavio" />

Četiri ikone desno od padajućeg menija:

| Ikona | Šta radi |
| --- | --- |
| Varnice | Neka model odmah napiše izabranu stavku. |
| Dva lista | Kopira je. |
| Disk | Čuva je u datoteku. |
| Kanta | Briše je. |

Prepis možete da izvezete kao običan tekst ili kao titlove.

Obradu rade [uputstva](/ai-processing/prompt-studio) i modeli koje podesite u [Obradi](../ai-processing/processing.md), preko [pravila](../ai-processing/processing.md#rules) koja se izvode sama ili kada to zatražite. Koliko se dugo snimci čuvaju podešava se u [Snimanju poziva](../recordings/call-recording.md#retention).

## Snimak koji već imate {#a-recording-you-already-have}

Snimak napravljen negde drugde — na mobilnom telefonu, diktafonu ili u drugom sistemu — može da se doda pomoću **⋮ → Uvezi iz datoteka**. Svrstava se tačno kao birani poziv: prepisuje se, obrađuje i pronalazi istom pretragom.

## Brisanje snimka {#deleting-a-recording}

Kada se snimak obriše, sa njim odlazi sve što je iz njega nastalo: prepis i obrada.
