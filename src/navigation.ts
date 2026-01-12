import { getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getHomePermalink() },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `© ${new Date().getFullYear()} Adam Bron`,
};
