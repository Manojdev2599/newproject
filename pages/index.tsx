import Head from 'next/head'
import { homedir } from 'os'
import StitchesLogo from '../components/StitchesLogo'
import { styled } from '../stitches.config'
import Firstpage from "./firstpage"
import Secondpage from "./secondpage"
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function Home() {
return(
  <Firstpage/>
  //<Secondpage/>
  

)
}
export default Home;
  
// const data = [
//   { id: 1, activity: " going to hotel" },
//   { id: 2, activity: " going resort" },
//   { id: 3, activity: " going airport" },
//   { id: 4, activity: " going beach" }

// ]

// export default function Home() {




//   return (


//     <>
//       <Box css={{ display: "flex", width: "100%", height: "$8", backgroundColor: "white" }}>
//         <Text css={{ fontSize: "$6", color: "$black100" }}>Pickyourtrail</Text>
//       </Box>
//       <hr></hr>
//       <Box css={{ display: "flex", height: "$7", width: '1200px' }}>
//         <Text css={{ fontSize: "$7", color: "$black100" }}> One day GOVA tour poroom... at PYT</Text>
//       </Box>
//       <hr></hr>
//       <Box css={{ display: "flex", flexDirection: "row", backgroundColor: "Yellow" }}>
//         {/* {  data.map((value,inde)=>{
//           console.log(value)
//           return( */}
//         <Box>

//           <Box css={{ display: "flex", height: '$9', width: "659px", margin: 20, backgroundColor: "white", borderBlockColor: "#d1d2d6", borderTopRightRadius: "29" }}>


//             <Table css={{
//               width: "659px", height: '173px', border: " 1px solid black",
//               borderCollapse: "collapse", borderTopLeftRadius: "50",
//             }}>
//               <Tr style={{ backgroundColor: "#b3b4bb", borderColor: "#d1d2d6" }}  >
//                 <Th style={{ borderCollapse: "collapse", border: "#b3b4bb", }}>City</Th>

//               </Tr>
//               <Tr>
//                 <Td style={{ borderCollapse: "collapse", border: " 1px solid black" }}>Day1</Td>
//                 <Td style={{ borderCollapse: "collapse", border: " 1px solid black" }}  ></Td>

//               </Tr>

//             </Table>
//           </Box>
//           <Box css={{ display: "flex", height: '$9', width: "659px", margin: 20, borderRadius: 3, backgroundColor: "white", flexDirection: "column" }}>

//             <Table style={{
//               width: "659px", height: '173px', border: " 1px solid black",
//               borderCollapse: "collapse",
//             }}>
//               <Tr>
//                 <Th style={{ borderCollapse: "collapse", border: " 1px solid black" }}>City</Th>

//               </Tr>
//               <Tr>
//                 <Td style={{ borderCollapse: "collapse", border: " 1px solid black" }}>Day1</Td>
//                 <Td style={{ borderCollapse: "collapse", border: " 1px solid black" }}>Arrive in Ephesus airport. Get transferred to your hotel in gova</Td>

//               </Tr>


//             </Table>
//           </Box>
//           <Box css={{ display: "flex", height: '$9', width: "659px", margin: 20, borderRadius: 3, backgroundColor: "white", flexDirection: "column" }}>


//             <Table style={{
//               width: "659px", height: '173px', border: " 1px solid black",
//               borderCollapse: "collapse", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,
//             }}>
//               <Tr>
//                 <Th style={{ borderCollapse: "collapse", border: " 1px solid black" }}>City</Th>

//               </Tr>
//               <Tr>
//                 <Td style={{ borderCollapse: "collapse", border: " 1px solid black" }}>Day1</Td>
//                 <Td style={{ borderCollapse: "collapse", border: " 1px solid black" }}>Arrive in Ephesus airport. Get transferred to your hotel in gova</Td>

//               </Tr>


//             </Table>
//           </Box>
//         </Box>
//         {/* )
//         })
       
//         } */}
     
//       <Box css={{ display: "flex", height: '$10', width: "800px", backgroundColor: "green" }}>

//       </Box>
//       </Box>



//     </>

//   )
// }


