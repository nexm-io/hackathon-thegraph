import {
  Approval as ApprovalEvent,
  ExcludeFromDividendProcessing as ExcludeFromDividendProcessingEvent,
  ExcludeFromFees as ExcludeFromFeesEvent,
  ExcludeMultipleAccountsFromFees as ExcludeMultipleAccountsFromFeesEvent,
  FailToSend as FailToSendEvent,
  GasForProcessingUpdated as GasForProcessingUpdatedEvent,
  LiquidityWalletUpdated as LiquidityWalletUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProcessedDividendTracker as ProcessedDividendTrackerEvent,
  SendDividends as SendDividendsEvent,
  SetAutomatedMarketMakerPair as SetAutomatedMarketMakerPairEvent,
  SwapAndLiquify as SwapAndLiquifyEvent,
  Transfer as TransferEvent,
  UpdateDividendTracker as UpdateDividendTrackerEvent,
  UpdateUniswapV2Router as UpdateUniswapV2RouterEvent
} from "../generated/MoonBeans/MoonBeans"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExcludeFromDividendProcessing(
  event: ExcludeFromDividendProcessingEvent
): void {
  let entity = new ExcludeFromDividendProcessing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.isExcluded = event.params.isExcluded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExcludeFromFees(event: ExcludeFromFeesEvent): void {
  let entity = new ExcludeFromFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.isExcluded = event.params.isExcluded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExcludeMultipleAccountsFromFees(
  event: ExcludeMultipleAccountsFromFeesEvent
): void {
  let entity = new ExcludeMultipleAccountsFromFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accounts = event.params.accounts
  entity.isExcluded = event.params.isExcluded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFailToSend(event: FailToSendEvent): void {
  let entity = new FailToSend(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasForProcessingUpdated(
  event: GasForProcessingUpdatedEvent
): void {
  let entity = new GasForProcessingUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newValue = event.params.newValue
  entity.oldValue = event.params.oldValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityWalletUpdated(
  event: LiquidityWalletUpdatedEvent
): void {
  let entity = new LiquidityWalletUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newLiquidityWallet = event.params.newLiquidityWallet
  entity.oldLiquidityWallet = event.params.oldLiquidityWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessedDividendTracker(
  event: ProcessedDividendTrackerEvent
): void {
  let entity = new ProcessedDividendTracker(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.iterations = event.params.iterations
  entity.claims = event.params.claims
  entity.lastProcessedIndex = event.params.lastProcessedIndex
  entity.automatic = event.params.automatic
  entity.gas = event.params.gas
  entity.processor = event.params.processor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSendDividends(event: SendDividendsEvent): void {
  let entity = new SendDividends(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokensSwapped = event.params.tokensSwapped
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetAutomatedMarketMakerPair(
  event: SetAutomatedMarketMakerPairEvent
): void {
  let entity = new SetAutomatedMarketMakerPair(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pair = event.params.pair
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapAndLiquify(event: SwapAndLiquifyEvent): void {
  let entity = new SwapAndLiquify(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokensSwapped = event.params.tokensSwapped
  entity.ethReceived = event.params.ethReceived
  entity.tokensIntoLiqudity = event.params.tokensIntoLiqudity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateDividendTracker(
  event: UpdateDividendTrackerEvent
): void {
  let entity = new UpdateDividendTracker(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress
  entity.oldAddress = event.params.oldAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateUniswapV2Router(
  event: UpdateUniswapV2RouterEvent
): void {
  let entity = new UpdateUniswapV2Router(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress
  entity.oldAddress = event.params.oldAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
