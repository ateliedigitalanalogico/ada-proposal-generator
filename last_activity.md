# Last Activity — ADA Proposal Generator

> Atualizado ao final de cada sessão. Atividades concluídas que viram leis permanentes são migradas para CLAUDE.md e removidas daqui.

---

## Sessão: 2026-03-25 (continuação — revisão do sistema)

### O que foi feito
- [x] CLAUDE.md revisado bloco por bloco — enxugado, só leis visuais e de identidade
- [x] `WORKFLOW.md` criado — protocolo de início, coleta A–E, checklist final de entrega
- [x] `config/ada.json` criado — contatos, portfólio, taglines, textos institucionais
- [x] `db/proposals.json` criado — substitui `db/_index.md`
- [x] Código de proposta definido: `ADA{YYYYMMDD}{4 dígitos}` ex: `ADA202603254821`
- [x] `index.html` redesenhado — Alfa no header, fonte maior, follow-up colorido
- [x] Sistema de follow-up: campo `followup` no JSON, alertas no index e início de sessão
- [x] Proposta Prestige com follow-up definido para 2026-03-28
- [x] Orientação padrão definida como horizontal — só perguntar se Caio avisar vertical
- [x] Suporte a áudio direto marcado como `[FUTURE]` no CLAUDE.md

### Pendente / próxima sessão
- [ ] Key visual oficial vindo de outro agente Claude — substituir bloco `[PENDENTE]` no CLAUDE.md
- [ ] Criar `templates/horizontal.html` — template base com CSS completo
- [ ] Deletar `db/_index.md` após confirmar que JSON está funcionando
- [ ] Follow-up Prestige em 2026-03-28 — perguntar como está o Felipe Bruno

---

## Sessão: 2026-03-25 (início)

### Setup inicial do sistema
- [x] Estrutura de pastas criada: `db/`, `assets/`
- [x] `last_activity.md` criado (este arquivo)
- [x] `db/_index.md` criado — substituído por `db/proposals.json`
- [x] Sistema híbrido definido: CLAUDE.md (leis) + WORKFLOW.md (protocolo) + config/ + db/

### Proposta gerada
- **Prestige Eyewear / Felipe Bruno** · `db/prestige_imersivo/proposta_prestige_imersivo.html`
- 4 páginas A4 landscape · R$ 15.000 · evento 07 abr 2026 · The Space
- ID: `ADA202603254821`

---

## Como ler este arquivo

- **[x]** = concluído e validado
- **[ ]** = pendente
- Ao final de cada sessão: atualizar "Pendente" e adicionar nova entrada
- Ao migrar algo para CLAUDE.md: remover daqui e anotar "→ virou lei em CLAUDE.md em [data]"
