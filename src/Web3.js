import Web3 from "web3/dist/web3.min.js";
import { swapABI, swapAddress } from "./Credential";

export const checking =async()=>{
    const web3 = new Web3("http://172.105.60.158:10001")
    const contract = new web3.eth.Contract(swapABI, swapAddress)
    const data = await contract.methods.balanceOf("0x1f5A69D5fE014213601d35472400978b48f778a2").call();
    console.log(data);
    
}
