
# Site pessoal com Quarto + GitHub Pages

Este repositório contém um site estático feito com [Quarto](https://quarto.org).

## Como usar

1. **Instale o Quarto** e o Git.
2. Edite `_quarto.yml` (título, links, `site-url`) e os arquivos `.qmd`.
3. **Pré-visualize localmente:**
   ```bash
   quarto preview
   ```
4. **Publicar no GitHub Pages com Actions (recomendado):**
   - Crie o repositório no GitHub e envie o código (`git init && git add . && git commit -m "site" && git branch -M main && git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git && git push -u origin main`).
   - Habilite **Settings → Actions → Workflow permissions → Read and write**.
   - O workflow em `.github/workflows/publish.yml` fará o deploy para a branch `gh-pages` a cada `push` na `main`.
   - Em **Settings → Pages**, selecione **Source: Deploy from a branch** e escolha a branch `gh-pages`.

5. **Alternativa sem Actions (docs/):**
   - No `_quarto.yml`, defina `output-dir: docs` em `project`.
   - Rode `quarto render` e publique a pasta `docs/` na branch `main`.
   - Em **Settings → Pages**, selecione `main` e pasta `/docs`.

## Personalização
- Estilos em `styles.css`.
- Substitua `assets/logo-placeholder.svg` pelo seu logo.
- Atualize `Contato` com seu e-mail.
