/**
 * Custom navbar item type: "custom-docSection".
 *
 * WHY THIS EXISTS
 * The stock "doc" navbar item (@theme/NavbarItem/DocNavbarItem) decides whether it is active
 * by comparing SIDEBAR IDENTITY:
 *
 *     isActive={() => pageActive || (!!activeDoc?.sidebar && activeDoc.sidebar === doc.sidebar)}
 *
 * Every page on this site is served from a single sidebar named "P4SaMD". That is true in
 * sidebars.json and, under the same name, in all six versioned_sidebars files. The comparison
 * above was therefore true for every doc item on every page, so all of them rendered as active
 * at once and the entire navbar appeared highlighted.
 *
 * This component keeps the rest of a doc item's behaviour, above all the version-aware href
 * resolution through useLayoutDoc, and decides active state from the URL path instead, using
 * the item's own activeBaseRegex.
 *
 * WHY A CUSTOM TYPE RATHER THAN A SWIZZLE OF DocNavbarItem
 * ComponentTypes is an officially safe swizzle target whose stated purpose is adding custom
 * navbar item types (see facebook/docusaurus#7227), and any navbar type whose name starts with
 * "custom-"
 * accept extra props by design, so activeBaseRegex is passed legitimately instead of being
 * smuggled through a schema escape hatch. Nothing upstream is forked, so a Docusaurus upgrade
 * cannot leave a stale copy of theme internals behind. And if this file or its registration in
 * ./ComponentTypes.js ever goes missing, @theme/NavbarItem throws
 *     No NavbarItem component found for type "custom-docSection".
 * at render time, so the wiring fails loudly instead of quietly restoring the original bug.
 *
 * ADDING A NEW SECTION
 * Add the navbar item with type "custom-docSection" and give it an activeBaseRegex that matches
 * only that section's URLs. Anchor it with ^, and for a single page also anchor the end with /?$
 * or it will match sibling pages. Keep the optional leading (?:[^/]+/)? group so the item also
 * matches versioned URLs such as /docs/2.5.x/... Sections with no navbar item correctly show no
 * active item.
 */
import React from 'react';
import {
  useActiveDocContext,
  useLayoutDoc,
} from '@docusaurus/plugin-content-docs/client';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';

/**
 * Inlined from @docusaurus/theme-common (lib/utils/regexpUtils.js) so this file depends only on
 * packages that package.json actually declares. Matching is case-insensitive and UNANCHORED,
 * which is why every activeBaseRegex below is anchored by hand.
 */
function isRegexpStringMatch(regexAsString, value) {
  if (typeof regexAsString === 'undefined' || typeof value === 'undefined') {
    return false;
  }
  return new RegExp(regexAsString, 'gi').test(value);
}

export default function DocSectionNavbarItem({
  docId,
  activeBaseRegex,
  label: staticLabel,
  docsPluginId,
  ...props
}) {
  const {activeDoc} = useActiveDocContext(docsPluginId);
  const doc = useLayoutDoc(docId, docsPluginId);
  const pageActive = activeDoc?.path === doc?.path;

  // Same guard as the stock doc item: draft and unlisted docs stay out of the navbar.
  if (doc === null || (doc.unlisted && !pageActive)) {
    return null;
  }

  return (
    <DefaultNavbarItem
      exact
      {...props}
      // pageActive is the deliberate fallback. If activeBaseRegex is absent or mis-authored,
      // the item still highlights on its own landing page rather than the navbar going dark.
      // Do not simplify it away.
      isActive={(match, location) =>
        pageActive || isRegexpStringMatch(activeBaseRegex, location.pathname)
      }
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  );
}
