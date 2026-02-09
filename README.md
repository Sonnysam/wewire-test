# WeWire Wallets – React Native (Expo)

A minimal wallet-style app with 5 screens: Welcome/Login, Home, Wallets list, Add wallet, and Wallet detail. Uses mock data and in-memory state (no backend).

## Setup

1. **Clone the project** and go into the folder:

   ```bash
   git clone <repository-url>
   cd wewire-app
   ```

2. **Install dependencies** (use one of):

   ```bash
   npm install
   ```

   or `bun install` / `yarn install`.

3. **Check and fix the Expo environment** (recommended):

   ```bash
   npx expo-doctor
   ```

   Or to validate and align package versions with the Expo SDK:

   ```bash
   npx expo install --check
   ```

   Fix any reported issues before starting the app.

4. **Start the app**:

   ```bash
   npx expo start
   ```

   Then open in iOS simulator, Android emulator, or scan the QR code with the Expo Go app.

## Folder structure

```
wewire-app/
├── app/                      # Expo Router screens & layout
│   ├── _layout.tsx           # Root stack (auth vs home)
│   ├── (auth)/
│   │   └── index.tsx         # Welcome / Login
│   └── (home)/
│       ├── _layout.tsx       # Home stack
│       ├── home.tsx          # Home (balance + wallet cards)
│       ├── wallets.tsx       # Wallets list + search
│       ├── add-wallet.tsx    # Add wallet form
│       └── wallet/
│           └── [id].tsx      # Wallet detail
├── components/
│   ├── common/               # MainContainer
│   ├── home/                 # BalanceCard, WalletCard, WalletsSection, etc.
│   └── ui/                   # Button, Input, Fab
├── constants/                # colors.ts
├── data/                     # Mock wallets, transactions, currencies
├── interfaces/               # TypeScript types
│   ├── store/                # WalletsState, AuthState
│   └── ...                   # Wallet, Transaction, forms, etc.
├── store/                    # Zustand: auth.ts, wallets.ts
└── utils/                    # validations, format, wallets helpers
```

## Screens

- **Welcome / Login** – Email and password inputs; Login navigates to Home (no API).
- **Home** – Total balance (sum of all wallets), wallet cards, links to Wallets list and Add wallet.
- **Wallets** – Full list with search by name/currency; tap a wallet to open its detail.
- **Add Wallet** – Form: name (required, min 2 chars) and currency (USD/EUR/GBP). Validates and adds a new wallet (balance 0.00).
- **Wallet Detail** – Name, currency, balance and recent transactions (by `walletId`). Shows “No transactions yet” when empty.

## Tech

- React Native (Expo) with TypeScript
- Expo Router (stack navigation)
- Zustand for in-memory state (no backend)
