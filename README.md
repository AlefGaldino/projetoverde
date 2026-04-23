🎯 O que é o projeto
Um aplicativo que conecta usuários (motoristas de carros, motos, caminhões ou empresas com frotas) a vans especializadas que levam combustível ou energia elétrica diretamente até o veículo.

Funciona tanto em situações emergenciais (pane seca, falta de postos próximos, risco de segurança) quanto em abastecimentos programados (frotas, condomínios, empresas).

O serviço busca ser um complemento aos postos tradicionais, oferecendo comodidade, redução de tempo e maior segurança.

🚗 Como funciona
O usuário acessa o app e solicita abastecimento.

Escolhe o tipo de combustível (gasolina, etanol, diesel ou energia elétrica).

Uma van de abastecimento vai até o local indicado.

O veículo é abastecido de forma rápida e segura, sem necessidade de deslocamento.

📌 Objetivos principais
Praticidade: eliminar filas e deslocamentos até postos.

Segurança: evitar que motoristas precisem parar em locais perigosos ou sair a pé em busca de combustível.

Eficiência econômica: motoristas de aplicativo e empresas de frota economizam tempo e aumentam produtividade.

Inovação: criar um novo mercado de delivery de energia e combustível, com parcerias estratégicas.

Em resumo, o projeto é uma solução tecnológica para mobilidade urbana, que transforma o abastecimento em um serviço sob demanda, semelhante ao que já acontece com delivery de comida ou transporte por aplicativos.

1. Problema (Larissa)
Motoristas enfrentam pane seca ou falta de combustível em locais sem acesso rápido a postos.

Há perda de tempo em filas e deslocamentos, além de riscos de segurança ao abastecer em horários ou locais perigosos.

Empresas com frotas sofrem prejuízos operacionais quando veículos ficam parados.

A falta de infraestrutura para carros elétricos amplia o problema.

Consequências: estresse, atrasos, prejuízo financeiro, acidentes e impacto na mobilidade urbana.

2. Público‑alvo (Amanda)
Primário:

Motoristas que já possuem veículos e os utilizam com frequência.

Motoristas de aplicativo (Uber, 99).

Entregadores de moto.

Pessoas que usam carro diariamente para trabalhar.

Secundário:

Pessoas que não têm carro, mas pretendem ter.

Empresas com frotas pequenas e médias.

Condomínios residenciais que podem contratar abastecimento recorrente.

Institucional:

Postos parceiros.

Empresas de logística.

Seguradoras (assistência 24h).

Prefeituras (mobilidade urbana).

3. Objetivo do Projeto (Lívia)
Criar um serviço de delivery de combustível que leve gasolina, etanol ou energia elétrica diretamente ao veículo do usuário.

Oferecer praticidade, agilidade e segurança, evitando deslocamentos até postos.

Atender tanto emergências quanto abastecimentos programados.

Estabelecer parcerias com empresas e postos, ampliando o mercado e gerando empregos.

Contribuir para a redução do trânsito e aumento da eficiência econômica de motoristas e empresas.

4. Hipóteses (Alef)
Falta de tempo para ir ao posto → solução: app de delivery de combustível.

Pane seca no trajeto → solução: abastecimento emergencial rápido.

Falta de postos em regiões periféricas → solução: rede de vans de abastecimento.

Risco de segurança em postos à noite → solução: abastecimento em casa ou local seguro.

Crescimento de carros elétricos sem infraestrutura → solução: delivery de energia com baterias portáteis e estações móveis.

Motoristas esquecem de abastecer → solução: alertas e agendamento automático no app.

Tempo perdido em filas de postos → solução: abastecimento direto no veículo, sem espera.

5. Levantamento de Dados (Evyllin)
O delivery de combustível em São Paulo já existe em formato inicial.

O serviço pode reduzir 20 a 40 minutos de tempo gasto com deslocamento e filas.

Permite organização de frotas e comparação de preços via aplicativo (diferenças de até 10% entre fornecedores).

Pode contribuir para a redução do trânsito em alguns casos.

Porém, apresenta limitações:

Disponibilidade restrita (não cobre 100% das regiões).

Preços mais altos devido à logística (em média 5% a 15% mais caro).

Questões de segurança e fiscalização (transporte de combustível exige normas rigorosas).

Riscos de atrasos (de 30 minutos a 2 horas em horários de pico).

Possibilidade de fraudes ou vazamentos.

6. Vantagens e Desvantagens
✅ Vantagens

