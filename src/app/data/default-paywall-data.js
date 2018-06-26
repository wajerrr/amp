const defaultData = {
  headerTitle: 'You’ve reached your article limit',
  benefitsList: {
    type: 'list',
    content: {
      list: [
        {
          title: 'Print or digital edition',
          text: 'delivered to you each week',
        },
        {
          title: 'Economist.com',
          text:
            'including blog content updated throughout the week and our online archive',
        },
        {
          title: 'Audio edition',
          text: 'each week’s issue read by professional broadcasters',
        },
        {
          title: 'The Economist Espresso',
          text: 'your morning briefing direct to your smartphone or inbox',
        },
      ],
    },
  },
  image: {
    type: 'image',
    content: {
      src:
        'https://i.piano.io/managedservices/theeconomist/regwall-product.png',
      alt: 'paywall-image',
    },
  },
};

export default defaultData;
