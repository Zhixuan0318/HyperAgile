<div align="center">
    <img src="https://github.com/user-attachments/assets/dc212036-ba6b-40cd-b357-9e94231ae90b" width=100>
    <h1>HyperAgile</h1>
    <strong>Connecting Industrial Warehouse Robotic Automation to IOTA</strong>  
</div>

<br>

![Frame 5 (9)](https://github.com/user-attachments/assets/c35e05e5-098a-4e98-b97e-3446552d95fc)

## 📦 Our Deliverables

1. Our 5 mins+ Demo Video (Youtube) [🌐Watch It!](https://youtu.be/KwEaIVQ5rNM)
2. Our Pitch Deck (PDF Download) [🌐Read It!](https://drive.google.com/file/d/1D_KlTTFkBzNIDKYSOFD9SoSHWukkY8qp/view?usp=sharing)
3. Our Demo DApp (Deployed on IOTA Rebased Testnet) [🌐Try It!](https://hyperagile-on-iota.vercel.app/)

### Extra: Code Submission Breakdown 📃
For the convenience of the technical judges, our team has organized the code submission by breaking down the structure and providing descriptions for each folder and important files. You can access the documentation folder [🌐here](https://github.com/Zhixuan0318/HyperAgile/tree/main/doc#code-submission-breakdown) !

<br>

## 👊 Problem We're Tackling

![image 5 (1)](https://github.com/user-attachments/assets/eafd5fc9-38c3-493a-8c32-934631d3f8d6)

Industrial warehouses are facing several challenges in 2025, including increased pressure to scale, rising labor costs, and workload spikes that exceed what humans alone can manage. As a result, many industrial warehouses are beginning to adopt robotic automation to enhance workflow speed and efficiency.

One of the key issues in robotic-powered industrial warehouses is data centralization, especially when operating within a Web2-based infrastructure. This challenge is further compounded by the industry's frequent adoption of distributed manufacturing strategies, which create complex supply chains involving multiple stakeholders and manufacturing units spread across various locations.

In a Web2-based robotic infrastructure, these parties often operate in silos due to disjointed and fragmented data systems, leading to information asymmetry. In other words, a robot system in one warehouse may collect data that is not shared with robots in another warehouse, making it difficult to achieve a unified operational view. The problems that arise from this include:

#### ❌ Data is not Transparent: 

Factories and warehouses operating their robotic fleets in an isolated data systems or across various locations, will create a "visibility gap" that limits transparency and access to real-time operational data for stakeholders.
   
#### ❌ Low Efficiency + Track and Trace Challenge: 

Workflow efficiency suffers due to the complex data integration processes that slow decision-making and create operational bottlenecks. This lack of transparency also complicates essential tasks like tracking the history of production or the handling of a product, even among connected facilities. The underlying reason is the lack of clear auditing trials which can be easily access, and this is a classic problem in supply chain sector.
   
#### ❌ Security Concerns: 

Security concerns are heightened in Web2 environments, where mutable data is vulnerable to tampering and counterfeiting, which is considered a damage to the supply chain and distribution trust. Additionally, the risk of a single point of failure can lead to significant disruptions, cascading through the entire robotic automation operation.

## 💡 Inspirations: Really Motivated Us!

To address the problems, letting current industries robotic setup to transition and utilise an IOTA-connected distributed data system is a smart move. The intuition behind is simple: Every action taken by a robot in a factory is recorded on the blockchain, making product movement, quality checks, and production steps fully transparent, traceable, verifiable, and tamper-resistant, significantly enhancing security and auditability for all supply chain stakeholders. Our team had included this in our demo video, don't miss it!

## ⚔️ Existing Solutions and Challenges

Existing solutions for implementing robotic automation in industries include a variety of software platforms (such as Gazebo and Webots), industry-specific solutions (like those from ABB, KUKA, and Fanuc), and integration tools (including ROS, AWS IoT, and Microsoft Azure IoT Hub). However, challenges emerge when considering the implementation of Web3 solutions in robotic automated operations. A significant hurdle is that the IOTA ecosystem lacks robotics-related development tools to facilitate the integration of blockchain solutions with existing legacy systems, which are often incompatible.

>  A simple example: while developing a prototype for our demo, we found that no industry-grade robotic simulators offer tools for easily interacting with IOTA events to conduct simulations.

☹️☹️☹️ Although industries can create their own tools or middleware for IOTA integrations, this approach can be costly, time-consuming, and resource-intensive. We need a solution to bridge the gap between industry robotic automation (web2 layer) and the IOTA ecosystem (web3 layer).

Here is a concept illustration:

![image](https://github.com/user-attachments/assets/0fcbc9d2-b656-4140-a32d-90f86bbc0545)

## 💪 We launch HyperAgile (Our Solution)

Hence, our team decided to launch HyperAgile as the first B2B Middleware-as-a-Service (MaaS) provider, assisting industries across various sectors with industrial warehouse robotic automation by designing and developing a custom hub. This hub acts like a bridge, which connects all components in their robotic automation setup architecture to the IOTA ecosystem. The benefit of using a custom middleware hub is that all of the important layers in the Web2-based robotic automation systems such as the factory floor (physical hardwares and robotics), IoT connectivity layer, security layer and also control and management layer, able to interact with the blockchain layer component easily (which involve on-chain tokenized assets, accounts, modules and packages, or any on-chain tooling integration). Our hub will now become the common interface for industries to connect all robotic components built by different language, framework, hardware, and communication protocol into a unified Web3 system on IOTA. Below is a high-level architecture overview of a custom hub in a industry robotic setup:

### Introduce the concept of Hub - Architecture Overview

![image](https://github.com/user-attachments/assets/dcfca8dc-426c-4839-978f-9766064de285)

### Why custom, not a “one-size-fits-all” solution❓

Our role is crucial because industrial robotic architectures are often complex and highly customized. Each industry has unique operational needs, diverse technologies, and specific regulatory requirements, making a one-size-fits-all approach impractical. That's why we offer tailored solutions, enabling industries to integrate IOTA Web3 infrastructure efficiently, which aligns perfectly with our product-market fit. This approach not only saves significant time for indsutries but also reduces costs.

![image](https://github.com/user-attachments/assets/89058c9b-3f64-4b90-a3c2-c9ca862be220)

As a B2B (business-to-business) service provider, we are proud to be the first to offer this service on IOTA. In one of our future milestone (have a look in our pitch deck), HyperAgile will also serve as a key driver in introducing a comprehensive ecosystem of industry-specific robotic development tools to the IOTA community as part of our ongoing service journey.

## How we helps our industry clients? (Not Limited To)

- **🏭 Manufacturing:** On-chain logs of robotic interactions, verifiable compliance and audit trails for industrial goods.

- **🚚 3PL (Third Party Logistics) and Ecommerce:** Real time on-chain updates of your parcel handled by order fulfilment robots in the warehouse.

- **🧬 Pharmaceutical and Biotech:** Products handling with robots able to follow drug transparency regulations easily with verifiable trace.

- **🍄 Cold Storage:** Verifiable robot handling of food and biotech products. Enhanced product lifecycle traceability.

## ✨ Proof of Concept: An Implementation Prototype

The implementation prototype we showcase in the demo video is built using the hub architecture concept that we proposed, which able to operate a robotic-powered small scale ecommerce-warehouse supply chain cycle. Further proving the feasibility of utilising IOTA solutions to solve real world industry problem in our project. Below attached is a high-level architecture diagram of our ecommerce-warehouse demo setup, which our custom hub being the most crucial middleware component:

![image](https://github.com/user-attachments/assets/bf5edd3d-81cc-4c7d-8ee5-82b862b1484b)

An order is placed at the client layer, and the products are held in the warehouse as tokenized assets. Inventory items are tokenized on IOTA as on-chain digital assets using the `asset_tokenization` package, enabling fully on-chain tracking and management with a more transparent approach. Each tokenized inventory item is transferred to and stored in its respective kiosk, which is mapped to a real-life shelf or storage location in the warehouse.

#### 👇 View the tokenized products on IOTA Scan 👇
- Green Cube: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x79f23aaa9c8dfa523cff5c02583b271097367ccaeee9e1ef1e3654471ddbc99f)
- Purple Cube: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x5c5dcbcd3f7277adf24249764ee3218a8d0902e83aeef5b0b71836f09561b557)
- Blue Cube: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x8235d15fe27e857fb5e5f4d4ef34c270f07d7ccf4a555a2688b590ad2f63c919)

#### 👇 View the shelf kiosk of each product on IOTA Scan 👇
- Green Cube Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xb2d0f4011e94c50d728034a9a4ca0897bc1612b6854dbe4deb1a62613c584851)
- Purple Cube Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x6ce573dd560698cb9a9dcae3bccc705985b050aa0a2cc43f34092f10c1f363bb)
- Blue Cube Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xf386ffbbaf7e4d421080bee666b5a154917da47073fb7cd3ff09f0525988e292)

![image](https://github.com/user-attachments/assets/109da3b2-b8a1-41ea-b1d2-5c15c3d50dc4)

The order is processed and coordinated by on-chain modules and fulfilled by tokenized robots assigned to different tasks. These robots are digital twin representations of real robots in the factory and are also tokenized using the `asset_tokenization` package on IOTA. Representing industrial robots as digital twins on IOTA provides a transparent and efficient way to manage them on-chain. Each tokenized robot digital twin is mapped to a uniquely created kiosk to handle the on-chain asset flow during the order fulfillment process.

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

![image](https://github.com/user-attachments/assets/11172d48-9035-4ac5-8617-791cc63ad347)

We designed a factory simulation to visualize this. The cool part is, native IOTA randomness is used to select one available robot from the fleet for each operation; this process is known as load balancing. 

![image](https://github.com/user-attachments/assets/638a3230-a7fc-4e68-a2d5-e641e2859a15)

For a human-robot collaborative environment (for example, a Good to Person scenario in warehouse), which requires human operators’ close supervision, this can be facilitated using a multi-signature mechanism on IOTA, creating an efficient feedback loop that reflects on the tokenized robot.

![image](https://github.com/user-attachments/assets/e47f816d-c4fe-44c5-bdc7-697daf63249a)

Finally, when the order is fulfilled, an operation report will be generated and stored on Pinata. Fully tamper-proof and verifiable.

![image](https://github.com/user-attachments/assets/645c2341-f020-49bf-8a45-91f4c45a36fe)

## 🧩 Composable kiosk-based design approach for warehouse robotic automation

We use kiosks for our inventory and robots, with each digital twin mapped to a unique kiosk. This is our composable, kiosk-based design approach for warehouse automation. Every inventory shelf is treated as a kiosk, and inventory tokens are transferred in. Each zone within the warehouse is also represented as a kiosk, and each robot operating on the floor is assigned a kiosk. During a single operation cycle, an inventory token flows deterministically from one kiosk to another. This architecture provides us with better control and makes the system modular.

![image](https://github.com/user-attachments/assets/edfcd048-9b0b-4172-bbb9-ffbe21c84825)

Below is an example of a kiosk-to-kiosk asset movement, involving the product move out from the shelf to a chosen picking robot:

![image](https://github.com/user-attachments/assets/75568787-4227-4cb2-ba02-8b2132dd851d)

#### 👇 View the kiosk of each zones on IOTA Scan 👇
- Order Buffer Zone Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0x37b35fe7d7c172ae7d1536c51412c6c344611f8ca320bc68c3fd6a14bde32a04)
- Packout Zone Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xf17c95caec2ce02a4d4d84fc50d0e74008b85dfa396ec64a1fd0e67518f4ae37)
- Delivery Zone Kiosk: [🌐IOTA Scan](https://iotascan.com/testnet/object/0xfe53fae7099899a4e724b9c4c6cf34193443774968dbd0383710517bdf96967f)


## 🔌Connecting local robotic fleet

![image](https://github.com/user-attachments/assets/dec9eed9-c3eb-4f85-b686-24f968489cc3)

To further validate the feasibility of our implementation, we also perform testing on a physical robot, which we refer to as a local robotic fleet. The system is centered around the Hub as well, enabling industries to interact with an IoT connectivity layer (refer to above architecture overview). This layer acts as an intermediary between the robotic fleet and the Hub, which is integrated with IOTA. The IoT connectivity layer can incorporate various technologies such as AWS IoT Core, Microsoft Azure IoT, Oracle IoT cloud, and MQTT-based solutions like RabbitMQ or Kafka, etc. 

To simplify the demonstration, our team utilized ngrok to establish a secure communication tunnel between our physical robot—a combination of a ROS-powered CoBot and a mobile AGV (Automated Guided Vehicle), with operations built using the Elephant Robotics Python API—and initiated the order fulfillment process on our DApp. As shown in the demo video, the commands assigned from IOTA are successfully captured and transmitted to the connectivity layer, where they are received and executed by the robot in real time. Once the task is completed, the operation is logged and sent back via the same route. This process mirrors what can be tested directly on our demo DApp.

We also replicated this functionality using our Webots simulation (hosted locally in Webots software) to control the robotic fleet. By creating an intermediate connectivity layer (via a Flask server) and utilizing the ngrok tunnel, we successfully recreated the same results as with the physical robot. You can see the full demonstration in the video!


