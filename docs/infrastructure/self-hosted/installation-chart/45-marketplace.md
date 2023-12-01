---
id: marketplace
title: Marketplace
sidebar_label: Marketplace
---

<!--
WARNING: this file was automatically generated by Mia-Platform Doc Aggregator.
DO NOT MODIFY IT BY HAND.
Instead, modify the source file and run the aggregator to regenerate this file.
-->

Mia-Platform Console is shipped with a Marketplace full of useful services that can be used by Developers within their Projects.

The Marketplace receives updates with every Mia-Platform Console upgrade but can be disabled or filtered with the following options (set inside the `configurations` object):


| Name | Type | Description | Default | Optional |
|:----:|:----:|:-----------:|:-------:|:--------:|
|`enableMarketplaceSync`| `boolean` | Enable Marketplace Sync hook. If false, any other marketplace related value is ignored. | `true` | ✅ |
|`marketplaceSyncFilters`| `string` | A comma separated list of services types that needs to be updated (possible values are plugin,template,example,application). | `plugin` | ✅ |
|`enableProvidersSync` | `boolean` | Enable Providers Sync hook for runtime service providers updates. | `true` | ✅ |

:::caution
If `marketplaceSyncFilters` is set to emtpy string (`""`) the script will be deployed but it will immediately exit; if you plan to avoid marketplace synchronization please consider using the `enableMarketplaceSync` set to `false`.
:::

## Examples

### Disable the whole sync process

```yaml
mia-console:
  configurations:
    ...
    enableMarketplaceSync: false
```

### Only sync plugins

```yaml
mia-console:
  configurations:
    ...
    marketplaceSyncFilters: "plugin"
```