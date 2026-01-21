import React from 'react'
import AAAFremwork from './AAAFremwork'
import TokenDecodingvsTokenVerification from './TokenDecodingvsTokenVerification'
import JwtAlgorithmEncodeDecode from './Jwt-algorithm-encode-decode'
import AuthWorkflows from './SessionBasedAuthentication'
import CookiSendServerCliendandServer from './CookiSendServerCliendandServer'

function Security() {
  return (
    <div>
      <AAAFremwork></AAAFremwork>
    <JwtAlgorithmEncodeDecode></JwtAlgorithmEncodeDecode>
      <TokenDecodingvsTokenVerification></TokenDecodingvsTokenVerification>
      <AuthWorkflows></AuthWorkflows>
      <CookiSendServerCliendandServer></CookiSendServerCliendandServer>
    </div>
  )
}

export default Security