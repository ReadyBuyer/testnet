import { Context, logging, storage, PersistentMap, context } from 'near-sdk-as'

const ProductURL=new PersistentMap<string,string>("ProductURL");
const BidPrice = new PersistentMap<string, number>("Bid Price");
const PromptArray = new PersistentMap<string,string[]>("array of prompts");
const BidsArray = new PersistentMap<string, i32[]>("stores bids");
const bidders = new PersistentMap<string, string[]>("Bidders");

const user = Context.sender;

export function addUrl(name:string, url:string):void{
  ProductURL.set(name, url);
  logging.log('added url for ' + name)
}

export function setStake(name:string, amount:number): void {
  
  BidPrice.set(user, amount);
  logging.log(user + 'placed a bid of' + amount )
}

export function getUrl(name:string):string {
  if (ProductURL.contains(name)){
    return ProductURL.getSome(name);
  } else{
    logging.log(`can't find user`)
    return ''
  }
}

export function getStake():string {
  if (BidPrice.contains(user)){
    return ProductURL.getSome(user);
  } else{
    logging.log(`no bids found`)
    return ''
  }
}



