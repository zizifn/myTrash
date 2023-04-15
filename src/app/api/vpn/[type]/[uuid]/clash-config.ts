function getCalshConfig(
  uuid: string,
  servers: { host: string; port: string; publicKey: string }[]
) {
  return `mixed-port: 1080
allow-lan: true
mode: Rule
log-level: info
external-controller: 0.0.0.0:9090
proxies:
- type: vless
  name: xtls-tcp-reality
  server: ${servers[0]?.host}
  port: ${servers[0]?.port}
  uuid: ${uuid}
  # skip-cert-verify: true
  network: tcp
  tls: true
  udp: true
  flow: xtls-rprx-vision
  servername: www.cloudflare.com # REALITY servername
  reality-opts:
      public-key: ${servers[0]?.publicKey}
      short-id: 33b248aa17d05f9e # optional
  client-fingerprint: chrome # cannot be empty
- type: vless
  name: cnd-ws
  server: ${servers[1]?.host}
  port: ${servers[1]?.port || 443}
  uuid: ${uuid}
  # skip-cert-verify: true
  network: ws
  tls: true
  udp: true
  sni: ${servers[1]?.host}
  client-fingerprint: chrome
  ws-opts:
    path: "?ed=2048"
    headers:
      host: ${servers[1]?.host}
- type: vless
  name: deno-vless
  server: ${servers[2]?.host}
  port:  ${servers[2]?.port || 443}
  uuid: ${uuid}
  # skip-cert-verify: true
  network: ws
  tls: true
  udp: true
  client-fingerprint: chrome
  ws-opts:
    path: "?ed=2048"

proxy-groups:
  - name: Proxy
    type: select
    proxies:
      - Auto-Proxy
      - DIRECT
      - xtls-tcp-reality
      - cnd-ws
  - name: Auto-Proxy
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    proxies:
      - xtls-tcp-reality
      - cnd-ws
  - name: CN
    type: select
    proxies:
      - DIRECT
      - Auto-Proxy
  - name: telegram
    type: select
    proxies:
      - deno-vless
      - Proxy
  - name: Missing
    type: select
    proxies:
      - Auto-Proxy
      - DIRECT
  - name: REJECT-Warp
    type: select
    proxies:
      - REJECT
      - DIRECT
      - Auto-Proxy
  - name: DIRECT-Warp
    type: select
    proxies:
      - DIRECT
      - Auto-Proxy
rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  icloud:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
    path: ./ruleset/icloud.yaml
    interval: 86400

  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

  google:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
    path: ./ruleset/google.yaml
    interval: 86400

  proxy:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
    path: ./ruleset/proxy.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  private:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
    path: ./ruleset/private.yaml
    interval: 86400

  gfw:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
    path: ./ruleset/gfw.yaml
    interval: 86400

  greatfire:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt"
    path: ./ruleset/greatfire.yaml
    interval: 86400

  tld-not-cn:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
    path: ./ruleset/tld-not-cn.yaml
    interval: 86400

  telegramcidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
    path: ./ruleset/telegramcidr.yaml
    interval: 86400

  cncidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
    path: ./ruleset/cncidr.yaml
    interval: 86400

  lancidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
    path: ./ruleset/lancidr.yaml
    interval: 86400

  applications:
    type: http
    behavior: classical
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    path: ./ruleset/applications.yaml
    interval: 86400
rules:
  - RULE-SET,applications,DIRECT-Warp
  - DOMAIN,clash.razord.top,DIRECT-Warp
  - DOMAIN,yacd.haishan.me,DIRECT-Warp
  - RULE-SET,private,DIRECT-Warp
  - RULE-SET,reject,REJECT-Warp
  - RULE-SET,icloud,DIRECT-Warp
  - RULE-SET,apple,DIRECT-Warp
  - RULE-SET,google,Proxy
  - RULE-SET,proxy,Proxy
  - RULE-SET,direct,DIRECT-Warp
  - RULE-SET,lancidr,DIRECT-Warp
  - RULE-SET,cncidr,DIRECT-Warp
  - RULE-SET,telegramcidr,telegram
  - GEOIP,LAN,DIRECT-Warp
  - GEOIP,CN,DIRECT-Warp
  - MATCH,Proxy
`;
}

export { getCalshConfig };