Comodidade: abastecimento sem sair do lugar.

Economia de tempo: redução de 20 a 40 minutos.

Organização de frotas com agendamento e controle centralizado.

Comparação de preços entre fornecedores (diferença de até 10%).

Redução de trânsito em alguns cenários.

Maior segurança ao evitar deslocamentos noturnos ou em áreas de risco.

⚠️ Desvantagens

Cobertura limitada (não disponível em todas as regiões).

Preço mais alto (5% a 15% acima do posto físico).

Logística complexa e dependente de regulamentação.

Riscos de atrasos significativos em horários de pico.

Necessidade de fiscalização rigorosa para evitar fraudes e vazamentos.

Ainda funciona mais como complemento aos postos tradicionais, não como substituto total.
Código do site:
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenFlux - Seu Delivery de Combustível</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="img/Designer.png" width="100" height="100" alt="GreenFlux Logo" class="logo-image">
                <span class="logo-text">GreenFlux</span>
            </div>
            <nav class="nav">
                <a href="#home">Início</a>
                <a href="#restaurants">Postos</a>
                <a href="#objetivo">Objetivo</a>
                <a href="#how-it-works">Como Funciona</a>
                <a href="#contact">Contato</a>
            </nav>
            <div class="header-actions">
                <button class="btn-login">Entrar</button>
                <button class="btn-cart">
                    <span class="cart-icon">🛒</span>
                    <span class="cart-count">0</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Combustível,<br><span>entregue onde você estiver</span></h1>
                <p>Abasteça seu veículo sem sair de casa ou do trabalho. Entrega rápida e segura.</p>
                <div class="search-box">
                    <input type="text" placeholder="Digite seu endereço...">
                    <button class="btn-search">🔍 Buscar</button>
                </div>
            </div>
            <div class="hero-image">
                <div class="delivery-illustration">
                    <div class="bike">🚚</div>
                    <div class="food-items">
                        <span>⛽</span>
                        <span>🛢️</span>
                        <span>⚡</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <section class="categories">
        <div class="container">
            <h2>Tipos de Combustível</h2>
            <div class="category-grid">
                <div class="category-card">
                    <div class="category-icon">⛽</div>
                    <span>Gasolina</span>
                </div>
                
                <div class="category-card">
                    <div class="category-icon">⚡</div>
                    <span>Etanol</span>
                </div>
                <div class="category-card">
                    <div class="category-icon">🔋</div>
                    <span>Elétrico</span>
                </div>
                <div class="category-card">
                    <div class="category-icon">💨</div>
                    <span>Gás Natural</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Popular Restaurants -->
    <section id="restaurants" class="restaurants">
        <div class="container">
            <h2>Postos Próximos</h2>
            <div class="restaurant-grid">
                <div class="restaurant-card">
                    <div class="restaurant-image" style="background: #E8F5E9;">
                        <span class="restaurant-badge">⭐ 4.8</span>
                    </div>
                    <div class="restaurant-info">
                        <h3>Posto Verde</h3>
                        <p class="cuisine">Gasolina • Diesel • Etanol</p>
                        <p class="delivery-time">🚚 15-25 min</p>
                    </div>
                </div>
                <div class="restaurant-card">
                    <div class="restaurant-image" style="background: #E8F5E9;">
                        <span class="restaurant-badge">⭐ 4.6</span>
                    </div>
                    <div class="restaurant-info">
                        <h3>EcoPosto</h3>
                        <p class="cuisine">GNV • Elétrico</p>
                        <p class="delivery-time">🚚 20-30 min</p>
                    </div>
                </div>
                <div class="restaurant-card">
                    <div class="restaurant-image" style="background: #E8F5E9;">
                        <span class="restaurant-badge">⭐ 4.9</span>
                    </div>
                    <div class="restaurant-info">
                        <h3>AutoFuel</h3>
                        <p class="cuisine">Combustíveis • Lubrificantes</p>
                        <p class="delivery-time">🚚 10-20 min</p>
                    </div>
                </div>
                <div class="restaurant-card">
                    <div class="restaurant-image" style="background: #E8F5E9;">
                        <span class="restaurant-badge">⭐ 4.7</span>
                    </div>
                    <div class="restaurant-info">
                        <h3>Power Fuel</h3>
                        <p class="cuisine">Diesel • Aditivados</p>
                        <p class="delivery-time">🚚 25-35 min</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="how-it-works">
        <div class="container">
            <h2>Como Funciona</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-icon">📍</div>
                    <h3>Digite sua localização</h3>
                    <p>Informe onde seu veículo está</p>
                </div>
                <div class="step-connector">→</div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-icon">⛽</div>
                    <h3>Escolha o combustível</h3>
                    <p>Selecione o tipo e quantidade</p>
                </div>
                <div class="step-connector">→</div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-icon">🛒</div>
                    <h3>Faça seu pedido</h3>
                    <p>Confirme o tipo de combustível</p>
                </div>
                <div class="step-connector">→</div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-icon">🚚</div>
                    <h3>Entrega no local</h3>
                    <p>Abastecemos onde você estiver</p>
                </div>
            </div>
        </div>
    </section>

    <!-- App Download -->
    <section class="app-download">
        <div class="container">
            <div class="app-content">
                <div class="app-text">
                    <h2>Baixe nosso app</h2>
                    <p>Abasteça de qualquer lugar. Disponível para iOS e Android.</p>
                    <div class="app-buttons">
                        <button class="btn-app">
                            <span class="app-icon">🍎</span>
                            <span>App Store</span>
                        </button>
                        <button class="btn-app">
                            <span class="app-icon">🤖</span>
                            <span>Google Play</span>
                        </button>
                    </div>
                </div>
                <div class="app-image">
                    <div class="phone-mockup">📱</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Objectives Section -->
    <section id="objetivo" class="objectives">
        <div class="container">
            <h2>🎯 Objetivo & Problema</h2>
            <p class="objectives-subtitle">Transformando o abastecimento em um serviço sob demanda</p>
            
            <div class="objectives-grid">
                <div class="objectives-card problems">
                    <h3>⚠️ Problema</h3>
                    <ul>
                        <li>📌 Motoristas enfrentam <strong>pane seca</strong> ou falta de combustível em locais sem acesso rápido a postos.</li>
                        <li>📌 Perda de tempo em <strong>filas e deslocamentos</strong>.</li>
                        <li>📌 <strong>Riscos de segurança</strong> ao abastecer em horários ou locais perigosos.</li>
                        <li>📌 Empresas com frotas sofrem <strong>prejuízos operacionais</strong> quando veículos ficam parados.</li>
                        <li>📌 Falta de infraestrutura para <strong>carros elétricos</strong>.</li>
                    </ul>
                    <div class="consequences">
                        <h4>📋 Consequências:</h4>
                        <p>Estresse, atrasos, prejuízo financeiro, acidentes e impacto na mobilidade urbana.</p>
                    </div>
                </div>
                
                <div class="objectives-card goals">
                    <h3>✅ Objetivos Principais</h3>
                    <ul>
                        <li>🔹 <strong>Praticidade:</strong> Eliminar filas e deslocamentos até postos.</li>
                        <li>🔹 <strong>Segurança:</strong> Evitar que motoristas precisem parar em locais perigosos ou sair a pé em busca de combustível.</li>
                        <li>🔹 <strong>Eficiência econômica:</strong> Motoristas de aplicativo e empresas de frota economizam tempo e aumentam produtividade.</li>
                        <li>🔹 <strong>Inovação:</strong> Criar um novo mercado de delivery de energia e combustível, com parcerias estratégicas.</li>
                    </ul>
                    <div class="summary">
                        <h4>💡 Em resumo:</h4>
                        <p>Uma solução tecnológica para mobilidade urbana, que transforma o abastecimento em um serviço sob demanda, semelhante ao que já acontece com delivery de comida ou transporte por aplicativos.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <div class="logo">
                        <span class="logo-icon">⛽</span>
                        <span class="logo-text">GreenFuel</span>
                    </div>
                    <p>Sua combustível entregue com rapidez e sustentabilidade.</p>
                </div>
                <div class="footer-section">
                    <h4>Empresa</h4>
                    <a href="#">Sobre nós</a>
                    <a href="#">Carreiras</a>
                    <a href="#">Blog</a>
                </div>
                <div class="footer-section">
                    <h4>Para Você</h4>
                    <a href="#">Postos parceiros</a>
                    <a href="#">Entregadores</a>
                    <a href="#">Ajuda</a>
                </div>
                <div class="footer-section">
                    <h4>Contato</h4>
                    <a href="#">📧 contato@greenfuel.com.br</a>
                    <a href="#">📞 0800 123 4567</a>
                    <div class="social-links">
                        <a href="#">📘</a>
                        <a href="#">📷</a>
                        <a href="#">🐦</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2026 GreenFuel. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
