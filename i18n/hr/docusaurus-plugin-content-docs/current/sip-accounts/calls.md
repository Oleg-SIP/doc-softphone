---
title: Postavke poziva
sidebar_position: 3
description: Kodeci koji se nude centrali, što se događa kad stigne drugi poziv, automatsko biranje i koliko se dugo čuva zapisnik poziva.
---

**Postavke → Pozivi** sadrži postavke koje vrijede za svaki poziv, bez obzira na račun.

## Zvučni formati {#audio-formats}

<Shot name="07_settings_calls" alt="Postavke → Pozivi: zvučni formati" />

Popis kodeka koje telefon nudi drugoj strani. Kodeci se *nude ovim redom*, a druga strana bira između onoga što nudite: što je kodek više, to je vjerojatnije da će se koristiti.

- **Potvrdni okvir** uključuje ili isključuje kodek. Isključeni kodek se ne nudi.
- **▲** i **▼** pomiču ga gore ili dolje po popisu.
- *širokopojasni* desno označava kodek sa širim rasponom zvuka nego što ga ima telefonska linija: glas je jasniji.

| Kodek | Frekvencija uzorkovanja | Prema zadanim postavkama uključen |
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

Tablica je u redoslijedu u kojem dolazi s programom.

Kodeci se dogovaraju na početku poziva, pa promjena vrijedi od sljedećeg poziva. Ako poziv zvuči loše, ostavite uključene samo kodeke koje koristi vaša centrala.

## Poziv na čekanju {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Postavke → Pozivi: poziv na čekanju, automatsko biranje i povijest" />

*Što se događa kad vas netko nazove dok ste već u razgovoru.* Odabire se u padajućem izborniku; zadano je **Neka drugi poziv zvoni**. Interfonski poziv s vlastite centrale uvijek prolazi, što god odabrali — tako do ovog telefona stiže poziv upućen s CTI ploče.

## Automatsko biranje {#autodial}

Kad poziv ne može proći, njegova kartica nudi da nastavi birati dok ne uspije. Dva klizača određuju kako:

- **Čekanje između pokušaja** — zadano 15 sekundi;
- **Odustani nakon** — zadano 30 minuta.

## Povijest {#history}

Zapisnik poziva je dokaz, pa se iz njega ništa ne uklanja dok to ovdje ne kažete.

- **Razdoblje čuvanja** odabire koliko dugo [zapisnik poziva](/interface/contacts-history#history) čuva poziv. Zadano je **Uvijek**.
- **Isprazni povijest poziva** briše sve pozive odjednom, bez obzira na razdoblje. To se ne može poništiti.
