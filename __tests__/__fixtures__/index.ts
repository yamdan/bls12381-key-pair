/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import exampleBls12381G1JwkKeyPair from "./exampleBls12381G1JwkKeyPair.json";
import exampleBls12381G1JwkPublicKey from "./exampleBls12381G1JwkPublicKey.json";
import exampleBls12381G1JwkInvalidKeyPair from "./exampleBls12381G1JwkInvalidKeyPair.json";
import exampleBls12381G1KeyPair from "./exampleBls12381G1KeyPair.json";
import exampleBls12381G1PublicKey from "./exampleBls12381G1PublicKey.json";
import exampleBls12381G2JwkKeyPair from "./exampleBls12381G2JwkKeyPair.json";
import exampleBls12381G2JwkPublicKey from "./exampleBls12381G2JwkPublicKey.json";
import exampleBls12381G2JwkInvalidKeyPair from "./exampleBls12381G2JwkInvalidKeyPair.json";
import exampleBls12381G2KeyPair from "./exampleBls12381G2KeyPair.json";
import exampleBls12381G2PublicKey from "./exampleBls12381G2PublicKey.json";

const U8_STRING = Uint8Array.of(0);
const U8_INTEGER = Uint8Array.of(1);

const exampleSingleMessage = new Uint8Array(
  Buffer.concat([U8_STRING, Buffer.from("someData")])
);
const exampleSingleMessageG2KeySignature =
  "o6eLL+eFfvSdh+vyNCsyZxmVJTLe2DuqD93W6hG7M7se+9MdoyEdPRNiB6aM5XjVBaJQ6wSt41HTVcHTnq3aOCDAVlc27m70SJwVCUgbsqA9J/tBEqfZF7VEGs79765wIubvyed/WQR/wZGUlRSg/w==";

const exampleSingleMessageG1KeySignature =
  "o6eLL+eFfvSdh+vyNCsyZxmVJTLe2DuqD93W6hG7M7se+9MdoyEdPRNiB6aM5XjVBaJQ6wSt41HTVcHTnq3aOCDAVlc27m70SJwVCUgbsqA9J/tBEqfZF7VEGs79765wIubvyed/WQR/wZGUlRSg/w==";

const exampleMultiMessage = [
  new Uint8Array(Buffer.concat([U8_STRING, Buffer.from("test")])),
  new Uint8Array(Buffer.concat([U8_STRING, Buffer.from("value")])),
];
const exampleMultiMessageG2KeySignature =
  "gTeYNYnogNM2En/YLq7pEtDDOi1PIlVtKBevXQjIMZtk1KdOtApAw2HUNV0eFG5mXhD28X0tmXbubLqwQb0K/lKxVZJvTS2MyuP1bRDnsyJB9tOE/AnpoNDWKnjjVu6tQNgG3YNQsJZhVgvHyUAo8A==";

const exampleMultiMessageG1KeySignature =
  "gTeYNYnogNM2En/YLq7pEtDDOi1PIlVtKBevXQjIMZtk1KdOtApAw2HUNV0eFG5mXhD28X0tmXbubLqwQb0K/lKxVZJvTS2MyuP1bRDnsyJB9tOE/AnpoNDWKnjjVu6tQNgG3YNQsJZhVgvHyUAo8A==";

const badSignature =
  "AdcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";
const badSignatureBadLength =
  "aaaaAdcLcdMzvXU6pNiQHv/9/Y5QzEQpLMAfducfqOTdt/Jc6alMUGHn972ZK9aAhJTxLYGRtnvBnsQPBPgZbW+COymHfuR9jcZhoQlnfXXminowFrWHez1H0Jp4iGkHU+OlXeePg93jQW737gJs3cv8Cg==";

const exampleProverSecretKey =
  "ADVENlBhOGRTd0FwZG5mZzdFWlI4V25HZnZMRENaUFpHc1o1WTFFTEw5VkRq";

const exampleProverCommitment =
  "lDc9hC3vyQ1voqaT13NO/F+8ZAsZGryU3e/z4LT6XbHbxzdS8brIn1q6XOYvloU4";

const exampleMultiMessageG2KeyUnblindedSignatureWithProverCommitment =
  "jWRTS/6uKCG+j3PeOxk6dvJA5JUgROHaUkScZ3G17wpthLPeG+5mqhdCVoz3I6A/VeakC+QbFFLdCszmqM94v6X7J96uVWJwt942gluboxhHwbunnwcC4faeaU3iUWfZTON2w9tVScp0KSgRXD3nNA==";

export {
  exampleBls12381G1JwkKeyPair,
  exampleBls12381G1JwkPublicKey,
  exampleBls12381G1JwkInvalidKeyPair,
  exampleBls12381G1KeyPair,
  exampleBls12381G1PublicKey,
  exampleBls12381G2JwkKeyPair,
  exampleBls12381G2JwkPublicKey,
  exampleBls12381G2JwkInvalidKeyPair,
  exampleBls12381G2KeyPair,
  exampleBls12381G2PublicKey,
  exampleSingleMessage,
  exampleSingleMessageG1KeySignature,
  exampleSingleMessageG2KeySignature,
  exampleMultiMessage,
  exampleMultiMessageG1KeySignature,
  exampleMultiMessageG2KeySignature,
  badSignature,
  badSignatureBadLength,
  exampleProverSecretKey,
  exampleProverCommitment,
  exampleMultiMessageG2KeyUnblindedSignatureWithProverCommitment,
};
