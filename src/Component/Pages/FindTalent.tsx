import { Divider } from "@mantine/core"
import SearchBar from "../FindTalent/SearchBar"
import Talents from "../FindTalent/Talents"

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-cape-cod-950 font-['poppins']" >
        <Divider mx="md" size="xs"/>
        {/* <SearchBar/>
        <Divider mx="md" size="xs"/> */}
        <Talents/>
    </div>
  )
}

export default FindTalent