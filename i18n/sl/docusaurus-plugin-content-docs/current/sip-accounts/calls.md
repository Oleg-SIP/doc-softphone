---
title: Nastavitve klicev
sidebar_position: 3
description: Kodeki, ponujeni centrali, kaj se zgodi, ko pride drugi klic, samodejno klicanje in kako dolgo se hrani dnevnik klicev.
---

**Nastavitve → Klici** vsebuje nastavitve, ki veljajo za vsak klic, ne glede na račun.

## Zvočni formati {#audio-formats}

<Shot name="07_settings_calls" alt="Nastavitve → Klici: zvočni formati" />

Seznam kodekov, ki jih telefon ponudi drugi strani. Kodeki so *ponujeni v tem vrstnem redu*, druga stran pa izbira med tem, kar ponudite: višje kot je kodek, verjetneje bo uporabljen.

- **Potrditveno polje** kodek vklopi ali izklopi. Izklopljen kodek se ne ponudi.
- **▲** in **▼** ga premakneta po seznamu navzgor ali navzdol.
- *širokopasovni* na desni označuje kodek s širšim razponom zvoka, kot ga ima telefonska linija: glas je razločnejši.

| Kodek | Frekvenca vzorčenja | Privzeto vklopljen |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, širokopasovni | da |
| **G722** | 16 kHz, širokopasovni | da |
| **PCMU** | 8 kHz | da |
| **PCMA** | 8 kHz | da |
| **speex** | 16 kHz, širokopasovni | ne |
| **speex** | 8 kHz | ne |
| **speex** | 32 kHz, širokopasovni | ne |
| **iLBC** | 8 kHz | ne |
| **GSM** | 8 kHz | ne |
| **L16** | 44 kHz, stereo, širokopasovni | ne |
| **L16** | 44 kHz, širokopasovni | ne |

Tabela je v vrstnem redu, v katerem pride s programom.

Kodeki se dogovorijo ob začetku klica, zato sprememba velja od naslednjega klica. Če klic zveni slabo, pustite vklopljene le kodeke, ki jih uporablja vaša centrala.

## Čakajoči klic {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Nastavitve → Klici: čakajoči klic, samodejno klicanje in zgodovina" />

*Kaj se zgodi, ko vas kdo kliče, medtem ko ste že v pogovoru.* Izbere se v spustnem seznamu; privzeto **Naj drugi klic zvoni**. Interkomski klic z vaše centrale vedno pride skozi, karkoli izberete — tako do tega telefona pride klic, opravljen s plošče CTI.

## Samodejno klicanje {#autodial}

Ko klic ne more skozi, njegova kartica ponudi, da kliče naprej, dokler ne uspe. Drsnika določata kako:

- **Čakanje med poskusi** — privzeto 15 sekund;
- **Obupaj po** — privzeto 30 minut.

## Zgodovina {#history}

Dnevnik klicev je dokaz, zato se iz njega nič ne odstrani, dokler tega ne rečete tukaj.

- **Doba hrambe** določa, kako dolgo [dnevnik klicev](/interface/contacts-history#history) hrani klic. Privzeto **Vedno**.
- **Izprazni zgodovino klicev** izbriše vse klice naenkrat, ne glede na dobo. Tega ni mogoče razveljaviti.
