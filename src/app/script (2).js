// script.js - Interactive Features GreenFlux

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.btn-search');
    const cartButton = document.querySelector('.btn-cart');
    const cartCount = document.querySelector('.cart-count');
    const categoryCards = document.querySelectorAll('.category-card');

    const purchaseSection = document.getElementById('purchase-section');
    const selectedFuelText = document.getElementById('selected-fuel');
    const litersInput = document.getElementById('liters-input');
    const locationInput = document.getElementById('location-input');
    const useLocationButton = document.getElementById('use-location');
    const addToCartButton = document.getElementById('add-to-cart');
    const closePurchaseButton = document.getElementById('close-purchase');

    const paymentSection = document.getElementById('payment-section');
    const summaryFuel = document.getElementById('summary-fuel');
    const summaryLiters = document.getElementById('summary-liters');
    const summaryLocation = document.getElementById('summary-location');
    const summaryFreight = document.getElementById('summary-freight');
    const summaryTime = document.getElementById('summary-time');
    const summaryPix = document.getElementById('summary-pix');
    const summaryDebit = document.getElementById('summary-debit');
    const summaryCredit = document.getElementById('summary-credit');
    const summaryCash = document.getElementById('summary-cash');
    const closePaymentButton = document.getElementById('close-payment');
    const checkoutButton = document.getElementById('checkout-button');
    const paymentRows = document.querySelectorAll('.payment-method-row');

    const orders = [];
    const fuelPrices = {
        Gasolina: 7.5,
        Etanol: 5.2,
        Elétrico: 6.3
    };
    const freightCost = 12.5;
    const paymentRates = {
        PIX: 0,
        Débito: 0.01,
        Crédito: 0.03,
        Dinheiro: -0.02
    };
    let selectedPaymentMethod = null;

    const formatMoney = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const scrollToElement = element => element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const openPurchasePanel = fuelType => {
        selectedFuelText.textContent = fuelType;
        litersInput.value = '';
        locationInput.value = '';
        purchaseSection.classList.remove('hidden');
        scrollToElement(purchaseSection);
    };

    const closePurchasePanel = () => purchaseSection.classList.add('hidden');
    const closePaymentPanel = () => paymentSection.classList.add('hidden');

    const resetPaymentSelection = () => {
        selectedPaymentMethod = null;
        paymentRows.forEach(row => row.classList.remove('selected'));
        checkoutButton.classList.add('hidden');
    };

    const openPaymentPanel = () => {
        if (!orders.length) return;

        const order = orders[orders.length - 1];
        const total = order.subtotal + order.freight;

        summaryFuel.textContent = order.type;
        summaryLiters.textContent = `${order.liters} litros`;
        summaryLocation.textContent = order.location;
        summaryFreight.textContent = formatMoney(order.freight);
        summaryTime.textContent = `${order.minutes} min`;
        summaryPix.textContent = formatMoney(total * (1 + paymentRates.PIX));
        summaryDebit.textContent = formatMoney(total * (1 + paymentRates.Débito));
        summaryCredit.textContent = formatMoney(total * (1 + paymentRates.Crédito));
        summaryCash.textContent = formatMoney(total * (1 + paymentRates.Dinheiro));

        resetPaymentSelection();
        paymentSection.classList.remove('hidden');
        scrollToElement(paymentSection);
    };

    const updateCartCount = () => {
        const count = orders.length;
        cartCount.textContent = count;
    };

    const handleSearch = () => {
        const address = searchInput.value.trim();
        if (!address) {
            alert('Por favor, digite sua localização para entrega.');
            return;
        }
        alert(`Buscando postos próximos a: ${address}\n\nFuncionalidade em desenvolvimento.`);
    };

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocalização não suportada pelo navegador.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                locationInput.value = `Lat: ${latitude}, Lng: ${longitude}`;
            },
            () => {
                alert('Não foi possível obter a localização.');
            }
        );
    };

    searchButton?.addEventListener('click', handleSearch);
    searchInput?.addEventListener('keypress', e => {
        if (e.key === 'Enter') handleSearch();
    });

    categoryCards.forEach(card => {
        card.addEventListener('click', () => openPurchasePanel(card.dataset.fuel));
    });

    useLocationButton?.addEventListener('click', getCurrentLocation);

    addToCartButton?.addEventListener('click', () => {
        const fuelType = selectedFuelText.textContent;
        const liters = Number(litersInput.value);
        const location = locationInput.value.trim();

        if (!fuelType || fuelType === '—') {
            alert('Selecione um tipo de combustível.');
            return;
        }

        if (!liters || liters <= 0) {
            alert('Informe a quantidade de litros.');
            return;
        }

        if (!location) {
            alert('Informe a localização de entrega.');
            return;
        }

        const pricePerLiter = fuelPrices[fuelType] ?? 0;
        const order = {
            type: fuelType,
            liters,
            location,
            pricePerLiter,
            subtotal: liters * pricePerLiter,
            freight: freightCost,
            minutes: 20 + Math.round(liters * 0.8)
        };

        orders.push(order);
        updateCartCount();
        alert(`Pedido adicionado ao carrinho:\n\nTipo: ${fuelType}\nLitros: ${liters}\nLocalização: ${location}`);
        closePurchasePanel();
    });

    closePurchaseButton?.addEventListener('click', closePurchasePanel);
    closePaymentButton?.addEventListener('click', closePaymentPanel);

    paymentRows.forEach(row => {
        row.addEventListener('click', () => {
            paymentRows.forEach(item => item.classList.remove('selected'));
            row.classList.add('selected');
            selectedPaymentMethod = row.dataset.payment;
            checkoutButton.classList.remove('hidden');
        });
    });

    checkoutButton?.addEventListener('click', () => {
        if (!orders.length) {
            alert('Seu carrinho está vazio.');
            return;
        }

        if (!selectedPaymentMethod) {
            alert('Selecione uma forma de pagamento para continuar.');
            return;
        }

        alert(`Pagamento finalizado via ${selectedPaymentMethod}! Seu pedido está a caminho.`);
        orders.length = 0;
        updateCartCount();
        closePaymentPanel();
    });

    cartButton?.addEventListener('click', () => {
        if (!orders.length) {
            alert('Seu carrinho está vazio. Adicione um pedido antes de acessar o pagamento.');
            return;
        }
        openPaymentPanel();
    });

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) scrollToElement(target);
        });
    });

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header?.classList.add('header-scrolled');
        } else {
            header?.classList.remove('header-scrolled');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.category-card, .restaurant-card, .step, .purchase-panel, .payment-panel').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });

    setTimeout(() => {
        document.querySelectorAll('.category-card').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'none';
            }, index * 100);
        });
    }, 150);
});
