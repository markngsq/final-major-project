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
  'HO220': { type: 'BlankSpace', type_string: 'Blank Space', columns: 2, rows: 2, description: 'This is a blank space' },
  'HO420': { type: 'BlankSpace', type_string: 'Blank Space', columns: 4, rows: 2, description: 'This is a blank space' },
  'HO620': { type: 'BlankSpace', type_string: 'Blank Space', columns: 6, rows: 2, description: 'This is a blank space' },
  'HO820': { type: 'BlankSpace', type_string: 'Blank Space', columns: 8, rows: 2, description: 'This is a blank space' },
  'HO1220': { type: 'BlankSpace', type_string: 'Blank Space', columns: 12, rows: 2, description: 'This is a blank space' },

  'VE240': { type: 'BlankSpace', type_string: 'Blank Space', columns: 2, rows: 4, description: 'This is a blank space' },
  'VE260': { type: 'BlankSpace', type_string: 'Blank Space', columns: 2, rows: 6, description: 'This is a blank space' },

  'SI220': { type: 'NavigationSidebar', type_string: 'Navigation Sidebar', columns: 2, rows: 2, description: 'This is a navigation sidebar' },
  'SI240': { type: 'NavigationSidebar', type_string: 'Navigation Sidebar', columns: 2, rows: 4, description: 'This is a navigation sidebar' },

  'HE420': { type: 'NavigationHeader', type_string: 'Navigation Header', columns: 4, rows: 2, description: 'This is a navigation header' },
  'HE620': { type: 'NavigationHeader', type_string: 'Navigation Header', columns: 6, rows: 2, description: 'This is a navigation header' },

  'TW420': { type: 'SocialTwitter', type_string: 'Social Twitter', columns: 4, rows: 2, description: 'This displays a Twitter widget embed' },
  'TW460': { type: 'SocialTwitter', type_string: 'Social Twitter', columns: 4, rows: 6, description: 'This displays a Twitter widget embed' },

  'BL440': { type: 'SocialBlogPost', type_string: 'Social Blog Post', columns: 4, rows: 4, description: 'This displays a blog post widget' },
  'BL460': { type: 'SocialBlogPost', type_string: 'Social Blog Post', columns: 4, rows: 6, description: 'This displays a blog post widget' },
  'BL480': { type: 'SocialBlogPost', type_string: 'Social Blog Post', columns: 4, rows: 8, description: 'This displays a blog post widget' },

  'MU620': { type: 'MediaMusic', type_string: 'Media Music', columns: 6, rows: 2, description: 'Displays a Soundcloud widget' },
  'MU640': { type: 'MediaMusic', type_string: 'Media Music', columns: 6, rows: 4, description: 'Displays a Soundcloud widget' },

  'IG260': { type: 'MediaInstagram', type_string: 'Media Instagram', columns: 2, rows: 4, description: 'This displays an Instagram widget embed' },
  'IG820': { type: 'MediaInstagram', type_string: 'Media Instagram', columns: 8, rows: 2, description: 'This displays an Instagram widget embed' },

  'VI640': { type: 'MediaVideo', type_string: 'Media Video', columns: 6, rows: 4, description: 'This displays a Vimeo widget embed' },
  'VI860': { type: 'MediaVideo', type_string: 'Media Video', columns: 8, rows: 6, description: 'This displays a Vimeo widget embed' },
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
  //list: _.shuffle(componentsArray), // this line will show all components
  //list: ['HO420', 'HE420', 'SI240', 'VE240', 'HO420', 'BL440', 'SI240', 'HO220'], // this line for showing selected components
  list: [], // this should be the default.
  isWYSIWYG: false,
};
