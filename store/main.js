export const state = () => ({
  darkMode: false,
  productType: [
    {
      type: 'bronzer',
      title: 'Bronzer',
      category: ['powder'],
    },
    {
      type: 'blush',
      title: 'Blush on',
      category: ['powder', 'cream'],
    },
    {
      type: 'eyebrow',
      title: 'Eyebrow',
      category: ['pencil'],
    },
    {
      type: 'eyeliner',
      title: 'Eyeliner',
      category: ['liquid', 'pencil', 'gel', 'cream'],
    },
    {
      type: 'eyeshadow',
      title: 'Eyeshadow',
      category: ['palette', 'pencil', 'cream'],
    },
    {
      type: 'foundation',
      title: 'Foundation',
      category: [
        'concealer',
        'liquid',
        'contour',
        'bb_cc',
        'cream',
        'mineral',
        'powder',
        'highlighter',
      ],
    },
    {
      type: 'lip_liner',
      title: 'Lip liner',
      category: ['pencil'],
    },
    {
      type: 'lipstick',
      title: 'Lipstick',
      category: ['lipstick', 'lip_gloss', 'liquid', 'lip_stain'],
    },
    {
      type: 'mascara',
      title: 'Mascara',
      category: [],
    },
    {
      type: 'nail_polish',
      title: 'Nail polish',
      category: [],
    },
  ],
  productBrands: [
    'almay',
    'alva',
    'anna sui',
    'annabelle',
    'benefit',
    'boosh',
    `burt's bees`,
    'butter london',
    `c'est moi`,
    'cargo cosmetics',
    'china glaze',
    'clinique',
    'coastal classic creation',
    'colourpop',
    'covergirl',
    'dalish',
    'deciem',
    'dior',
    `dr. hauschka`,
    'e.l.f.',
    'essie',
    'fenty',
    'glossier',
    'green people',
    'iman',
    `l'oreal`,
    'lotus cosmetics usa',
    `maia's mineral galaxy`,
    'marcelle',
    'marienatie',
    'maybelline',
    'milani',
    'mineral fusion',
    'misa',
    'mistura',
    'moov',
    'nudus',
    'nyx',
    'orly',
    'pacifica',
    'penny lane organics',
    'physicians formula',
    'piggy paint',
    'pure anada',
    'rejuva minerals',
    'revlon',
    `sally b's skin yummies`,
    'salon perfect',
    'sante',
    'sinful colours',
    'smashbox',
    'stila',
    'suncoat',
    'w3llpeople',
    'wet n wild',
    'zorah',
    'zorah biocosmetiques',
  ],
  productTags: [
    'Canadian',
    'CertClean',
    'Chemical Free',
    'Dairy Free',
    'EWG Verified',
    'EcoCert',
    'Fair Trade',
    'Gluten Free',
    'Hypoallergenic',
    'Natural',
    'No Talc',
    'Non-GMO',
    'Organic',
    'Peanut Free Product',
    'Sugar Free',
    'USDA Organic',
    'Vegan',
    'alcohol free',
    'cruelty free',
    'oil free',
    'purpicks',
    'silicone free',
    'water free',
  ],
  productBrandsIndex: [],
  productTagsIndex: [],
})

export const mutations = {
  setState(state, params) {
    state[params[0]] = params[1]
  },
  shuffle(state, params) {
    params[1].sort(() => Math.random() - 0.5)
    if(params[2] && this.$_.size(params[1]) > params[2]) params[1].length = params[2]
    this.$setState(params[0], params[1])
  }
}
