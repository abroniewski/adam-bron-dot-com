import { getAsset, getHomePermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getHomePermalink() },
    { text: 'Projects', href: getPermalink('/projects') },
    { text: 'The Lab', href: getPermalink('/the-lab') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `© ${new Date().getFullYear()} Adam Bron`,
};
