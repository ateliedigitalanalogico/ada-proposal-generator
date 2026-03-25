# WORKFLOW.md — Protocolo de Propostas ADA

---

## Início de sessão

1. Verificar se servidor está rodando: `curl http://localhost:3333/ping` — subir se necessário
2. Ler `db/proposals.json` e verificar follow-ups:
   - Atrasado ou vencendo hoje → alertar imediatamente ("Caio, follow-up da [cliente] estava para [data]")
   - Nos próximos 2 dias → mencionar junto com o status geral
3. Verificar se há briefings soltos na pasta (`.txt`, `.md`, `.pdf`, imagens)
4. Perguntar: **nova proposta ou continuar existente?**

**Follow-up:** ao registrar proposta nova, definir `followup` = data de envio + 3 dias úteis (padrão). Ajustar conforme urgência do projeto.

---

## Coleta de dados — Blocos A–E

Antes de gerar qualquer HTML, preencher mentalmente os blocos abaixo.
O que faltar → perguntar tudo de uma vez, em bloco único, nunca pergunta por pergunta.

### A — Identificação
- Cliente (empresa ou pessoa)
- Nome ou descrição do projeto
- Data da proposta
- Tipo de entrega: imersivo · mapping · motion · AV · instalação · combinação · outro

### B — Conteúdo criativo
- Entendimento do briefing — o que o cliente pediu, com suas palavras
- Conceito criativo proposto pela ADA
- Escopo detalhado — lista do que será entregue (técnico + criativo)

### C — Comercial
- Investimento total (ou tabela de itens)
- Cronograma — fases, datas, prazo total
- Validade da proposta (padrão: 15 dias)

### D — Contato e assinatura
- Responsável: Caio Fazolin ou Tatiane Gonzalez
- Nome e cargo do contato no cliente

### E — Visual
- Orientação: **Horizontal por padrão** — só perguntar se Caio avisar vertical
- Tom: Padrão (preto+amarelo) · Meia-noite (azul) · Monocromático (P&B)
- Imagens específicas do projeto (se houver)

**Só avançar para o HTML quando A, B e C estiverem completos.**

---

## Formato da pergunta inicial

```
Tenho as seguintes informações: [lista do que já sei].

Preciso de mais dados para completar a proposta:

**A — Projeto**
- Cliente:
- Nome do projeto:
- Data:
- Tipo de entrega:

**B — Conteúdo**
- Briefing recebido:
- Conceito proposto:
- Escopo (liste item por item):

**C — Comercial**
- Investimento:
- Fases e datas:
- Validade:

**D — Responsável**
- Quem assina: Caio ou Tatiane?
- Contato no cliente:

**E — Visual** *(só perguntar tom — orientação é horizontal por padrão)*
- Tom: Padrão · Meia-noite · Monocromático?
```

---

## Checklist final — antes de entregar o HTML

- [ ] Alfa e Wordmark como SVG inline (nunca `<img>`)
- [ ] `@font-face` local declarado (nunca Google Fonts CDN)
- [ ] CSS variables declaradas no `:root`
- [ ] `@media print` com `break-after: page` e `height` fixo por página
- [ ] `print-color-adjust: exact` em `html`, `body` e `.pagina`
- [ ] `overflow: visible` no `@media print` (evita rasterização)
- [ ] Numeração de página via CSS counter
- [ ] Todos os dados do cliente preenchidos (sem `[CLIENTE]` vazio)
- [ ] Investimento formatado em R$
- [ ] Data da proposta e validade presentes
- [ ] Nome e e-mail do responsável no rodapé
- [ ] Email block (assunto + corpo) com botões de cópia
- [ ] Proposta registrada em `db/proposals.json` com código `ADA{YYYYMMDD}{4 dígitos aleatórios}`
- [ ] `index.html` carrega automaticamente do JSON — não precisa editar manualmente
- [ ] Arquivo nomeado `proposta_[CLIENTE]_[PROJETO].html` em `db/[cliente_projeto]/`
