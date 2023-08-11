let questions = [
    {
        numb: 1,
        question: "What does TCP stand for?",
        answer: "Transmission Control Protocol",
        options:[
            "Transmission Control Protocol",
            "Technical Control Protocol",
            "Total Connection Protocol",
            "Transmitting Control Process"
        ]
    },
    {
        numb: 2,
        question: "Which OSI layer is responsible for routing and forwarding?",
        answer: "Layer 3 (Network Layer)",
        options:[
            "Layer 1 (Physical Layer)",
            "Layer 2 (Data Link Layer)",
            "Layer 3 (Network Layer)",
            "Layer 4 (Transport Layer)"
        ]
    },
    {
        numb: 3,
        question: "What is the purpose of DHCP in networking?",
        answer: "Assigning IP addresses to devices",
        options:[
            "Encrypting data packets",
            "Assigning domain names",
            "Assigning IP addresses to devices",
            "Creating virtual private networks"
        ]
    },
    {
        numb: 4,
        question: "Which protocol is used for secure data transmission over the internet?",
        answer: "HTTPS (Hypertext Transfer Protocol Secure)",
        options:[
            "HTTP (Hypertext Transfer Protocol)",
            "FTP (File Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "HTTPS (Hypertext Transfer Protocol Secure)"
        ]
    },
    {
        numb: 5,
        question: "What is the purpose of NAT (Network Address Translation)?",
        answer: "Converting private IP addresses to public IP addresses",
        options:[
            "Converting domain names to IP addresses",
            "Routing data between different networks",
            "Detecting network intrusions",
            "Converting private IP addresses to public IP addresses"
        ]
    },
    {
        numb: 6,
        question: "Which device is used to connect multiple computers in a local area network?",
        answer: "Switch",
        options:[
            "Router",
            "Modem",
            "Switch",
            "Hub"
        ]
    },
    {
        numb: 7,
        question: "What is a firewall in networking?",
        answer: "A security device that filters network traffic",
        options:[
            "A device for amplifying network signals",
            "A device for creating virtual networks",
            "A security device that filters network traffic",
            "A device for translating IP addresses"
        ]
    },
    {
        numb: 8,
        question: "What is latency in networking?",
        answer: "Delay in data transmission",
        options:[
            "Data transfer speed",
            "Delay in data transmission",
            "Signal strength",
            "Data packet size"
        ]
    },
    {
        numb: 9,
        question: "What is a MAC address?",
        answer: "A unique hardware address for network devices",
        options:[
            "A protocol for sending emails",
            "A type of computer monitor",
            "A wireless network standard",
            "A unique hardware address for network devices"
        ]
    },
    {
        numb: 10,
        question: "Which protocol is used for sending and receiving emails?",
        answer: "SMTP (Simple Mail Transfer Protocol)",
        options:[
            "HTTP (Hypertext Transfer Protocol)",
            "FTP (File Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "POP3 (Post Office Protocol 3)"
        ]
    },
    {
        numb: 11,
        question: "What is the purpose of DNS (Domain Name System)?",
        answer: "Mapping domain names to IP addresses",
        options:[
            "Creating secure VPN connections",
            "Blocking malicious websites",
            "Mapping domain names to IP addresses",
            "Managing network hardware"
        ]
    },
    {
        numb: 12,
        question: "What is a subnet mask used for?",
        answer: "Dividing an IP address into network and host portions",
        options:[
            "Encrypting network traffic",
            "Dividing an IP address into network and host portions",
            "Changing IP addresses dynamically",
            "Creating virtual LANs"
        ]
    },
    {
        numb: 13,
        question: "What is a VLAN (Virtual Local Area Network)?",
        answer: "A segmented network created within a larger network",
        options:[
            "A segmented network created within a larger network",
            "A type of wireless router",
            "A method of encrypting data packets",
            "A protocol for remote access"
        ]
    },
    {
        numb: 14,
        question: "What is the purpose of ICMP (Internet Control Message Protocol)?",
        answer: "Managing error messages and operational information",
        options:[
            "Managing data encryption",
            "Controlling access to websites",
            "Managing error messages and operational information",
            "Transmitting voice over IP networks"
        ]
    },
    {
        numb: 15,
        question: "What is a proxy server?",
        answer: "An intermediate server that acts as a gateway between a local network and the internet",
        options:[
            "A server used for hosting websites",
            "A server that stores email messages",
            "An intermediate server that acts as a gateway between a local network and the internet",
            "A server that manages domain names"
        ]
    },
    {
        numb: 16,
        question: "What is the purpose of NAT (Network Address Translation)?",
        answer: "Converting private IP addresses to public IP addresses",
        options:[
            "Converting domain names to IP addresses",
            "Routing data between different networks",
            "Detecting network intrusions",
            "Converting private IP addresses to public IP addresses"
        ]
    },
    {
        numb: 17,
        question: "What is bandwidth in networking?",
        answer: "The maximum data transfer rate of a network",
        options:[
            "The physical size of a network",
            "The number of devices on a network",
            "The type of network topology",
            "The maximum data transfer rate of a network"
        ]
    },
    {
        numb: 18,
        question: "What is the purpose of a router in networking?",
        answer: "Routing data between different networks",
        options:[
            "Converting IP addresses to MAC addresses",
            "Transmitting wireless signals",
            "Filtering network traffic",
            "Routing data between different networks"
        ]
    },
    {
        numb: 19,
        question: "What is a DNS server?",
        answer: "A server that translates domain names into IP addresses",
        options:[
            "A server for storing files",
            "A server for sending emails",
            "A server for managing network hardware",
            "A server that translates domain names into IP addresses"
        ]
    },
    {
        numb: 20,
        question: "Which protocol is used for remotely accessing servers and network devices?",
        answer: "SSH (Secure Shell)",
        options:[
            "FTP (File Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "SSH (Secure Shell)"
        ]
    },
    {
        numb: 21,
        question: "What is a firewall in networking?",
        answer: "A security device that filters network traffic",
        options:[
            "A device for amplifying network signals",
            "A device for creating virtual networks",
            "A security device that filters network traffic",
            "A device for translating IP addresses"
        ]
    },
    {
        numb: 22,
        question: "What is latency in networking?",
        answer: "Delay in data transmission",
        options:[
            "Data transfer speed",
            "Delay in data transmission",
            "Signal strength",
            "Data packet size"
        ]
    },
    {
        numb: 23,
        question: "What is a MAC address?",
        answer: "A unique hardware address for network devices",
        options:[
            "A unique hardware address for network devices",
            "A protocol for sending emails",
            "A type of computer monitor",
            "A wireless network standard"
        ]
    },
    {
        numb: 24,
        question: "Which protocol is used for sending and receiving emails?",
        answer: "SMTP (Simple Mail Transfer Protocol)",
        options:[
            "HTTP (Hypertext Transfer Protocol)",
            "FTP (File Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "POP3 (Post Office Protocol 3)"
        ]
    },
    {
        numb: 25,
        question: "What is the purpose of DNS (Domain Name System)?",
        answer: "Mapping domain names to IP addresses",
        options:[
            "Creating secure VPN connections",
            "Blocking malicious websites",
            "Managing network hardware",
            "Mapping domain names to IP addresses"

        ]
    },
    {
        numb: 26,
        question: "What is a subnet mask used for?",
        answer: "Dividing an IP address into network and host portions",
        options:[
            "Encrypting network traffic",
            "Dividing an IP address into network and host portions",
            "Changing IP addresses dynamically",
            "Creating virtual LANs"
        ]
    },
    {
        numb: 27,
        question: "What is a VLAN (Virtual Local Area Network)?",
        answer: "A segmented network created within a larger network",
        options:[
            "A type of wireless router",
            "A method of encrypting data packets",
            "A segmented network created within a larger network",
            "A protocol for remote access"
        ]
    },
    {
        numb: 28,
        question: "What is the purpose of ICMP (Internet Control Message Protocol)?",
        answer: "Managing error messages and operational information",
        options:[
            "Managing error messages and operational information",
            "Managing data encryption",
            "Controlling access to websites",
            "Transmitting voice over IP networks"
        ]
    },
    {
        numb: 29,
        question: "What is a proxy server?",
        answer: "An intermediate server that acts as a gateway between a local network and the internet",
        options:[
            "A server used for hosting websites",
            "A server that stores email messages",
            "A server that manages domain names",
            "An intermediate server that acts as a gateway between a local network and the internet",
        ]
    },
    {
        numb: 30,
        question: "What is bandwidth in networking?",
        answer: "The maximum data transfer rate of a network",
        options:[
            "The physical size of a network",
            "The number of devices on a network",
            "The type of network topology",
            "The maximum data transfer rate of a network"
        ]
    },
    {
        numb: 31,
        question: "What is the purpose of a router in networking?",
        answer: "Routing data between different networks",
        options:[
            "Converting IP addresses to MAC addresses",
            "Transmitting wireless signals",
            "Filtering network traffic",
            "Routing data between different networks"
        ]
    },
    {
        numb: 32,
        question: "What is a DNS server?",
        answer: "A server that translates domain names into IP addresses",
        options:[
            "A server for storing files",
            "A server for sending emails",
            "A server for managing network hardware",
            "A server that translates domain names into IP addresses"
        ]
    },
    {
        numb: 33,
        question: "Which protocol is used for remotely accessing servers and network devices?",
        answer: "SSH (Secure Shell)",
        options:[
            "SSH (Secure Shell)",
            "FTP (File Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)"
        ]
    },
    {
        numb: 34,
        question: "What is NAT (Network Address Translation) used for?",
        answer:"Translating domain names",
        options:[
            "Encrypting network traffic",
            "Routing between different network segments",
            "Managing DNS records",
            "Translating domain names"
        ]
    },
    {
        numb: 35,
        question: "What does SSID stand for in wireless networking?",
        answer: "Service Set Identifier",
        options:[
            "Secure System Identification",
            "Shared Security Identifier",
            "Service Set Identifier",
            "System Status Indicator"
        ]
    },
    {
        numb: 36,
        question: "What is the purpose of ARP (Address Resolution Protocol)?",
        answer: "Resolving IP addresses to MAC addresses",
        options:[
            "Encrypting data packets",
            "Routing network traffic",
            "Assigning IP addresses",
            "Resolving IP addresses to MAC addresses"
        ]
    },
    {
        numb: 37,
        question: "What is a gateway in networking?",
        answer: "A device that connects different networks",
        options:[
            "A device for blocking malicious websites",
            "A device for managing DNS records",
            "A device for securing wireless networks",
            "A device that connects different networks"
        ]
    },
    {
        numb: 38,
        question: "What is a MAN (Metropolitan Area Network)?",
        answer: "A network for connecting devices within a city",
        options:[
            "A network for connecting devices within a single room",
            "A network for connecting devices within a building",
            "A network for connecting devices within a city",
            "A network for connecting devices worldwide"
        ]
    },
    {
        numb: 39,
        question: "What is a DMZ (Demilitarized Zone) in networking?",
        answer: "A segregated network zone that separates internal and external networks",
        options:[
            "A zone with high network traffic",
            "A zone with restricted access",
            "A segregated network zone that separates internal and external networks",
            "A zone with enhanced security"
        ]
    },
    {
        numb: 40,
        question: "What is QoS (Quality of Service) in networking?",
        answer: "Prioritizing network traffic to meet certain performance requirements",
        options:[
            "Quitting Overloaded Servers",
            "Quota of Sent data",
            "Quantum of Signals",
            "Prioritizing network traffic to meet certain performance requirements"
        ]
    },
    {
        numb: 41,
        question: "What is the purpose of a load balancer in networking?",
        answer: "Distributing network traffic across multiple servers",
        options:[
            "Blocking unauthorized access",
            "Monitoring network performance",
            "Encrypting data packets",
            "Distributing network traffic across multiple servers"
        ]
    },
    {
        numb: 42,
        question: "What is a packet in networking?",
        answer: "A unit of data transmitted over a network",
        options:[
            "A type of network cable",
            "A device for wireless communication",
            "A unit of data transmitted over a network",
            "A network security protocol"
        ]
    },
    {
        numb: 43,
        question: "What is latency in networking?",
        answer: "Delay in data transmission",
        options:[
            "Delay in data transmission",
            "Data transfer speed",
            "Signal strength",
            "Data packet size"
        ]
    },
    {
        numb: 44,
        question: "What is a MAC address?",
        answer: "A unique hardware address for network devices",
        options:[
            "A protocol for sending emails",
            "A unique hardware address for network devices",
            "A type of computer monitor",
            "A wireless network standard"
        ]
    },
    {
        numb: 45,
        question: "Which protocol is used for sending and receiving emails?",
        answer: "SMTP (Simple Mail Transfer Protocol)",
        options:[
            "SMTP (Simple Mail Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "FTP (File Transfer Protocol)",
            "POP3 (Post Office Protocol 3)"
        ]
    },
    {
        numb: 46,
        question: "What is the purpose of DNS (Domain Name System)?",
        answer: "Mapping domain names to IP addresses",
        options:[
            "Creating secure VPN connections",
            "Blocking malicious websites",
            "Mapping domain names to IP addresses",
            "Managing network hardware"
        ]
    },
    {
        numb: 47,
        question: "What is a subnet mask used for?",
        answer: "Dividing an IP address into network and host portions",
        options:[
            "Encrypting network traffic",
            "Changing IP addresses dynamically",
            "Dividing an IP address into network and host portions",
            "Creating virtual LANs"
        ]
    },
    {
        numb: 48,
        question: "What is a VLAN (Virtual Local Area Network)?",
        answer: "A segmented network created within a larger network",
        options:[
            "A type of wireless router",
            "A segmented network created within a larger network",
            "A method of encrypting data packets",
            "A protocol for remote access"
        ]
    },
    {
        numb: 49,
        question: "What is the purpose of ICMP (Internet Control Message Protocol)?",
        answer: "Managing error messages and operational information",
        options:[
            "Managing data encryption",
            "Managing error messages and operational information",
            "Controlling access to websites",
            "Transmitting voice over IP networks"
        ]
    },
    {
        numb: 50,
        question: "What is a proxy server?",
        answer: "An intermediate server that acts as a gateway between a local network and the internet",
        options:[
            "A server used for hosting websites",
            "A server that stores email messages",
            "An intermediate server that acts as a gateway between a local network and the internet",
            "A server that manages domain names"
        ]
    },
    {
        numb: 51,
        question: "What is bandwidth in networking?",
        answer: "The maximum data transfer rate of a network",
        options:[
            "The physical size of a network",
            "The number of devices on a network",
            "The type of network topology",
            "The maximum data transfer rate of a network"
        ]
    },
    {
        numb: 52,
        question: "What is the purpose of a router in networking?",
        answer: "Routing data between different networks",
        options:[
            "Converting IP addresses to MAC addresses",
            "Transmitting wireless signals",
            "Filtering network traffic",
            "Routing data between different networks"
        ]
    },
    {
        numb: 53,
        question: "What is a DNS server?",
        answer: "A server that translates domain names into IP addresses",
        options:[
            "A server that translates domain names into IP addresses",
            "A server for storing files",
            "A server for sending emails",
            "A server for managing network hardware"
        ]
    },
    {
        numb: 54,
        question: "Which protocol is used for remotely accessing servers and network devices?",
        answer: "SSH (Secure Shell)",
        options:[
            "FTP (File Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "SMTP (Simple Mail Transfer Protocol)",
            "SSH (Secure Shell)"
        ]
    },
    {
        numb: 55,
        question: "What is NAT (Network Address Translation) used for?",
        answer: "Translating domain names" ,
        options:[
            "Encrypting network traffic",
            "Routing between different network segments",
            "Managing DNS records",
            "Translating domain names"
        ]
    },
    {
        numb: 56,
        question: "What does SSID stand for in wireless networking?",
        answer: "Service Set Identifier",
        options:[
            "Secure System Identification",
            "Shared Security Identifier",
            "Service Set Identifier",
            "System Status Indicator"
        ]
    },
    {
        numb: 57,
        question: "What is the purpose of ARP (Address Resolution Protocol)?",
        answer: "Resolving IP addresses to MAC addresses",
        options:[
            "Encrypting data packets",
            "Routing network traffic",
            "Assigning IP addresses",
            "Resolving IP addresses to MAC addresses"
        ]
    },
    {
        numb: 58,
        question: "What is a gateway in networking?",
        answer: "A device that connects different networks",
        options:[
            "A device for blocking malicious websites",
            "A device that connects different networks",
            "A device for managing DNS records",
            "A device for securing wireless networks"
        ]
    },
    {
        numb: 59,
        question: "What is a MAN (Metropolitan Area Network)?",
        answer: "A network that covers a city",
        options:[
            "A network for connecting devices within a single room",
            "A network for connecting devices within a building",
            "A network for connecting devices within a city",
            "A network for connecting devices worldwide"
        ]
    },
    {
        numb: 60,
        question: "What is a DMZ (Demilitarized Zone) in networking?",
        answer: "A segregated network zone that separates internal and external networks",
        options:[
            "A zone with high network traffic",
            "A zone with restricted access",
            "A segregated network zone that separates internal and external networks",
            "A zone with enhanced security"
        ]
    }
];
