# AR+Solution - Guide du Systeme de Design

Ce document sert de reference pour maintenir la coherence visuelle sur toutes les pages du site.

---

## 1. IDENTITE VISUELLE

### Philosophie de Design
- **Style**: Luxe Artisanal - Elegance raffinee avec une touche chaleureuse
- **Ambiance**: Professionnelle, haut de gamme, digne de confiance
- **Approche**: Minimaliste avec des details soignes

---

## 2. TYPOGRAPHIE

### Polices
```css
--font-primary: 'DM Sans'     /* Corps de texte, labels, boutons */
--font-heading: 'Cormorant Garamond'  /* Titres h1-h6, accents */
```

### Hierarchie des Titres
| Element | Desktop | Tablet | Mobile | Weight | Tracking |
|---------|---------|--------|--------|--------|----------|
| h1 | text-5xl (3rem) | text-4xl (2.25rem) | text-3xl (1.875rem) | bold (700) | elegant (-0.03em) |
| h2 | text-4xl | text-3xl | text-2xl | semibold (600) | tight (-0.02em) |
| h3 | text-2xl | text-2xl | text-xl | semibold (600) | normal |
| h4 | text-xl | text-lg | text-lg | medium (500) | normal |

### Texte Courant
- **Body**: text-base (1rem), line-height relaxed (1.7), color gray-700
- **Lead**: text-lg/xl, line-height loose (1.85), color gray-600
- **Small**: text-sm (0.875rem), pour labels et mentions

---

## 3. PALETTE DE COULEURS

### Couleurs Principales
```css
/* Teal Petrole - Couleur principale */
--color-primary: #14434A
--color-primary-hover: #0D2F34
--color-primary-light: #E6F0F1
--color-primary-muted: #2D6069

/* Or Antique - Couleur d'accent */
--color-accent: #C9985A
--color-accent-hover: #B8863D
--color-accent-light: #FBF6EF
--color-accent-muted: #D4AA72
```

### Couleurs de Fond
```css
--color-background: #FAF8F5     /* Fond principal - creme chaud */
--color-background-alt: #F5EFE6  /* Fond alternatif - champagne */
--color-surface: #FFFFFF         /* Cartes, modals */
```

### Echelle de Gris (tons chauds)
```css
--color-gray-50: #FDFBF8   /* Fond tres clair */
--color-gray-100: #F7F5F3
--color-gray-200: #EDE9E5
--color-gray-300: #DDD7D0
--color-gray-400: #B8AFA5  /* Bordures legeres */
--color-gray-500: #8F857A  /* Texte secondaire */
--color-gray-600: #6B5B4F  /* Texte muted */
--color-gray-700: #534840  /* Corps de texte */
--color-gray-800: #3D3632
--color-gray-900: #2C2C2C  /* Titres, texte fort */
```

### Gradients Luxe
```css
/* Hero sections */
--gradient-hero: linear-gradient(135deg, #14434A 0%, #0D2F34 50%, #14434A 100%)

/* Boutons et accents dores */
--gradient-gold: linear-gradient(135deg, #C9985A 0%, #D4AA72 50%, #C9985A 100%)
--gradient-gold-shimmer: linear-gradient(90deg, #C9985A 0%, #E8C896 50%, #C9985A 100%)

/* Fonds */
--gradient-surface: linear-gradient(180deg, #FAF8F5 0%, #F5EFE6 100%)
```

---

## 4. ESPACEMENTS

### Echelle de Base
```css
--spacing-1: 0.25rem   /* 4px */
--spacing-2: 0.5rem    /* 8px */
--spacing-3: 0.75rem   /* 12px */
--spacing-4: 1rem      /* 16px */
--spacing-5: 1.25rem   /* 20px */
--spacing-6: 1.5rem    /* 24px */
--spacing-8: 2rem      /* 32px */
--spacing-10: 2.5rem   /* 40px */
--spacing-12: 3rem     /* 48px */
--spacing-16: 4rem     /* 64px */
--spacing-20: 5rem     /* 80px */
--spacing-24: 6rem     /* 96px */
```

