/**
 * Swizzled (ejected) from @docusaurus/theme-classic.
 *
 * Customization: the "latest version" link in the unmaintained/unreleased
 * version banner always points to the Handbook "Getting Started" page in the
 * latest version, instead of trying to resolve the same doc path in the latest
 * version. This avoids 404s when a page that exists in an old version (e.g.
 * /reports) no longer exists in the current version. (MCRDP4S3-774)
 */
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  useActivePlugin,
  useDocVersionSuggestions,
} from '@docusaurus/plugin-content-docs/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';

// Stable landing page the banner should always link to in the latest version.
const LATEST_LANDING_DOC_ID = 'p4samd/handbook/getting_started';

function UnreleasedVersionLabel({siteTitle, versionMetadata}) {
  return (
    <Translate
      id="theme.docs.versions.unreleasedVersionLabel"
      description="The label used to tell the user that he's browsing an unreleased doc version"
      values={{
        siteTitle,
        versionLabel: <b>{versionMetadata.label}</b>,
      }}>
      {
        'This is unreleased documentation for {siteTitle} {versionLabel} version.'
      }
    </Translate>
  );
}
function UnmaintainedVersionLabel({siteTitle, versionMetadata}) {
  return (
    <Translate
      id="theme.docs.versions.unmaintainedVersionLabel"
      description="The label used to tell the user that he's browsing an unmaintained doc version"
      values={{
        siteTitle,
        versionLabel: <b>{versionMetadata.label}</b>,
      }}>
      {
        'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
      }
    </Translate>
  );
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel,
};
function BannerLabel(props) {
  const BannerLabelComponent =
    BannerLabelComponents[props.versionMetadata.banner];
  return <BannerLabelComponent {...props} />;
}
function LatestVersionSuggestionLabel({versionLabel, to, onClick}) {
  return (
    <Translate
      id="theme.docs.versions.latestVersionSuggestionLabel"
      description="The label used to tell the user to check the latest version"
      values={{
        versionLabel,
        latestVersionLink: (
          <b>
            <Link to={to} onClick={onClick}>
              <Translate
                id="theme.docs.versions.latestVersionLinkLabel"
                description="The label used for the latest version suggestion link label">
                latest version
              </Translate>
            </Link>
          </b>
        ),
      }}>
      {
        'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
      }
    </Translate>
  );
}
function DocVersionBannerEnabled({className, versionMetadata}) {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {pluginId} = useActivePlugin({failfast: true});
  const getVersionMainDoc = (version) =>
    version.docs.find((doc) => doc.id === version.mainDocId);
  const {savePreferredVersionName} = useDocsPreferredVersion(pluginId);
  const {latestDocSuggestion, latestVersionSuggestion} =
    useDocVersionSuggestions(pluginId);
  // Always link to a stable landing page (Getting Started) in the latest
  // version, falling back to the same-doc suggestion and then the main doc.
  // This prevents 404s when an old-version page is absent in the latest version.
  const latestVersionSuggestedDoc =
    latestVersionSuggestion.docs.find(
      (doc) => doc.id === LATEST_LANDING_DOC_ID,
    ) ??
    latestDocSuggestion ??
    getVersionMainDoc(latestVersionSuggestion);
  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md',
      )}
      role="alert">
      <div>
        <BannerLabel siteTitle={siteTitle} versionMetadata={versionMetadata} />
      </div>
      <div className="margin-top--md">
        <LatestVersionSuggestionLabel
          versionLabel={latestVersionSuggestion.label}
          to={latestVersionSuggestedDoc.path}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
        />
      </div>
    </div>
  );
}
export default function DocVersionBanner({className}) {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.banner) {
    return (
      <DocVersionBannerEnabled
        className={className}
        versionMetadata={versionMetadata}
      />
    );
  }
  return null;
}
