import { ExternalClient, Node } from '~store/types'

export const tempClients = JSON.parse(
  '[{"id":"9e76d95c-c843-4dd5-9aa4-f1e2e06123b0","address":"10.10.10.4","address6":"","localaddress":"157.245.219.153","name":"egress","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131900,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":4}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":45827,"publickey":"oqhC9CEI+cadotIRzRojwwQ8hCs8lUWOvhSr9nGiCX0=","endpoint":"157.245.219.153","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142360,"expdatetime":1960131906,"lastpeerupdate":1660131906,"lastcheckin":1660142360,"macaddress":"42:ad:00:64:22:29","password":"$2a$05$MMsjACxJhkmt2phINtrnU.in1uWOzgwLNCaS3zCrghPVIyBRCtNUO","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAAOf+CACD/s2X/lv/2/6P/pP+SB20C/+RA/6BCAzD/6P/W/5xZ/6L/0P/e//n/1f+A/4L//gf/3P/cMg==","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"7c98e805-ec51-49b2-bba5-b605e0876041","address":"10.187.168.1","address6":"eb3d:4206:9753:2021::","localaddress":"157.245.219.60","name":"ingress","networksettings":{"addressrange":"10.187.168.0/24","addressrange6":"eb3d:4206:9753:2021::/64","netid":"vnet","nodeslastmodified":1660140287,"networklastmodified":1660140287,"defaultinterface":"nm-vnet","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-de56109af29bb0e2","value":"fcfce828824baa8c","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJ2bmV0Iiwia2V5IjoiZmNmY2U4Mjg4MjRiYWE4YyIsImxvY2FscmFuZ2UiOiIifQ==","uses":10}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"yes","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":51821,"publickey":"dwpTCirWKU4afO9KQbeuCU1LnQvALSz8WnW2MdtlcBg=","endpoint":"157.245.219.60","postup":"iptables -A FORWARD -i nm-vnet -j ACCEPT ; iptables -A FORWARD -o nm-vnet -j ACCEPT ; iptables -t nat -A POSTROUTING -o nm-vnet -j MASQUERADE","postdown":"iptables -D FORWARD -i nm-vnet -j ACCEPT ; iptables -D FORWARD -o nm-vnet -j ACCEPT ; iptables -t nat -D POSTROUTING -o nm-vnet -j MASQUERADE","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"fcfce828824baa8c","interface":"nm-vnet","lastmodified":1660142372,"expdatetime":1960142334,"lastpeerupdate":1660142334,"lastcheckin":1660142334,"macaddress":"ba:77:c4:e8:6d:01","password":"$2a$05$OlzZaRiJf1vVBU74tAldcOWShWzINb0ep5o4Jr3NLjChKrhi30DsW","network":"vnet","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":true,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"10.187.168.0/24","isstatic":false,"udpholepunch":false,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAAN/+CACD/jV3/vnEj/6f/2v/7/5//mP/g/4f/yv+rATj/zf+v//sG/7FGD//P/73/5U5TF1v/i2g=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"63b8e116-4ec4-44e4-8c4b-123baf56cb3c","address":"10.10.10.1","address6":"","localaddress":"157.245.219.60","name":"ingress","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660130578,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":7}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":40606,"publickey":"hkWLBDJY694pWrM7S+oEYqjVtLqHsxU+o+1/sW5JlEI=","endpoint":"157.245.219.60","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142379,"expdatetime":1960131888,"lastpeerupdate":1660131888,"lastcheckin":1660131888,"macaddress":"ba:77:c4:e8:6d:01","password":"$2a$05$erjXYuh4xmd0rJ7I8eth9.gucaoIvo9.IezBatpjBdS8hEsbuqtTy","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAANP+CACABXR57/43/4P+TYlluWVct/4b/2zr/lf/D/+r/+v+qev/H/9n/pCv/oGj/1/+lH0I=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"b15fa070-11dd-4d83-8108-f27989a54db3","address":"10.187.168.254","address6":"eb3d:4206:9753:2021:ffff:ffff:ffff:ffff","localaddress":"","name":"netmaker-1","networksettings":{"addressrange":"10.187.168.0/24","addressrange6":"eb3d:4206:9753:2021::/64","netid":"vnet","nodeslastmodified":1660140287,"networklastmodified":1660140287,"defaultinterface":"nm-vnet","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":null,"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"yes","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51822,"locallistenport":0,"publickey":"1T2GleOAJ+nlYykKXLJzoV/YsxrVf2uIimObo2wAsgU=","endpoint":"159.223.166.146","postup":"","postdown":"","allowedips":null,"persistentkeepalive":20,"ishub":false,"accesskey":"","interface":"nm-vnet","lastmodified":1660142379,"expdatetime":1960140287,"lastpeerupdate":1660140287,"lastcheckin":1660142379,"macaddress":"netmaker-server-1","password":"$2a$05$LrgUE2xEaOghB5PB693psOrIfVoDFKoAcKfyvi1vA9jYY2JR72SRS","network":"vnet","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":null,"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":null,"ingressgatewayrange":"","isstatic":true,"udpholepunch":false,"dnson":false,"isserver":true,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"testing","server":"","traffickeys":{"mine":null,"server":null},"firewallinuse":"iptables","isdualstack":false,"defaultacl":false},{"id":"d60f1327-0320-4aba-ac50-415f658f9d6e","address":"10.10.10.254","address6":"","localaddress":"","name":"netmaker-1","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660130566,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":null,"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":0,"publickey":"G95WC1/7sZwFUqOrHEUNH0c1Bm6wtVf1lVUjLIqgbC4=","endpoint":"159.223.166.146","postup":"","postdown":"","allowedips":null,"persistentkeepalive":20,"ishub":false,"accesskey":"","interface":"nm-devops","lastmodified":1660142379,"expdatetime":1960130566,"lastpeerupdate":1660130566,"lastcheckin":1660142379,"macaddress":"netmaker-server-1","password":"$2a$05$qlBSvz26ixLu/me.75igFOJIojViXCsRzH9tZOOAELVVxZZ2H0dQ6","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":null,"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":null,"ingressgatewayrange":"","isstatic":true,"udpholepunch":false,"dnson":false,"isserver":true,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"testing","server":"","traffickeys":{"mine":null,"server":null},"firewallinuse":"iptables","isdualstack":false,"defaultacl":false},{"id":"6702715d-7033-4641-8d8c-4023ba625cc0","address":"10.10.10.5","address6":"","localaddress":"209.97.154.240","name":"node1","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131907,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":3}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":59321,"publickey":"TRBqie+eJQaEYBxYJOsFZFuz/8fYU6WhGTzxnaTv9m0=","endpoint":"209.97.154.240","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142376,"expdatetime":1960131912,"lastpeerupdate":1660131912,"lastcheckin":1660142376,"macaddress":"36:31:62:7b:08:c3","password":"$2a$05$lXbg2Y0ZyMDHsLsmvoNWROlNQYTjyZyjhl77ETz.PcY38NwPH4Z8C","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAANP+CACD/zP/+I//ZFf+tc/+pDP/TCnn/7f+QIv+Nbv/L//t1/79Z/4V+TQj/7f/BY/+YbA8=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"1f1d0620-ced7-450b-a483-542093dd6341","address":"10.10.10.2","address6":"","localaddress":"157.245.221.71","name":"relay","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131888,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":6}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":40877,"publickey":"2FxOs82CotL0ObEpw3CEuvUZIQ/NETHFNRuNjYMpGlU=","endpoint":"157.245.221.71","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142347,"expdatetime":1960131894,"lastpeerupdate":1660131894,"lastcheckin":1660142346,"macaddress":"0e:d9:6c:ce:ce:3d","password":"$2a$05$SeE8zffDDGoB.Z53RX5L5ezUvIkh/z0h37Ohz0NOroS7WkZBcyl5m","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAANP+CACD/o2n/0v+y//okQDn/1f+/YP+jMf/MHf/O/5xr/7VWNygtNP+gHf/8/4j/kE7/gCc=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"6561d6da-cd70-4c91-aa12-74096b72818f","address":"10.10.10.3","address6":"","localaddress":"157.245.221.247","name":"relayed","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131894,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":5}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":35255,"publickey":"5oDq7n4pEGMKIedQENUJikAY8C/07W6jHJ+XGj8tKDc=","endpoint":"157.245.221.247","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142352,"expdatetime":1960131900,"lastpeerupdate":1660131900,"lastcheckin":1660142352,"macaddress":"c2:26:9b:61:1f:17","password":"$2a$05$CxzlB2KXuitvJJYJYwO3levsqGHe1BdvCbOUHMq0BVe7TO8ua5.3O","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAAMP+CACD/ghliaE//+/+UVEcpfDz/sVf/2RAhJ/+Z//Jp//3/n//f/6VpVP+3WBQQVQ==","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false}]'
) as ExternalClient[]

