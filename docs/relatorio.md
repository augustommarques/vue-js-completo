# Relatório de Configuração Inicial (Vue JS 2 - Estrutura de Estudos)

## O que foi feito
- Criada a estrutura-base do repositório de estudos.
- Adicionados templates de issues (bug e feature) em `.github/ISSUE_TEMPLATE/`.
- Criado documento de milestones (`docs/milestones.md`) com plano de estudo por etapas.
- Gerada a pasta `modules/` com subpastas para cada tema do curso.
- Adicionados sandboxes mínimos (Vue 2 via CDN) para os módulos `01-basics`, `02-conditions-lists` e `03-instance-components`.
- Criado `README.md` com diretrizes de uso.

## Estrutura de pastas criada
- `README.md`
- `docs/`
  - `milestones.md`
  - `relatorio.md` (este arquivo)
- `.github/ISSUE_TEMPLATE/`
  - `bug_report.md`
  - `feature_request.md`
- `modules/`
  - `01-basics/`
    - `README.md`
    - `sandbox/` (index.html, app.js, styles.css)
    - `cli/`
  - `02-conditions-lists/`
    - `README.md`
    - `sandbox/` (index.html, app.js, styles.css)
    - `cli/`
  - `03-instance-components/`
    - `README.md`
    - `sandbox/` (index.html, app.js, styles.css)
    - `cli/`
  - `04-cli-sfc/` ... `17-deploy/`
    - `README.md`
    - `sandbox/` (vazio por enquanto)
    - `cli/`

## Como abrir os sandboxes
Abra no navegador (ou use um servidor local):
- `modules/01-basics/sandbox/index.html`
- `modules/02-conditions-lists/sandbox/index.html`
- `modules/03-instance-components/sandbox/index.html`

Caminho absoluto (exemplo):
`/home/augusto/Documentos/Projetos/vue-js-completo/modules/01-basics/sandbox/index.html`

## Comandos executados

> Obs.: a primeira tentativa com função de shell falhou. Abaixo, a sequência utilizada com sucesso.

