# prox

prox is a full AAA[^1] wrapper for shadowsocks in sing-box[^2] proxy. It manages

- [X] Authentication
- [X] Authorization
- [X] Accounting

and out-of-box features like

- [X] multi-pools
- [X] multi-nodes
- [X] multi-agents (superadmin + other admins)
- [X] minimal and static dashboard pre user for stat and subscription [see prox-dash](https://prox-dash.pages.dev/)
- [X] notification (telegram has been added)
- [X] bot (telegram bot for superadmin and agents)
- [ ] pay-as-you-go for admins
- [ ] pay-as-you-go for users


## idea

having clusters of shadowsocks-over-shadowTLS servers using sing-box


## design

prox has been deigned with HA (high availability) and HS (horizontal scaling) in mind



[^1]: [AAA wikipedia](https://en.wikipedia.org/wiki/Authentication,_authorization,_and_accounting)
[^2]: [sing-box](https://github.com/SagerNet/sing-box)
