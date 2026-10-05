---
title: Nastavitev računa SIP
sidebar_position: 1
description: Povežite AI Softphone s svojo IP-centralo ali ponudnikom SIP v Nastavitve → Računi.
---

AI Softphone deluje s katero koli IP-centralo ali ponudnikom SIP. Prijavljeni ste lahko na toliko računov (linij), kolikor jih imate, in vsak račun ima svoje nastavitve.

Odprite **Nastavitve → Računi**.

<Shot name="05_settings_accounts" alt="Nastavitve → Računi: dva računa, oba registrirana" />

## Seznam računov {#the-list-of-accounts}

Vsak račun je vrstica z:

- **potrditvenim poljem**, ki račun vklopi ali izklopi;
- **piko**, ki je zelena, ko je račun registriran na centrali;
- imenom, pod njim pa `username@server`;
- gumbom **Prekini**, ki račun odjavi s centrale;
- gumboma **▲** in **▼**, ki račun premakneta po seznamu navzgor ali navzdol. Značke računov v [glavnem oknu](../interface/main-window.md) sledijo istemu vrstnemu redu.

Gumb **Dodaj** zgoraj desno doda račun. Kliknite vrstico, da se pod njo odpre njen obrazec.

## Dodajanje računa {#adding-an-account}

<Shot name="05d_account_add" alt="Obrazec novega računa, prazen" />

Pritisnite **Dodaj**. Pod seznamom se odpre prazen obrazec s kazalcem v polju **Ime (neobvezno)**. Izpolnite spodnja polja, odprite **Nastavitve strežnika**, če jih centrala potrebuje, in pritisnite **Shrani**. Nov račun začne z običajnimi vrednostmi: UDP na vratih 5060, registracija se obnovi vsakih 300 sekund.

## Obrazec računa {#the-account-form}

<Shot name="05b_account_edit" alt="Obrazec računa" />

| Polje | Kaj vpisati |
| --- | --- |
| **Ime (neobvezno)** | Ime, prikazano na znački računa v glavnem oknu in pri njegovih klicih. Če je prazno, je račun prikazan kot `username@server`. |
| **Uporabniško ime** | Uporabniško ime ali interna številka, ki vam jo da centrala ali ponudnik. |
| **Geslo** | Geslo zanj. Ko se vrnete v obrazec, polje ostane prazno. Hrani se v shrambi ključev računalnika, nikoli v datoteki z nastavitvami. |
| **Naslov strežnika** | Naslov centrale ali strežnika SIP ponudnika, na primer `pbx.example.com`. |
| **Nastavitve strežnika** | Razširi manj pogoste nastavitve povezave; glejte spodaj. |
| **Sprejemaj samodejno** | Pod **Sprejemanje**: sprejema dohodne klice na tem računu, ne da bi kar koli pritisnili. Privzeto izklopljeno. |

Pritisnite **Shrani**, da obdržite spremembe. **Prekliči** jih zavrže, **Izbriši** pa odstrani račun.

Ko je pika ob računu zelena, je račun registriran in to pokaže tudi značka računa v glavnem oknu. Če ostane siva ali rdeča, odprite [Diagnostiko](../troubleshooting/diagnostics.md): zavihek **SIP** pokaže zahtevo `REGISTER` in kaj je strežnik odgovoril.

## Nastavitve strežnika {#server-settings}

Večina central tukaj ne potrebuje ničesar. Pritisnite **Nastavitve strežnika**, da jih prikažete; isti gumb se nato glasi **Skrij nastavitve strežnika**.

<Shot name="05c_account_server_settings" alt="Nastavitve strežnika računa, razširjene" />

| Polje | Privzeto | Kaj je |
| --- | --- | --- |
| **Uporabnik za preverjanje** | prazno | Ime, s katerim centrala preverja geslo, kadar ni enako **Uporabniškemu imenu**. Na sliki je interna številka `201`, centrala pa jo preverja kot `pisarna201`. |
| **Prenos** | UDP | Protokol povezave s strežnikom. Spustni seznam. |
| **Vrata** | 5060 | Vrata strežnika. |
| **Odhodni posrednik** | prazno | Posrednik, skozi katerega mora iti vsaka zahteva, če ga ponudnik da. |
| **Registrar** | prazno | Naslov za registracijo, če to ni **Naslov strežnika**. |
| **Ponovna registracija, sekunde** | 300 | Kako pogosto telefon obnovi registracijo. |
| **Toni tipkovnice** | Zvočni tok | Kako se toni tipkovnice pošiljajo centrali. Spustni seznam. Spremenite ga le, če centrala tonov ne sliši. |

Kodeki, ki jih telefon ponuja, se ne nastavljajo za vsak račun posebej; so v [Nastavitvah klicev](calls.md#audio-formats).
