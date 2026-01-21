import React from 'react'
import WhatisNextjs from './WhatisNextjs'
import NextjsAdvancedTopics from './NextjsAdvancedTopics'
import UnderstandingFileBasedRouting from './UnderstandingFileBasedRouting'
import ShadcnRouterReloadSolveAndATagValidation from './shadcdrouterreloadsolveandatagvalidation'
import ErrorAndLoadingHandle from './ErrorAndLoadingHandle'
import StaticDynamicRendering from './StaticDynamicRendaring'
import UserClient from './UserClient'
import FatchDataServerCmVsClientCom from './FatchDataServerCmVsClientCom'

function Nextjs() {
  return (
    <div>
      <WhatisNextjs></WhatisNextjs>
      <NextjsAdvancedTopics></NextjsAdvancedTopics>
      <UnderstandingFileBasedRouting></UnderstandingFileBasedRouting>
      <ShadcnRouterReloadSolveAndATagValidation></ShadcnRouterReloadSolveAndATagValidation>
      <ErrorAndLoadingHandle></ErrorAndLoadingHandle>
      <StaticDynamicRendering></StaticDynamicRendering>
      <UserClient></UserClient>
      <FatchDataServerCmVsClientCom></FatchDataServerCmVsClientCom>
     </div>
  )
}

export default Nextjs