import { GearApi, GearKeyring, ProgramMetadata } from "@gear-js/api";
import { set } from "nprogress";
import { meta_data, programIDFT } from "~~/utils/vara.constants";

const metadata = ProgramMetadata.from(
  "00020000000100000000010100000000000000000102000000850424000808696f3855736572526f6c65416374696f6e00010c24446576656c6f7065720000001c53706f6e736f72000100244f7267616e6973657200020000040808696f3455736572526f6c654576656e7400010c24446576656c6f7065720000001c53706f6e736f72000100244f7267616e6973657200020000080808696f28496f55736572526f6c65000008013063757272656e745f726f6c650c0118537472696e67000124616c6c5f75736572731001585665633c284163746f7249642c20537472696e67293e00000c00000502001000000214001400000408180c001810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001c01205b75383b2033325d00001c000003200000002000200000050300",
);
export const vsetUserRole = async (payload: string) => {
  const api = await GearApi.create({
    providerAddress: "wss://testnet.vara.network",
  });

  const gas = await api.program.calculateGas.handle(
    programIDFT, // source id
    "0x8b4d200af26ed9aadd79d8b43b7d687968bcd129093eb2bf9a9a2b396d4cef14", // program id
    payload
    , // payload
    0, // value
    false, // allow other panics
    metadata,
  );
  const message = {
    destination: programIDFT, // programId
    payload: payload,
    gasLimit: gas.min_limit,
  };

  const mnemonic = "world chalk gym scout moment mandate blood family range wonder vessel slice";
  const extrinsic = api.message.send(message, metadata);

  const keyring = await GearKeyring.fromMnemonic(mnemonic, "PRANAV");

  await extrinsic.signAndSend(keyring, event => {
    console.log(event.toHuman());
  });

  setTimeout(() => {
    window.location.href = "/"
  }, 1500);
};

export const getUserRole = async () => {
  const api = await GearApi.create({
    providerAddress: "wss://testnet.vara.network",
  });
  const res = await api.programState.read(
    {
      programId: programIDFT,
      payload: undefined,
    },
    metadata,
  );
  const result = res.toJSON();
  return (result as any)["allUsers"][0][1];
};
