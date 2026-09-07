/**
 * Ejected from @docusaurus/theme-classic to register one extra navbar item type.
 * ComponentTypes is an officially safe eject target and its documented purpose is exactly this
 * (see facebook/docusaurus#7227).
 *
 * The ONLY difference from the upstream mapping is the "custom-docSection" entry at the bottom.
 * Everything above it is upstream's list, so when Docusaurus adds a new built-in item type this
 * file needs the new import added here too. Keep it in sync on upgrades.
 *
 * See ./DocSectionNavbarItem.js for why "custom-docSection" exists.
 */
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import DocSectionNavbarItem from '@theme/NavbarItem/DocSectionNavbarItem';

const ComponentTypes = {
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
  'custom-docSection': DocSectionNavbarItem,
};

export default ComponentTypes;