export const tempNodes = JSON.parse(
  '[{"id":"9e76d95c-c843-4dd5-9aa4-f1e2e06123b0","address":"10.10.10.4","address6":"","localaddress":"157.245.219.153","name":"egress","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131900,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":4}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":45827,"publickey":"oqhC9CEI+cadotIRzRojwwQ8hCs8lUWOvhSr9nGiCX0=","endpoint":"157.245.219.153","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142360,"expdatetime":1960131906,"lastpeerupdate":1660131906,"lastcheckin":1660142360,"macaddress":"42:ad:00:64:22:29","password":"$2a$05$MMsjACxJhkmt2phINtrnU.in1uWOzgwLNCaS3zCrghPVIyBRCtNUO","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAAOf+CACD/s2X/lv/2/6P/pP+SB20C/+RA/6BCAzD/6P/W/5xZ/6L/0P/e//n/1f+A/4L//gf/3P/cMg==","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"63b8e116-4ec4-44e4-8c4b-123baf56cb3c","address":"10.10.10.1","address6":"","localaddress":"157.245.219.60","name":"ingress","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660130578,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":7}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":32791,"publickey":"hkWLBDJY694pWrM7S+oEYqjVtLqHsxU+o+1/sW5JlEI=","endpoint":"157.245.219.60","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142318,"expdatetime":1960131888,"lastpeerupdate":1660131888,"lastcheckin":1660131888,"macaddress":"ba:77:c4:e8:6d:01","password":"$2a$05$erjXYuh4xmd0rJ7I8eth9.gucaoIvo9.IezBatpjBdS8hEsbuqtTy","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAANP+CACABXR57/43/4P+TYlluWVct/4b/2zr/lf/D/+r/+v+qev/H/9n/pCv/oGj/1/+lH0I=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"7c98e805-ec51-49b2-bba5-b605e0876041","address":"10.187.168.1","address6":"eb3d:4206:9753:2021::","localaddress":"157.245.219.60","name":"ingress","networksettings":{"addressrange":"10.187.168.0/24","addressrange6":"eb3d:4206:9753:2021::/64","netid":"vnet","nodeslastmodified":1660140287,"networklastmodified":1660140287,"defaultinterface":"nm-vnet","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-de56109af29bb0e2","value":"fcfce828824baa8c","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJ2bmV0Iiwia2V5IjoiZmNmY2U4Mjg4MjRiYWE4YyIsImxvY2FscmFuZ2UiOiIifQ==","uses":10}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"yes","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":51821,"publickey":"dwpTCirWKU4afO9KQbeuCU1LnQvALSz8WnW2MdtlcBg=","endpoint":"157.245.219.60","postup":"iptables -A FORWARD -i nm-vnet -j ACCEPT ; iptables -A FORWARD -o nm-vnet -j ACCEPT ; iptables -t nat -A POSTROUTING -o nm-vnet -j MASQUERADE","postdown":"iptables -D FORWARD -i nm-vnet -j ACCEPT ; iptables -D FORWARD -o nm-vnet -j ACCEPT ; iptables -t nat -D POSTROUTING -o nm-vnet -j MASQUERADE","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"fcfce828824baa8c","interface":"nm-vnet","lastmodified":1660142372,"expdatetime":1960142334,"lastpeerupdate":1660142334,"lastcheckin":1660142334,"macaddress":"ba:77:c4:e8:6d:01","password":"$2a$05$OlzZaRiJf1vVBU74tAldcOWShWzINb0ep5o4Jr3NLjChKrhi30DsW","network":"vnet","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":true,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"10.187.168.0/24","isstatic":false,"udpholepunch":false,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAAN/+CACD/jV3/vnEj/6f/2v/7/5//mP/g/4f/yv+rATj/zf+v//sG/7FGD//P/73/5U5TF1v/i2g=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"b15fa070-11dd-4d83-8108-f27989a54db3","address":"10.187.168.254","address6":"eb3d:4206:9753:2021:ffff:ffff:ffff:ffff","localaddress":"","name":"netmaker-1","networksettings":{"addressrange":"10.187.168.0/24","addressrange6":"eb3d:4206:9753:2021::/64","netid":"vnet","nodeslastmodified":1660140287,"networklastmodified":1660140287,"defaultinterface":"nm-vnet","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":null,"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"yes","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51822,"locallistenport":0,"publickey":"1T2GleOAJ+nlYykKXLJzoV/YsxrVf2uIimObo2wAsgU=","endpoint":"159.223.166.146","postup":"","postdown":"","allowedips":null,"persistentkeepalive":20,"ishub":false,"accesskey":"","interface":"nm-vnet","lastmodified":1660142372,"expdatetime":1960140287,"lastpeerupdate":1660140287,"lastcheckin":1660142372,"macaddress":"netmaker-server-1","password":"$2a$05$LrgUE2xEaOghB5PB693psOrIfVoDFKoAcKfyvi1vA9jYY2JR72SRS","network":"vnet","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":null,"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":null,"ingressgatewayrange":"","isstatic":true,"udpholepunch":false,"dnson":false,"isserver":true,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"testing","server":"","traffickeys":{"mine":null,"server":null},"firewallinuse":"iptables","isdualstack":false,"defaultacl":false},{"id":"d60f1327-0320-4aba-ac50-415f658f9d6e","address":"10.10.10.254","address6":"","localaddress":"","name":"netmaker-1","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660130566,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":null,"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":0,"publickey":"G95WC1/7sZwFUqOrHEUNH0c1Bm6wtVf1lVUjLIqgbC4=","endpoint":"159.223.166.146","postup":"","postdown":"","allowedips":null,"persistentkeepalive":20,"ishub":false,"accesskey":"","interface":"nm-devops","lastmodified":1660142318,"expdatetime":1960130566,"lastpeerupdate":1660130566,"lastcheckin":1660142318,"macaddress":"netmaker-server-1","password":"$2a$05$qlBSvz26ixLu/me.75igFOJIojViXCsRzH9tZOOAELVVxZZ2H0dQ6","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":null,"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":null,"ingressgatewayrange":"","isstatic":true,"udpholepunch":false,"dnson":false,"isserver":true,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"testing","server":"","traffickeys":{"mine":null,"server":null},"firewallinuse":"iptables","isdualstack":false,"defaultacl":false},{"id":"6702715d-7033-4641-8d8c-4023ba625cc0","address":"10.10.10.5","address6":"","localaddress":"209.97.154.240","name":"node1","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131907,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":3}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":59321,"publickey":"TRBqie+eJQaEYBxYJOsFZFuz/8fYU6WhGTzxnaTv9m0=","endpoint":"209.97.154.240","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142316,"expdatetime":1960131912,"lastpeerupdate":1660131912,"lastcheckin":1660142316,"macaddress":"36:31:62:7b:08:c3","password":"$2a$05$lXbg2Y0ZyMDHsLsmvoNWROlNQYTjyZyjhl77ETz.PcY38NwPH4Z8C","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAANP+CACD/zP/+I//ZFf+tc/+pDP/TCnn/7f+QIv+Nbv/L//t1/79Z/4V+TQj/7f/BY/+YbA8=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"1f1d0620-ced7-450b-a483-542093dd6341","address":"10.10.10.2","address6":"","localaddress":"157.245.221.71","name":"relay","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131888,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":6}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":40877,"publickey":"2FxOs82CotL0ObEpw3CEuvUZIQ/NETHFNRuNjYMpGlU=","endpoint":"157.245.221.71","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142347,"expdatetime":1960131894,"lastpeerupdate":1660131894,"lastcheckin":1660142346,"macaddress":"0e:d9:6c:ce:ce:3d","password":"$2a$05$SeE8zffDDGoB.Z53RX5L5ezUvIkh/z0h37Ohz0NOroS7WkZBcyl5m","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAANP+CACD/o2n/0v+y//okQDn/1f+/YP+jMf/MHf/O/5xr/7VWNygtNP+gHf/8/4j/kE7/gCc=","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false},{"id":"6561d6da-cd70-4c91-aa12-74096b72818f","address":"10.10.10.3","address6":"","localaddress":"157.245.221.247","name":"relayed","networksettings":{"addressrange":"10.10.10.0/24","addressrange6":"","netid":"devops","nodeslastmodified":1660131894,"networklastmodified":1660130566,"defaultinterface":"nm-devops","defaultlistenport":51821,"nodelimit":999999999,"defaultpostup":"","defaultpostdown":"","defaultkeepalive":20,"accesskeys":[{"name":"key-521a64585f33c6ad","value":"dd7eda57f1b3e742","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiJkZDdlZGE1N2YxYjNlNzQyIiwibG9jYWxyYW5nZSI6IiJ9","uses":5},{"name":"key-32ec51cc831170ca","value":"716791acbba8088f","accessstring":"eyJhcGljb25uc3RyaW5nIjoiYXBpLmNsdXN0ZXJjYXQuY29tOjQ0MyIsIm5ldHdvcmsiOiJkZXZvcHMiLCJrZXkiOiI3MTY3OTFhY2JiYTgwODhmIiwibG9jYWxyYW5nZSI6IiJ9","uses":5}],"allowmanualsignup":"no","islocal":"no","isipv4":"yes","isipv6":"no","ispointtosite":"no","localrange":"","defaultudpholepunch":"yes","defaultextclientdns":"","defaultmtu":1280,"defaultacl":"yes"},"listenport":51821,"locallistenport":35255,"publickey":"5oDq7n4pEGMKIedQENUJikAY8C/07W6jHJ+XGj8tKDc=","endpoint":"157.245.221.247","postup":"","postdown":"","allowedips":[],"persistentkeepalive":20,"ishub":false,"accesskey":"716791acbba8088f","interface":"nm-devops","lastmodified":1660142352,"expdatetime":1960131900,"lastpeerupdate":1660131900,"lastcheckin":1660142352,"macaddress":"c2:26:9b:61:1f:17","password":"$2a$05$CxzlB2KXuitvJJYJYwO3levsqGHe1BdvCbOUHMq0BVe7TO8ua5.3O","network":"devops","isrelayed":false,"ispending":"no","isrelay":false,"isdocker":false,"isk8s":false,"isegressgateway":false,"isingressgateway":false,"egressgatewayranges":[],"egressgatewaynatenabled":"","egressgatewayrequest":{"nodeid":"","netid":"","rangestring":"","natenabled":"","ranges":null,"interface":"","postup":"","postdown":""},"relayaddrs":[],"ingressgatewayrange":"","isstatic":false,"udpholepunch":true,"dnson":true,"isserver":false,"action":"noop","islocal":false,"localrange":"","ipforwarding":true,"os":"linux","mtu":1280,"version":"develop","server":"","traffickeys":{"mine":"Dv+BAQEC/4IAAQYBQAAAMP+CACD/ghliaE//+/+UVEcpfDz/sVf/2RAhJ/+Z//Jp//3/n//f/6VpVP+3WBQQVQ==","server":"Dv+BAQEC/4IAAQYBQAAAMf+CACD/jgf/70pD/9n/wndC/6UkcVkh/4L/9HFIPhb/8lf/kURh/81e/5H/gTD/mR0="},"firewallinuse":"","isdualstack":false,"defaultacl":false}]'
) as Node[]
