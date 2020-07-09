## v5.10 (July 9,2020)

### New features

* **CMS in DevOps Console project**       
    `Admin` users can now access the CMS and **modify Projects, Tenant, Templates, Services, Users and Groups directly from CMS**.

    ![cms-project](img/cms-project.png)

* **Project Creation for admin users**        
    Now project creation section is **enabled only for `admin` users**.

### Improvements

* **API Portal - tags for type and required properties**        
    **New tags** to identify the `required` properties and the `type` of each property in the API Portal.

    ![apiportal-strings](img/apiportal-strings.png)

* **API Portal - managed error for unfilled properites**            
    Now **errors for unfilled fields** does not appear at the opening of a route, but when the field is not completed.

in pratica prima di quel task, se aprivi una rotta sull'api-portal che aveva dei campi required, ti compariva l'errore "il campo è required" prima ancora che tu compilasse qualche campo

* **API Portal - removed `All` filter**        
    Category filter in the API Portal **does not show anymore the duplicated option** `All`.

* **Deploy History - new Environment filter**        
    In History section of Deploy, you can now **filter for Environment**.

    ![deploy-filter](img/deploy-filter.png)

### Fixes

* **Memory resources and CPU resources in Design Microservices**        
    Documentation integration has been added in Microservice configuration section with the addition of links to **learn more about Memory resources and CPU resources**.

    ![link-resources](img/link-resources.png)

* **Aligned menu resize icon in Design**            
    The menu resize icon does **not overlap the menu item expansion** anymore.


### How to update your DevOps Console?

In case of on-premise Console, to use these features, you have to update:

* Console Backend v3.2.0 (`nexus.mia-platform.eu/api-console/backend:3.2.0`)          

* Console Website v1.25.0 (`nexus.mia-platform.eu/api-console/website:1.25.0`)       

* Deploy Website v1.4.0 (`nexus.mia-platform.eu/console/deploy-website:1.4.0`)       
       