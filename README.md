This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Installing https proxy for storyblok

Linux/Ubuntu users:

```bash
# Install libss3-tools and mkcert
sudo apt install libnss3-tools -y
wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-linux-amd64
sudo cp mkcert-v1.4.4-linux-amd64 /usr/local/bin/mkcert
sudo chmod +x /usr/local/bin/mkcert

# Generate local certificates
mkcert -install
mkcert localhost

# Install the HTTPS proxy and run the proxy
npm install -g local-ssl-proxy
# Running the proxy to target port 3000, you can change that any port of your choice but it should be what your app is running on in development.
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem  
# HTTPS is now running on port 3010 and forwarding requests to http 3000.
```