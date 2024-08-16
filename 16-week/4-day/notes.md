# Protocols Rule the Internet

## Internet Protocol (IP)

- **Internet**: A series of interconnected networks sharing data
  - **The problem**: In the 60s & 70s as computers and computer networks are becoming more common each network would have it's own methods and standards to facilitate communication between computers.
  - **The Solution**: A standardized method for communication across network: `Internet Protocol (IP)`

### Key IP Functions

- **Addressing**: Each device connected to the internet has a unique IP address, acting as its identifier.
- **Packet Creation**: Data is divided into smaller packets, each containing a portion of the data and header information.
- **Routing**: IP determines the best path for each packet to reach its destination, utilizing routers to forward packets.
- **Delivery**: IP ensures packets are delivered to the correct destination based on their IP addresses.
- **Best-Effort Delivery**: IP doesn't guarantee packet delivery or order, but it provides mechanisms for error detection and correction.

### How IP Works

- **Data Segmentation**: Larger data chunks are divided into smaller packets for transmission.
- **Packet Header**: Each packet includes a header containing information like source and destination IP addresses, packet size, and other control data.
- **Routing**: Routers examine packet headers to determine the next hop in the network towards the destination.
- **Packet Delivery**: Packets are forwarded through multiple networks until they reach the destination.
- **Reassembly**: The destination device reassembles the received packets into the original data.

### Challenges

- **Packet Loss**: Some packets might be lost during transmission due to network congestion or errors.
- **Packet Reordering**: Packets might arrive out of order, requiring reassembly at the destination.
- **IP Address Depletion**: The limited IPv4 address space has led to the adoption of IPv6.

### IPv4 & IPv6

| Feature | IPv4 | IPv6 |
| ------- | ---- | ---- |
| Address Length | 32 bits | 128 bits |
| Address Notation | Dotted decimal (e.g., 192.168.1.1) | Colon-separated hexadecimal (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334) |
| Available Addresses | Approximately 4 billion	|Approximately 3.4 x 10^38 |

## Transport Protocols

- Between HTTP and IP, there is an extra layer of information called the transport layer. The protocols used in it are referred to as transport protocols.

![TCP UDP Meme](https://www.obiikriationz.com/storage/2.png)

### TCP

- Stands for Transmission Control Protocol
- The most common transport protocol
  - Used as the underlying connection for HTTP
- Connection-oriented protocol, meaning it establishes a connection between two sockets
  - A reliable protocol - data can't be "lost"
- Common use cases for TCP include:
  - File transfer
  - Web browsing
  - CRUD operations

### UDP

- Stands for User Datagram Protocol
- Trades reliability for *speed*
- Common use cases for UDP include:
  - DNS
  - Discovery requests
  - Video game world state updates
  - Video and audio streaming
  - Continuous data broadcasts (smart home devices)
  