/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs= []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(patient_name,age,disease,bill) {
const NFT= {
    "patient_name":patient_name,
    "age":age,
    "disease":disease,
    "bill":bill
}
NFTs.push(NFT);
console.log("Minted:"+patient_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0;i<NFTs.length;i++) {
    console.log("\n"+"Patient Name:"+NFTs[i].patient_name);
    console.log("Age:"+NFTs[i].age);
    console.log("Disease:"+NFTs[i].disease);
    console.log("bill:"+NFTs[i].bill);

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);
}

// call your functions below this line
mintNFT("Carl",25,"Dengue",1500);
mintNFT("Jason",36,"Cervical",900);
mintNFT("Lara",18,"Cancer",2500);
listNFTs();
getTotalSupply();
