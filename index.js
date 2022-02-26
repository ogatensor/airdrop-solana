const { 
	Connection, 
	PublicKey,
	clusterApiUri,
	Keypair,
	LAMPORTS_PER_SOL,
	Transaction,
	Account,
} = require("@/solana/web3.js");

const newPair = new Keypair();
const publicKey = new PublicKey(newPair._keypair.publicKey).toString(); 
const secretKey = newPair._keypair.secretKey; 

const get WalletBalance = async () => { 
	try {
		const connection = new Connection(clusterApiUri("devnet"), "confirmed"); 
	} catch(err) { 
		console.log(err); 
	}
}  
