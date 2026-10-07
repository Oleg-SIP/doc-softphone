---
title: Prozor snimki
sidebar_position: 2
description: Knjižnica razgovora — filtriranje, reprodukcija, čitanje prijepisa i obrade.
---

**Snimke** su mjesto gdje živi svaki razgovor, kako god stigao: poziv, sastanak uhvaćen iz druge aplikacije ili uvezena datoteka. Svaki je naveden s već gotovom obradom.

<Shot name="01_recordings" alt="Kartica Snimke: popis razgovora" />

## Pronalaženje razgovora {#finding-a-conversation}

Traka na vrhu ima četiri filtra, polje za pretraživanje i izbornik:

| Kontrola | Sužava popis prema |
| --- | --- |
| **Vrsta** | načinu na koji je razgovor stigao |
| **Razdoblje** | datumu |
| **Kategorija** | kategoriji u koju je svrstan — pogledajte [Rječnici](../ai-processing/dictionaries.md) |
| **Biljeg** | biljezima koje nosi |
| **Traži** | onome što je u njemu rečeno — pretraživanje prolazi kroz prijepise svega što ste snimili |

Gumb **⋮** desno na traci otvara dodatne radnje za popis: **Uvoz iz datoteka**, **Izvoz u CSV** i **Otvori u pregledniku**.

## Popis {#the-list}

Svaki redak prikazuje:

- ikonu vrste razgovora: slušalicu za poziv, prozor za sastanak u drugoj aplikaciji;
- naslov — ime druge strane, broj ili **Druga aplikacija** za uhvaćeni sastanak — a ispod njega datum i sažetak u jednom retku;
- desno kategoriju s njezinom ocjenom (broj, primjerice *Podrška · 2*), zatim oznake i na kraju trajanje.

Oznake nacrtane crveno su **upozoravajući signali** (na slici *Ljutit kupac* i *Opasnost od odlaska*); ostale su obične oznake (*Prigovor*, *Obećan povratni poziv*). Razgovor bez sažetka i kategorije još nije obrađen — prvi redak na slici.

## Reproduktor {#the-player}

Odaberite redak da se ispod popisa otvori reproduktor.

<Shot name="02_recording_details" alt="Odabrana snimka: reproduktor i prijepis ispod popisa" />

- Dva valna oblika su dva kanala snimke, po jedan za svaku stranu razgovora. Traka ispod njih pomiče dugu snimku.
- **▶** reproducira i pauzira; vremena lijevo su položaj i ukupno trajanje.
- **1×** mijenja brzinu; **Oboje** odabire koji kanal čujete.
- Gumb s diskom sprema zvuk, **×** zatvara reproduktor.

## Prijepis i obrada {#the-transcript-and-the-write-up}

Ispod reproduktora je prijepis, s jednim retkom po replici, vremenom kad je izrečena i imenom govornika (**Vi**, ime druge strane ili, za uhvaćeni sastanak, **Druga aplikacija**). Kliknite redak da čujete taj trenutak; redak ispod glave reprodukcije je istaknut, a izgovarana riječ u njemu je označena.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Prijepis uz zvuk" />

Padajući izbornik iznad prijepisa odabire što prikazati — prijepis koji je napravio jedan od vaših [prepoznavača](../ai-processing/transcription.md) (zvjezdica označava glavni prijepis snimke) ili obradu poput **Radnje**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Zadaci koje je razgovor ostavio" />

Četiri ikone desno od padajućeg izbornika:

| Ikona | Što radi |
| --- | --- |
| Iskrice | Neka model odmah napiše odabranu stavku. |
| Dva lista | Kopira je. |
| Disk | Sprema je u datoteku. |
| Kanta | Briše je. |

Prijepis možete izvesti kao običan tekst ili kao titlove.

Obradu rade [upute](/ai-processing/prompt-studio) i modeli koje postavite u [Obradi](../ai-processing/processing.md), preko [pravila](../ai-processing/processing.md#rules) koja se izvode sama ili kad to zatražite. Koliko se dugo snimke čuvaju postavlja se u [Snimanju poziva](../recordings.md#retention).

## Snimka koju već imate {#a-recording-you-already-have}

Snimka napravljena negdje drugdje — na mobitelu, diktafonu ili u drugom sustavu — može se dodati pomoću **⋮ → Uvoz iz datoteka**. Svrstava se točno kao birani poziv: prepisuje se, obrađuje i pronalazi istim pretraživanjem.

## Brisanje snimke {#deleting-a-recording}

Kad se snimka izbriše, s njom odlazi sve što je iz nje nastalo: prijepis i obrada.
