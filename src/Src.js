🚗 Sistema de Combustível para Minecart

Sistema desenvolvido no Minecraft Education utilizando MakeCode JavaScript.
O projeto simula um veículo com combustível limitado usando Minecart, incluindo pane seca, suporte automático e entrega de um novo carrinho.

📌 Funcionalidades
⛽ Sistema de combustível
🚗 Entrada e saída do Minecart
📍 Detecção de movimentação do jogador
⚠️ Aviso de combustível baixo
❌ Pane seca automática
🗑️ Remoção do Minecart quebrado
🚐 Agente de suporte automático
🔄 Reposição de combustível
🚋 Spawn de novo Minecart
📂 Estrutura do Sistema
⛽ Variáveis Principais

Responsáveis pelo controle do sistema.

let combustivel = 100
let dentroMinecart = false
let posicaoInicialVan = world(10, 4, 5)
let ultimaPosicao = player.position()
Função de cada variável
Variável	Função
combustivel	Armazena o combustível do veículo
dentroMinecart	Verifica se o jogador está dirigindo
posicaoInicialVan	Define a garagem do agente
ultimaPosicao	Guarda a última posição do jogador
🚗 Sistema de Entrada

Comando:

/entrar

Ativa o sistema do Minecart.

O que acontece:
ativa o veículo;
salva posição atual;
inicia consumo de combustível;
mostra mensagens no chat.
🚶 Sistema de Saída

Comando:

/sair

Desativa o Minecart.

O que acontece:
jogador sai do veículo;
combustível para de ser consumido.
⛽ Sistema de Combustível

Executado continuamente usando:

loops.forever(function ()

O sistema:

verifica se o jogador está no Minecart;
detecta movimentação;
reduz combustível;
mostra avisos;
ativa pane seca quando necessário.
📍 Detecção de Movimento

O código compara:

posição atual;
última posição salva.
posAtual.getValue(Axis.X)

Se houver movimento:

o combustível diminui.
⛽ Consumo de Combustível
combustivel -= 30

O combustível reduz conforme o jogador se move.

⚠️ Combustível Baixo

Quando o combustível chega em 25%:

if (combustivel <= 25)

O sistema exibe um alerta.

❌ Pane Seca

Quando o combustível chega em 0:

if (combustivel == 0)

O sistema:

quebra o Minecart;
remove o veículo;
chama o agente de suporte.
🗑️ Remoção do Minecart
player.execute("kill @e[type=minecart,r=5]")

Remove Minecarts próximos ao jogador.

🚐 Sistema do Agente

Função:

function chamarAgente()
O agente:
aparece na garagem;
vai até o jogador;
entrega um novo Minecart;
restaura combustível;
retorna para garagem.
🚋 Spawn do Novo Minecart
mobs.spawn(MINECART)

Cria um novo Minecart próximo ao jogador.

🔄 Reinício do Sistema

Após o suporte:

combustivel = 100

O sistema:

restaura combustível;
libera nova viagem;
reinicia o funcionamento.
🛠️ Tecnologias Utilizadas
Minecraft Education
MakeCode JavaScript
Sistema de Agentes
Loops automáticos
Comandos de chat
Detecção de posição
