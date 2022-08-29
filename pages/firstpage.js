
import React, { useState, useEffect } from "react"
import { styled } from '../stitches.config'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPlane,
    faBus
} from "@fortawesome/free-solid-svg-icons";


const Box = styled('div', {
})
const Span = styled('span', {
    visibility: 'hidden',
    width: '120px',
    backgroundColor: 'black',
    color: '#fff',
    textalign: 'center',
    borderRadius: '6px',
    padding: ' 5px 0',
    visibility: "visible"
    //     position: "absolute",
    //   zIndex: "1",


})
const B = styled('b', {
    color: "black"
})
const IMG = styled('img', {

})
const Text = styled('p', {

})
const Button = styled('button', {

})


const Box1 = styled('div', {
    height: '70px',
    display: 'flex',
    alignItems: 'center'
})
const Line = styled('hr', {
    border: 'none',
    height: '0.1px',
    color: '#333',
    backgroundColor: ' #333'
})
const Box2 = styled('div', {
    height: '170px',
})
const Box3 = styled('div', {
    display: 'flex',
    height: 'auto',
    flexDirection: 'row',
})
const Addbox = styled('div', {
    height: 'auto',
    width: '30%'
})
const Tooletip = styled('div', {

    position: 'relative',
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',

    // visibility: "visible"



})

