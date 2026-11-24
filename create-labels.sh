# cole o script aqui
#!/usr/bin/env bash

echo "Criando labels de Prioridade..."

gh label create "P0 - Crítica" --color B60205 --description "Bloqueante para entrega" || true
gh label create "P1 - Alta" --color D93F0B --description "Importante para o MVP" || true
gh label create "P2 - Média" --color FBCA04 --description "Importante mas não bloqueante" || true
gh label create "P3 - Baixa" --color 0E8A16 --description "Melhoria futura" || true

echo "Criando labels de Tipo..."

gh label create "feature" --color 1D76DB --description "Nova funcionalidade" || true
gh label create "bug" --color D73A4A --description "Correção de defeito" || true
gh label create "enhancement" --color 84B6EB --description "Melhoria existente" || true
gh label create "refactor" --color 5319E7 --description "Refatoração de código" || true
gh label create "documentation" --color 0075CA --description "Documentação" || true
gh label create "test" --color C2E0C6 --description "Testes automatizados" || true
gh label create "security" --color B60205 --description "Segurança da aplicação" || true

echo "Criando labels de Área..."

gh label create "backend" --color 0052CC --description "Backend Node.js/Express" || true
gh label create "frontend" --color 5319E7 --description "Frontend React" || true
gh label create "api" --color 0366D6 --description "Endpoints REST" || true
gh label create "database" --color 006B75 --description "Persistência de dados" || true
gh label create "auth" --color A71D5D --description "Autenticação e autorização" || true
gh label create "middleware" --color FBCA04 --description "Middlewares Express" || true
gh label create "integration" --color 0E8A16 --description "Integração entre sistemas" || true
gh label create "ci-cd" --color 24292F --description "Pipelines GitHub Actions" || true

echo "Criando labels de Story Points..."

gh label create "SP:1" --color 7057FF --description "1 Story Point" || true
gh label create "SP:2" --color 7057FF --description "2 Story Points" || true
gh label create "SP:3" --color 7057FF --description "3 Story Points" || true
gh label create "SP:5" --color 7057FF --description "5 Story Points" || true
gh label create "SP:8" --color 7057FF --description "8 Story Points" || true
gh label create "SP:13" --color 7057FF --description "13 Story Points" || true

echo "Criando labels de Status..."

gh label create "ready" --color 0E8A16 --description "Pronto para desenvolvimento" || true
gh label create "in-progress" --color FBCA04 --description "Em desenvolvimento" || true
gh label create "review" --color 5319E7 --description "Em revisão" || true
gh label create "blocked" --color D73A4A --description "Bloqueado" || true
gh label create "done" --color 1D76DB --description "Concluído" || true

echo "Criando labels de Sprint..."

gh label create "Sprint 1" --color 0366D6 --description "Primeira sprint" || true
gh label create "Sprint 2" --color 0366D6 --description "Segunda sprint" || true
gh label create "Sprint 3" --color 0366D6 --description "Terceira sprint" || true

echo "Criando labels de Ambiente..."

gh label create "dev" --color 0E8A16 --description "Desenvolvimento" || true
gh label create "staging" --color FBCA04 --description "Homologação" || true
gh label create "production" --color B60205 --description "Produção" || true

echo ""
echo "✅ Todas as labels foram processadas."