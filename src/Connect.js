import abi from "./abi/abi.json" assert {type: "json"};

const connect = new Promise((res, rej) => {
  if(typeof window.ethereum == "undefined"){
    rej("Install Metamask");
  }
  window.ethereum.request({method: "eth_requestAccounts"});

  let web3 = new Web3(window.ethereum);
  let contract = new web3.eth.Contract(abi, "0x6A2D77a05362F2Dc8290dFD13A8988F31408D69f");

  web3.eth.getAccounts().then((accounts) => {
    contract.methods.totalSupply().call({from: accounts[0]}).then((supply) => {
      contract.methods.getBuildings().call({from: accounts[0]}).then((data) => {
        res({supply: supply, buildings: data})
      })
    })
  })

})

export default connect;
