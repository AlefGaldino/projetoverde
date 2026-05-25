const STORAGE_USERS_KEY = 'greenflux_users';
const STORAGE_CURRENT_USER_KEY = 'greenflux_current_user';

function getUsers() {
    const raw = localStorage.getItem(STORAGE_USERS_KEY);
    if (!raw) {
        return [];
    }

    try {
        return JSON.parse(raw);
    } catch (error) {
        console.warn('Erro ao ler usuários do localStorage:', error);
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    const raw = localStorage.getItem(STORAGE_CURRENT_USER_KEY);
    if (!raw) {
        return null;
    }

    try {
        return JSON.parse(raw);
    } catch (error) {
        console.warn('Erro ao ler usuário atual do localStorage:', error);
        return null;
    }
}

function setCurrentUser(user) {
    localStorage.setItem(STORAGE_CURRENT_USER_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem(STORAGE_CURRENT_USER_KEY);
}

function findUserByEmail(email) {
    if (!email) return null;
    return getUsers().find(user => user.email.toLowerCase() === email.toLowerCase());
}

function registerUser({ nome, email, senha, confirmSenha }) {
    nome = nome.trim();
    email = email.trim().toLowerCase();

    if (!nome || !email || !senha || !confirmSenha) {
        return { success: false, message: 'Preencha todos os campos.' };
    }

    if (senha !== confirmSenha) {
        return { success: false, message: 'As senhas não coincidem.' };
    }

    if (findUserByEmail(email)) {
        return { success: false, message: 'Este e-mail já está cadastrado.' };
    }

    const users = getUsers();
    const newUser = { nome, email, senha };
    users.push(newUser);
    saveUsers(users);
    setCurrentUser({ nome: newUser.nome, email: newUser.email });

    return { success: true, message: 'Cadastro realizado com sucesso! Redirecionando...' };
}

function loginUser({ email, senha }) {
    email = email.trim().toLowerCase();

    if (!email || !senha) {
        return { success: false, message: 'Preencha todos os campos.' };
    }

    const user = findUserByEmail(email);
    if (!user) {
        return { success: false, message: 'Usuário não encontrado.' };
    }

    if (user.senha !== senha) {
        return { success: false, message: 'Senha incorreta.' };
    }

    setCurrentUser({ nome: user.nome, email: user.email });
    return { success: true, message: 'Login realizado com sucesso! Redirecionando...' };
}

function updateHeaderUI() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions) {
        return;
    }

    const loginLink = headerActions.querySelector('.btn-login');
    const createLink = headerActions.querySelector('.btn-create-account');
    let profileLink = headerActions.querySelector('.btn-profile');
    const currentUser = getCurrentUser();

    if (currentUser) {
        if (loginLink) loginLink.style.display = 'none';
        if (createLink) createLink.style.display = 'none';

        if (!profileLink) {
            profileLink = document.createElement('a');
            profileLink.className = 'btn-profile';
            profileLink.href = 'profile.html';
            profileLink.innerHTML = '<span class="profile-icon">👤</span>Perfil';
            const cartButton = headerActions.querySelector('.btn-cart');
            headerActions.insertBefore(profileLink, cartButton || null);
        }
    } else {
        if (loginLink) loginLink.style.display = '';
        if (createLink) createLink.style.display = '';
        if (profileLink) profileLink.remove();
    }
}

function showMessage(element, message, success) {
    if (!element) return;
    element.textContent = message;
    element.style.color = success ? '#2e7d32' : '#c62828';
}

function initRegisterForm() {
    const registerForm = document.getElementById('register-form');
    const registerFeedback = document.getElementById('register-feedback');
    if (!registerForm) return;

    registerForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const data = {
            nome: formData.get('nome') || '',
            email: formData.get('email') || '',
            senha: formData.get('senha') || '',
            confirmSenha: formData.get('confirmSenha') || ''
        };

        const result = registerUser(data);
        showMessage(registerFeedback, result.message, result.success);

        if (result.success) {
            setTimeout(() => {
                updateHeaderUI();
                window.location.href = 'Index.HTML';
            }, 1000);
        }
    });
}

function initLoginForm() {
    const loginForm = document.getElementById('login-form');
    const loginFeedback = document.getElementById('login-feedback');
    if (!loginForm) return;

    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const data = {
            email: formData.get('email') || '',
            senha: formData.get('senha') || ''
        };

        const result = loginUser(data);
        showMessage(loginFeedback, result.message, result.success);

        if (result.success) {
            setTimeout(() => {
                updateHeaderUI();
                window.location.href = 'Index.HTML';
            }, 1000);
        }
    });
}

function initProfilePage() {
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const accountList = document.getElementById('account-list');
    const logoutButton = document.getElementById('logout-button');
    const currentUser = getCurrentUser();

    if (!profileName || !profileEmail || !accountList) {
        return;
    }

    if (!currentUser) {
        window.location.href = 'Index.HTML';
        return;
    }

    profileName.textContent = currentUser.nome;
    profileEmail.textContent = currentUser.email;

    const users = getUsers();
    accountList.innerHTML = '';

    if (users.length === 0) {
        accountList.innerHTML = '<p>Nenhuma conta cadastrada ainda.</p>';
        return;
    }

    users.forEach(user => {
        const item = document.createElement('div');
        item.className = 'account-item';
        item.innerHTML = `
            <strong>${user.nome}</strong>
            <span>${user.email}</span>
        `;
        accountList.appendChild(item);
    });

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            clearCurrentUser();
            updateHeaderUI();
            window.location.href = 'Index.HTML';
        });
    }
}

function initAuthPage() {
    updateHeaderUI();
    initRegisterForm();
    initLoginForm();
    initProfilePage();
}

document.addEventListener('DOMContentLoaded', initAuthPage);
