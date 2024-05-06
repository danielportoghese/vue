<template>
  <div class="h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-rich-black-800">
    <div class="max-w-md w-full space-y-8">
      <div class="bg-rich-black-500">
        <div class="flex justify-between">
        <button @click="setCurrentAction('login')" class="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Fazer login
        </button>
        <button @click="setCurrentAction('register')" class="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Cadastre-se
        </button>
      </div>
      <div v-if="currentAction === 'login'">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Faça login</h2>
        <!-- Formulário de login -->
        <form @submit.prevent="login">
          <div class="mt-8">
            <div>
              <input v-model="loginForm.email" type="email" required class="input-field" placeholder="E-mail">
            </div>
            <div class="mt-4">
              <input v-model="loginForm.password" type="password" required class="input-field" placeholder="Senha">
            </div>
          </div>
          <div class="flex flex-row mt-6">

            <button type="submit" class="btn-primary">Login</button>
            <button @click="setCurrentAction('forgotPassword')" class="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Esqueceu a senha?
            </button>
          </div>
        </form>
      </div>

      <div v-if="currentAction === 'register'">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Cadastre-se</h2>
        <!-- Formulário de cadastro -->
        <form @submit.prevent="register">
          <div class="mt-8">
            <div>
              <input v-model="registerForm.firstName" type="text" required class="input-field" placeholder="Nome">
            </div>
            <div class="mt-4">
              <input v-model="registerForm.lastName" type="text" required class="input-field" placeholder="Sobrenome">
            </div>
            <div class="mt-4">
              <input v-model="registerForm.email" type="email" required class="input-field" placeholder="E-mail">
            </div>
            <div class="mt-4">
              <input v-model="registerForm.password" type="password" required class="input-field" placeholder="Senha">
            </div>
          </div>

            <div class="mt-6">
              <button type="submit" class="btn-primary">Cadastrar</button>
            </div>


        </form>
      </div>

      <div v-if="currentAction === 'forgotPassword'">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Esqueceu a senha</h2>
        <!-- Formulário de recuperação de senha -->
        <form @submit.prevent="forgotPassword">
          <div class="mt-8">
            <div>
              <input v-model="forgotPasswordForm.email" type="email" required class="input-field" placeholder="E-mail">
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" class="btn-primary">Recuperar senha</button>
          </div>
        </form>
      </div>
      </div>


      <!-- Botões para alternar entre as ações -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentAction: 'login', // Ação inicial é o login
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      forgotPasswordForm: {
        email: ''
      }
    };
  },
  methods: {
    setCurrentAction(action) {
      this.currentAction = action;
    },
    login() {
      // Integração com a API para login usando this.loginForm
      console.log('Login:', this.loginForm);
    },
    register() {
      // Integração com a API para cadastro usando this.registerForm
      console.log('Cadastro:', this.registerForm);
    },
    forgotPassword() {
      // Integração com a API para recuperação de senha usando this.forgotPasswordForm
      console.log('Recuperação de senha:', this.forgotPasswordForm);
    }
  }
};
</script>

<style>
  .input-field {
    appearance: none;
    padding: 10px;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .input-field:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  }

  .btn-primary {
    appearance: none;
    background-color: #667eea;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }

  .btn-primary:hover {
    background-color: #5a67d8;
  }
</style>
