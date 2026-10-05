---
title: Konfigurera ett SIP-konto
sidebar_position: 1
description: Anslut AI Softphone till din IP-växel eller SIP-operatör under Inställningar → Konton.
---

AI Softphone fungerar med alla IP-växlar och SIP-operatörer. Du kan vara inloggad på så många konton (linjer) som du har, och varje konto har sina egna inställningar.

Öppna **Inställningar → Konton**.

<Shot name="05_settings_accounts" alt="Inställningar → Konton: två konton, båda registrerade" />

## Listan över konton {#the-list-of-accounts}

Varje konto är en rad med:

- en **kryssruta** som slår på eller stänger av kontot;
- en **prick** som är grön när kontot är registrerat på växeln;
- namnet, och under det `användare@server`;
- en knapp **Koppla ner** som loggar ut kontot från växeln;
- knapparna **▲** och **▼**, som flyttar kontot upp eller ned i listan. Kontobrickorna i [huvudfönstret](../interface/main-window.md) följer samma ordning.

Knappen **Lägg till** uppe till höger lägger till ett konto. Klicka på en rad för att öppna dess formulär under den.

## Lägga till ett konto {#adding-an-account}

<Shot name="05d_account_add" alt="Formuläret för ett nytt konto, tomt" />

Tryck på **Lägg till**. Ett tomt formulär öppnas under listan, med markören i **Namn (frivilligt)**. Fyll i fälten nedan, öppna **Serverinställningar** om växeln behöver dem, och tryck på **Spara**. Ett nytt konto börjar med de vanliga värdena: UDP på port 5060, registrering förnyad var 300:e sekund.

## Kontoformuläret {#the-account-form}

<Shot name="05b_account_edit" alt="Formuläret för ett konto" />

| Fält | Vad du skriver |
| --- | --- |
| **Namn (frivilligt)** | Namnet som visas på kontots bricka i huvudfönstret och på dess samtal. Om det är tomt visas kontot som `användare@server`. |
| **Användarnamn** | Användarnamnet eller anknytningsnumret du har fått av din växel eller operatör. |
| **Lösenord** | Lösenordet till det. Fältet är tomt när du kommer tillbaka till formuläret. Det sparas i datorns nyckelring, aldrig i en inställningsfil. |
| **Serveradress** | Adressen till växeln eller operatörens SIP-server, till exempel `pbx.example.com`. |
| **Serverinställningar** | Fäller ut anslutningens mindre vanliga inställningar; se nedan. |
| **Svara automatiskt** | Under **Svar**: svarar på inkommande samtal på det här kontot utan att du trycker på något. Av som standard. |

Tryck på **Spara** för att behålla ändringarna. **Avbryt** kastar dem och **Ta bort** tar bort kontot.

När pricken vid kontot är grön är kontot registrerat, och kontots bricka i huvudfönstret visar det också. Förblir den grå eller röd öppnar du [Diagnostik](../troubleshooting/diagnostics.md): fliken **SIP** visar begäran `REGISTER` och vad servern svarade.

## Serverinställningar {#server-settings}

De flesta växlar behöver ingenting här. Tryck på **Serverinställningar** för att visa dem; samma knapp heter då **Dölj serverinställningar**.

<Shot name="05c_account_server_settings" alt="Serverinställningarna för ett konto, utfällda" />

| Fält | Standard | Vad det är |
| --- | --- | --- |
| **Autentiseringsanvändare** | tomt | Namnet som växeln kontrollerar lösenordet mot, när det inte är samma som **Användarnamn**. På bilden är anknytningen `201` och växeln autentiserar den som `kontor201`. |
| **Transport** | UDP | Protokollet för anslutningen till servern. En listruta. |
| **Port** | 5060 | Serverns port. |
| **Utgående proxy** | tomt | En proxy som varje begäran måste gå genom, om din operatör anger en. |
| **Registrar** | tomt | Adressen att registrera sig på, om det inte är **Serveradress**. |
| **Omregistrera, sekunder** | 300 | Hur ofta telefonen förnyar sin registrering. |
| **Knappljud** | Ljudström | Hur knappsatsens toner skickas till växeln. En listruta. Ändra den bara om växeln inte hör tonerna. |

Kodekarna som telefonen erbjuder ställs inte in per konto; de finns under [Samtalsinställningar](calls.md#audio-formats).