### Padding Sections
| Breakpoint | Padding Vertical |
|------------|------------------|
| Mobile | spacing-16 (64px) |
| Tablet (768px+) | spacing-20 (80px) |
| Desktop (1024px+) | spacing-24 (96px) |

---

## 5. LAYOUT

### Container Widths
```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
--container-2xl: 1440px
```

### Header Heights
```css
--header-height-mobile: 72px
--header-height-desktop: 88px
```

### Breakpoints Responsive
```css
/* Mobile first */
@media (min-width: 768px)  /* Tablet */
@media (min-width: 1024px) /* Desktop */
@media (min-width: 1280px) /* Large desktop */
```

---

## 6. COMPOSANTS UI

### Boutons
**Variantes disponibles:**
- `primary` - Bordure doree, fond au hover
- `secondary` - Bordure teal, fond au hover
- `outline` - Style outline teal
- `ghost` - Sans bordure, fond subtle au hover

**Tailles:**
- `sm` - Padding: 8px 16px, font-size: 14px
- `md` - Padding: 12px 24px, font-size: 16px
- `lg` - Padding: 16px 32px, font-size: 18px

**Style:** border-radius full (pill shape), transition luxe

### SectionTitle
**Props:**
- `eyebrow` - Petit label dore en uppercase
- `title` - Titre principal (h2 ou h3)
- `subtitle` - Description sous le titre
- `showLine` - Ligne decorative doree (default: true)
- `align` - 'left' ou 'center'

### Cards
**Style standard:**
```css
background: var(--color-surface)
border-radius: var(--radius-lg) /* 20px */
box-shadow: var(--shadow-card)
transition: all var(--transition-luxe)
```

**Au hover:**
```css
transform: translateY(-6px)
box-shadow: var(--shadow-card-hover)
```

---

## 7. BORDURES & OMBRES

### Border Radius
```css
--radius-sm: 8px    /* Inputs, petits elements */
--radius-md: 12px   /* Badges, tags */
--radius-lg: 20px   /* Cards */
--radius-xl: 28px   /* Grandes sections */
--radius-2xl: 36px  /* Hero elements */
--radius-full: 9999px  /* Boutons, pills */
```

### Ombres
```css
/* Usage courant */
--shadow-sm: 0 2px 8px rgba(20, 67, 74, 0.04)
--shadow-md: 0 4px 20px rgba(20, 67, 74, 0.06)
--shadow-lg: 0 8px 40px rgba(20, 67, 74, 0.08)

/* Cards */
--shadow-card: multi-layer pour profondeur
--shadow-card-hover: elevation augmentee

/* Accent dore */
--shadow-gold: 0 8px 30px rgba(201, 152, 90, 0.25)
--shadow-gold-soft: 0 4px 20px rgba(201, 152, 90, 0.15)
```

---

## 8. TRANSITIONS & ANIMATIONS

### Transitions
```css
--transition-fast: 150ms ease-out     /* Micro-interactions */
--transition-base: 250ms ease-out     /* Standard */
--transition-slow: 400ms ease-out     /* Elements importants */
--transition-luxe: 400ms cubic-bezier(0.25, 0.1, 0.25, 1)  /* Premium feel */
--transition-elegant: 600ms cubic-bezier(0.23, 1, 0.32, 1)  /* Animations principales */
```

### Animations Disponibles
- `fadeSlideUp` - Entree du bas vers le haut
- `fadeSlideIn` - Entree de la gauche
- `scaleIn` - Scale subtil
- `shimmer` - Effet scintillement dore
- `float` - Flottement doux
- `pulseGlow` - Pulse lumineux

### Classes d'Animation
```css
.animate-fade-up     /* Animation entree */
.animate-fade-in
.animate-scale-in
.animate-float
.animate-shimmer
.animate-pulse-glow

/* Delais staggers */
.delay-100 through .delay-800
```

---

## 9. CLASSES UTILITAIRES

