---
title: Transcrição
sidebar_position: 1
description: "Escolher o reconhecedor que transforma o som em texto: o seu endereço, o seu modelo e uma tabela dos modelos de cada tipo de serviço."
---

**Definições → Transcrição** lista os reconhecedores: os serviços que transformam o som em texto, para as conversas terminadas e, para o [ponto](../interface/prompter.md), enquanto uma conversa decorre.

<Shot name="25_transcription" alt="Definições → Transcrição: cinco reconhecedores" />

Uma conversa é transcrita quando o pede na [janela de gravações](/interface/recordings), ou sozinha se **Processar as conversas automaticamente** estiver ligado em [Processamento](/ai-processing/processing). Um reconhecedor na sua própria máquina não custa nada; um na nuvem cobra por minuto de som.

## Reconhecedores {#recognisers}
Um reconhecedor é um serviço de reconhecimento de fala para o qual o telefone envia o som. **Adicionar** acrescenta um; o botão **Testar** da sua ficha verifica que o serviço responde mesmo. Cada um aparece na lista com o seu nome e, por baixo, o modelo e o endereço do seu serviço. Na imagem há cinco:

| Nome | Modelo | Endereço |
| --- | --- | --- |
| **X.ai** | *(vazio: o modelo por omissão do serviço)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nenhum)* | `ws://localhost:2700`, um servidor neste computador |

