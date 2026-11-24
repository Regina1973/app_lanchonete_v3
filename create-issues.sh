#!/usr/bin/env bash

MILESTONE=1

gh issue create \
  --title "Estruturar módulo de Produtos" \
  --label "backend" \
  --label "feature" \
  --label "P0 - Crítica" \
  --label "SP:3" \
  --label "Sprint 1" \
  --milestone "$MILESTONE" \
  --body "Criar a estrutura inicial do módulo de produtos."

gh issue create \
  --title "Implementar GET /api/products" \
  --label "backend" \
  --label "api" \
  --label "P0 - Crítica" \
  --label "SP:3" \
  --label "Sprint 1" \
  --milestone "$MILESTONE" \
  --body "Disponibilizar endpoint para listar todos os produtos cadastrados."

gh issue create \
  --title "Implementar GET /api/products/:id" \
  --label "backend" \
  --label "api" \
  --label "P0 - Crítica" \
  --label "SP:2" \
  --label "Sprint 1" \
  --milestone "$MILESTONE" \
  --body "Permitir consulta de um produto específico através do ID."

gh issue create \
  --title "Criar módulo de Usuários" \
  --label "backend" \
  --label "feature" \
  --label "P0 - Crítica" \
  --label "SP:5" \
  --label "Sprint 1" \
  --milestone "$MILESTONE" \
  --body "Criar estrutura completa de usuários."

gh issue create \
  --title "Implementar Cadastro de Usuário" \
  --label "backend" \
  --label "feature" \
  --label "auth" \
  --label "P0 - Crítica" \
  --label "SP:5" \
  --label "Sprint 1" \
  --milestone "$MILESTONE" \
  --body "Implementar POST /api/users com validações."

gh issue create \
  --title "Implementar Login JWT" \
  --label "backend" \
  --label "auth" \
  --label "security" \
  --label "P0 - Crítica" \
  --label "SP:5" \
  --label "Sprint 2" \
  --milestone "$MILESTONE" \
  --body "Implementar autenticação JWT."

gh issue create \
  --title "Criar Middleware de Autenticação" \
  --label "backend" \
  --label "middleware" \
  --label "security" \
  --label "P1 - Alta" \
  --label "SP:3" \
  --label "Sprint 2" \
  --milestone "$MILESTONE" \
  --body "Proteger rotas privadas utilizando JWT."

gh issue create \
  --title "Implementar Testes Automatizados" \
  --label "backend" \
  --label "test" \
  --label "P1 - Alta" \
  --label "SP:5" \
  --label "Sprint 2" \
  --milestone "$MILESTONE" \
  --body "Adicionar cobertura de testes com Jest e Supertest."

gh issue create \
  --title "Integração Frontend ↔ Backend" \
  --label "frontend" \
  --label "backend" \
  --label "integration" \
  --label "P1 - Alta" \
  --label "SP:3" \
  --label "Sprint 2" \
  --milestone "$MILESTONE" \
  --body "Integrar frontend React com a API."

echo "✅ Issues criadas com sucesso"