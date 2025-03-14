# Dexter Interface

This is a React-based interface for interacting with the Dexter smart contract.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/theocerdan/dexter.git
   cd dexter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration
Before running the application, you need to set the router address in `address.ts`:

```ts
export const ROUTER_ADDRESS: Address = '0xD0141E899a65C95a556fE2B27e5982A6DE7fDD7A';
```
Replace the address with the appropriate router contract address if necessary.

## Usage

### Development Mode
To start the development server, run:
```sh
npm run dev
```
This will launch the interface locally with hot reloading.

### Production Build
To build the application for production, use:
```sh
npm run build
```
The output will be located in the `dist` directory.
