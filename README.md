# WeWire Wallets – React Native (Expo)

A minimal wallet-style app with 5 screens: Welcome/Login, Home, Wallets list, Add wallet, and Wallet detail. Uses mock data and in-memory state (no backend).

## Setup

1. Install dependencies:

   ```bash
   bun or npm or yarn install
   ```

2. Start the app:

   ```bash
   npx expo start
   ```

   Then open in iOS simulator, Android emulator, or scan the QR code with Expo Go.

(Optional: note how long you spent on the test in this README or in your submission.)

## Screens

- **Welcome / Login** – Email and password inputs; Login navigates to Home (no API).
- **Home** – Total balance (sum of all wallets), wallet cards, links to Wallets list and Add wallet.
- **Wallets** – Full list with search by name/currency; tap a wallet to open its detail.
- **Add Wallet** – Form: name (required, min 2 chars) and currency (USD/EUR/GBP). Validates and adds a new wallet (balance 0.00).
- **Wallet Detail** – Name, currency, balance and recent transactions (by `walletId`). Shows “No transactions yet” when empty.

## Project structure

- `app/` – Expo Router screens and stack layout.
- `components/` – Shared UI (Button, Input, Fab, home components).
- `constants/` – Colors/theme.
- `data/` – Mock wallets and transactions.
- `interfaces/` – TypeScript types (Wallet, Transaction, forms, etc.).
- `store/` – Zustand store for wallets (and auth).
- `utils/` – Validations, date formatting, wallet helpers.

## Tech

- React Native (Expo) with TypeScript
- Expo Router (stack navigation)
- Zustand for in-memory state (no backend)