### Texte
```css
.text-lead          /* Paragraphe d'intro */
.text-muted         /* Texte secondaire */
.text-accent        /* Couleur doree */
.text-gradient-gold /* Texte avec gradient dore */
.eyebrow            /* Label uppercase avant titre */
.text-highlight     /* Surlignage decoratif */
.text-underline-accent  /* Soulignement anime */
.text-quote         /* Style citation */
.text-caps          /* Small caps */
```

### Hover Effects
```css
.hover-lift   /* translateY(-6px) + shadow */
.hover-glow   /* Shadow doree */
.hover-scale  /* scale(1.02) */
```

### Textures
```css
.texture-subtle  /* Texture noise legere */
.texture-paper   /* Fond papier luxe */
.gradient-luxe   /* Overlay gradient subtil */
.glass           /* Glassmorphism clair */
.glass-dark      /* Glassmorphism sombre */
```

---

## 10. PATTERNS DE SECTIONS

### Structure Standard d'une Section
```tsx
<section className={styles.section}>
  <Container>
    <SectionTitle
      eyebrow="Label"
      title="Titre de la Section"
      subtitle="Description optionnelle"
      align="center"
    />
    {/* Contenu */}
  </Container>
</section>
```

### CSS Section Standard
```css
.section {
  padding: var(--section-padding-mobile) 0;
  background: var(--color-background);
}

@media (min-width: 768px) {
  .section {
    padding: var(--section-padding-tablet) 0;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--section-padding-desktop) 0;
  }
}
```

### Alternance des Fonds
Pour creer du rythme visuel:
- Section 1: `--color-background` (creme)
- Section 2: `--color-surface` (blanc)
- Section 3: `--color-background-alt` (champagne)
- Section speciale: `--gradient-hero` (teal sombre)

---

## 11. COMPOSANTS REUTILISABLES

### Liste des Composants UI
| Composant | Chemin | Usage |
|-----------|--------|-------|
| Button | `@/components/ui/Button` | Boutons et liens CTA |
| Container | `@/components/ui/Container` | Wrapper avec max-width |
| SectionTitle | `@/components/ui/SectionTitle` | Titres de sections |
| ImagePlaceholder | `@/components/ui/ImagePlaceholder` | Placeholder images |

### Liste des Composants Layout
| Composant | Chemin | Usage |
|-----------|--------|-------|
| Header | `@/components/layout/Header` | Navigation principale |
| Footer | `@/components/layout/Footer` | Pied de page |

---

## 12. ACCESSIBILITE

### Focus
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Reduced Motion
Toujours inclure:
```css
@media (prefers-reduced-motion: reduce) {
  /* Desactiver animations */
}
```

### Contraste
- Texte principal sur fond clair: ratio minimum 4.5:1
- Texte large sur fond sombre: ratio minimum 3:1

---

## 13. CONVENTIONS DE NOMMAGE

### Fichiers CSS
- Utiliser CSS Modules: `ComponentName.module.css`
- Classes en camelCase: `.sectionTitle`, `.cardWrapper`

### Structure des Fichiers
```
src/
  components/
    ui/           # Composants reutilisables (Button, Input...)
    layout/       # Header, Footer, Navigation
    sections/     # Sections de pages (Hero, Services...)
  styles/
    variables.css # Variables CSS globales
    globals.css   # Styles de base
```

---

## 14. CHECKLIST NOUVELLE PAGE

- [ ] Utiliser le composant `Container` pour le max-width
- [ ] Utiliser `SectionTitle` pour les titres de sections
- [ ] Respecter les espacements de section (padding responsive)
- [ ] Alterner les couleurs de fond pour le rythme
- [ ] Utiliser les variables CSS (jamais de valeurs en dur)
- [ ] Inclure les transitions luxe sur les elements interactifs
- [ ] Tester le responsive (mobile, tablet, desktop)
- [ ] Verifier l'accessibilite (focus, contraste, reduced motion)
- [ ] Utiliser les ombres appropriees pour la profondeur
