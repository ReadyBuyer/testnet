import { Context, logging, storage, PersistentMap } from 'near-sdk-as'

const ProductURL=new PersistentMap<string,string>("ProductURL");
const BidPrice = new PersistentMap<string, number>("Bid Price");
const PromptArray = new PersistentMap<string,string[]>("array of prompts");
const BidsArray = new PersistentMap<string, i32[]>("stores bids");
const bidders = new PersistentMap<string, string[]>("Bidders");

export function addUrl(name:string, url:string):void{
  ProductURL.set(name, url);
  logging.log('added url for ' + name)
}

export function addStake(name:string, amount:number): void {
  const user = Context.sender;
  BidPrice.set(user, amount);
  logging.log(user + 'placed a bid of' + amount )
}