const Table = styled('table', {})
export default function Home() {
    const [isHovering, setIsHovering] = useState([
        {
            nights: 3,
            cityid: '01',
            cityname: 'Goa',
            bollval: false,
            days: [
                {
                    day: 1,
                    slots: [
                        {
                            name: 'Fullday',
                            span: 3,
                            type: 'Checkout of your hotel and get transferred to goa...'
                        }
                    ]
                },
                {
                    day: 2,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Checkout of your hotel. Board your flight to goa... '
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                }
            ]
        },
        {
            nights: 3,
            cityid: '02',
            cityname: 'kerala',
            bollval: false,
            days: [
                {
                    day: 3,
                    slots: [
                        {
                            name: 'Morning',
                            span: 1,
                            type: 'Arrive_today...'
                        },
                        {
                            name: 'Noon to Evening',
                            span: 2,
                            type: 'event scheduled.'
                        }
                    ]
                },
                {
                    day: 4,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Activity'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                },
                {
                    day: 4,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Activity'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                }
            ]
        }, {
            nights: 3,
            cityid: '01',
            cityname: 'Goa',
            bollval: false,
            days: [
                {
                    day: 6,
                    slots: [
                        {
                            name: 'Fullday',
                            span: 3,
                            type: 'Checkout of your hotel and get transferred to goa...'
                        }
                    ]
                },
                {
                    day: 7,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Checkout of your hotel. Board your flight to goa... '
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                }
            ]
        },
        {
            nights: 3,
            cityid: '02',
            cityname: 'kerala',
            bollval: false,
            days: [
                {
                    day: 8,
                    slots: [
                        {
                            name: 'Morning',
                            span: 1,
                            type: 'Arrive_today...'
                        },
                        {
                            name: 'Noon to Evening',
                            span: 2,
                            type: 'event scheduled.'
                        }
                    ]
                },
                {
                    day: 9,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Activity'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                },
                {
                    day: 10,
                    slots: [
                        {
                            name: 'Morning to noon',
                            span: 2,
                            type: 'Activity'
                        },
                        {
                            name: 'Evening',
                            span: 1,
                            type: 'Activity scheduled.'
                        }
                    ]
                }
            ]
        }
    ]);
    const onMouseEnter = (val) => {
        setIsHovering(
            isHovering.map((e, ind) => ind == val ? ({ ...e, bollval: true }) : ({ ...e, bollval: false }))
        )
    };

    const onMouseLeave = (val) => {
        setIsHovering(
            isHovering.map((e, ind) => ind == val ? ({ ...e, bollval: false }) : ({ ...e, bollval: false }))
        )
    };
    return (
        <Box>
            <Box1 css={{ marginLeft: 30 }}>
                <IMG css={{ height: 40 }} src="https://pyt-images.imgix.net/images/web_app/logo/pickyourtrail-logo.svg?dpr=2&auto=format,compress,enhance&q=20">
                </IMG>
                {/* <Button css={{marginLeft:70}}>Login</Button> */}
                {/* <B>PICKYOURTRAIL</B> */}
            </Box1>
            <Line></Line>
            <Box2>
                <Text css={{ fontSize: '$7', color: 'black', paddingLeft: '$11', marginLeft: 30 }}>5-Daya,5-Night on GOA</Text>
            </Box2>
            <Line></Line>

            <Box3>
                <Box css={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    {isHovering.map((val, index) => {
                        return (
                            <Box css={{ '@bp1': { margin: 0 } }}>
                                <Box css={{
                                    '@bp1': { display: 'flex', width: '100%', flexDirection: 'column' },
                                    '@bp2': {
                                        width: "100%", display: "table", paddingLeft: '100px'
                                    }
                                }}>
                                    <Box css={{
                                        '@bp2': { display: "table-row", backgroundColor: "#ebeef2", justifyContent: "center", alignItems: "center" },
                                        '@bp1': {
                                            display: 'flex',
                                            backgroundImage: `url("https://pyt-images.imgix.net/images/city/2400xh/kusa.jpg?w=300&h=104&fit=crop&crop=faces&dpr=2&auto=format,compress,enhance&q=20")`, width: "100%", height: 95,
                                            backgroundSize: 'cover'
                                        }

                                    }}>
                                        {/* <Box  css ={{
                                            '@bp1': {width:"10%"}
                                            '@bp2':{display}
                                            }}>

                                            <Text>

                                                DFGHJKL
                                            </Text>

                                        </Box> */}
                                        {/* <Text>

                                            DFGHJKL
                                        </Text> */}
                                        <Box css={{
                                            '@bp2': { display: "table-cell", borderWidth: "1px", borderColor: '$gray100', borderStyle: 'solid', paddingLeft: 10, padding: "15px", borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                                            '@bp1': { display: 'none' }
                                        }}>
                                            <p><B>{val.cityname}</B>--{val.days.length}nights stay</p>
                                        </Box>

                                    </Box>


                                    {val.days.map((day) => {
                                        // { console.log("day--",day) }
                                        return (

                                            <Box css={{
                                                '@bp1': { display: 'flex', flexDirection: 'column' },
                                                '@bp2': {
                                                    display: "table-row"
                                                }
                                            }}>
                                                <Box css={{
                                                    '@bp2': {
                                                        display: 'table-column', height: "65px", float: 'left',
                                                        borderWidth: "1px", borderColor: '$gray400', borderStyle: 'solid', width: "10%"
                                                    },
                                                    '@bp1': {
                                                        display: 'flex', width: '100%', height: '50px', backgroundColor: '#ebeef2'
                                                    }
                                                }}>
                                                    <Box css={{
                                                        '@bp2': {
                                                            display: "table-cell", paddingLeft: "10px"
                                                        }
                                                    }}>
                                                        <p>Days {day.day}</p>


                                                    </Box>
                                                </Box>

                                                {
                                                    day.slots.map((slot) => {
                                                        { console.log("slot--", slot) }
                                                        return (
                                                            <Box >
                                                                <Box css={
                                                                    {
                                                                        '@bp1': {
                                                                            display: 'flex', width: "100%", height: '70px', borderColor: '$gray400', borderWidth: "1px", borderStyle: 'solid',

                                                                        },
                                                                        '@bp2': {
                                                                            display: 'table-column', float: 'left',
                                                                            borderWidth: "1px", borderColor: '$gray400', borderStyle: 'solid',
                                                                            width: slot.span == 3 ? '89.2%' : slot.span == 2 ? '59.5%' : slot.span == 1 ? '29.5%' : null,
                                                                            height: "65px"
                                                                        }
                                                                    }
                                                                }>

                                                                    <Box css={{
                                                                        '@bp1': {
                                                                            display: "flex", flexDirection: 'row'
                                                                        },
                                                                        '@bp2': {
                                                                            display: "flex", flexDirection: "row"
                                                                        }
                                                                    }}>
                                                                        <Box css={{ marginTop: 10, paddingLeft: 10 }}>
                                                                            <Box css={{ borderRadius: 40, height: "40px", width: "40px", backgroundColor: "#777777" }}>

                                                                                <FontAwesomeIcon
                                                                                    icon={faBus}
                                                                                    style={{ fontSize: 20, color: "white", marginLeft: 8, marginTop: 10, }}
                                                                                />

                                                                            </Box>
                                                                        </Box>
                                                                        <Box>
                                                                            <Text css={{ color: "#5a5e73", margin: 5 }}>{slot.name}</Text>
                                                                            <Text css={{ color: "#a6a6a6", margin: 5 }}>{slot.type}</Text>

                                                                        </Box>

                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        )
                                                    })
                                                }

                                            </Box>
                                        )
                                    })}
                                </Box>

                                <Box>
                                    {/* {val.days.slots((e)=>{

                                        
                                    })} */}

                                    {isHovering.length == index + 1 ? null :
                                        <Box css={{
                                            '@bp2': {
                                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                                position: 'relative'
                                            },
                                            '@bp1': { display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', }
                                        }}>
                                            <Box css={{
                                                '@bp2': { paddingLeft: 147 },
                                                '@bp1': { paddingRight: 20 }

                                            }}>


                                                <div style={{ display: 'flex', backgroundImage: `url("https://pyt-images.imgix.net/images/web_app/itinerary/fly_line.svg")`, width: 240, height: 85, backgroundRepeat: 'no-repeat', }}>

                                                    <Box css={{
                                                        '@bp2': { position: "absolute", marginLeft: 115, marginTop: 18, },
                                                        '@bp1': { position: "absolute", marginLeft: 100, marginTop: 18 }


                                                    }}>
                                                        <Box css={{ borderRadius: 25, height: "45px", width: "45px", backgroundColor: "#53576d", }}>

                                                            <FontAwesomeIcon
                                                                icon={faPlane}
                                                                style={{ fontSize: 20, color: "white", marginLeft: 12, marginTop: 10, }}
                                                            />

                                                        </Box>

                                                    </Box>
                                                  

                                                    <Text css={{
                                                        '@bp2':{ marginLeft: 100, fontSize: 15, marginTop: 64, fontWeight: "bold", color: "#53576d" },
                                                        '@bp1':{ marginLeft: 80, fontSize: 15, marginTop: 64, fontWeight: "bold", color: "#53576d" }
                                                        
                                                        }}>fly on the {val.cityname}</Text>
                                                    <Box css={{
                                                        '@bp2': { position: 'absolute', marginRight: 28, bottom: '90%' },
                                                        '@bp1': { position: 'absolute', bottom: '90%', marginRight: 30 }
                                                    }}>
                                                        <Box css={{ borderRadius: 10, height: "20px", width: "20px", backgroundColor: "#777777", }}>

                                                        </Box>
                                                    </Box>


                                                </div>

                                            </Box>

                                            <Box css={{
                                                '@bp2': { position: "absolute", marginLeft: 366, marginTop: 90 },
                                                '@bp1': { position: "absolute", marginLeft: 200, marginTop: 83 }

                                            }}>
                                                <Box css={{ borderRadius: 10, height: "20px", width: "20px", backgroundColor: "#777777", }}>

                                                </Box>
                                            </Box>
                                        </Box>
                                    }


                                </Box>
                            </Box>

                        )
                    })}



                </Box>

                {/* <Box css={{
                    '@bp1': {

                    },
                    '@bp2': {

                    }
                }}>

                </Box> */}
                <Addbox css={{ '@bp1': { display: "none" }, '@bp2': { marginLeft: "170px", } }}>
                    {isHovering.map((val, i) => {
                        console.log("val--", val)
                        return (
                            <Box css={{
                                '@bp1': {}, '@bp2': {
                                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#ebeef2", color: "red"
                                }
                            }}
                                onMouseOver={() => onMouseEnter(i)}
                                onMouseOut={() => onMouseLeave(i)}>
                                <ul>
                                    <li>
                                        {val.cityname}
                                    </li>
                                </ul>
                                {val.bollval == true ? <div style={{ justifyContent: 'center', alignItems: 'center' }} >

                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Tooletip>
                                            <div style={{
                                                display: 'flex', borderRadius: 50, borderCollapse: 'collapse', border: '1px solid #1895b3', height: 25, width: 25,
                                                justifyContent: 'center', alignItems: 'center', backgroundColor: "red", marginLeft: "40px"
                                            }}>-</div>

                                        </Tooletip>
                                        <Span >add city</Span>

                                        <p style={{ marginLeft: 5 }}>{`${val.days.length}n`}</p>
                                        <Tooletip>
                                            <div style={{
                                                display: 'flex', borderRadius: 50, borderCollapse: 'collapse', border: '1px solid #1895b3', height: 25, width: 25,
                                                alignItems: 'center', justifyContent: 'center', marginLeft: 5,
                                            }}>+</div>
                                        </Tooletip>
                                        <span className="tooltiptext2">Tooltip text2</span>
                                    </div>
                                </div> : null
                                }
                            </Box>
                        )
                    })}
                </Addbox>

            </Box3 >


        </Box >
    )
}


