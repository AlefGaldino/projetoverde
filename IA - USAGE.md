IA - USAGE 
=

Uso de Inteligência Artificial no Projeto
📌 Visão Geral
A Inteligência Artificial foi utilizada como apoio em diversas etapas do projeto de delivery de combustível. Seu papel foi auxiliar na organização das ideias, na explicação de conceitos técnicos, na redação da documentação e na validação de hipóteses. Além disso, a IA ajudou a estruturar relatórios e análises, tornando o desenvolvimento mais ágil e claro.

🎯 Objetivo do Uso de IA
Decidimos utilizar IA para:

Apoiar o desenvolvimento técnico e conceitual.

Resolver dúvidas e problemas de lógica durante o planejamento do projeto 

Melhorar a qualidade da documentação e da comunicação do projeto.

Facilitar o aprendizado da equipe sobre novas tecnologias e modelos de negócio.

🧩 Exemplo de Uso
Situação real:  
Durante a fase de definição das hipóteses, havia dificuldade em organizar os problemas e soluções de forma clara.

Problema: As ideias estavam embaralhadas, e sem ordem a serem esclarecidas. 

O que precisava ser feito: Estruturar as hipóteses em sequência e atribuir responsáveis por cada parte.

Parte do projeto: Planejamento inicial e documentação.
A IA ajudou a organizar os pontos em ordem (problema → público‑alvo → objetivo → hipóteses → levantamento de dados).

💬 Prompt Utilizado
Um exemplo de prompt foi:

"Organize em ordem qual é o problema, quem é o público alvo, objetivo do projeto, quais são as hipóteses."

Esse pedido foi feito de forma clara e objetiva, permitindo que a IA estruturasse o conteúdo em formato de relatório.

📌 Motivos para usar IA
Agilidade → a IA processa grandes volumes de informações sobre população, mobilidade e infraestrutura muito mais rápido do que métodos tradicionais.

Precisão → reduz erros humanos e garante dados mais confiáveis para planejar soluções.

Integração de fontes → consegue cruzar dados de trânsito, densidade populacional, localização de postos e hábitos de consumo.

Previsão de cenários → permite simular situações futuras, como aumento da frota de veículos ou expansão urbana.

⚙️ Aplicações práticas em Poá
Mapeamento populacional → identificar áreas com maior concentração de pessoas e veículos.

Localização estratégica → apontar regiões com pouca infraestrutura de abastecimento.

Análise de mobilidade → entender os fluxos de trânsito e onde há maior risco de pane seca.

Planejamento de serviços → definir onde o delivery de combustível seria mais útil e eficiente.

🎯 Objetivo do uso da IA
Tornar o levantamento de dados mais rápido, confiável e inteligente.

Apoiar decisões estratégicas sobre onde e como implementar o delivery de combustível.

Garantir que o projeto seja realista e conectado às necessidades da população local.

🌍 Relação com o tema
O tema do projeto é resolver problemas populacionais ligados à mobilidade e abastecimento.

A IA ajuda a representar esses problemas com dados concretos e a propor soluções mais eficazes.

Assim, o uso da IA em Poá mostra como a tecnologia pode ser aplicada para enfrentar desafios urbanos e melhorar a vida da população.

⚠️ Problemas Encontrados
Algumas respostas iniciais estavam genéricas e precisaram ser adaptadas ao contexto específico do projeto.

Em certos momentos, a IA sugeriu informações não aplicáveis ao Minecraft For Education 

Houve necessidade de revisar termos técnicos para evitar inconsistências.

🔧 Correções Realizadas
Ajustamos a linguagem para torná-la mais próxima da realidade do projeto e acessíveis para todos

Refinamos os textos para evitar redundâncias.

Reorganizamos trechos que estavam fora de ordem

Exemplo de ajuste:
Hipótese: Motoristas esquecem de abastecer → solução: alertas no app.  

// Depois
Hipótese 6: Motoristas esquecem de abastecer → solução: alertas e agendamento automático no aplicativo.
✅ Código Final
Embora o projeto não envolva apenas programação, a IA ajudou a estruturar trechos de documentação e lógica de fluxo. O resultado foi um documento organizado e funcional, pronto para ser usado como base no desenvolvimento.

