# v5.8.0 (June 18,2020)

## New features

### New Deploy area version

* **Running deployed version**        
    Now, when you select the environment where you want to deploy, you can visualize information about **the last successful deploy** on that environment (visibile information is the following: deployed commit, deployment type, user that deployed, duration, time of deployment and logs).

    ![deploy-env](img/deploy-env.png)

* **Branch and commits compare**        
    Now, when you select the branch to deploy, you can **visualize the last 10 commits done on it** and the **changes** between the last deployed branch on the choosen environment and the selected branch to be deployed.

    ![deploy-branch](img/deploy-branch.png)

* **Experience**      
    **New deployment experience**: when you click the "Deploy" button a new modal appears to inform you about deployment progress.

    ![deploy-modal](img/deploy-modal.png)

### New API Portal version

* **Example section**        
    New section `Example` **shows a response sample** to the API currently opened.

    ![APIportal-example](img/APIportal-example.png)

* **Endpoint call**        
    You can now call an Endpoint from DevOps Console **without specifying the headers**.

    ![api-secret-try](img/api-secret-try.png)

* **Response Area expansion**       
    Now you can **expand the response area** over the whole width of the page. 

    ![APIportal-response-area](img/APIportal-response-area.png)

* **Properties management improvement**        
    The **checkbox system of properties has been removed**: now you can simply write in a textbox if you want to pass the corresponding property. If you want to pass an empty value, you have to leave the property empty and check the corresponding property in the button `Properties`.

    ![APIportal-checkbox](img/APIportal-checkbox.png)

* **Collapse and expansion management**        
    You can now **expand and collapse cards and properties through an arrow** near each copy: `Expand` and `Collapse` buttons have been removed.

    ![APIportal-collapse](img/APIportal-collapse.png)

* **Menu**        
    API Portal menu has been **moved from left to right** to simplify UX.

    ![APIportal-menu](img/APIportal-menu.png)

* **Fixed files upload**      
    In the API Portal, you can successfully **upload files** on each method identified as `file` field.

## Improvements

* **Horizontal Launcher Menu**             
    Launcher menu is now **always in the top bar**, making it always visible and accessible from any page. You will not be required anymore to open the left drawer to switch section and the hamburger menu has been removed.

    ![launcher-menu](img/launcher-menu.png)

* **Design - Menu**      
    Now you can **expand the menu** of each section in the Design area.

    ![width-menu](img/width-menu.png)

* **Authentication**       
    You can now define a **different auth provider for fronted and backend** to authenticate users.

* **Design - Microservices**        
    **Log Parser specification** for custom microservices has been updated: `pino`, `bunyan` and `nginx` support has been dropped and migrated to `mia-json` and `mia-ngnix` (previous values have been migrated).

* **Design - CRUD**        
    With the **new header and footer**, CRUD section has been aligned with Microservices, Proxies and Cronjobs sections: the `Delete` button is now at the footer of the page.

    ![delete-crud](img/delete-crud.png)        

## Fixes

* **DevOps Console configuration**       
    Status routes of the swagger-aggregator service are now configured correctly **using Mia Platform standard routes**:`/-/healthz` e `/-/ready`

* **Design - Microservices**              
    Now, when you are creating a microservice starting from Docker Image, you can **specify the port of the docker registry host** (e.g. `host:port/project/service:tag`) without being blocked by the validation of the field.

* **Design - CRUD**        
    **Alignment** of the `Required` checkbox position in the CRUD section.

## How to update your DevOps Console?

!!! warning

    This version contains a breaking update for on-premise installations. We are working on the updating process of on-premise Console in order to optimize this release. In the meantime, you can contact your Mia Platform referent to know more about simplified release modalities.

If you have an on-premise Console installation, to use these features, you have to update:

* Console Website @1.22.0 (`nexus.mia-platform.eu/api-console/website:1.22.0`)

* Console Backend @2.0.0 (`nexus.mia-platform.eu/api-console/backend:2.0.0`)

* Console Environment Variables @1.0.2 (`nexus.mia-platform.eu/console/environments-variables:1.0.2`)

* Kubernetes Service @1.4.1 (`nexus.mia-platform.eu/dev-portal/kubernetes-service:1.4.1`)

* Console Monitoring Dashboard @1.3.6 (`nexus.mia-platform.eu/console/monitoring-dashboard:1.3.6`)

* Console Deploy Website @1.2.0 (`nexus.mia-platform.eu/console/deploy-website:1.2.0`)

Moreover, in case of on-premise Console, you have to remove the following authentication services:

* `auth-service`

* `session-manager`

and add the new service `authentication-service` (`nexus.mia-platform.eu/core/authentication-service:1.0.0`) with its configurations.

Moreover, in case of on-premise Console, to release the new version 5.8.0, you have to modify DevOps Console project configuration and execute manual cleaning operations on Cluster and MongoDB.

**DevOps Console project**

*Setup Infrastructure*

You have to remove the following environment variables:

* `AUTH_SERVICE_BASE_URL`

* `AUTH_CLIENT_ID`

* `AUTH_CLIENT_SECRET`

* `USER_PROPERTY_BASE_URL`

and add the following environment variables:

* `MIA_JWT_TOKEN_SIGN_KEY`: random string of at least 2048 bit (no special characters are supported)

* `PROVIDER_TOKEN_PASS_PHRASE`: random string of at least 2048 bit (no special characters are supported)

and verify that the following environment variable is present in each environment:

* `API_CONSOLE_BASE_URL`

*Design - CRUD*

You have to add the collection:

* `userinfo`

*Design - microservices*

You have to remove:

* `auth-service`

* `user-service`

* `session-manager`

and add:

* `authentication-service`

and migrate to managed service:

* `files-service` (moreover, all the old `files-service` configurations have to be removed manually from GitLab)

*Endpoint*

You have to add:

* `/api/authorize` → `authentication-service`

* `/api/oauth/token` → `authentication-service`

* `/api/refreshtoken` → `authentication-service`

* `/api/userinfo` → `authentication-service`

* `/api/logout` → `authentication-service`

* `/v2/users` → CRUD `userinfo`

**Manual operations**

*MongoDB*

You have to remove:

* `users`

* `user-properties`

and you have to empty the collection:

* `user-notifications`

*Cluster K8S*

You have to remove all the `deployment`, `service` and `configmap` from DevOps Console namespace. Moreover, `auth-service`, `user-service`, `session-manager` and `files-service` have to be removed manually.

!!! info

    Once the deployment has been completed, each DevOps Console user will lose all the active sections and will need to log-in again.
