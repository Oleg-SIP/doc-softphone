---
title: Fanging
sidebar_label: Opptak fra andre programmer
sidebar_position: 1
description: "\"Fanging tar opp en samtale som holdes i et annet program — Zoom, Teams, Meet eller hvilket som helst annet — rett fra maskinen.\""
---

**Fanging** er måten AI Softphone tar opp en samtale på som foregår i et annet program, som et møde i Zoom, Teams eller Meet. Den tar opp fra selve maskinen, med den andre siden og deg på hver sin kanal, og den samme utskriften og det samme sammendraget venter til slutt, som for en telefonsamtale.

Programmet ser etter en samtale, ikke etter navnet på et program, så det virker med alt som lager en.

[Oversikten](../interface/settings-overview.md) i innstillingene viser dette under **Opptak fra andre programmer** og deler det i tre trinn:

1. **Slå på opptak fra programmer** — [tillat at lyd fanges](#turning-capture-on).
2. **Ta opp en samtale fra et program** — [start og stopp](#capturing-a-conversation) et opptak.
3. **Gi en av dem et navn** — [gi opptaket nytt navn](#giving-it-a-name).

## Slå på fanging {#turning-capture-on}

Fanging er slått av til du tillater den. Åpne **Innstillinger → Fanging**.

<Shot name="10_settings_capture" alt="Innstillinger → Fanging" />

| Innstilling | Standard | Hva den gjør |
| --- | --- | --- |
| **Tillat at lyd fanges** | av | Lar programmet ta opp lyden fra andre programmer. Ingenting fanges mens den er av. |
| **Minn meg på å fortelle de andre om opptaket** | på | Viser en påminnelse mens en fanging pågår. Avkrysningsboksen er grå til fanging er tillatt. |

:::caution
Alt maskinen spiller av, tas opp, ikke bare samtalen. Denne telefonen kan ikke kunngjøre et opptak i en annens møte, så det er din oppgave å si fra.
:::

Den delen av programmet som gjør dette, er modulen **Fanging**, *Ta opp en samtale som foregår i et annet program*. Den kan slås av under [Moduler](../application/modules.md).

## Starte en fanging {#starting-a-capture}

Når fanging er tillatt, viser bunnen av [hovedvinduet](../interface/main-window.md#capture) tilstanden — **Fanging · klar** — med en knapp **Ta opp** til høyre. Trykk på **Ta opp** for å starte for hånd.

### Automatisk start {#automatic-start}

**Automatisk start** bestemmer hva som skjer når programmet hører en samtale i et annet program:

| Valg | Hva som skjer |
| --- | --- |
| **Aldri** | En fanging starter bare når du trykker på **Ta opp**. |
| **Spør meg** | Programmet spør om den skal tas opp. Standard. |
| **Alltid** | Programmet begynner å ta opp av seg selv. |

Under **Programmer med eget svar** kan et program få sitt eget svar — for eksempel *Ta alltid opp dette programmet* fra spørsmålet programmet stiller.

*Å spørre koster ingenting: sekundene før du svarer er allerede lagret.*

### Før starten {#before-the-start}

Glidebryteren **Før starten** angir hvor mange sekunder med lyd fra før et opptak starter som beholdes, **15 sekunder** som standard. Den finnes for at ingenting skal gå tapt mens samtalen blir oppdaget: et opptak som starter når du trykker på **Ta opp**, eller når du svarer på spørsmålet, begynner likevel med ordene som kom før.

## Fange en samtale {#capturing-a-conversation}

Mens det tas opp, viser hovedvinduet en rød prikk, navnet på opptaket (for eksempel **Møte i Zoom**), tiden som har gått, og de to kanalene som bølgeformer.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Et møde tas opp" />

- **Stopp opptaket** avslutter det.
- Vinduet forblir synlig mens det tas opp, og minner deg på å fortelle deltakerne at møtet tas opp.

### Hva bildet viser {#what-the-picture-shows}

To andre innstillinger velger hvordan lydnivået tegnes:

| Innstilling | Standard | Hvor |
| --- | --- | --- |
| **Bilde i hovedvinduet** | Bølge | De to kanalene mens en fanging pågår. |
| **Bilde i raden ved foten av telefonen** | To nivåer | De to tynne stolpene under **Fanging · klar**. |

### Prøve det {#testing-it}

Under **Prøv** har fanen to stolper: **Du** og **Den andre siden**. *Den øverste stolpen beveger seg når du snakker, den nederste når noe spilles.* Før et viktig møte kan du si et ord og spille av en lyd for å se at programmet hører begge sider.

## Gi det et navn {#giving-it-a-name}

Blyanten ved siden av navnet på opptaket lar deg gi det nytt navn mens det pågår. Et opptak du ikke har gitt navn, står oppført som **Et annet program**.

## Hvor opptaket havner {#where-the-recording-goes}

En fanget samtale dukker opp i [vinduet Opptak](../recordings/recordings-window.md) som alle andre, med sitt eget ikon — et vindu i stedet for et rør — og med tittelen du ga den, eller **Et annet program**.

<Shot name="01_recordings" alt="Fangede møter på fanen Opptak, markert med et vindusikon" />

Den skrives ut, oppsummeres, sorteres under en kategori og får etiketter av de samme [reglene](../ai-processing/processing.md#rules) som en telefonsamtale. I utskriften av et fanget møde vises den som snakker som **Et annet program**, der en telefonsamtale ville vist navnet på den andre parten; bibliotekets **Søk** finner også det som ble sagt i det.
