---
title: Bežné problémy
sidebar_position: 2
description: "\"Čo skontrolovať, keď sa účet nechce zaregistrovať, nie je zvuk, hovor alebo stretnutie sa nenahralo, nie je prepis, alebo odkaz, klávesová skratka či API nič nerobí.\""
---

Každá položka ukazuje na nastavenie, ktoré o tom rozhoduje. Ak tu odpoveď nie je, otvorte [Diagnostiku](/troubleshooting/diagnostics): ukazuje, čo si telefón a ústredňa hovoria.

## Účet sa nechce zaregistrovať {#the-account-will-not-register}

Bodka pri účte v **Nastavenia → Účty** zostáva sivá alebo červená.

1. Skontrolujte **Používateľské meno**, **Heslo** a **Adresa servera** vo [formulári účtu](/sip-accounts/setup).
2. Ak vaša ústredňa overuje heslo pod iným menom než klapkou, vyplňte **Overovací používateľ** v **Nastavenia servera**.
3. Skontrolujte **Prenos** a **Port** podľa toho, čo ústredňa očakáva.
4. Otvorte kartu **SIP** v [okne diagnostiky](/troubleshooting/diagnostics) a pozrite sa na požiadavku `REGISTER` a na to, čo server odpovedal.

## Nepočujem alebo ma nepočuť {#i-cannot-hear-or-i-cannot-be-heard}

Otvorte [Nastavenia → Zariadenia](/sip-accounts/devices).

- Povedzte niečo: pruh pod **Mikrofón** sa musí hýbať. Ak sa nehýbe, vyberte iný mikrofón.
- Stlačte **Vyskúšať** pod **Reproduktory** a vypočujte si zvuk na zariadení, ktoré ste vybrali.
- Skontrolujte posuvníky **Hlasitosť**. **Stlmiť mikrofón** na karte hovoru a [klávesová skratka](/program/shortcuts) **Stlmiť mikrofón** počas hovoru vypínajú mikrofón.
- Zvonenie môže byť nastavené na iné zariadenie než to, na ktorom hovoríte — **Zvonenie**, druhý rozbaľovací zoznam.

## Hovor znie zle alebo sa nezačne {#the-call-sounds-bad-or-does-not-start}

Kodeky sa ponúkajú v poradí zoznamu v [Nastavenia → Hovory](/sip-accounts/calls#audio-formats). Nechajte zapnuté kodeky, ktoré používa vaša ústredňa, a najlepší z nich dajte na prvé miesto. Zmena platí od ďalšieho hovoru.

## Druhý hovor nezvoní {#a-second-call-does-not-ring}

Čo sa stane, keď niekto volá, kým máte hovor, sa nastavuje v [Čakajúci hovor](/sip-accounts/calls#call-waiting).

## Hovor sa nenahral {#a-call-was-not-recorded}

- **Nastavenia → Nahrávanie**, prvý rozbaľovací zoznam, rozhoduje, ktoré hovory sa nahrávajú; predvolené **Ručne** nahráva iba vtedy, keď stlačíte nahrávanie na karte hovoru. Pozrite [Nahrávky](/recordings).
- Nahrávanie sa začne, keď je hovor prijatý, takže neprijatý hovor nemá súbor.
- Modul **Nahrávanie** musí byť zapnutý v [Moduloch](/application/modules).
- Nahrávky sa odstraňujú podľa hraníc v časti **Uchovávanie**; pripnutá nahrávka sa nikdy neodstráni.

## Stretnutie v inej aplikácii sa nezachytilo {#a-meeting-in-another-application-was-not-captured}

Pozrite [Zachytávanie](/capture/).

- **Povoliť zachytávanie zvuku** v **Nastavenia → Zachytávanie** musí byť zapnuté.
- Keď je **Automatické spustenie** nastavené na **Spýtať sa ma** (predvolené), odpovedzte na otázku, keď sa objaví; pri **Nikdy** stlačte **Nahrať** sami.
- Použite **Vyskúšať** na tej istej karte: horný stĺpec sa musí hýbať, keď hovoríte, dolný, keď niečo hrá.
- Modul **Zachytávanie** musí byť zapnutý v [Moduloch](/application/modules).

## Nahrávka je, ale prepis ani zhrnutie nie {#there-is-a-recording-but-no-transcript-or-summary}

- Rozhovor sa prepíše a spracuje sám iba vtedy, keď je v [Nastavenia → Spracovanie](/ai-processing/processing) zapnuté **Spracovávať hovory automaticky**. Inak o to požiadajte v [okne Nahrávky](/interface/recordings).
- Musí existovať [rozpoznávač](/ai-processing/transcription) a [jazykový model](/ai-processing/processing#language-models) a každý musí odpovedať na svojej adrese.
- Keď sa dosiahne mesačná **Hranica peňazí** alebo **Hranica tokenov**, automatické pravidlá sa zastavia do konca mesiaca. To, o čo požiadate sami, sa nikdy nezastaví.
- Kroky v [Nastavenia → Prehľad](/interface/settings-overview) ukazujú, čo ešte treba nastaviť.

## Telefón zmizol, keď som zatvoril okno {#the-phone-disappeared-when-i-closed-the-window}

Keď je zapnuté **Nechať telefón bežať, keď sa zavrie okno**, telefón stále beží a hovory stále prichádzajú. Ikona v oblasti oznámení (na paneli s ponukami v macOS) okno vráti. Pozrite [Spustenie](/program/startup).

## Telefónne číslo v prehliadači alebo CRM nevolá {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Stlačte **Otvárať odkazy na volanie týmto telefónom** v [Nastavenia → Spustenie](/program/startup#call-links). Kliknuté číslo príde do poľa na vytáčanie a tam čaká, ak nie je zapnuté **Volať ihneď, bez stlačenia tlačidla Zavolať**.

## Kontrolka tlačidla zostáva sivá {#a-buttons-lamp-stays-grey}

Ústredňa neoznamuje, či je klapka voľná. Tlačidlo aj tak vytáča. Pozrite [Tlačidlá](/sip-accounts/buttons).

## REST API neodpovedá {#the-rest-api-does-not-answer}

- **Nechať iné programy v tomto počítači ovládať telefón** musí byť zapnuté v [Nastavenia → Integrácia](/integration/rest-api) a modul **Integrácia** v [Moduloch](/application/modules).
- Adresa je `http://127.0.0.1:8377`, ak ste nezmenili **Port**.
- Skupina, ktorú ste neotvorili v časti **Prístup**, odpovedá na každú požiadavku kódom `404`.
- Ak ste nastavili **Token**, požiadavky, ktoré menia uložené údaje, ho musia niesť v hlavičke `Authorization`.
- Ďalšie príznaky sú v časti [Keď to nefunguje](/integration/rest-api#when-it-does-not-work).

## Webhooky neprichádzajú {#webhooks-do-not-arrive}

Stlačte **Poslať skúšobnú udalosť** v [Nastavenia → Integrácia](/integration/webhooks). Počítadlá `webhooks_failed_total` a `webhooks_dropped_total` v REST API ukazujú, ako ide doručovanie; [Keď nič neprichádza](/integration/webhooks#when-nothing-arrives) uvádza, čo každé z nich znamená.

## Klávesová skratka nič nerobí {#a-hotkey-does-nothing}

Otvorte [Skratky](/program/shortcuts). Skratka funguje, kým je telefón program, ktorý používate; ak ju chcete používať z akéhokoľvek programu, zaškrtnite **Všade**. Kliknite na skratku a stlačte kombináciu znova, ak ju zabral iný program.
