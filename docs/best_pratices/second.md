---
sidebar_position: 2
---

# The 12-Factors

In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service.

**The twelve-factor app is a methodology for building software-as-a-service apps that:**

- Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
- Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
- Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
- Minimize divergence between development and production, enabling continuous deployment for maximum agility;
- And can scale up without significant changes to tooling, architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

**1 - Codebase:** One codebase tracked in revision control, many deploys

**2 - Dependencies:** Explicitly declare and isolate dependencies
  
**3 - Config:** Store config in the environment

**4 - Backing services:** Treat backing services as attached resources

**5 - Build, release, run:** Strictly separate build and run stages

**6 - Processes:** Execute the app as one or more stateless processes

**7 - Port binding:** Export services via port binding

**8 - Concurrency:** Scale out via the process model

**9 - Disposability:** Maximize robustness with fast startup and graceful shutdown

**10 - Dev/prod parity:** Keep development, staging, and production as similar as possible

**11 - Logs:** Treat logs as event streams

**12 - Admin processes:** Run admin/management tasks as one-off processes

## References

- [The 12-Factors App](https://12factor.net/)
