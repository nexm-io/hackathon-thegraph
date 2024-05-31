import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ExcludeFromDividendProcessing,
  ExcludeFromFees,
  ExcludeMultipleAccountsFromFees,
  FailToSend,
  GasForProcessingUpdated,
  LiquidityWalletUpdated,
  OwnershipTransferred,
  ProcessedDividendTracker,
  SendDividends,
  SetAutomatedMarketMakerPair,
  SwapAndLiquify,
  Transfer,
  UpdateDividendTracker,
  UpdateUniswapV2Router
} from "../generated/MoonBeans/MoonBeans"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createExcludeFromDividendProcessingEvent(
  account: Address,
  isExcluded: boolean
): ExcludeFromDividendProcessing {
  let excludeFromDividendProcessingEvent =
    changetype<ExcludeFromDividendProcessing>(newMockEvent())

  excludeFromDividendProcessingEvent.parameters = new Array()

  excludeFromDividendProcessingEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  excludeFromDividendProcessingEvent.parameters.push(
    new ethereum.EventParam(
      "isExcluded",
      ethereum.Value.fromBoolean(isExcluded)
    )
  )

  return excludeFromDividendProcessingEvent
}

export function createExcludeFromFeesEvent(
  account: Address,
  isExcluded: boolean
): ExcludeFromFees {
  let excludeFromFeesEvent = changetype<ExcludeFromFees>(newMockEvent())

  excludeFromFeesEvent.parameters = new Array()

  excludeFromFeesEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  excludeFromFeesEvent.parameters.push(
    new ethereum.EventParam(
      "isExcluded",
      ethereum.Value.fromBoolean(isExcluded)
    )
  )

  return excludeFromFeesEvent
}

export function createExcludeMultipleAccountsFromFeesEvent(
  accounts: Array<Address>,
  isExcluded: boolean
): ExcludeMultipleAccountsFromFees {
  let excludeMultipleAccountsFromFeesEvent =
    changetype<ExcludeMultipleAccountsFromFees>(newMockEvent())

  excludeMultipleAccountsFromFeesEvent.parameters = new Array()

  excludeMultipleAccountsFromFeesEvent.parameters.push(
    new ethereum.EventParam(
      "accounts",
      ethereum.Value.fromAddressArray(accounts)
    )
  )
  excludeMultipleAccountsFromFeesEvent.parameters.push(
    new ethereum.EventParam(
      "isExcluded",
      ethereum.Value.fromBoolean(isExcluded)
    )
  )

  return excludeMultipleAccountsFromFeesEvent
}

export function createFailToSendEvent(): FailToSend {
  let failToSendEvent = changetype<FailToSend>(newMockEvent())

  failToSendEvent.parameters = new Array()

  return failToSendEvent
}

export function createGasForProcessingUpdatedEvent(
  newValue: BigInt,
  oldValue: BigInt
): GasForProcessingUpdated {
  let gasForProcessingUpdatedEvent = changetype<GasForProcessingUpdated>(
    newMockEvent()
  )

  gasForProcessingUpdatedEvent.parameters = new Array()

  gasForProcessingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newValue",
      ethereum.Value.fromUnsignedBigInt(newValue)
    )
  )
  gasForProcessingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldValue",
      ethereum.Value.fromUnsignedBigInt(oldValue)
    )
  )

  return gasForProcessingUpdatedEvent
}

