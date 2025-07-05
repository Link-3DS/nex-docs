# RMC Protocol

- This is a simple remote method call protocol that lies on top of the PRUDP Protocol.

## Request Format

| Type   | Description          |
| ---    |    ---               |
| uint32 | Size                 |
| uint8  | Protocol ID          |
| uint16 | Extended Protocol ID |
| uint32 | Call ID              |
| uint32 | Method ID            |
| ...    | Method Parameters    |

## Response Format

| Type   | Description          |
| ---    |    ---               |
| uint32 | Size                 |
| uint8  | Protocol ID          |
| uint16 | Extended Protocol ID |
| bool   | Is Success           |

* On success:

| Type   | Description   |
| ---    |    ---        |
| uint32 | Call ID       |
| uint32 | Method ID     |
| ...    | Response Data |

* On error:

| Type   | Description   |
| ---    |    ---        |
| uint32 | Error Code    |
| uint32 | Call ID       |