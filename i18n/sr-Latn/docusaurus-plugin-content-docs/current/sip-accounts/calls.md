---
title: Podešavanja poziva
sidebar_position: 3
description: Kodeci koji se nude centrali, šta se dešava kada stigne drugi poziv, automatsko biranje i koliko se dugo čuva dnevnik poziva.
---

**Podešavanja → Pozivi** sadrži podešavanja koja važe za svaki poziv, bez obzira na nalog.

## Zvučni formati {#audio-formats}

<Shot name="07_settings_calls" alt="Podešavanja → Pozivi: zvučni formati" />

Spisak kodeka koje telefon nudi drugoj strani. Kodeci se *nude ovim redom*, a druga strana bira iz onoga što ponudite: što je kodek više, to je verovatnije da će se koristiti.

- **Polje za potvrdu** uključuje ili isključuje kodek. Isključen kodek se ne nudi.
- **▲** i **▼** ga pomeraju gore ili dole po spisku.
- *širokopojasni* desno označava kodek sa širim opsegom zvuka nego što ga ima telefonska linija: glas je jasniji.

| Kodek | Frekvencija uzorkovanja | Podrazumevano uključen |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, širokopojasni | da |
| **G722** | 16 kHz, širokopojasni | da |
| **PCMU** | 8 kHz | da |
| **PCMA** | 8 kHz | da |
| **speex** | 16 kHz, širokopojasni | ne |
| **speex** | 8 kHz | ne |
| **speex** | 32 kHz, širokopojasni | ne |
| **iLBC** | 8 kHz | ne |
| **GSM** | 8 kHz | ne |
| **L16** | 44 kHz, stereo, širokopojasni | ne |
| **L16** | 44 kHz, širokopojasni | ne |

Tabela je u redosledu u kom dolazi sa programom.

Kodeci se dogovaraju na početku poziva, pa izmena važi od sledećeg poziva. Ako poziv zvuči loše, ostavite uključene samo kodeke koje koristi vaša centrala.

## Poziv na čekanju {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Podešavanja → Pozivi: poziv na čekanju, automatsko biranje i istorija" />

*Šta se dešava kada vas neko pozove dok ste već u razgovoru.* Bira se u padajućem meniju; podrazumevano je **Neka drugi poziv zvoni**. Interfonski poziv sa sopstvene centrale uvek prolazi, šta god da izaberete — tako do ovog telefona stiže poziv upućen sa CTI table.

## Automatsko biranje {#autodial}

Kada poziv ne može da prođe, njegova kartica nudi da nastavi da bira dok ne uspe. Dva klizača određuju kako:

- **Čekanje između pokušaja** — podrazumevano 15 sekundi;
- **Odustani posle** — podrazumevano 30 minuta.

## Istorija {#history}

Dnevnik poziva je dokaz, pa se iz njega ništa ne uklanja dok to ovde ne kažete.

- **Razdoblje čuvanja** bira koliko dugo [dnevnik poziva](/interface/contacts-history#history) čuva poziv. Podrazumevano je **Uvek**.
- **Isprazni istoriju poziva** briše sve pozive odjednom, bez obzira na razdoblje. To ne može da se poništi.
