# Soso Value Auto Referral Bot

This bot automates the process of creating accounts and using referral codes for the SosoValue Web.

## Features

- Using IMAP Gmail
- Uses proxies to avoid IP bans.
- Logs the created accounts.
- Free bypass captcha using puppeter tested on windows, linux.

## Requirements

- Node.js v18.20.6 LTS [Download](https://nodejs.org/dist/v18.20.6/node-v18.20.6-x64.msi).
- Soso Value Account [Soso](https://sosovalue.com/join/2UINHAWE).
- 2Captcha Apikey [2Captcha](https://2captcha.com/).
- Gmail Account.
- How to get Password Email [Here](https://www.youtube.com/watch?v=_rAoQeKpEtM)

## Notes on linux

if you want using puppeter on linux you must install

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo apt --fix-broken install -y && sudo apt install -f ./google-chrome-stable_current_amd64.deb -y && sudo apt install xvfb -y
npm i xvfb
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ahlulmukh/sosovalue-autoreff.git
   cd sosovalue-autoreff
   ```

2. Install the dependencies:

   ```sh
   npm install
   npm run build
   ```

3. Create a `proxy.txt` file in the root directory and add your proxies (one per line) (Optional).

   ```
   Format Proxy
   http://user:pass@host:port
   http://user:pass@host:port
   http://user:pass@host:port
   ```

4. Copy `config.json.example` to `config.json`.

   ```
   "email": "your_email",
   "password": "your_password",
   "captcha2": "your_2captcha_apikey"
   ```

## Usage

1. Run the bot:

```sh
npm run start
```

2. Follow the prompts to enter your referral code example, and then input (how many refferal)

## Output

- The created accounts will be saved in `accounts.txt`.

## Notes

- Make sure to use valid proxies to avoid IP bans.

## Stay Connected

- Channel Telegram : [Telegram](https://t.me/elpuqus)
- Channel WhatsApp : [Whatsapp](https://whatsapp.com/channel/0029VavBRhGBqbrEF9vxal1R)

## Donation

If you would like to support the development of this project, you can make a donation using the following addresses:

- Solana: `FPDcn6KfFrZm3nNwvrwJqq5jzRwqfKbGZ3TxmJNsWrh9`
- EVM: `0xae1920bb53f16df1b8a15fc3544064cc71addd92`
- BTC: `bc1pnzm240jfj3ac9yk579hxcldjjwzcuhcpvd3y3jdph3ats25lrmcsln99qf`

## Disclaimer

This tool is for educational purposes only. Use it at your own risk.
