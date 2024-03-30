"use client";
import { useState } from 'react';
import { useApi, useAlert } from "@gear-js/react-hooks";
import { ProgramMetadata, GearApi } from "@gear-js/api";
import clsx from 'clsx';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { programIDFT, meta_data } from '~~/utils/vara.constants';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
// import { GearApi } from '@gear-js/api';


type TExtensionState = {
  data?: {
    accounts: InjectedAccountWithMeta[],
    defaultAccount: InjectedAccountWithMeta,
  }
  loading: boolean
  error: null | Error
}

const initialExtensionState: TExtensionState = {
  data: undefined,
  loading: false,
  error: null
};

const Connect = () => {
  // const { api } = useApi();

  const alert = useAlert();
  
  const [fullState, setFullState] = useState<any | undefined>(0);
  
  const metadata = ProgramMetadata.from('00020000000100000000010100000000000000000102000000850424000808696f3855736572526f6c65416374696f6e00010c24446576656c6f7065720000001c53706f6e736f72000100244f7267616e6973657200020000040808696f3455736572526f6c654576656e7400010c24446576656c6f7065720000001c53706f6e736f72000100244f7267616e6973657200020000080808696f28496f55736572526f6c65000008013063757272656e745f726f6c650c0118537472696e67000124616c6c5f75736572731001585665633c284163746f7249642c20537472696e67293e00000c00000502001000000214001400000408180c001810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001c01205b75383b2033325d00001c000003200000002000200000050300');
  const color = (fullState[0] && fullState[0][1]) ?? "Black";
  const [state, setState] = useState(initialExtensionState);

  const getState = async () => {
    const api = await GearApi.create({
      providerAddress: 'wss://testnet.vara.network',
    });
    await api.programState
        .read({ programId: "0x6807d053b1ff920bf0ea314f95af41016c732eeda9df97e7956a1ed976ae33b1", payload:"" }, metadata)
        .then((result) => {
          setFullState(result.toJSON());
        })
        .catch(({ message }: Error) => console.error(message));

  };

  const handleConnect = async () => {
    setState({ ...initialExtensionState, loading: true });

    web3Enable('polkadot-extension-dapp-example')
      .then((injectedExtensions) => {
        if (!injectedExtensions.length) {
          return Promise.reject(new Error('NO_INJECTED_EXTENSIONS'));
        }

        return web3Accounts();
      })
      .then((accounts) => {
        if (!accounts.length) {
          return Promise.reject(new Error('NO_ACCOUNTS'));
        }

        setState({
          error: null,
          loading: false,
          data: {
            accounts: accounts,
            defaultAccount: accounts[ 0 ],
          }
        });

      console.log('metadata', metadata);
      getState();
      })
  };

  if (state.error) {
    return (
      <span className="text-red-500 font-bold tracking-tight">
        Error with connect: {state.error.message}
      </span>
    );
  }

  return state.data
  ? <>
  <h1>{JSON.stringify(fullState)}</h1>
  Hello, {beatifyAddress(state.data.defaultAccount.address)}!</>
    : <>
    <button
      disabled={state.loading}
      className={
        clsx(
          'inline-block rounded-lg px-4 py-1.5',
          'text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-amber-600',
          state.loading ? 'cursor-not-allowed bg-amber-400' : 'bg-amber-500 hover:bg-amber-600 hover:ring-amber-600'
          )
        }
        onClick={handleConnect}
        >
      {state.loading ? 'Connecting...' : 'Connect'}
    </button>;
      </> 
};

function beatifyAddress(address: string) {
  return `${address.slice(0, 3)}...${address.slice(-3)}`;
}

export default Connect;