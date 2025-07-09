---
id: architectures
title: Architecture Strategies
sidebar_label: Architecture Strategies
---

# 🧩 Combining HCP Modules: Architecture Strategies

## Overview

The Health Composable Platform (HCP) is built around a modular architecture that enables flexible composition of features. Each module—such as EHR, Therapy and Monitoring, User Authentication, Booking, and Notification—is composed of a set of microservices designed to be **independent and reusable**.

Depending on the organizational and technical context, modules can be deployed in two different architectural strategies:

1. **Isolated Modules in Separate Kubernetes Namespaces**
2. **Unified Deployment in a Single Kubernetes Namespace**

This document outlines both approaches and provides a comparison to help you choose the right setup for your needs.

---

## 1 Isolated Modules in Separate Kubernetes Namespaces

### 🏗️ Description

In this model, each module is deployed into its **own Kubernetes namespace**. It includes:

- A **dedicated API Gateway** for routing requests specific to the module.
- A **dedicated CRUD Service** for managing persistence related to that module's data.
- Its own business-specific microservices and configurations.

This model emphasizes **separation of concerns** and **domain isolation**.

### ✅ Pros

| Benefit | Description |
|--------|-------------|
| 🔒 **Security** | Each namespace can have its own access controls, limiting surface area and blast radius. |
| 🧩 **Modularity** | Modules are fully decoupled, making them easier to develop, test, and deploy independently. |
| 🛠️ **Scalability** | You can scale individual modules based on usage (e.g., scale EHR separately from Notifications). |
| 🧪 **Resilience** | Faults or failures in one module do not impact others. |
| 🔁 **Reusability** | Modules can be reused across multiple projects or customers in an isolated fashion. |

### ❌ Cons

| Limitation | Description |
|-----------|-------------|
| ⚙️ **Operational Complexity** | Requires managing multiple gateways, CRUD services, and namespaces. |
| 💰 **Resource Overhead** | More services running in parallel means higher infrastructure costs. |
| 📡 **Cross-Module Communication** | Interactions between modules may require explicit service mesh configurations or gateway routing. |

---

## 2 Unified Deployment in a Single Kubernetes Namespace

### 🏗️ Description

In this strategy, all module components are deployed into a **single Kubernetes namespace**. It includes:

- A **shared API Gateway** that exposes all the APIs across modules.
- A **shared CRUD Service** that interfaces with all databases or collections.
- All module-specific microservices running side by side.

This setup is often used in simpler deployments or early development stages.

### ✅ Pros

| Benefit | Description |
|--------|-------------|
| 🚀 **Simplicity** | Easier to configure, deploy, and monitor as everything is centralized. |
| 💸 **Cost-Effective** | Reduces infrastructure footprint by consolidating common services like the API Gateway and CRUD. |
| 📦 **Faster Setup** | Ideal for proof-of-concepts, demos, or environments with limited DevOps resources. |
| 🧍‍♂️ **Easier Management** | Fewer components to manage and maintain. |

### ❌ Cons

| Limitation | Description |
|-----------|-------------|
| ⚠️ **Tight Coupling** | Makes it harder to evolve or deploy modules independently. |
| 🔐 **Security Risks** | Less granularity in access control—risk of overexposure if RBAC isn’t strictly enforced. |
| 🧪 **Lack of Isolation** | Bugs or issues in one module may affect the others. |
| 🧱 **Scalability Limitations** | All modules scale together, which may lead to inefficiencies. |

---

## Choosing the Right Strategy

| Use Case | Recommended Strategy |
|----------|----------------------|
| **Large-scale or multi-tenant deployment** | Isolated namespaces |
| **Independent team development per module** | Isolated namespaces |
| **Simple or MVP-level application** | Single namespace |
| **Tight DevOps control or low resource environment** | Single namespace |
| **Projects requiring strong fault isolation** | Isolated namespaces |

---

## Transitioning from Unified to Isolated

It's common to **start with a unified namespace** during the initial phases of development and later **migrate to an isolated namespace strategy** as the platform grows. The modular design of HCP makes this transition smooth, as services are already defined independently.

---

## Architecture Examples

### Isolated Namespaces Example

![Isolated Namespaces](./img/svg-files/hcp.modules.svg)

### Unified Namespace Example

![Unified Namespace](./img/svg-files/hcp.unique.svg)

