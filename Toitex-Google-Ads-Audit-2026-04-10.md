# Google Ads Account Audit Report
**Account:** Simon Mathieu — Toitex (9146388366)
**Period:** Derniers 30 jours (11 mars – 10 avril 2026)
**Date de l'audit:** 10 avril 2026

---

## Account Health Score: 28/100

| Dimension | Score | Max |
|---|---|---|
| Gaspillage budgétaire | 5 | 25 |
| Qualité termes de recherche | 5 | 20 |
| Quality Scores | 5 | 20 |
| Allocation budgétaire | 5 | 15 |
| Créatifs publicitaires | 4 | 10 |
| Appareils & Géo | 4 | 10 |
| **TOTAL** | **28** | **100** |

---

## Résumé exécutif

Le compte Toitex Google Ads est en **état critique**. Le Quality Score moyen pondéré est de **2.68/10** — le pire niveau possible — ce qui fait perdre **76% des impressions disponibles** à cause du rang publicitaire. Le mot-clé "couvreur" en BROAD match absorbe **36% du budget total** ($1,016) pour seulement 1 conversion. Le gaspillage identifié totalise **$655/mois (23% du budget)**. Les corrections ci-dessous pourraient réduire le CPA de plus de 50% et économiser **$800+/mois**.

---

## Dépense totale & Conversions

| Métrique | Valeur |
|---|---|
| Dépense totale (30j) | $2,838.00 |
| Clics totaux | 994 |
| Impressions | 19,869 |
| CTR moyen | 5.0% |
| CPC moyen | $2.85 |
| Conversions (primaires) | 2 |
| Conversions (toutes) | 70 |
| CPA (primaire) | $1,419.00 |
| CPA (toutes conv.) | $40.54 |

> **Note:** 70 "toutes conversions" vs 2 conversions primaires — le suivi des conversions doit être vérifié. Les conversions secondaires (appels, clics tél.) sont comptées mais pas comme objectif principal.

---

## Gaspillage identifié

**Total gaspillage estimé: $655/mois (23% du budget)**

### Top 15 termes de recherche gaspillés (0 conversion)

| Terme de recherche | Groupe | Dépense | Clics | Action |
|---|---|---|---|---|
| roof repair montreal | Laval → mauvaise campagne | $44.78 | 1 | Négatif |
| toitures bouda | Laval (concurrent) | $41.40 | 2 | Négatif |
| toiture couvreur | Groupe 1 (générique) | $22.84 | 11 | Surveiller |
| toiture montreal | Groupe 1 | $13.93 | 5 | Garder |
| toiture metallique | Laval (hors service) | $13.70 | 1 | Négatif |
| prix bardeau asphalte | Groupe 1 (DIY/magasinage) | $12.26 | 4 | Négatif |
| prix tole toiture | Groupe 1 (tôle) | $11.94 | 8 | Négatif |
| toiture en gravier | Toit plat (non pertinent) | $11.73 | 2 | Négatif |
| comment installer bardeaux | Groupe 1 (DIY) | $9.19 | 3 | Négatif |
| bardeau asphalte rouge | Groupe 1 (couleur/magasin) | $9.12 | 2 | Négatif |
| toitures montreal nord | Laval (mauvaise campagne) | $8.61 | 1 | Négatif |
| toiture en tôle prix pied carré | Groupe 1 (tôle) | $8.47 | 3 | Négatif |
| gouttières mtl métropolitain | Groupe 1 (gouttières) | $7.96 | 3 | Négatif |
| couvreur st jean sur richelieu | Groupe 1 (hors zone) | $7.73 | 3 | Négatif |
| ferme de toit | Groupe 1 (structural) | $7.52 | 3 | Négatif |

**Sous-total termes gaspillés: ~$280/mois**

### Top 5 mots-clés problématiques

