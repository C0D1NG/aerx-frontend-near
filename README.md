# AERX

> aerx is a decentralized social media platform, where users can monetized their posts, create NFT contents, etc

## Getting Started

1. `git clone https://github.com/AERX-dev/aerx-frontend-near.git`
2. `cd aerx-frontend-near`
3. `npm install`
4. `npm run dev`

### Prerequisites

-   Nodejs
-   NPM

## The project directories overview

### Components Directory

-   Account Directory contains 2 files, ie. 1. Form for getting user data from client side and 2. Index for the entry point of our account components
-   Header Directory navigation
-   Landing Directory for the entry point of the application
-   Profile Directory contains profile of the registered user
-   UI Directory contains the reuseable components for cards and icon buttons

### Pages Directory

-   This directory contains the main pages of our application. We have the following pages
    -   Account
    -   Feed
    -   Profile

### [hooks](./hooks)

Contains our custom hooks. The IFPS hook helps placing content on through the ipfs gateway. More [beautiful hooks](https://github.com/antonioru/beautiful-react-hooks) are available 🖌️

### Lib directory

-   This directory contains the following: 1. Auth 2. NFTContract 3. TokenContract 4. Configuration. Model which contains the PrfoileNFTMetadata

### Locales

-   This directory contains all the languages we have set up. Easily translate the application across multiple languages

### Public

-   This is the public directory

### Stores directory

-   This directory helps us manages state of the application with the help of the "create" method of "zustand" state management library

## Built With

-   React
-   Styled Components
-   NEAR API JS
-   Next Translate
-   Zustand
-   IPFS Core
-   React Icons

## Live Demo

[aerx](https://aerx-2.vercel.app/)

## Browser side IPFS deployment

Deploy your files via a browserside local IPFS node.
The CID and URI is returned on success.

### Contributing

[contributing](CONTRIBUTING.md)

## Acknowledgments

-   IPFS reference [here 🗻](https://github.com/ipfs-examples/js-ipfs-examples/)

<!-- ## 📝 License -->

<!-- This project is [Apache](lic.url) licensed. -->
