---
title: Transcrição
sidebar_position: 1
description: "\"Escolher o reconhecedor que transforma o áudio em texto: o seu endereço, o seu modelo e uma tabela dos modelos que cada serviço oferece.\""
---

**Definições → Transcrição** define como o áudio se torna texto: em que língua e com que reconhecedor.

<Shot name="25_transcription" alt="Definições → Transcrição: a língua e quatro reconhecedores" />

Uma conversa é transcrita quando o pede na [janela de gravações](/interface/recordings), ou sozinha se **Processar as conversas automaticamente** estiver ligado em [Processamento](/ai-processing/processing). Um reconhecedor na sua própria máquina não custa nada; um na nuvem cobra por minuto de áudio.

## Língua {#language}

**Língua** é um código de língua de duas letras segundo a ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Deixe-o vazio e o reconhecedor decide — é o certo, a não ser que as suas chamadas sejam numa língua que ele percebe mal repetidamente.

## Reconhecedores {#recognisers}

Um reconhecedor é um serviço de voz para texto a que o telefone envia o áudio. Carregue em **Adicionar** para adicionar um; o botão **Testar** do formulário verifica que o serviço responde mesmo. Cada um aparece com o seu nome e, por baixo, o modelo e o endereço do seu serviço. Na imagem há quatro:

| Nome | Modelo | Endereço |
| --- | --- | --- |
| **X.ai** | *(vazio: o modelo por omissão do serviço)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

O marcado como **por omissão** à direita da sua linha (**X.ai** na imagem) é o usado quando não escolhe outro. Pode ter vários. A lista pendente por cima de uma transcrição na [janela de gravações](/interface/recordings#the-transcript-and-the-write-up) lista as transcrições feitas por cada reconhecedor.

O modelo pode ficar vazio. Nesse caso o serviço usa o seu próprio modelo por omissão.

## Que modelo escolher {#which-model-to-choose}

A tabela lista os modelos de voz para texto dos quatro serviços da imagem. Os modelos a **negrito** são os configurados na imagem. Para o reconhecedor X.ai o modelo está vazio, por isso é usado o modelo por omissão do serviço, **`grok-voice-transcribe-2.0`**.

| Serviço e endereço | Modelo | Para que serve |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | O modelo que a OpenAI recomenda para voz gravada na sua língua original. |
| | **`gpt-4o-transcribe`** | Transcrição de uso geral. |
| | `gpt-4o-mini-transcribe` | Uma variante mais leve e mais barata do anterior. |
| | `gpt-4o-transcribe-diarize` | Indica quem fala e quando. Use-o só se precisar disso. |
| | `whisper-1` | O modelo Whisper mais antigo, mantido para usos especiais como marcas de tempo por palavra e legendas. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transcrição de uso geral em mais de 90 línguas, com separação de interlocutores. |
| | `scribe_v2_medical` | O mesmo, afinado para áudio clínico. |
| | `scribe_v1` | A primeira geração; obsoleto, use `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | O melhor modelo de uso geral da Deepgram, para reuniões, áudio ruidoso e multilíngue. |
| | **`nova-2`** | A geração anterior; mantenha-a para as línguas que o `nova-3` ainda não suporta. |
| | `enhanced` | Um nível mais antigo com menos erros do que o `base`. |
| | `base` | O nível mais antigo, para grandes volumes. |
| | `whisper` | Whisper, executado pela Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | O modelo por omissão; 25 línguas. |
| | `grok-voice-transcribe-1.0` | Obsoleto: o serviço reencaminha-o para `2.0`. |

O que convém saber antes de escolher:

- **Tamanho dos ficheiros.** A OpenAI aceita ficheiros até 25 MB; a X.ai até 500 MB. Uma conversa longa pode ultrapassar o que um serviço na nuvem aceita.
- **Preço.** Os serviços na nuvem cobram por minuto de áudio, e as tarifas variam por modelo e mudam; consulte-as na página do próprio serviço antes de mudar.
- **Línguas.** Cada serviço tem a sua lista; verifique a sua e defina o código da [Língua](#language) se o reconhecedor se enganar.
- **Os modelos em tempo real**, como `scribe_v2_realtime` ou o `flux` da Deepgram, são feitos para transmissões ao vivo e não estão na tabela: o telefone transcreve gravações terminadas.

A lista de modelos de um serviço muda com frequência. Se faltar aqui um modelo que queira, a documentação do próprio serviço tem a lista atual — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; o **Modelo** é o nome exatamente como o serviço o dá.

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