| Mot-clé | Match | QS | Dépense | Conv | CPA | Action |
|---|---|---|---|---|---|---|
| couvreur | BROAD | 2 | $1,016 | 1 | $1,016 | Restreindre en PHRASE ou EXACT |
| toiture | BROAD | 3 | $161 | 0 | ∞ | Restreindre en PHRASE |
| toiture | PHRASE | N/A | $153 | 0 | ∞ | Ajouter négatifs |
| toiture laval | BROAD | N/A | $152 | 0 | ∞ | Campagne pausée, vérifier |
| estimation toiture | BROAD | 5 | $142 | 0 | ∞ | Surveiller, ajouter landing page dédiée |

---

## Top 5 Corrections (par impact budgétaire)

### Fix #1: Restreindre "couvreur" de BROAD à PHRASE/EXACT
**Économie estimée: $350/mois**
Quoi faire: Pauser le mot-clé "couvreur" en BROAD match. Le remplacer par "couvreur montréal" en PHRASE et "couvreur toit plat montréal" en EXACT.
Pourquoi: Ce seul mot-clé BROAD dépense $1,016/mois (36% du budget) avec QS 2. Il capte des termes non pertinents comme "couvreur tuile", "couvreur st jean", "couvreur prix" (information). En le resserrant, on élimine ~$350 de clics non qualifiés par mois.

### Fix #2: Ajouter les mots-clés négatifs identifiés
**Économie estimée: $200/mois**
Quoi faire: Ajouter ces négatifs au niveau du compte: tole, tôle, goudron, tuile, installer, gouttières, larmier, calcul, mystique, couleur, st jean, patrick morin, materiaux, matériaux, drain, canac, bmr, rona, gravier, ferme de toit, contreplaqué, landmark, bouda, metallique, métallique, deck, piscine.
Pourquoi: $280+/mois de clics sur des termes de DIY, shopping, concurrents et zones hors service.

### Fix #3: Corriger le Quality Score landing page
**Économie estimée: $150/mois**
Quoi faire: Optimiser le LCP de couvreur-montreal.html (actuellement 6.7s, Google veut <2.5s). Compresser l'image hero, inline le CSS critique, ajouter srcset mobile.
Pourquoi: 100% des mots-clés ont un landing page score "BELOW AVERAGE". Chaque point de QS gagné réduit le CPC de ~16%. Passer de QS 3 à QS 5 = -32% de CPC sur $2,838/mois = $908 d'économie potentielle (estimé conservatif: $150/mois).

### Fix #4: Réduire les enchères tablette de -50%
**Économie estimée: $75/mois**
Quoi faire: Ajouter un ajustement d'enchère de -50% sur tablettes dans la campagne Montréal.
Pourquoi: Les tablettes dépensent $148/mois avec 0 conversion et un CTR de 6.6% (le plus élevé mais 0 conv). Le CPC tablette ($2.18) est bon mais le trafic ne convertit pas.

### Fix #5: Ajouter des variantes de pub dans Membrane élastomère et Toit plat
**Économie estimée: $50/mois**
Quoi faire: Ajouter 2 RSAs supplémentaires par groupe. Tester des angles "prix au pied carré", "garantie 25 ans", "financement 0%".
Pourquoi: Ces 2 groupes n'ont qu'1 seule pub chacun. Google recommande 3 minimum pour optimiser le machine learning. Les 2 pubs du Groupe 1 (pausé) avaient des CTR de 4.7% et 5.3% — on peut battre ça avec du copy plus ciblé.

**Total économies estimées: $825/mois**

---

## Analyse Quality Score

**QS moyen pondéré par impressions: 2.68/10** ⚠️ CRITIQUE

### Distribution QS

| Quality Score | # Mots-clés | % Impressions |
|---|---|---|
| 9-10 | 0 | 0% |
| 7-8 | 1 | <1% |
| 5-6 | 4 | 9% |
| 3-4 | 20 | 52% |
| 1-2 | 15 | 39% |

### Composantes QS — Diagnostic

