# PRUDP Protocol

## V0 Format

---

|  Size  |     Description     |
|  ---   |         ---         |
|   1    | Source              |
|   1    | Destination         |
|   2    | Type & flags        |
|   1    | Session ID          |
|   4    | Packet Signature    |
|   2    | Sequence ID         |
|        | Packet-specific Data|
|        | Payload             |
| 1 or 4 | Checksum            |

* Packet-specific data:

|  Only present if              |  Size  |     Description      |
|  ---                          |  ---   |         ---          |
|  PACKET_SYN or PACKET_CONNECT |   4    | Connection Signature |
|  PACKET_DATA                  |   1    | Fragment ID          |
|  FLAGS_HAS_SIZE               |   2    | Payload Size         |

## V1 Format

---

|  Size  |     Description      |
|  ---   |         ---          |
|   2    | Magic                |
|   12   | Packet Header        |
|   16   | Packet Signature     |
|        | Packet-specific Data |
|        | Payload              |

## Type & flags

---

|  Size |     Type          |
|  ---  |      ---          |
|   0   | PACKET_SYN        |
|   1   | PACKET_CONNECT    |
|   2   | PACKET_DATA       |
|   3   | PACKET_DISCONNECT |
|   4   | PACKET_PING       |


|    Mask       |   Description   |
|    ---        |      ---        |
|   0x001       | FLAG_ACK        |
|   0x002       | FLAG_RELIABLE   |
|   0x004       | FLAG_NEEDS_ACK  |
|   0x008       | FLAG_HAS_SIZE   |
|   0x200       | FLAG_MULTI_ACK  |