```bash
set -e
ROOT="/home/augusto/Documentos/Projetos/vue-js-completo"
mkdir -p "$ROOT" && cd "$ROOT"

mkdir -p "$ROOT/docs" "$ROOT/.github/ISSUE_TEMPLATE" "$ROOT/modules"

# README
cat > "$ROOT/README.md" << 'EOF_README'
# Vue JS 2 - Estrutura de Estudos

Este repositório organiza seus estudos do curso "Vue JS 2 - O Guia Completo".

- `modules/`: módulos de estudo com exemplos/sandboxes
- `docs/`: materiais de apoio (milestones, anotações)
- `.github/ISSUE_TEMPLATE/`: templates de issues para organizar tarefas

## Requisitos
- Node.js LTS (recomendado)
- Navegador atualizado

## Como usar os sandboxes (sem CLI)
Abra `modules/<modulo>/sandbox/index.html` diretamente no navegador ou use uma extensão de servidor local.

## Estrutura sugerida por módulo
Cada módulo possui:
- `README.md`: notas e links
- `sandbox/`: exemplo mínimo com Vue 2 via CDN
- `cli/` (opcional): projetos criados com Vue CLI quando aplicável

Boa prática: crie issues para cada aula/tarefa e associe a milestones definidas em `docs/milestones.md`.
EOF_README

# Milestones
cat > "$ROOT/docs/milestones.md" << 'EOF_MILESTONES'
# Milestones sugeridos (curso Vue 2)

1. Fundamentos do Vue 2
   - Templates, diretivas, eventos, propriedades computadas
   - Conclusão esperada: Semana 1

2. Condicionais, Listas e Estilo Dinâmico
   - v-if/v-show, v-for, keys, classes/estilos dinâmicos
   - Conclusão esperada: Semana 1

3. Instância Vue e Componentização
   - Ciclo de vida, múltiplas instâncias, componentes básicos
   - Conclusão esperada: Semana 2

4. CLI e Single File Components
   - Vue CLI, estrutura de pastas, build
   - Conclusão esperada: Semana 2

5. Comunicação Entre Componentes
   - Props, eventos, event bus (quando aplicável)
   - Conclusão esperada: Semana 3

6. Slots e Componentes Dinâmicos
   - Slots, keep-alive, transições de componentes
   - Conclusão esperada: Semana 3

7. Formulários
   - v-model, inputs customizados, validação básica
   - Conclusão esperada: Semana 4

8. Diretivas, Filtros e Mixins
   - Diretivas personalizadas, filtros (legado), mixins
   - Conclusão esperada: Semana 4

9. Transições e Animações
   - transition, transition-group, hooks
   - Conclusão esperada: Semana 5

10. HTTP com Axios / Firebase
    - Instâncias, interceptors, CRUD
    - Conclusão esperada: Semana 5

11. Roteamento (vue-router)
    - Rotas, parâmetros, guards, lazy loading
    - Conclusão esperada: Semana 6

12. Gerenciamento de Estado (Vuex)
    - State, getters, mutations, actions, modules
    - Conclusão esperada: Semana 6

13. Projetos
    - Stocks, To-do, Monty Hall, Admin Template
    - Conclusão esperada: Semana 7–8

14. Deploy
    - Build produção, S3/CloudFront (ou alternativa)
    - Conclusão esperada: Semana 8

> Dica: crie issues por aula/tarefa e assine-as a um milestone correspondente.
EOF_MILESTONES

# Issue templates
cat > "$ROOT/.github/ISSUE_TEMPLATE/bug_report.md" << 'EOF_BUG'
---
name: Reporte de Bug
about: Ajude a melhorar descrevendo um problema
labels: bug
---

## Descrição
Descreva o problema de forma clara e concisa.

## Passos para reproduzir
1. 
2. 
3. 

## Comportamento esperado

## Evidências
- Prints/logs:

## Ambiente
- Navegador/Versão:
- SO:
- Módulo/Aula:

## Tarefas
- [ ] Reproduzir bug
- [ ] Criar teste (se aplicável)
- [ ] Corrigir
- [ ] Revisar
EOF_BUG

cat > "$ROOT/.github/ISSUE_TEMPLATE/feature_request.md" << 'EOF_FEATURE'
---
name: Solicitação de Funcionalidade
about: Sugira uma ideia ou melhoria
labels: enhancement
---

## Contexto
Qual problema esta funcionalidade resolve?

## Descrição da solução
Resumo do que deve ser implementado.

## Critérios de aceitação
- [ ] 
- [ ] 

## Impactos
- Rotas/Estado/Componentes afetados:

## Referências
- Links/aulas relacionadas:
EOF_FEATURE

MODULES=(
  "01-basics"
  "02-conditions-lists"
  "03-instance-components"
  "04-cli-sfc"
  "05-communication"
  "06-slots-dynamic"
  "07-forms"
  "08-directives"
  "09-filters-mixins"
  "10-transitions"
  "11-http-axios"
  "12-router"
  "13-vuex"
  "14-project-stocks"
  "15-project-todo"
  "16-project-monty-hall"
  "17-deploy"
)

for m in "${MODULES[@]}"; do
  mkdir -p "$ROOT/modules/$m" "$ROOT/modules/$m/sandbox" "$ROOT/modules/$m/cli"
  cat > "$ROOT/modules/$m/README.md" << EOF_MODULE
# ${m}

Notas do módulo. Adicione links e anotações aqui.
EOF_MODULE
done

# Create sandbox files for first 3 modules
for s in "01-basics" "02-conditions-lists" "03-instance-components"; do
  mkdir -p "$ROOT/modules/$s/sandbox"
  cat > "$ROOT/modules/$s/sandbox/index.html" << 'EOF_HTML'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sandbox Vue 2</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{ title }}</h1>
    <input v-model="name" placeholder="Seu nome" />
    <button @click="increment">Cliques: {{ count }}</button>
    <p>Olá, {{ upperName }}</p>
  </div>
  <script src="app.js"></script>
</body>
</html>
EOF_HTML

  cat > "$ROOT/modules/$s/sandbox/app.js" << 'EOF_JS'
new Vue({
  el: '#app',
  data: {
    title: 'Vue 2 Sandbox',
    name: '',
    count: 0
  },
  computed: {
    upperName() {
      return this.name.trim().toUpperCase() || 'MUNDO';
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
});
EOF_JS

  cat > "$ROOT/modules/$s/sandbox/styles.css" << 'EOF_CSS'
* { box-sizing: border-box; font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif; }
body { margin: 24px; }
#app { max-width: 640px; margin: 0 auto; }
input { padding: 8px 12px; margin-right: 8px; }
button { padding: 8px 12px; }
EOF_CSS

done
```

## Próximos passos sugeridos
- Inicializar um projeto via Vue CLI em `modules/04-cli-sfc/cli`.
- Adicionar exemplos para `router`, `vuex` e `axios` nos módulos correspondentes.
- Criar issues por aula e vinculá-las aos milestones definidos.


echo "# Meu Portfólio" > README.md
git add README.md
git commit --date="2024-01-05 14:00:00" -m "Initial commit: Estrutura base do portfólio"