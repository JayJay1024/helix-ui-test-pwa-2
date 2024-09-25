import { Abi, getContract } from "viem";
import { TFunction } from "./types";

const abi = [
  {
    inputs: [
      { internalType: "address", name: "_dao", type: "address" },
      { internalType: "address", name: "_msgline", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "srcAppChainId", type: "uint256" },
      { indexed: false, internalType: "bytes32", name: "transferId", type: "bytes32" },
      { indexed: false, internalType: "bool", name: "result", type: "bool" },
    ],
    name: "CallResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "srcAppChainId", type: "uint256" },
      { indexed: false, internalType: "bytes32", name: "transferId", type: "bytes32" },
      { indexed: false, internalType: "address", name: "srcAppAddress", type: "address" },
    ],
    name: "CallerUnMatched",
    type: "event",
  },
  { inputs: [], name: "acceptOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "dao",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRecvMessageId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestSentMessageId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "messageId", type: "bytes32" }],
    name: "messageDelivered",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_from", type: "address" },
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "bytes", name: "_message", type: "bytes" },
    ],
    name: "messagePayload",
    outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "msgline",
    outputs: [{ internalType: "contract IMessageLine", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDao",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_srcAppChainId", type: "uint256" },
      { internalType: "address", name: "_remoteAppAddress", type: "address" },
      { internalType: "address", name: "_localAppAddress", type: "address" },
      { internalType: "bytes", name: "_message", type: "bytes" },
    ],
    name: "receiveMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_remoteChainId", type: "uint256" },
      { internalType: "address", name: "_remoteBridge", type: "address" },
    ],
    name: "registerRemoteReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_remoteChainId", type: "uint256" },
      { internalType: "address", name: "_remoteBridge", type: "address" },
    ],
    name: "registerRemoteSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "remoteAppReceivers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "remoteAppSenders",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "remoteMessagers",
    outputs: [
      { internalType: "uint256", name: "msglineRemoteChainId", type: "uint256" },
      { internalType: "address", name: "messager", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_remoteChainId", type: "uint256" },
      { internalType: "bytes", name: "_message", type: "bytes" },
      { internalType: "bytes", name: "_params", type: "bytes" },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_operator", type: "address" }],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_appRemoteChainId", type: "uint256" },
      { internalType: "uint256", name: "_msglineRemoteChainId", type: "uint256" },
      { internalType: "address", name: "_remoteMessager", type: "address" },
    ],
    name: "setRemoteMessager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_caller", type: "address" },
      { internalType: "bool", name: "_enable", type: "bool" },
    ],
    name: "setWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_dao", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "whiteList",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
] as const satisfies Abi;

export const getMsgportMessagerContract: TFunction<typeof abi> = ({ address, publicClient, walletClient }) => {
  return getContract({ abi, address, publicClient, walletClient });
};
