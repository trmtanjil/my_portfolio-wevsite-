import GenarateSndMigreate from "./GenarateSndMigreate"
import PrismaModelvsSQLqury from "./PrismaModelvsSQLqury"
import WatIsprisma from "./WatIsprisma"

 
function PrismaOrm() {
  return (
    <div>
        <WatIsprisma></WatIsprisma>
        <PrismaModelvsSQLqury></PrismaModelvsSQLqury>
        <GenarateSndMigreate></GenarateSndMigreate>
    </div>
  )
}

export default PrismaOrm