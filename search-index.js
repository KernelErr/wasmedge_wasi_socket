var searchIndex = JSON.parse('{\
"wasmedge_wasi_socket":{"doc":"","t":[18,13,3,3,3,4,3,16,18,13,4,4,3,3,8,18,3,13,13,13,13,3,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,5,5,5,5,5,5,5,5,5,5,5,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12],"n":["BROADCAST","Both","Incoming","IovecRead","IovecWrite","IpAddr","Ipv4Addr","Iter","LOCALHOST","Read","Shutdown","SocketAddr","TcpListener","TcpStream","ToSocketAddrs","UNSPECIFIED","UdpSocket","V4","V4","V6","V6","WasiAddress","Write","accept","bind","bind","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","buf","buf","buf","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","cmp","cmp","cmp","connect","eq","eq","eq","eq","eq","eq","eq","flush","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_str","from_str","from_str","hash","hash","hash","incoming","into","into","into","into","into","into","into","into","into","into","into","into_iter","ip","is_benchmarking","is_benchmarking","is_broadcast","is_documentation","is_documentation","is_global","is_global","is_ipv4","is_ipv4","is_ipv6","is_ipv6","is_link_local","is_loopback","is_loopback","is_multicast","is_multicast","is_private","is_reserved","is_shared","is_unspecified","is_unspecified","ne","ne","new","new","next","octets","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","port","read","recv_from","send_to","set_ip","set_port","shutdown","size","size","size","size_hint","sock_accept","sock_bind","sock_close","sock_connect","sock_listen","sock_open","sock_recv","sock_recv_from","sock_send","sock_send_to","sock_shutdown","to_canonical","to_ipv6_compatible","to_ipv6_mapped","to_owned","to_owned","to_owned","to_owned","to_socket_addrs","to_socket_addrs","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","write","0","0","0","0"],"q":["wasmedge_wasi_socket","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wasmedge_wasi_socket::IpAddr","","wasmedge_wasi_socket::SocketAddr",""],"d":["An IPv4 address representing the broadcast address: …","Both the reading and the writing portions of the <code>TcpStream</code> …","","","","An IP address, either IPv4 or IPv6.","An IPv4 address.","Returned iterator over socket addresses which this type …","An IPv4 address with the address pointing to localhost: …","The reading portion of the <code>TcpStream</code> should be shut down.","Possible values which can be passed to the …","An internet socket address, either IPv4 or IPv6.","","","A trait for objects which can be converted or resolved to …","An IPv4 address representing an unspecified address: …","","An IPv4 socket address.","An IPv4 address.","An IPv6 socket address.","An IPv6 address.","","The writing portion of the <code>TcpStream</code> should be shut down.","","Create TCP socket and bind to the given address.","Create UDP socket and bind to the given address.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create TCP socket and connect to the given address.","","","","","","","","","","","","","","","","","","","","","","","Converts a <code>SocketAddrV4</code> into a <code>SocketAddr::V4</code>.","","Converts a <code>SocketAddrV6</code> into a <code>SocketAddr::V6</code>.","Converts a tuple struct (Into&lt;<code>IpAddr</code>&gt;, <code>u16</code>) into a …","Creates an <code>IpAddr::V6</code> from an eight element 16-bit array.","","Creates an <code>IpAddr::V4</code> from a four element byte array.","Creates an <code>IpAddr::V6</code> from a sixteen element byte array.","Copies this address to a new <code>IpAddr::V6</code>.","Copies this address to a new <code>IpAddr::V4</code>.","","Converts a host byte order <code>u32</code> into an <code>Ipv4Addr</code>.","Creates an <code>Ipv4Addr</code> from a four element byte array.","","","","","","","","","","","","","","","","","","","","","Returns the IP address associated with this socket address.","Returns <code>true</code> if this address is in a range designated for …","Returns <code>true</code> if this address part of the <code>198.18.0.0/15</code> …","Returns <code>true</code> if this is a broadcast address (…","Returns <code>true</code> if this address is in a range designated for …","Returns <code>true</code> if this address is in a range designated for …","Returns <code>true</code> if the address appears to be globally …","Returns <code>true</code> if the address appears to be globally …","Returns <code>true</code> if the IP address in this <code>SocketAddr</code> is an …","Returns <code>true</code> if this address is an <code>IPv4</code> address, and <code>false</code> …","Returns <code>true</code> if the IP address in this <code>SocketAddr</code> is an …","Returns <code>true</code> if this address is an <code>IPv6</code> address, and <code>false</code> …","Returns <code>true</code> if the address is link-local (<code>169.254.0.0/16</code>).","Returns <code>true</code> if this is a loopback address.","Returns <code>true</code> if this is a loopback address (<code>127.0.0.0/8</code>).","Returns <code>true</code> if this is a multicast address.","Returns <code>true</code> if this is a multicast address (<code>224.0.0.0/4</code>).","Returns <code>true</code> if this is a private address.","Returns <code>true</code> if this address is reserved by IANA for …","Returns <code>true</code> if this address is part of the Shared Address …","Returns <code>true</code> for the special ‘unspecified’ address.","Returns <code>true</code> for the special ‘unspecified’ address (…","","","Creates a new socket address from an IP address and a port …","Creates a new IPv4 address from four eight-bit octets.","","Returns the four eight-bit integers that make up this …","","","","","","","Returns the port number associated with this socket …","","","","Changes the IP address associated with this socket address.","Changes the port number associated with this socket …","","","","","","","","","","","","","","","","","Converts this address to an <code>IpAddr::V4</code> if it is an …","Converts this address to an IPv4-compatible <code>IPv6</code> address.","Converts this address to an IPv4-mapped <code>IPv6</code> address.","","","","","Converts this object to an iterator of resolved <code>SocketAddr</code>…","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,2,0,0,0,0,0,3,1,2,0,0,0,0,0,1,0,4,5,4,5,0,2,6,6,7,8,9,10,11,6,7,12,4,5,1,2,8,9,10,11,6,7,12,4,5,1,2,8,9,10,4,5,1,2,4,5,1,2,4,5,1,11,4,5,5,5,1,1,2,11,4,4,5,5,1,1,2,8,9,10,11,6,7,12,4,4,4,4,5,5,5,5,5,5,1,1,1,2,4,5,1,4,5,1,6,8,9,10,11,6,7,12,4,5,1,2,12,4,5,1,1,5,1,5,1,4,5,4,5,1,5,1,5,1,1,1,1,5,1,4,5,4,1,12,1,4,5,5,5,1,1,4,11,7,7,4,4,11,8,9,10,12,0,0,0,0,0,0,0,0,0,0,0,5,1,1,4,5,1,2,3,4,4,5,1,8,9,10,11,6,7,12,4,5,1,2,8,9,10,11,6,7,12,4,5,1,2,8,9,10,11,6,7,12,4,5,1,2,11,13,14,15,16],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["result",6]],[[["tosocketaddrs",8]],["result",6,[["tcplistener",3]]]],[[["tosocketaddrs",8]],["result",6,[["udpsocket",3]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,[[],["socketaddr",4]],[[],["ipaddr",4]],[[],["ipv4addr",3]],[[],["shutdown",4]],[[]],[[]],[[]],[[]],[[["socketaddr",4]],["ordering",4]],[[["ipaddr",4]],["ordering",4]],[[["ipv4addr",3]],["ordering",4]],[[["tosocketaddrs",8]],["result",6,[["tcpstream",3]]]],[[["socketaddr",4]],["bool",15]],[[["ipv4addr",3]],["bool",15]],[[["ipv6addr",3]],["bool",15]],[[["ipaddr",4]],["bool",15]],[[["ipaddr",4]],["bool",15]],[[["ipv4addr",3]],["bool",15]],[[["shutdown",4]],["bool",15]],[[],["result",6]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[["formatter",3]],["result",4,[["error",3]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["socketaddrv4",3]],["socketaddr",4]],[[]],[[["socketaddrv6",3]],["socketaddr",4]],[[],["socketaddr",4]],[[],["ipaddr",4]],[[]],[[],["ipaddr",4]],[[],["ipaddr",4]],[[["ipv6addr",3]],["ipaddr",4]],[[["ipv4addr",3]],["ipaddr",4]],[[]],[[["u32",15]],["ipv4addr",3]],[[],["ipv4addr",3]],[[]],[[["str",15]],["result",4,[["socketaddr",4],["addrparseerror",3]]]],[[["str",15]],["result",4,[["ipaddr",4],["addrparseerror",3]]]],[[["str",15]],["result",4,[["ipv4addr",3],["addrparseerror",3]]]],[[]],[[]],[[]],[[],["incoming",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["ipaddr",4]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[["socketaddr",4]],["bool",15]],[[["ipaddr",4]],["bool",15]],[[["ipaddr",4],["u16",15]],["socketaddr",4]],[[["u8",15],["u8",15],["u8",15],["u8",15]],["ipv4addr",3]],[[],["option",4,[["result",6,[["tcpstream",3]]]]]],[[]],[[["socketaddr",4]],["option",4,[["ordering",4]]]],[[["ipv4addr",3]],["option",4,[["ordering",4]]]],[[["ipv6addr",3]],["option",4,[["ordering",4]]]],[[["ipaddr",4]],["option",4,[["ordering",4]]]],[[["ipv4addr",3]],["option",4,[["ordering",4]]]],[[["ipaddr",4]],["option",4,[["ordering",4]]]],[[],["u16",15]],[[],["result",6,[["usize",15]]]],[[],["result",6]],[[["tosocketaddrs",8]],["result",6,[["usize",15]]]],[[["ipaddr",4]]],[[["u16",15]]],[[["shutdown",4]],["result",6]],null,null,null,[[]],null,null,null,null,null,null,null,null,null,null,null,[[],["ipaddr",4]],[[],["ipv6addr",3]],[[],["ipv6addr",3]],[[]],[[]],[[]],[[]],[[],["result",4,[["error",3]]]],[[],["result",4,[["intoiter",3,[["socketaddr",4]]],["error",3]]]],[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["result",6,[["usize",15]]]],null,null,null,null],"p":[[3,"Ipv4Addr"],[4,"Shutdown"],[8,"ToSocketAddrs"],[4,"SocketAddr"],[4,"IpAddr"],[3,"TcpListener"],[3,"UdpSocket"],[3,"IovecRead"],[3,"IovecWrite"],[3,"WasiAddress"],[3,"TcpStream"],[3,"Incoming"],[13,"V4"],[13,"V6"],[13,"V4"],[13,"V6"]],"a":{"inaddr_any":[15]}}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};