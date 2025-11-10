# prox

prox is a full AAA[^1] wrapper for shadowsocks in sing-box[^2] proxy. It manages

- Authentication
- Authorization
- Accounting

and out-of-box features like

- multi-pools
- multi-nodes
- multi-agents (superadmin + other admins)
- minimal and static dashboard pre user for stat and subscription
    - [not-connected-yet](https://9ced979b4f.pages.dev/admin/ncy/)
    - [connected](https://9ced979b4f.pages.dev/admin/con/)
    - [expired](https://9ced979b4f.pages.dev/admin/exp/)
- notification (telegram has been added)
- admin panel bot (see Telegram bot `@proxdemobot` or [proxdemobot](https://t.me/proxdemobot))


## idea

having clusters of shadowsocks-over-shadowTLS servers using sing-box


## design

prox has been deigned with HA (high availability) and HS (horizontal scaling) in mind



[^1]: [AAA wikipedia](https://en.wikipedia.org/wiki/Authentication,_authorization,_and_accounting)
[^2]: [sing-box](https://github.com/SagerNet/sing-box)
