# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes de Développement

```bash
npm run dev      # Serveur de développement (http://localhost:3000)
npm run build    # Build de production
npm start        # Démarrer le serveur de production
npm run lint     # ESLint
```

## Stack Technique

- **Next.js 16** avec App Router
- **React 19** avec Babel React Compiler (auto-memoization)
- **TypeScript** (mode strict)
- **CSS Modules** avec système de variables CSS personnalisé (pas de framework CSS externe)

## Architecture du Projet

### Structure des Dossiers

```
src/
├── app/                    # App Router (routing basé sur fichiers)
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout racine (metadata, fonts, JSON-LD)
│   ├── services/          # Pages de services détaillés
│   └── api/               # Routes API
├── components/
│   ├── ui/                # Composants UI réutilisables (Button, Container, SectionTitle)
│   ├── sections/          # Sections pleine largeur (Hero, FAQ, CTAFinal...)
│   └── layout/            # Header, Footer
├── data/                  # Fichiers de données/contenu (*.ts)
├── styles/                # Variables CSS, animations, utilitaires
│   └── DESIGN_SYSTEM.md   # Guide de design complet (532 lignes)
├── lib/types.ts           # Types TypeScript centralisés
└── hooks/                 # Hooks React personnalisés
```

### Patterns Architecturaux Clés

**1. Séparation Données/Composants**
- Le contenu est séparé dans `src/data/*.ts` (services, company, reviews, etc.)
- Chaque page importe ses données spécifiques
- Types centralisés dans `@/lib/types.ts`

**2. Pattern Section Standard**
```tsx
<section className={styles.section}>
  <Container>
    <SectionTitle eyebrow="..." title="..." subtitle="..." />
    {/* Contenu */}
  </Container>
</section>
```

**3. Chargement Dynamique**
- Les sections sous le fold utilisent `next/dynamic` avec lazy loading
- Exemple: `const FAQ = dynamic(() => import('@/components/sections/FAQ'))`

**4. Metadata SEO par Page**
```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: [...],
  openGraph: { /* ... */ },
};
```

## Système de Design

