// AUTOMACAO 1
//🚗 SISTEMA DE COMBUSTÍVEL
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


// AUTOMACAO 2
// ===============================
// 🚗 SISTEMA DE COMBUSTÍVEL
// Minecraft Education / MakeCode
// ===============================

let combustivel = 100
let dentroMinecart = false

// 🚗 ENTRAR NO MINECART
player.onChat("entrar", function () {
    dentroMinecart = true
    combustivel = 100
    player.say("🚗 Viagem iniciada!")
    player.say("⛽ Combustível: " + combustivel + "%")
})

// 🚶 SAIR DO MINECART
player.onChat("sair", function () {
    dentroMinecart = false
    player.say("🚶 Você saiu do minecart!")
})

// ⛽ SISTEMA DE COMBUSTÍVEL
loops.forever(function () {
    if (dentroMinecart) {
        loops.pause(3000)
        combustivel -= 30

        if (combustivel < 0) {
            combustivel = 0
        }

        player.say("⛽ " + combustivel + "%")

        if (combustivel <= 25 && combustivel > 0) {
            player.say("⚠️ Combustível baixo!")
        }

        if (combustivel == 0) {
            dentroMinecart = false
            player.say("❌ Pane seca! O carrinho quebrou.")
            player.execute("kill @e[type=minecart,r=5]")
            player.say("📌 Digite /caixa para resolver a situação.")
        }
    }
})

// ======================================
// ✈️ TELETRANSPORTE PARA O CAIXA
// ======================================

player.onChat("caixa", function () {
    let caixa: Position = world(-21, -60, -56)
    player.teleport(caixa)
    player.say("✈️ Teletransportado para o Caixa")
    player.say("💳 peça ja o seu combustivel!!")
})

// AUTOMACAO 3 
// Teletransportar para 4 posições específicas

player.onChat("plataforma", function () {
    let plataforma: Position = world(-75, -50, -38)
    player.teleport(plataforma)
    player.say("✈️ Teletransportado para a Plataforma")
})

player.onChat("refinaria", function () {
    let refinaria: Position = world(-13, -59, -108)
    player.teleport(refinaria)
    player.say("✈️ Teletransportado para a Refinaria de Petróleo")
})

player.onChat("combustivel", function () {
    let combustivel: Position = world(-13, -60, -33)
    player.teleport(combustivel)
    player.say("✈️ Teletransportado para o Depósito de Combustível")
})

player.onChat("caixa", function () {
    let caixa: Position = world(-21, -60, -56)
    player.teleport(caixa)
    player.say("✈️ Teletransportado para o Caixa")
})

