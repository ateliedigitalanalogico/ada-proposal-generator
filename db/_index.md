# DB — Propostas ADA

Índice de todas as propostas geradas. Uma linha por proposta.

| Data | Cliente | Projeto | Tipo | Responsável | Arquivo |
|------|---------|---------|------|-------------|---------|
| 2026-04-07 | Prestige Eyewear / Felipe Bruno | Projeção Imersiva | Motion · 3D · IA | Caio Fazolin | prestige_imersivo/proposta_prestige_imersivo.html |

---

## Estrutura de cada entrada em `db/`

```
db/
└── [cliente]_[projeto]/
    ├── proposta_[cliente]_[projeto].html   ← arquivo final entregue
    ├── brief.md                            ← briefing recebido + dados preenchidos
    └── prompt.md                           ← prompt otimizado usado para gerar
```

> Arquivos nomeados sem espaços, sem acentos — ex: `db/bradesco_anish/`
