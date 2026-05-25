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