export function createLiquidityWalletUpdatedEvent(
  newLiquidityWallet: Address,
  oldLiquidityWallet: Address
): LiquidityWalletUpdated {
  let liquidityWalletUpdatedEvent = changetype<LiquidityWalletUpdated>(
    newMockEvent()
  )

  liquidityWalletUpdatedEvent.parameters = new Array()

  liquidityWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newLiquidityWallet",
      ethereum.Value.fromAddress(newLiquidityWallet)
    )
  )
  liquidityWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldLiquidityWallet",
      ethereum.Value.fromAddress(oldLiquidityWallet)
    )
  )

  return liquidityWalletUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProcessedDividendTrackerEvent(
  iterations: BigInt,
  claims: BigInt,
  lastProcessedIndex: BigInt,
  automatic: boolean,
  gas: BigInt,
  processor: Address
): ProcessedDividendTracker {
  let processedDividendTrackerEvent = changetype<ProcessedDividendTracker>(
    newMockEvent()
  )

  processedDividendTrackerEvent.parameters = new Array()

  processedDividendTrackerEvent.parameters.push(
    new ethereum.EventParam(
      "iterations",
      ethereum.Value.fromUnsignedBigInt(iterations)
    )
  )
  processedDividendTrackerEvent.parameters.push(
    new ethereum.EventParam("claims", ethereum.Value.fromUnsignedBigInt(claims))
  )
  processedDividendTrackerEvent.parameters.push(
    new ethereum.EventParam(
      "lastProcessedIndex",
      ethereum.Value.fromUnsignedBigInt(lastProcessedIndex)
    )
  )
  processedDividendTrackerEvent.parameters.push(
    new ethereum.EventParam("automatic", ethereum.Value.fromBoolean(automatic))
  )
  processedDividendTrackerEvent.parameters.push(
    new ethereum.EventParam("gas", ethereum.Value.fromUnsignedBigInt(gas))
  )
  processedDividendTrackerEvent.parameters.push(
    new ethereum.EventParam("processor", ethereum.Value.fromAddress(processor))
  )

  return processedDividendTrackerEvent
}

export function createSendDividendsEvent(
  tokensSwapped: BigInt,
  amount: BigInt
): SendDividends {
  let sendDividendsEvent = changetype<SendDividends>(newMockEvent())

  sendDividendsEvent.parameters = new Array()

  sendDividendsEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSwapped",
      ethereum.Value.fromUnsignedBigInt(tokensSwapped)
    )
  )
  sendDividendsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sendDividendsEvent
}

export function createSetAutomatedMarketMakerPairEvent(
  pair: Address,
  value: boolean
): SetAutomatedMarketMakerPair {
  let setAutomatedMarketMakerPairEvent =
    changetype<SetAutomatedMarketMakerPair>(newMockEvent())

  setAutomatedMarketMakerPairEvent.parameters = new Array()

  setAutomatedMarketMakerPairEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  setAutomatedMarketMakerPairEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBoolean(value))
  )

  return setAutomatedMarketMakerPairEvent
}

export function createSwapAndLiquifyEvent(
  tokensSwapped: BigInt,
  ethReceived: BigInt,
  tokensIntoLiqudity: BigInt
): SwapAndLiquify {
  let swapAndLiquifyEvent = changetype<SwapAndLiquify>(newMockEvent())

  swapAndLiquifyEvent.parameters = new Array()

  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSwapped",
      ethereum.Value.fromUnsignedBigInt(tokensSwapped)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "ethReceived",
      ethereum.Value.fromUnsignedBigInt(ethReceived)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensIntoLiqudity",
      ethereum.Value.fromUnsignedBigInt(tokensIntoLiqudity)
    )
  )

  return swapAndLiquifyEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUpdateDividendTrackerEvent(
  newAddress: Address,
  oldAddress: Address
): UpdateDividendTracker {
  let updateDividendTrackerEvent = changetype<UpdateDividendTracker>(
    newMockEvent()
  )

  updateDividendTrackerEvent.parameters = new Array()

  updateDividendTrackerEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )
  updateDividendTrackerEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )

  return updateDividendTrackerEvent
}

export function createUpdateUniswapV2RouterEvent(
  newAddress: Address,
  oldAddress: Address
): UpdateUniswapV2Router {
  let updateUniswapV2RouterEvent = changetype<UpdateUniswapV2Router>(
    newMockEvent()
  )

  updateUniswapV2RouterEvent.parameters = new Array()

  updateUniswapV2RouterEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )
  updateUniswapV2RouterEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )

  return updateUniswapV2RouterEvent
}
