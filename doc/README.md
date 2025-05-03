# Code Submission Breakdown

### Project Folder Structure

Our team's code submission able to split into **three major parts** in our demo:

1. 📦`dapp-demo`: All the DApp related and IOTA interaction code
2. 📦`move-contract`: All the contracts we wrote for this demo and deployed on IOTA Rebased Testnet
3. 📦`robot-sim`: All the robotic simulation setup and connection layer code

```bash
📦dapp-demo
┣ 📂public
┣ 📂src
.....┣ 📂app
..........┣ 📂api
...............┗ 📂robot
..........┣ 📂home
...............┣ 📂store
...............┗ 📂track
...............┗ 📂twins
..........┣ 📂order
.....┣ 📂components
.....┣ 📂config
.....┣ 📂constants
.....┣ 📂context
.....┣ 📂helpers
.....┣ 📂hooks
.....┣ 📂lib
.....┣ 📂services
.....┗ 📂utils

-------------------------------------

📦move-contracts
┣ 📂sources (product, robot, warehouse)

-------------------------------------
📦robot-sim
┣ 📂_pycache_
┣ 📂robot-controllers
┣ 📂connectivity-layer-server
┣ 📂robot-status-memory
┣ 📂robot-part-stl
┣ 📂webot-world-setup

```

## DApp-Demo `src` Folder Description

📂`app/api/robot`: API for controlling robot simulations (local or online embedded)

📂`app/home/store`: Store interface, list tokenized inventory items on IOTA

📂`app/home/track`: Completed and ongoing orders tracking

📂`app/home/twins`: Digital twins interface, list tokenized robot digital twins and link to respective kiosk

📂`app/order`: Run Webots simulations, multi-signature mechanism, keep track Activity Verifier of each phase, perform order lifecycle on-chain, manage order state, detail on-chain log, render order page UI components

📂`components`: Some reusable frontend UI components are stored here (cards, toast, styling)

📂`config`: Database configuration

📂`context`: Manage wallet connection state through DApp

📂`constant`: Object addresses. For easy access to deployed modules and kiosks.

📂`helpers`: Helper function for order stage processing. Client and server side interface for interacting with modules.

📂`hooks`: For add,retrieve,updating orders + event listening, checking event logs, syncing order status, update data in each phase in cycle + load products, refresh stock info and update, fetch on-chain stock info, dealing with digital twins' states

📂`services`: All firebase db and Pinata (for lifecycle report) interaction

## move-contracts/

All packages and modules are deployed on IOTA Rebased Testnet

**Main HyperAgile package**: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x32791c7fc9f6208040417d79219eeb6ed6f23b19a1ce9ac6f6723b1f1e7605b0/contracts)

#### 👇 View the tokenized products on IOTA Scan 👇
- Green Cube: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x79f23aaa9c8dfa523cff5c02583b271097367ccaeee9e1ef1e3654471ddbc99f)
- Purple Cube: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x5c5dcbcd3f7277adf24249764ee3218a8d0902e83aeef5b0b71836f09561b557)
- Blue Cube: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x8235d15fe27e857fb5e5f4d4ef34c270f07d7ccf4a555a2688b590ad2f63c919)

#### 👇 View the shelf kiosk of each product on IOTA Scan 👇
- Green Cube Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xb2d0f4011e94c50d728034a9a4ca0897bc1612b6854dbe4deb1a62613c584851)
- Purple Cube Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x6ce573dd560698cb9a9dcae3bccc705985b050aa0a2cc43f34092f10c1f363bb)
- Blue Cube Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xf386ffbbaf7e4d421080bee666b5a154917da47073fb7cd3ff09f0525988e292)

#### 👇 View the kiosk of each picking robot on IOTA Scan 👇
- #0: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xcf7b07c4590dfd4a82bcabbe2d3df42164a425088464042c3d075495a3ee17e9)
- #1: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x2b4e39ea37d1bda9959d1ec7531dc1b365eb4758f8239e7d49966a23dabcad85)
- #2: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x01b93229ebf993a30e6523abd3bfdd0a7b2659fd498d499d60af63c4038ef007)
- #3: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x3ad6033596c69d61b71efda1e6334fbda0f8dc8bbdf96a56cde247bad0c4068c)
- #4: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xc3fdb5d1433831260f822da16544d04fe70b571a201b427462675343f65ca347)

#### 👇 View the kiosk of each packing robot on IOTA Scan 👇
- #0: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x466236ae54754d021b8a37174832819152aabd62abeb6b29b921c8169e67bb49)
- #1: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xe6267c8a43e006e1085a1a9de5e42e64d955e7080ab96695bd59493d7560ec04)
- #2: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x439296496c8d984208df586fcd55265763d1fac5502ae305ed4b02d4bd58e2d5)
- #3: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x4a4f3f5f3f88e2201c54033c412b306e7816c8208d74a0bc2fe142b219cf01ad)
- #4: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x5aff598de439ae07dd4a6805794a380cbb5fd4a894a0dc20e77b29d353969bab)

#### 👇 View the kiosk of each delivery robot on IOTA Scan 👇
- #0: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xead164d39b1985233c88197a242c5f0861fc2af12aeb87dffe5a884094129aa2)
- #1: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x6d0c0b52af4de4010e2d7a8b24dc6bbebbb241d84d60bbfd54427546cd3f63fb)
- #2: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xcc5955119c4e1b892dfa2a03c063917129ea7d86f0ed79129f202d4a86c11285)
- #3: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xde7ff6da5d868a7b955ee70f72f2948fea6815227d715cd017c6997296bfaa36)
- #4: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xc8858e914b84c2cad48be85bfeda16237c221adddc04276da41d9b1c298ade6c)

#### 👇 View the kiosk of each zones on IOTA Scan 👇
- Order Buffer Zone Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x37b35fe7d7c172ae7d1536c51412c6c344611f8ca320bc68c3fd6a14bde32a04)
- Packout Zone Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xf17c95caec2ce02a4d4d84fc50d0e74008b85dfa396ec64a1fd0e67518f4ae37)
- Delivery Zone Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xfe53fae7099899a4e724b9c4c6cf34193443774968dbd0383710517bdf96967f)

## Robot-Sim Folder Description

#### robot-controllers/

This folder contain the controller system of each individual robot which define their operations in the warehouse. Robot 1,2,3 representing picking, packing, and delivering.

#### connectivity-layer-server/

Containing the flask server acting as the connectivity layer. Using ngrok tunneling to connect.

#### robot-status-memory/

Acting as a simple robot temp memory for demo purpose.

#### robot-part-stl/

Containing all the robotic parts use for simulation purpose in the showcase.

#### webot-world-setup/

Containing the warehouse 3D scene our team setup for simulation purpose in the showcase. In the format of wbt file.