As duas marcas à direita de uma linha dizem para que é o reconhecedor por omissão. O relógio acende-se no reconhecedor por omissão **para as transcrições** — **X.ai** na imagem —, usado quando não escolhe outro. O relâmpago acende-se no reconhecedor por omissão **para o ponto** — **Vosk** na imagem. Pode ter vários reconhecedores; a lista pendente por cima de uma transcrição na [janela de gravações](/interface/recordings#transcript-or-write-up-the-drop-down) mostra as transcrições feitas por cada um.

## A ficha do reconhecedor {#the-recognisers-card}
Premir um reconhecedor abre a sua ficha.

<Shot name="43_recogniser_card" alt="A ficha do reconhecedor X.ai: tipo, os dois endereços, chave, Testar e as escolhas por omissão" />

| Campo | O que é |
| --- | --- |
| **Nome** | O nome nas listas. |
| **Tipo** | O tipo de serviço, que decide como o telefone fala com ele: **Compatível com OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, e três que correm na sua própria máquina — **Vosk**, **WhisperLive** e **NVIDIA Riva**. **Yandex SpeechKit** é oferecido quando o país escolhido em [Acerca](../application/about.md) é a Rússia ou um dos seus vizinhos. |
| **Endereço para as transcrições** | Para onde são enviadas as conversas terminadas. |
| **Endereço para o ponto** | Para onde vai o som ao vivo enquanto uma conversa decorre. *Vazio é deduzido do endereço ao lado*, como `wss://api.x.ai` na imagem. |
| **Chave** | A chave do serviço. *Fica no porta-chaves deste computador, nunca num ficheiro de definições.* |
| **Testar** | Pergunta ao serviço e diz o que ele respondeu, por exemplo *Respondeu, e oferece 3 modelos*. |
| **Modelo para as transcrições** e **Modelo para o ponto** | O modelo, exatamente como o serviço o chama. *Vazio não envia nome de modelo*, e o serviço usa o seu próprio modelo por omissão; quando o fornecedor publica um, a ficha indica-o. O campo não aparece para um tipo que não dá escolha. |
| **Por omissão para as transcrições** | Faz deste o reconhecedor usado quando não escolhe outro. |
| **Por omissão para o ponto** | Faz deste o reconhecedor com que um novo assistente do ponto escuta. |
| **Ligado** | Desligado, o reconhecedor fica na lista e não é usado. |

**Definições avançadas** abre o resto da ficha. Os valores que mais importam:

<Shot name="43b_recogniser_advanced" alt="As definições avançadas de um reconhecedor: limites, como as respostas são cortadas, a língua" />

| Campo | O que faz |
| --- | --- |
| **Região** | A região do serviço, para um que tem várias. |
| **Enviar os dois lados em separado** | Uma chamada é gravada com as duas pessoas em dois canais, e é isso que diz ao reconhecedor quem disse o quê. Desligue-o para um servidor que diz saber fazê-lo e não sabe. |
| **Perguntar quem fala** | Distingue as pessoas dentro de um canal, quando várias falam nele. |
| **Escrever os números em algarismos** | Quantias, datas e números de telefone voltam como se escrevem, em vez de por extenso. |
| **Limite de envio**, **Limite de duração** | O maior ficheiro, em bytes, e a gravação mais longa, em segundos, que este telefone envia. |
| **Pedidos em simultâneo** | Quantos pedidos podem estar em curso ao mesmo tempo. |
| **Terminar uma resposta após**, **Juntar respostas curtas em**, **Pausa entre falas** | Para o ponto: quanto tempo sem palavras novas termina uma resposta, quanto tempo uma resposta curta espera pela seguinte para lhe ser junta, e quanto silêncio termina uma vez de falar onde o reconhecedor não marca nenhuma. Em milissegundos. |
| **Língua** | Um código de língua de duas letras segundo a ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Deixe-o vazio e o reconhecedor decide — é o certo, a não ser que as suas chamadas sejam numa língua que ele percebe mal repetidamente. |
| **Extras** | Um `name = value` por linha, passado ao serviço tal como está. Deixe vazio, a não ser que o servidor documente alguma coisa. |
| **Espera, minutos** | Quanto tempo esperar por uma transcrição. Vazio calcula-o a partir da duração da gravação. |
| **Preço por minuto** | Quanto custa um minuto de som ao vivo, segundo a tabela de preços do serviço. O ponto mostra quanto custou uma sessão e para no seu [teto mensal](prompter.md#spending). |

## Reconhecimento ao vivo para o ponto {#live-recognition-for-the-prompter}
O [ponto](../interface/prompter.md) precisa de um reconhecedor que escute enquanto alguém fala, por um fluxo e não com um ficheiro terminado. Estes tipos conseguem: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Compatível com OpenAI** (com a transcrição em tempo real da OpenAI), **AssemblyAI**, **Soniox** e **Speechmatics** na nuvem, **Yandex SpeechKit** onde é oferecido, e **Vosk**, **WhisperLive** e **NVIDIA Riva** na sua própria máquina. Um reconhecedor na sua própria máquina mantém a voz do interlocutor dentro de portas e não cobra nada.

Para usar um: abra a sua ficha, verifique o **Endereço para o ponto** (ou deixe-o ser deduzido), escolha o **Modelo para o ponto** quando o serviço oferece vários — os modelos ao vivo são muitas vezes diferentes dos de ficheiros, como `scribe_v2_realtime` da ElevenLabs — e prima **Testar**. Marque **Por omissão para o ponto** para que os novos assistentes escutem com ele.

## Que modelo escolher {#which-model-to-choose}
A tabela lista os modelos de reconhecimento de fala de cada tipo da lista **Tipo**. Os modelos a **negrito** são os configurados na imagem; para o reconhecedor X.ai o modelo está vazio, por isso é usado o modelo por omissão do serviço, **`grok-voice-transcribe-2.0`**. **Para** diz para que serve um modelo: gravações terminadas (*transcrições*), fala ao vivo para o [ponto](#live-recognition-for-the-prompter) (*ponto*), ou *ambos*.

| Tipo e endereço | Modelo | Para | Para que serve |
| --- | --- | --- | --- |
| **Compatível com OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transcrições | O modelo que a OpenAI recomenda para fala gravada na sua língua original. |
| | **`gpt-4o-transcribe`** | ambos | Transcrição de uso geral. Um novo reconhecedor deste tipo recebe-o. |
| | `gpt-4o-mini-transcribe` | ambos | Uma variante mais leve e barata do anterior. |
| | `gpt-4o-transcribe-diarize` | transcrições | Marca quem fala e quando. Use-o só se precisar disso. |
| | `whisper-1` | transcrições | O modelo Whisper antigo, mantido para usos especiais como marcas de tempo por palavra e legendas. |
| | `gpt-live-transcribe` | ponto | O modelo ao vivo da OpenAI: as palavras chegam à medida que são ditas. O telefone oferece-o para o ponto. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | ambos | O melhor modelo de uso geral da Deepgram, para reuniões, som ruidoso e multilingue. Um novo reconhecedor deste tipo recebe-o. |
| | **`nova-2`** | ambos | A geração anterior; mantenha-a para línguas que o `nova-3` ainda não suporta. |
| | `nova-2-phonecall` | ambos | `nova-2` afinado para o som estreito de uma linha telefónica. Inglês. |
| | `flux-general-en` | ponto | Feito para a conversa: ouve quando alguém acabou de falar. Inglês. |
| | `flux-general-multi` | ponto | O mesmo em dez línguas, e uma conversa pode passar de uma para outra. |
| | `enhanced`, `base` | transcrições | Níveis mais antigos; `base` é para grandes volumes. |
| | `whisper` | transcrições | Whisper, executado pela Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transcrições | Transcrição de uso geral em mais de 90 línguas, com separação de oradores. |
| | `scribe_v2_realtime` | ponto | A versão ao vivo do `scribe_v2`. O telefone oferece-a para o ponto. |
| | `scribe_v2_medical` | transcrições | `scribe_v2` afinado para som clínico. |
| | `scribe_v1` | transcrições | A primeira geração; obsoleta, use `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | ambos | O mais preciso, para uma conversa numa só língua. Um novo reconhecedor deste tipo recebe-o. |
| | `standard` | ambos | Mais rápido e barato, um pouco menos preciso. |
| | `melia-1` | transcrições | Uma conversa em várias línguas, que muda a meio da frase, volta como uma só transcrição. Só gravações, nas regiões UE e EUA; ainda sem dicionário próprio nem etiquetas de oradores. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | ambos | O modelo por omissão; 25 línguas. |
| | `grok-voice-transcribe-1.0` | transcrições | Obsoleto: o serviço reencaminha-o para `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transcrições | Mais de 60 línguas, com separação de oradores. |
| | `stt-rt-v5` | ponto | Ao vivo, nas mesmas mais de 60 línguas, e ouve onde termina uma vez de falar. O telefone oferece-o para o ponto. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | ambos | O modelo mais preciso para gravações; 18 línguas, e uma conversa pode passar de uma para outra. |
| | `universal-2` | transcrições | 99 línguas, mais barato; a AssemblyAI recorre a ele para uma língua que o `universal-3-5-pro` não conhece. |
| | `universal-3-6-pro` | ponto | O modelo ao vivo mais recente da AssemblyAI, 32 línguas; o serviço usa-o quando o modelo está vazio. |
| | `universal-streaming-multilingual` | ponto | Reconhecimento ao vivo mais barato em inglês, espanhol, alemão, francês, português e italiano. |
| | `universal-streaming-english` | ponto | Reconhecimento ao vivo mais barato, só em inglês. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | ambos | O modelo principal, forte em russo, também ao telefone. Oferecido quando o país é a Rússia ou um dos seus vizinhos. |
| | `general:rc` | ambos | A próxima versão do modelo antes do lançamento. |
| | `deferred-general` | transcrições | Reconhecimento diferido: a transcrição chega mais tarde, por menos dinheiro. |
| **Vosk (na sua própria máquina)**<br />`ws://localhost:2700` | *(definido no servidor)* | ambos | Gratuito e leve; corre sem placa gráfica. O modelo é aquele com que o servidor foi arrancado, um por língua, por exemplo `vosk-model-en-us-0.22` ou o pequeno `vosk-model-small-pt-0.3`. |
| **WhisperLive (na sua própria máquina)**<br />`ws://localhost:9090` | `small` | ambos | Whisper sobre um fluxo ao vivo. O tamanho escolhe-se na ficha: `tiny`, `base`, `small` (o que o telefone oferece), `medium`, `large-v3`; quanto maior, mais preciso, e mais pede uma placa gráfica. |
| **NVIDIA Riva (na sua própria máquina)**<br />`localhost:50051` | *(definido no servidor)* | ambos | O servidor de fala da NVIDIA, para um computador com placa gráfica NVIDIA. Serve modelos como Parakeet e Canary. |

O que convém saber antes de escolher:

- **Transcrições ou ponto.** Um modelo feito para fala ao vivo não aceita um ficheiro terminado, e a maioria dos modelos para ficheiros não sabe escutar ao vivo. Por isso uma ficha tem dois campos, **Modelo para as transcrições** e **Modelo para o ponto**.
- **Tamanho do ficheiro.** A OpenAI aceita ficheiros até 25 MB; a X.ai até 500 MB. Uma conversa longa pode ser maior do que um serviço na nuvem aceita.
- **Preço.** Os serviços na nuvem cobram por minuto de som, e as tarifas variam por modelo e mudam; consulte-as na página do próprio serviço antes de mudar. Um reconhecedor na sua própria máquina não custa nada.
- **Línguas.** Cada serviço tem a sua lista; verifique a sua e defina o código em **Língua**, nas definições avançadas do reconhecedor, se ele adivinhar mal.

A lista de modelos de um serviço muda muitas vezes. Se faltar aqui um modelo que quer, a documentação do próprio serviço tem a lista atual — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — e o **Modelo** é o nome exatamente como o serviço o dá.

## Os seus próprios modelos {#your-own-models}

Um reconhecedor não tem de ser um serviço na nuvem. O telefone pode usar **qualquer modelo servido através da API compatível com a OpenAI** — a interface `POST /v1/audio/transcriptions` —, quer corra localmente no seu computador quer num servidor seu. O áudio nunca sai das suas instalações, nada é cobrado ao minuto e não há limite de volume.

Para adicionar um, carregue em **Adicionar** e indique:

- o **endereço** do servidor, até `/v1` inclusive, por exemplo `http://localhost:8000/v1` para o próprio computador ou `http://asr.local:8080/v1` para um servidor da sua rede;
- o nome do **modelo** exatamente como o servidor o lista, por exemplo `openai/whisper-large-v3-turbo`.

### O que se pode usar {#what-can-be-used}

A escolha habitual é o **Whisper**, o modelo aberto de reconhecimento de voz da OpenAI. É gratuito, percebe cerca de cem línguas e existe em vários tamanhos: um modelo pequeno corre num computador comum, os grandes são bastante mais precisos e é melhor dar-lhes uma placa gráfica.

| Modelo | Notas |
| --- | --- |
| `whisper-large-v3` | O Whisper mais preciso. Para um servidor com GPU. |
| `openai/whisper-large-v3-turbo` | Uma versão mais rápida do `large-v3`, com uma pequena perda de precisão. |
| `Systran/faster-whisper-large-v3` | O `large-v3` convertido para o motor faster-whisper; mais rápido e mais leve na memória. |
| `medium`, `small`, `base` | Modelos Whisper mais pequenos, para um computador sem placa gráfica. |

O Whisper é o modelo à volta do qual estes servidores são construídos. Alguns também conseguem servir outros modelos de reconhecimento de voz, como o NVIDIA Parakeet.

### Servidores que oferecem a API compatível com a OpenAI {#servers-that-offer-the-openai-compatible-api}

O modelo tem de ser executado por um servidor que ofereça o ponto de acesso `/v1/audio/transcriptions` compatível com a OpenAI. Estes fazem-no:

| Servidor | O que é |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Um servidor de modelos de alto desempenho. Depois de arrancar, serve o Whisper em `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Um servidor de modelos de voz, «o Ollama da voz», assente no faster-whisper. Carrega um modelo da primeira vez que é pedido. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Executa o Whisper com eficiência num CPU, incluindo Apple silicon. O seu `whisper-server` arranca com `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Um substituto direto da OpenAI que executa modelos localmente. |

Qualquer outro servidor que ofereça o mesmo ponto de acesso funciona da mesma maneira. Se um servidor precisar de uma chave, introduza-a como para um serviço na nuvem.

Antes de confiar num servidor, faça uma gravação de teste e veja a transcrição na [janela de gravações](/interface/recordings): uma conversa numa língua que o modelo conhece mal mostra-o logo.
