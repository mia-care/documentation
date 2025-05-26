---
id: user-auth
title: User Auth Module
sidebar_label: User Auth Module
---

# 🔐 User Authentication Module

## Overview

The **User Authentication Module** is a fundamental component of the Health Composable Platform (HCP) designed to manage user accounts and access control across the platform.  
It facilitates the registration and management of various user roles, such as administrators, doctors, and patients, each customizable to fit specific organizational needs.  
The module supports authentication through multiple external providers and manages API access permissions for different user groups.

## Key Features

- **Role Management**: Define and customize user roles (e.g., administrators, doctors, patients) to align with organizational structures.
- **Authentication Providers**: Support for multiple external authentication providers, including GitLab, GitHub, Okta, Microsoft AD, and Microsoft AD B2C.
- **Authorization Control**: Manage API access permissions based on user roles and groups.
- **User Management**: Handle user creation, updates, deletions, and role assignments.
- **Login Interface**: Provide a user-friendly login interface with support for redirects and session management.

## Microservices Architecture

The User Authentication Module comprises several microservices that work together to provide comprehensive authentication and authorization functionalities:

### 1. Authentication Service

The **Authentication Service** is responsible for handling the authentication process using various OAuth2 providers.  
It supports the `authorization_code` and `password` grant types and provides endpoints for user login and information retrieval.

**Key Capabilities:**

- Support for multiple OAuth2 providers
- Endpoints for user authorization and information retrieval
- Integration with external identity providers

**Documentation:**

- [Authentication Service Overview](https://docs.mia-platform.eu/docs/runtime_suite/authentication-service/overview)
- [Authentication Service Usage](https://docs.mia-platform.eu/docs/runtime_suite/authentication-service/usage)
- [Authentication Service Configuration](https://docs.mia-platform.eu/docs/runtime_suite/authentication-service/configuration)

### 2. Auth0 Client

The **Auth0 Client** serves as an alternative to the Authentication Service, interfacing with Auth0 for authentication processes.  
It acts as a token broker, securely handling tokens between the frontend application and Auth0.

**Key Capabilities:**

- Integration with Auth0 for authentication
- Secure token handling and session management
- User management through Auth0's API

**Documentation:**

- [Auth0 Client Overview](https://docs.mia-platform.eu/docs/runtime_suite/auth0-client/overview)
- [Auth0 Client Usage](https://docs.mia-platform.eu/docs/runtime_suite/auth0-client/usage)
- [Configure Auth0](https://docs.mia-platform.eu/docs/next/runtime_suite/auth0-client/configure_auth0)

### 3. Authorization Service

The **Authorization Service** manages access control by validating requests against defined policies.  
It determines whether a request should be authorized based on the user's roles and permissions.

**Key Capabilities:**

- Policy-based access control
- Validation of user permissions for API requests
- Integration with the API Gateway for request authorization

**Documentation:**

- [Authorization Service Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/authorization-service/overview)
- [Authorization Service Configuration](https://docs.mia-platform.eu/docs/runtime_suite/authorization-service/configuration)

### 4. User Manager Service

The **User Manager Service** handles user account management, including creation, updates, deletions, and role assignments.  
It works in conjunction with the chosen authentication service to maintain user data consistency.

**Key Capabilities:**

- User CRUD operations
- Role and permission assignments
- Synchronization with authentication services

**Documentation:**

- [User Manager Service Overview](https://docs.mia-platform.eu/docs/runtime_suite/user-manager-service/overview)
- [User Manager Service Usage](https://docs.mia-platform.eu/docs/runtime_suite/user-manager-service/usage)
- [User Manager Service Configuration](https://docs.mia-platform.eu/docs/runtime_suite/user-manager-service/configuration)

### 5. Login Site

The **Login Site** provides the user interface for authentication, handling login flows and redirects.  
It integrates with the authentication services to facilitate user login and session management.

**Key Capabilities:**

- User-friendly login interface
- Support for redirects and session handling
- Integration with authentication services for login flows

**Documentation:**

- [Login Site Authentication Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite_applications/dev_portal/authentication_configuration)

## Configurability

The User Authentication Module offers extensive configurability to meet diverse organizational requirements:

- **Custom Roles**: Define and manage custom user roles with specific permissions.
- **Authentication Providers**: Configure multiple external authentication providers to suit organizational needs.
- **Access Policies**: Establish detailed access control policies for API endpoints.
- **User Management**: Customize user management workflows, including self-registration and admin approval processes.

## Integration and Extensibility

The module is designed for seamless integration with other HCP modules and external systems:

- **Interoperability**: Integrate with national and regional health information systems.
- **API Access**: Provide RESTful APIs for user and access management.
- **Modular Design**: Extend functionalities by integrating additional microservices as needed.

## Conclusion

The User Authentication Module of the Health Composable Platform offers a robust and flexible solution for managing user identities and access control.  
Its comprehensive features and configurability empower healthcare organizations to maintain secure and efficient user management practices.

For more detailed information, refer to the official Mia-Platform documentation:

- [Authentication Service Documentation](https://docs.mia-platform.eu/docs/runtime_suite/authentication-service/overview)
- [Auth0 Client Documentation](https://docs.mia-platform.eu/docs/runtime_suite/auth0-client/overview)
- [Authorization Service Documentation](https://docs.mia-platform.eu/docs/next/runtime_suite/authorization-service/overview)
- [User Manager Service Documentation](https://docs.mia-platform.eu/docs/runtime_suite/user-manager-service/overview)
- [Login Site Documentation](https://docs.mia-platform.eu/docs/next/runtime_suite_applications/dev_portal/authentication_configuration)
