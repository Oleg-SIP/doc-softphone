---
title: Postavljanje SIP računa
sidebar_position: 1
description: Povežite AI Softphone sa svojom IP centralom ili SIP operaterom u Postavke → Računi.
---

AI Softphone radi s bilo kojom IP centralom ili SIP operaterom. Možete biti prijavljeni na onoliko računa (linija) koliko ih imate, a svaki račun ima vlastite postavke.

Otvorite **Postavke → Računi**.

<Shot name="05_settings_accounts" alt="Postavke → Računi: dva računa, oba registrirana" />

## Popis računa {#the-list-of-accounts}

Svaki račun je redak s:

- **potvrdnim okvirom** koji uključuje ili isključuje račun;
- **točkom** koja je zelena kad je račun registriran na centrali;
- nazivom, a ispod njega `username@server`;
- gumbom **Prekini** koji odjavljuje račun s centrale;
- gumbima **▲** i **▼** koji pomiču račun gore ili dolje po popisu. Značke računa u [glavnom prozoru](../interface/main-window.md) prate isti redoslijed.

Gumb **Dodaj** gore desno dodaje račun. Kliknite redak da se ispod njega otvori njegov obrazac.

## Dodavanje računa {#adding-an-account}

<Shot name="05d_account_add" alt="Obrazac novog računa, prazan" />

Pritisnite **Dodaj**. Ispod popisa otvara se prazan obrazac s pokazivačem u polju **Naziv (neobavezno)**. Ispunite polja u nastavku, otvorite **Postavke poslužitelja** ako ih centrala treba i pritisnite **Spremi**. Novi račun počinje s uobičajenim vrijednostima: UDP na portu 5060, registracija se obnavlja svakih 300 sekundi.

## Obrazac računa {#the-account-form}

<Shot name="05b_account_edit" alt="Obrazac računa" />

| Polje | Što upisati |
| --- | --- |
| **Naziv (neobavezno)** | Naziv prikazan na znački računa u glavnom prozoru i uz njegove pozive. Ako je prazan, račun se prikazuje kao `username@server`. |
| **Korisničko ime** | Korisničko ime ili interni broj koji vam je dala centrala ili operater. |
| **Lozinka** | Lozinka za njega. Kad se vratite u obrazac, polje ostaje prazno. Čuva se u spremniku ključeva računala, nikada u datoteci postavki. |
| **Adresa poslužitelja** | Adresa centrale ili operaterova SIP poslužitelja, primjerice `pbx.example.com`. |
| **Postavke poslužitelja** | Proširuje rjeđe postavke veze; pogledajte u nastavku. |
| **Javljaj se automatski** | Pod **Javljanje**: javlja se na dolazne pozive na ovom računu bez da išta pritisnete. Prema zadanim postavkama isključeno. |

Pritisnite **Spremi** da zadržite promjene. **Odustani** ih odbacuje, a **Izbriši** uklanja račun.

Kad je točka uz račun zelena, račun je registriran i to pokazuje i značka računa u glavnom prozoru. Ako ostane siva ili crvena, otvorite [Dijagnostiku](../troubleshooting/diagnostics.md): kartica **SIP** prikazuje zahtjev `REGISTER` i što je poslužitelj odgovorio.

## Postavke poslužitelja {#server-settings}

Većini centrala ovdje ništa ne treba. Pritisnite **Postavke poslužitelja** da ih prikažete; isti gumb tada glasi **Sakrij postavke poslužitelja**.

<Shot name="05c_account_server_settings" alt="Postavke poslužitelja računa, proširene" />

| Polje | Zadano | Što je |
| --- | --- | --- |
| **Korisnik za provjeru** | prazno | Ime prema kojem centrala provjerava lozinku, kad nije isto kao **Korisničko ime**. Na slici je interni broj `201`, a centrala ga provjerava kao `ured201`. |
| **Prijenos** | UDP | Protokol veze s poslužiteljem. Padajući izbornik. |
| **Port** | 5060 | Port poslužitelja. |
| **Izlazni proxy** | prazno | Proxy kroz koji mora proći svaki zahtjev, ako ga operater daje. |
| **Registrar** | prazno | Adresa na kojoj se registrirati, ako to nije **Adresa poslužitelja**. |
| **Ponovna registracija, sekunde** | 300 | Koliko često telefon obnavlja registraciju. |
| **Tonovi tipkovnice** | Zvučni tok | Kako se tonovi tipkovnice šalju centrali. Padajući izbornik. Promijenite ga samo ako centrala ne čuje tonove. |

Kodeci koje telefon nudi ne postavljaju se po računu; nalaze se u [Postavkama poziva](calls.md#audio-formats).