| Composante | Résultat | Impact |
|---|---|---|
| **Landing page** | BELOW AVERAGE sur 100% des KW | Cause #1 du QS bas |
| **Ad relevance** | AVERAGE à ABOVE AVERAGE | OK |
| **Expected CTR** | AVERAGE | OK |

**Le problème est clair: la landing page plombe tout.** La pertinence des annonces et le CTR attendu sont corrects, mais la page d'atterrissage tire le QS vers le bas sur chaque mot-clé.

**Économie CPC estimée si QS passe de 3 à 5: -32% → ~$900/mois**

---

## Allocation budgétaire

### Part d'impression (Impression Share)

| Campagne | IS actuel | Perdu (budget) | Perdu (rang) |
|---|---|---|---|
| Montréal | **9.99%** | 14.56% | **76.38%** |

**Tu ne captures que 10% des recherches disponibles.** 76% est perdu à cause du rang (QS + enchère), 14.5% à cause du budget. Corriger le QS récupérerait une part significative de ce 76%.

### Campagnes & Groupes actifs

| Élément | Statut | Dépense | Conv | CPA | Verdict |
|---|---|---|---|---|---|
| Montréal → Groupe 1 | PAUSÉ | $2,367 | 1 | $2,367 | ⛔ Bien pausé |
| Montréal → Membrane élastomère | ACTIF | $172 | 0 | ∞ | ⚠️ Jeune, surveiller |
| Montréal → Toit plat | ACTIF | $82 | 0 | ∞ | ⚠️ Jeune, surveiller |
| Laval 2026 | PAUSÉ | $216 | 1 | $216 | ✅ Bon CPA, réactiver? |

---

## Performance des créatifs

### Annonces par groupe (actif)

| Groupe | # RSAs | CTR | Statut |
|---|---|---|---|
| Membrane élastomère | 1 | 7.35% ✅ | Ajouter 2 variantes |
| Toit plat | 1 | 5.92% | Ajouter 2 variantes |
| Laval (pausé) | 1 | 3.02% ⚠️ | Améliorer le copy |

Le groupe "Membrane élastomère" a le meilleur CTR (7.35%) — le copy est pertinent et ciblé. "Toit plat" performe correctement. Tous les groupes actifs manquent de variantes (1 pub au lieu de 3 minimum).

---

## Performance par appareil

| Appareil | Dépense | Clics | Conv | CPA | CTR | Recommandation |
|---|---|---|---|---|---|---|
| Mobile | $1,849 | 691 | 1 | $1,849 | 5.28% | Principal canal — garder |
| Desktop | $625 | 217 | 0 | ∞ | 4.20% | Surveiller, -20% enchère si toujours 0 conv |
| Tablette | $148 | 68 | 0 | ∞ | 6.63% | **-50% enchère** |

**Mobile génère 100% des conversions primaires.** Desktop et tablette dépensent $773/mois sans conversion primaire.

---

## Performance géographique

Toutes les données géo sont au niveau Canada (criterion 2124). Le ciblage est limité à la région Montréal/Laval. Pas d'anomalie géographique détectée — le ciblage semble correct.

| Type | Dépense | Conv |
|---|---|---|
| Zone d'intérêt (recherche Montréal) | $1,571 | 1 |
| Localisation physique (dans Montréal) | $1,051 | 0 |

---

## Mots-clés négatifs recommandés (à ajouter immédiatement)

**Négatifs compte (s'appliquent à toutes les campagnes):**

tole, tôle, goudron, tuile, installer, gouttières, larmier, calcul, mystique, couleur, st jean, patrick morin, materiaux, matériaux, drain, canac, bmr, rona, gravier, ferme de toit, contreplaqué, landmark, bouda, metallique, métallique, deck, piscine, comment, diy, prix paquet, rouge, achat, vente, formation, cours, peinture

---

*Rapport généré par Claude — audit en lecture seule, aucune modification appliquée au compte.*