📚 Aprendizados
Aprendemos como estruturar melhor nossas hipóteses e problemas.

Entendemos a importância de validar respostas da IA antes de aplicá-las.

Melhoramos a lógica de organização do projeto.

A equipe ganhou experiência em como usar IA como ferramenta de apoio, não como substituição do ser humano

🚫 Limitações do Uso de IA
A IA pode fornecer respostas incorretas ou não serem acessíveis se o prompt não for bem detalhado e estruturado

É necessário validação humana para garantir precisão. - IA responsável 

A IA não substitui conhecimento técnico específico (ex.: normas de transporte de combustível).





// ===============================
// 🚗 SISTEMA DE COMBUSTÍVEL
// Minecraft Education / MakeCode
// ===============================

// combustível
let combustivel = 100

// verifica se jogador está usando o minecart
let dentroMinecart = false

// posição inicial do agente
let posicaoInicialVan = world(10, 4, 5)

// guarda última posição do jogador
let ultimaPosicao = player.position()


// ======================================
// 🚗 ENTRAR NO MINECART
// comando: /entrar
// ======================================

player.onChat("entrar", function () {

    dentroMinecart = true

    // atualiza posição inicial
    ultimaPosicao = player.position()

    player.say("🚗 Viagem iniciada!")
    player.say("⛽ Combustível: " + combustivel + "%")
})


// ======================================
// 🚶 SAIR DO MINECART
// comando: /sair
// ======================================

player.onChat("sair", function () {

    dentroMinecart = false

    player.say("🚶 Você saiu do minecart!")
})


// ======================================
// ⛽ SISTEMA DE COMBUSTÍVEL
// ======================================

loops.forever(function () {

    if (dentroMinecart) {

        // espera 3 segundos
        loops.pause(3000)

        // posição atual
        let posAtual = player.position()

        // verifica se jogador andou
        if (
            posAtual.getValue(Axis.X) != ultimaPosicao.getValue(Axis.X) ||
            posAtual.getValue(Axis.Z) != ultimaPosicao.getValue(Axis.Z)
        ) {

            // reduz combustível SOMENTE andando
            combustivel -= 30

            // impede negativo
            if (combustivel < 0) {
                combustivel = 0
            }

            // mostra combustível
            player.say("⛽ " + combustivel + "%")

            // alerta
            if (combustivel <= 25 && combustivel > 0) {

                player.say("⚠️ Combustível baixo!")
            }

            // combustível acabou
            if (combustivel == 0) {

                dentroMinecart = false

                player.say("❌ Pane seca! O carrinho quebrou.")

                // remove minecart
                player.execute(
                    "kill @e[type=minecart,r=5]"
                )

                // chama agente
                chamarAgente()
            }

            // atualiza última posição
            ultimaPosicao = posAtual
        }
    }
})


// ======================================
// 🚐 FUNÇÃO DO AGENTE
// ======================================

function chamarAgente() {

    player.say("📞 Chamando agente...")

    // agente aparece
    agent.teleport(posicaoInicialVan, EAST)

    loops.pause(2000)

    // agente vai até jogador
    agent.teleportToPlayer()

    player.say("🚐 Agente chegou!")

    player.say("⛽ Coloque o novo Minecart no Trilho, e siga em frente!...")

    loops.pause(3000)

    // cria novo minecart
    mobs.spawn(
        MINECART,
        positions.add(
            player.position(),
            pos(0, 0, 2)
        )
    )

    // restaura combustível
    combustivel = 100

    dentroMinecart = false

    player.say("🚗 Coloque o novo minecart entregue!")
    player.say("⛽ Tanque cheio: 100%")
    player.say("▶️ Digite /entrar para começar novamente.")

    // agente volta
    agent.teleport(posicaoInicialVan, EAST)

    player.say("🏠 Agente voltou para garagem.")
}

A Dependência excessiva da inteigência artificial pode limitar a criatividade da equipe.

🔚 Conclusão
O uso da Inteligência Artificial foi positivo e estratégico para o projeto. Ela ajudou para a organização, clareza e eficiência na documentação e planejamento. No entanto, seu uso exige revisão constante e complementação com o conhecimento do Grupo Verde - Codemakers.
