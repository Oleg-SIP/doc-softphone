---
title: Vinduet Optagelser
sidebar_position: 2
description: "Biblioteket med alle samtaler — et opkald, en importeret fil eller et møde opfanget fra Zoom, Teams eller Meet: filtre, afspilleren, udskriften, du kan afspille fra en hvilken som helst linje, og opsummeringerne."
---

**Optagelser** er der, hvor hver samtale bor, uanset hvordan den kom ind: et opkald foretaget eller modtaget i telefonen, en lydfil, du har importeret, eller et møde opfanget fra Zoom, Teams, Meet eller et hvilket som helst andet program. De står alle i én liste, og hver især åbnes den på samme måde: afspilleren, udskriften og alt, hvad sprogmodellen har skrevet om den. Tryk på **Optagelser** nederst til venstre i [hovedvinduet](main-window.md) for at åbne det.

<Shot name="01_recordings" alt="Fanen Optagelser: et opfanget Zoom-møde, en importeret fil og opkald i én liste" />

## Tre slags optagelser {#three-kinds-of-recording}

Ikonet til venstre i en række viser, hvordan samtalen kom ind.

| Ikon | Samtale | Dens navn i listen | Hvordan den kommer hertil |
| --- | --- | --- | --- |
| Rør med en pil | Et opkald foretaget eller modtaget i denne telefon. Pilen peger ind ved et indgående opkald og ud ved et udgående. | Kontaktens navn eller nummeret | Optaget som indstillet under [Optagelser](../recordings.md) |
| Pil ind i en bjælke | En fil importeret fra et andet sted: en mobiltelefon, en diktafon eller et andet system | Filens navn | **⋮ → Importér fra fil(er)**; se [nedenfor](#a-recording-you-already-have) |
| Vindue | Et møde holdt i et andet program | Det navn, du gav det, eller **Et andet program** | [Opfangning](../capture/capture.md) |

På billedet er de tre øverste rækker én af hver slags: et Zoom-møde, en importeret fil med en banks supportopkald og et opkald modtaget på linjen **305 Support**. Uanset kilde bliver de skrevet ud, opsummeret og søgt igennem på samme måde.

## Finde en samtale {#finding-a-conversation}

Bjælken øverst har fem filtre, et søgefelt og en menu:

| Kontrol | Indsnævrer listen efter |
| --- | --- |
| **Slags** | den måde, samtalen kom ind på: indgående eller udgående opkald, **Importerede**, **Opfangede** |
| **Periode** | datoen: **I dag**, **I går**, **Sidste 7 dage** eller **Vælg datoer…** |
| **Kategori** | den kategori, den er sorteret under — se [Ordlister](../ai-processing/dictionaries.md) |
| **Mærke** | de etiketter og signaler, den har |
| **Genkender** | den [genkender](../ai-processing/transcription.md), der lavede dens udskrift |
| **Søg** | det, der blev sagt i den — søgningen går gennem udskrifterne af alt, du har optaget |

<Shot name="39_more_menu" alt="Menuen ⋮ i listen: Importér fra fil(er), Eksportér til CSV, Åbn i en browser" />

Knappen **⋮** til højre i bjælken åbner flere handlinger for listen:

| Punkt | Gør |
| --- | --- |
| **Importér fra fil(er)** | Henter optagelser ind, du allerede har. Se [En optagelse, du allerede har](#a-recording-you-already-have). |
| **Eksportér til CSV** | Gemmer listen som et regneark: hvornår, parten og nummeret, retning, længde, kategori, etiketter, signaler og resuméet på én linje af hver samtale. |
| **Åbn i en browser** | Åbner listen i din browser, som den side, det [lokale REST-API](../integration/rest-api.md) leverer på `/ui`. |

## Listen {#the-list}

Hver række viser:

- ikonet for slags samtale;
- navnet — den anden part, nummeret, filen eller mødet — og under det datoen og resuméet på én linje;
- til højre kategorien med dens score (et tal, for eksempel *Support · 4*), så signaler og etiketter, og til sidst længden.

Signaler tegnes med rødt (på billedet *Følsomme data*, *Løfte givet*, *Vred kunde*); etiketter er almindelige (*Opkald lovet*). En samtale uden resumé og kategori er endnu ikke opsummeret — rækken **Anna Christensen** på billedet.

<Shot name="40_row_actions" alt="En række med markøren over sig: knapperne nål, blyant og skraldespand" />

Peg på en række for at vise tre knapper til højre:

| Knap | Gør |
| --- | --- |
| Nål | **Behold denne**: en optagelse, der er beholdt, slettes aldrig af grænserne under [Opbevaring](../recordings.md#retention). Tryk igen for at holde op med at beholde den. |
| Blyant | **Omdøb**: giver samtalen et navn, du selv vælger. Et opkald beholder partens navn ved siden af; et møde eller en fil er ellers opkaldt efter det program eller den fil, den kom fra. |
| Skraldespand | **Slet denne optagelse**, efter at have spurgt. Lyden forsvinder også, og det kan ikke fortrydes. |

## Afspilleren {#the-player}

Markér en række for at åbne afspilleren under listen.

- De to bølgeformer er optagelsens to kanaler: den øverste er dig, den nederste er den anden side. En importeret fil har som regel ét blandet spor, så begge linjer viser den samme lyd.
- **▶** afspiller og sætter på pause; tiderne til venstre er positionen og den samlede længde. Bjælken under bølgeformerne ruller gennem en lang optagelse.
- **1×** ændrer hastigheden; **Begge** vælger, hvilken stemme du hører: begge, kun dig (**Mig**) eller kun den anden side (**Dem**).
- Diskknappen gemmer en kopi af optagelsen, **×** lukker samtalen.

Linjen mellem listen og afspilleren kan trækkes op for at give udskriften mere plads, som på billederne nedenfor.

## Udskriften {#the-transcript}

Under afspilleren står udskriften: én linje per replik, med det tidspunkt, den blev sagt, og hvem der sagde den.

<Shot name="26_recording_call" alt="Et opkald på linjen 305 Support: afspilleren og udskriften, med linjen ved 0:10 fremhævet" />

| Slags optagelse | Talerne vises som |
| --- | --- |
| Et opkald | **Dig** og den anden parts navn eller nummeret |
| Et opfanget møde | **Dig** og optagelsens navn for alle andre |
| En importeret fil | **Alle · speaker 1**, **Alle · speaker 2**… — genkenderen skelner stemmerne fra hinanden |

**Klik på en linje for at gå til det øjeblik**: afspilleren flytter derhen, linjen fremhæves, og det ord, der siges, markeres i den — på billedet linjen ved **0:10** med ordet *Ja*. Tryk på **▶** for at lytte herfra. Mens den afspiller, følger fremhævningen talen, så du kan læse og lytte på samme tid og springe tilbage til en hvilken som helst sætning.

Tiden til venstre for hver linje er også det, en opsummering peger på: et signal, et svar eller et citat har tiden for de ord, det bygger på.

## Udskrift eller opsummering: rullelisten {#transcript-or-write-up-the-drop-down}

Rullelisten over udskriften vælger, hvad der vises på det sted: en udskrift eller en af de opsummeringer, sprogmodellen har lavet.

<Shot name="27_writeup_menu" alt="Den åbne rulleliste: OpenAI-udskriften og opkaldets opsummeringer" />

- Linjer med en **mikrofon** er udskrifter, én for hver [genkender](../ai-processing/transcription.md), der har skrevet optagelsen ud. Stjernen markerer hovedudskriften. Peg på en for at se genkenderen, dens model og sproget.
- Linjer med **gnister** er opsummeringer, lavet af [prompterne](/ai-processing/prompt-studio) under [Behandling](../ai-processing/processing.md).

En optagelse kan have udskrifter fra flere genkendere, så de kan sammenlignes: Zoom-mødet nedenfor blev skrevet ud af både X.ai og Deepgram.

<Shot name="36_zoom_menu" alt="Et opfanget møde med to udskrifter, Deepgram og X.ai, og dets opsummeringer" />

Opsummeringerne står under korte navne:

| I rullelisten | Lavet af prompten | Hvad den viser |
| --- | --- | --- |
| **Resumé** | Resumé | Hovedpunkterne, beslutningerne og de næste skridt i et kort afsnit. |
| **Kort fortalt** | Resumé på én linje | Én sætning; den samme linje vises under navnet i listen. |
| **Handlinger** | Opgaver | Hvem der har aftalt at gøre hvad, og hvornår. |
| **Emner** | Emner | De emner, der kom op. |
| **Nævnte** | Navne og tal | Personer, virksomheder, datoer, beløb og henvisninger. |
| selve spørgsmålet | Et spørgsmål om dette opkald | Svaret på et spørgsmål, du stillede, med de ord, det bygger på. |
| **Kvalitet** | Salgskvalitet, Supportkvalitet | En samlet score og en vurdering af hvert kriterium. |
| **Signaler** | Signaler | Det, der kræver opmærksomhed, med beviset og tiden. |
| **Etiketter**, **Kategori** | Etiketter, Kategori | De mærker, samtalen blev sorteret under. |

## Opsummeringerne, en ad gangen {#the-write-ups-one-by-one}

Billederne nedenfor er alle af det samme opkald, på linjen **305 Support**, hvor en kunde spørger, hvornår hendes forsikringer fornyes.

**Resumé** — samtalen i nogle få sætninger.

<Shot name="28_summary" alt="Opkaldets resumé" />

**Kort fortalt** — én linje, kort nok til at genkende samtalen i listen.

<Shot name="29_nutshell" alt="Kort fortalt: opkaldets resumé på én linje" />

**Handlinger** — hver opgave med den, der skal gøre den, og hvornår, til højre.

<Shot name="30_actions" alt="Handlinger: to opgaver til Du, den ene med frist i morgen formiddag" />

**Et spørgsmål** — spørg samtalen om hvad som helst: spørgsmålet bliver navnet på elementet, og under svaret står de ord, det bygger på, med deres tid i optagelsen.

<Shot name="31_question" alt="Svaret på et spørgsmål om opkaldet, med to citater ved 0:13 og 0:24" />

**Kvalitet** — scoren fra 1 til 5 med begrundelsen for den, og hvert kriterium markeret **opfyldt**, **svagt** eller **ikke opfyldt** med en bemærkning.

<Shot name="32_quality" alt="Kvalitet: score 4, to kriterier opfyldt og to svagt" />

**Signaler** — hvert signal med de ord, det blev rejst på, dets alvor og tiden.

<Shot name="33_red_flags" alt="Signaler: Løfte givet, lav, ved 0:24" />

**Emner** — emnerne i et møde, her Zoom-mødets.

<Shot name="38_topics" alt="Zoom-mødets emner" />

## Knapperne ved siden af rullelisten {#the-buttons-beside-the-drop-down}

| Knap | Gør |
| --- | --- |
| Gnister | **Transskribér eller spørg en model…**: åbner en menu, se nedenfor. |
| To ark | Kopierer det, der vises. |
| Disk | Gemmer det i en fil. Du kan gemme en udskrift som ren tekst eller som undertekster. |
| Skraldespand | Sletter det, der vises. |

<Shot name="34_run_menu" alt="Gnistmenuen: Transskription med fire genkendere, Behandling med prompterne" />

Gnistmenuen udfører arbejdet efter behov. Under **Transskription** vælger du en genkender for at skrive optagelsen ud igen med den; under **Behandling** vælger du en prompt for at køre den nu — **Et spørgsmål om dette opkald** spørger først om selve spørgsmålet. Resultatet vises i rullelisten. Sådan opsummeres en samtale, når **Behandl samtaler automatisk** er slået fra under [Behandling](../ai-processing/processing.md), og sådan tilføjer du endnu en opsummering til en samtale, der allerede har nogle.

## Tre eksempler {#three-examples}

### Et opkald foretaget i telefonen {#a-call-made-in-the-phone}

Opkaldet ovenfor: talerne er **Dig** og **Mette Rasmussen**, kontaktens navn, på to adskilte kanaler.

### En fil, du har importeret {#a-file-you-imported}

<Shot name="35_recording_import" alt="En importeret fil med en banks supportopkald: ét blandet spor og taler 1 og 2" />

`riverside_bank_support_call` er en mp3, der er hentet ind med **⋮ → Importér fra fil(er)**. Dens navn er filens navn, dens ikon en pil ind i en bjælke, og dens to talere blev skilt fra hinanden af genkenderen. Opsummeringerne fandt et kortnummer, der blev sagt højt, og rejste **Følsomme data**.

### Et møde opfanget fra et andet program {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Et Zoom-møde opfanget fra computeren: X.ai-udskriften med Dig og mødets navn som talere" />

**Planlægning af Q4-lancering (Zoom)** blev opfanget, mens mødet kørte i Zoom, og navngivet med blyanten. Alle på den anden side af mødet vises under optagelsens navn; du er **Dig**. Se [Opfangning](../capture/capture.md).

## En optagelse, du allerede har {#a-recording-you-already-have}

En optagelse lavet et andet sted — på en mobiltelefon, en diktafon eller et andet system — kan lægges ind med **⋮ → Importér fra fil(er)**. Vælg en eller flere mp3- eller wav-filer; telefonen siger, hvor mange der blev importeret, og navngiver dem, den ikke kunne læse som en optagelse. Hver af dem arkiveres præcis som et opkald, du selv har ringet: skrevet ud, opsummeret efter de samme [regler](../ai-processing/processing.md#rules) og fundet af den samme søgning.

## Slette en optagelse {#deleting-a-recording}

Når en optagelse slettes, forsvinder alt, hvad der er lavet ud fra den, sammen med den: udskrifterne og opsummeringerne. Hvor længe optagelser gemmes af sig selv, indstilles under [Optagelser](../recordings.md#retention).