### Couleurs (définies dans `variables.css`)
- **Primary**: Teal Pétrolé (#14434A)
- **Accent**: Antique Gold (#C9985A) - CTAs, highlights
- **Background**: Cream (#FAF8F5)
- **Surface**: White (#FFFFFF)

### Typographie
- **Headings**: Cormorant Garamond (serif élégant)
- **Body**: DM Sans (sans-serif)

### Breakpoints Responsive
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: >= 1024px

### Composants UI Principaux
| Composant | Props | Usage |
|-----------|-------|-------|
| `Button` | variant (primary/secondary/outline/ghost), size | CTAs |
| `Container` | size (sm/md/lg/xl/2xl) | Wrapper max-width |
| `SectionTitle` | eyebrow, title, subtitle, align | En-têtes de section |
| `OptimizedImage` | src, alt, width, height | Images optimisées |

## Règles de Code du Projet

### 1. Commentaires (PRIORITÉ ABSOLUE)

**Chaque fichier `.tsx` commence par un commentaire d'en-tête à la ligne 0**, qui explique en langage simple :
- à quoi sert ce fichier
- ce qu'il affiche à l'écran
- ce que l'utilisateur peut faire avec

Exemple :
```tsx
/*
 Ce fichier définit la page de profil.
 Il affiche les informations de l'utilisateur connecté (nom, photo, email).
 Il permet aussi de modifier certains détails simples comme la ville ou le prénom.
*/
```

**Chaque élément important doit avoir un commentaire au-dessus :**
- les éléments qui stockent des informations pour la page
- les éléments qui se déclenchent automatiquement au chargement
- les fonctions qui se lancent au clic ou à l'envoi d'un formulaire
- les grandes parties de l'interface (liste, formulaire, fenêtre modale, etc.)

Les commentaires sont écrits en **français**, en **langage simple**, sans jargon technique.
En lisant uniquement les commentaires d'un fichier, une personne sans expérience en code doit comprendre ce que fait la page.

**Les commentaires sont toujours à jour :**
- si le comportement change, le commentaire est mis à jour immédiatement
- aucun commentaire faux, vague ou obsolète ne doit rester dans le code

### 2. Structure des Composants

1. **Tous les composants réutilisables** sont dans `components/`

2. **Les fichiers de pages** (dans `app/`) restent les plus simples possible :
   - ils utilisent les composants du dossier `components`
   - ils ne dupliquent pas de gros morceaux d'interface

3. **Un composant doit être réutilisable** :
   - on ne crée **jamais** un composant qui ne servira que sur une seule page
   - si une interface n'apparaît qu'une seule fois, elle reste dans le fichier de la page

4. **Avant de créer un nouveau composant, vérifier ce qui existe déjà** :
   - regarder si un composant similaire existe
   - si oui, **adapter** le composant existant plutôt que d'en créer un nouveau

5. **Les composants doivent être génériques** :
   - un composant bien conçu peut s'adapter à plusieurs contextes grâce à ses paramètres
   - exemple : un seul composant `Carte` avec des variantes, pas plusieurs composants séparés

### 3. Pratiques Interdites

**Aucun HOC (Higher-Order Component)**
- Ne jamais créer un composant qui prend un composant en entrée et en retourne un nouveau

**Aucun render props**
- Ne jamais passer une fonction destinée à « afficher » du contenu comme paramètre principal

**Aucun hook personnalisé**
- Ne jamais créer de fonction commençant par `use` pour regrouper de la logique
- Toute la logique reste à l'intérieur des composants eux-mêmes

### 4. Styles CSS

1. **Chaque page a son propre fichier CSS** (même nom que la page)

2. **Chaque composant a son propre fichier CSS** (placé à côté du composant)

3. **Pas de styles globaux dispersés** :
   - les styles partagés vont dans `globals.css` ou `variables.css`

4. Toujours utiliser les **variables CSS** (jamais de couleurs/spacing hardcodés)

5. Design **mobile-first**

### 5. Organisation des Ressources

**Les icônes sont dans un dossier dédié** : `assets/icons/` ou `public/icons/`

**Nommage clair des icônes** : `icone-fleche-gauche.svg`, `icone-utilisateur.svg`

### 6. Qualité du Code

1. **Code propre et lisible** :
   - noms de variables et fonctions explicites
   - langue cohérente dans tout le projet
   - indentation correcte et uniforme
   - pas de code mort ou commenté « au cas où »

2. **Code optimisé** :
   - éviter les rendus inutiles
   - ne pas dupliquer la logique : si le même code apparaît deux fois, le regrouper
   - charger les ressources lourdes de manière intelligente (chargement différé si nécessaire)

## Conventions de Nommage

- Composants: PascalCase (`ServiceDetailHero`)
- Classes CSS: camelCase (`.sectionTitle`)
- Fichiers data: kebab-case (`service-isolation.ts`)
- Chaque composant a son dossier avec `ComponentName.tsx` + `ComponentName.module.css`

## Ajouter une Nouvelle Page

1. Créer `src/app/[nom-page]/page.tsx`
2. Ajouter le commentaire d'en-tête expliquant le rôle de la page
3. Exporter `metadata` pour le SEO
4. Créer le fichier de données correspondant dans `src/data/`
5. Utiliser `dynamic()` pour les sections sous le fold
6. Inclure JSON-LD pour le référencement structuré

## Ajouter un Nouveau Composant

1. **Vérifier d'abord si un composant similaire existe**
2. Créer le dossier dans `ui/`, `sections/` ou `layout/`
3. Créer `ComponentName.tsx` et `ComponentName.module.css`
4. Ajouter le commentaire d'en-tête
5. Exporter l'interface TypeScript des props
6. Utiliser les variables CSS du design system
7. Implémenter le responsive (mobile-first)

## Informations Entreprise

Les informations de contact et navigation sont centralisées dans `src/data/company.ts`.
