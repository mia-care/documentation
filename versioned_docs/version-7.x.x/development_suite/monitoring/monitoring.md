---
id: monitoring
title:  Monitor your applications
sidebar_label: Monitor your applications
---
## Monitoring Infrastructure

The Monitoring Infrastructure section is the Developer Console area dedicated to the control and monitoring of its infrastructure.

The area is divided by the number of environments existing in the specific project. In the top right dropdown, it is possible to change the environment to be monitored.

Within each environment you can view, using the sidebar on the left, all the workloads that you can monitor, as pods.

All the available pods and their current properties.
The labels of the columns in the table are:
* **Status** : Status representing a general overview of the pod state. Can be:
  * **OK**: the pod has phase completed or running, has all containers ready and has never restarted
  * **Warning**: the pod has phase pending or error, has some container not ready or has restarted
* **Name**: the name that identifies the pod
* **Component**: the name of the service with the tag version
* **Phase**: the current status of the pod. Can be:
    * **running**: it is deployed and working.
    * **completed**: it is correctly deployed and has completed its work.
    * **pending**: the pod is scheduled but could have some configuration error, or the containers are still not ready.
    * **error**: the pod has failed.
* **Containers Ready**: the number of ready pods / the total.
:::note
In case the Containers ready field has the value `0/1` could be because the pod has Status `completed`, so everything is ok, or `pending` and is possible the presence of configuration errors.
:::

* **Total Pods Restart**: the number of times the pod has restarted.
* **Age**: the date since the pod was deployed.

![list_of_pods](img/list_of_pods.png)

:::info
For more details, hovering the status icon, and the phase label the user will see a tooltip with more information 
:::

Within the table there are a series of action that can be performed:
- It is possible to refresh the table manually or setting an auto-refresh timer with the specific button in the top-right corner to check changes in the pods status or phase.
- With the `search` input field, and the `Filter by` selection it is possible to filter the list of pods by their name or setting specific values for some columns such as: Status, Phase and TotalPodsRestart.
![filter_pods](img/filter.png)
  
- The option icon on the right of each pod row allows you to:
  - go to the specific configuration page in the design area of the console, if the pod type is `custom` or `cronjob`;
    ![burger_menu_ms](img/burger_menu_config.png)
  - go to the logs of a container, always visible;
  - go to the previous logs of a container, visible **only if the pod has ever restarted**;
    ![burger_menu_ms](img/no_pervious.png)  
- to restart the individual pod, always visible.
    ![burger_menu_cron](img/burger_menu_logs.png)
    
:::info
When restarting a pod a modal like the one in figure will be shown to the user giving a feedback of which pods are going to be restarted and the result of the restart itself.
:::
![modal](img/modal.png)
![modal_restarted](img/modal_restarted.png)
:::caution
Restarting a pod may cause a downtime of the service if not correctly replicated.
:::


- The user may select one or more pods and choose to **restart** or view inside the table all the selected ones. 
  :::caution
    Restarting a pod may cause a downtime of the service if not correctly replicated. 
  :::
  ![multiselect](img/multiselect.png)
  ![view_selected](img/view_selected.png)
  
Clicking on a pod name you can examine its overview and its specific logs.

### Pod overview

In the overview section you can see generic information regaring the desired Pod and a recap of the containers that are part of the Pod itself.

The user can also choose to **restart** their pod. Clicking "Restart Pod" the POD will be deleted and restarted. To view the new logs, the user will have to wait for the page to reload or to reload the page.

:::caution
Restarting a pod may cause a downtime of the service if not correctly replicated.
:::

![overview_collapsed](img/overview.png)

### Pod logs

In the tab `Logs`, are rendered the logs of a container that is running in the pod.

![pod_logs](img/pod_logs.png)

The logs can be filtered, downloaded, deleted or prettified.

![prettified_logs](img/prettified_logs.png)

It is possible to update the showed logs by clicking "Refresh Logs".

### Pod previous logs

In the tab `Previous logs`, are rendered the logs of the container that has previously crashed.

![pod_logs](img/pod_previous_logs.png)

The logs can be filtered, downloaded or prettified.

:::info
Check out the [Guidelines for logs](../../getting_started/monitoring-dashboard/dev_ops_guide/log) to know how to guarantee uniformity in the logs generated by your services, in order to ensure easy and effective usage.
:::