# My AI App
This is an assessment for the frontend engineering role at Spotnana 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run this code, a huggingface API token is necessary. Follow the steps below to get one!

### Huggingface API token creation 

1. Sign In: Go to the Hugging Face website and sign in to your account. If you don't have one, you can create a free account.
2. Access Settings: Click on your profile picture in the top-right corner, and from the dropdown menu, select Settings.
3. Navigate to Tokens: In the settings sidebar, click on the Access Tokens tab.
4. Create New Token: Click the Create New Token button.
5. Configure Token:
    - Give your token a descriptive name.
    - Select the Fine-grained type
    - Go to the Inference section of User permissions, and click on "Make calls to Inference Providers"
    - Click on the Create Token button
6. Copy your token because you will not have access to it again after accessing the page.


### Adding your huggingface API token to this project
Create a `.env.local` folder. Add the following code to the file:

```
HF_API_TOKEN={Your access token string}
```

### Install Node Packages
To install packages, make sure you have node and npm installed first. Instructions for that are on the Node.js website.

Next, run

```bash
npm install
```

### Run the development server

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



