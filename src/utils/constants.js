import uuid from 'react-native-uuid';

const defaultTokens = [
  {
    name: 'Ethereum',
    id: uuid.v4(),
    symbol: 'ETH',
  },
];

const erc20Abi = [
  {
    name: 'balanceof',
    type: 'functions',
    constant: true,
    payable: false,
    inputs: [
      {
        name: '_owner',
        type: 'addres',
      },
    ],
    outputs: [
      {
        name: 'balances',
        type: 'uint128',
      },
    ],
  },
  {
    name: 'trasfer',
    type: 'functions',
    constant: false,
    payable: false,
    inputs: [
      {
        name: '_to',
        type: 'addres',
      },
      {
        name: '_value',
        type: 'uint128',
      },
    ],
    outputs: [
      {
        name: 'succes',
        type: 'boolean',
      },
    ],
  },
];

export { defaultTokens, erc20Abi };
