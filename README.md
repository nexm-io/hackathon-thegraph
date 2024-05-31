# Hackathon Thegraph
## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm (or yarn)
- Graph CLI
- Run graph-node on locally


## Installation
Clone the Repository:

```bash
git clone https://github.com/nexm-io/hackathon-thegraph.git
cd hackathon-thegraph
```


## Install Dependencies:
```bash
npm install
# or
yarn install
```

## Running the Subgraph Locally

### Generate Code:

```bash
yarn codegen
```

### Build the Subgraph:

```bash
yarn build
```

### Create the Subgraph:

```bash
graph create --node http://127.0.0.1:8020 <SUBGRAPH_NAME>
```

### Deploy the Subgraph:
```bash
graph deploy <SUBGRAPH_NAME> --ipfs http://localhost:5001 --node http://127.0.0.1:8020
```

### Deploying to The Graph Hosted Service
#### 1. Authenticate:
```bash
graph auth --studio <YOUR_DEPLOY_KEY>
```
#### 2. Deploy:
```bash
graph deploy --studio <SUBGRAPH_SLUG>
```

## References
- TheGraph: https://thegraph.com/docs/en/
- Graph Node: https://github.com/graphprotocol/graph-node