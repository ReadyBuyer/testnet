/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * 1. setGreeting: accepts a stake amount, such as "0.1", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the staked amount saved for it,
 *    
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */

import { Context, logging, storage } from 'near-sdk-as'

const DEFAULT_STAKE = 1;

// Exported functions will be part of the public interface for your smart contract.
// Feel free to extract behavior to non-exported functions!
export function getStake(accountId: string): number | null {
  // This uses raw `storage.get`, a low-level way to interact with on-chain
  // storage for simple contracts.
  // If you have something more complex, check out persistent collections:
  // https://docs.near.org/docs/concepts/data-storage#assemblyscript-collection-types
  return storage.get<number>(accountId, DEFAULT_STAKE)
}

export function setStake(amount: number): void {
  const accountId = Context.sender
  // Use logging.log to record logs permanently to the blockchain!
  logging.log(`Saving stake "${amount}" for account "${accountId}"`)
  storage.set(accountId, amount)
}
