let nftCollection = [];

// Function to mint a new NFT
function mintNFT(artistName, artTitle, artId, artPrice) {
    let nft = {
        "Artist Name": artistName,
        "Art Title": artTitle,
        "Art ID": artId,
        "Art Price (USD)": artPrice
    };
    nftCollection.push(nft);
}

// Function to list all NFTs and their metadata
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(nftCollection[i]);
    }
}

// Function to print the total number of NFTs minted
function printTotalSupply() {
    let totalNFTs = nftCollection.length;
    console.log("Total NFTs Minted: " + totalNFTs);
}

// Calling the functions to mint NFTs and display information
mintNFT("Rhythm", "Piece of a Gen", 135, 235);
mintNFT("Vipin", "Celestial Dreams", 162, 538);
mintNFT("Gautam", "Rock Formation", 655, 375);
mintNFT("Rahul", "Diamond Cut", 123, 355);

listNFTs();
printTotalSupply();