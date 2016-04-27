import _ from 'lodash';

// Components Array
export const componentsArray = [
  'HO220', 'HO420', 'HO620', 'HO820', 'HO1220', // BlankSpace - Horizontal
  'VE240', 'VE260', // BlankSpace - Vertical
  'SI220', 'SI240', // Navigation - Sidebar
  'HE420', 'HE620', // Navigation - Header
  'TW420', 'TW460', // Social - Twitter
  'BL440', 'BL460', 'BL480', // Social - Blog Post
  'MU620', 'MU640', // Media - Music
  'IG260', 'IG820', // Media - Instagram
  'VI640', 'VI860', // Media - Video
];

// Components Mapping
export const componentsMap = {
  'HO220': { type: 'BlankSpace', columns: 2, rows: 2 },
  'HO420': { type: 'BlankSpace', columns: 4, rows: 2 },
  'HO620': { type: 'BlankSpace', columns: 6, rows: 2 },
  'HO820': { type: 'BlankSpace', columns: 8, rows: 2 },
  'HO1220': { type: 'BlankSpace', columns: 12, rows: 2 },

  'VE240': { type: 'BlankSpace', columns: 2, rows: 4 },
  'VE260': { type: 'BlankSpace', columns: 2, rows: 6 },

  'SI220': { type: 'NavigationSidebar', columns: 2, rows: 2 },
  'SI240': { type: 'NavigationSidebar', columns: 2, rows: 4 },

  'HE420': { type: 'NavigationHeader', columns: 4, rows: 2 },
  'HE620': { type: 'NavigationHeader', columns: 6, rows: 2 },

  'TW420': { type: 'SocialTwitter', columns: 4, rows: 2 },
  'TW460': { type: 'SocialTwitter', columns: 4, rows: 6 },

  'BL440': { type: 'SocialBlogPost', columns: 4, rows: 4 },
  'BL460': { type: 'SocialBlogPost', columns: 4, rows: 6 },
  'BL480': { type: 'SocialBlogPost', columns: 4, rows: 8 },

  'MU620': { type: 'MediaMusic', columns: 6, rows: 2 },
  'MU640': { type: 'MediaMusic', columns: 6, rows: 4 },

  'IG260': { type: 'MediaInstagram', columns: 2, rows: 4 },
  'IG820': { type: 'MediaInstagram', columns: 8, rows: 2 },

  'VI640': { type: 'MediaVideo', columns: 6, rows: 4 },
  'VI860': { type: 'MediaVideo', columns: 8, rows: 6 },
};

// Components Options
let tmp_components_options = [];
componentsArray.forEach((component) => {
  tmp_components_options.push({
    value: component,
    label: component.toUpperCase(),
  });
});
export const components_options = tmp_components_options;


// Default States
export const defaultSearchState = {
  value: '',
};
export const defaultComponentsState = {
  list: _.shuffle(componentsArray), // this line will show all components
  //list: ['HO220', 'VE240', 'HO420'], // this line for showing selected components
  //list: [], // this should be the default.
};
