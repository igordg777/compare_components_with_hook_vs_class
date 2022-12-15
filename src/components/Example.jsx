import React, { useState, useEffect } from 'react';
import { Card, Slider } from 'antd';

function Ited() {

    const [arrAge, setArrAge] = useState([])

    const users = [
        {
            name: "Sergei",
            age: 17
        },
        {
            name: "Anton",
            age: 23
        },
        {
            name: "Ivan",
            age: 10
        },
        {
            name: "Petr",
            age: 57
        },
        {
            name: "Mikhail",
            age: 43
        },

    ]

    const age = (value) => {
        setArrAge(value)
    }

    let filterResult = []

    for (let i = 0; i < users.length; i++) {
        if (users[i].age > arrAge[0] && users[i].age < arrAge[1]) {
            filterResult.push(users[i])
        }

    }

    return (
        <>

            <Slider
                range
                step={1}
                defaultValue={[5, 60]}
                onChange={age}
            />
            <div style={{ background: 'lightgrey', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20 }}>
                {
                    filterResult.map(
                        (e) => {
                            // return <div><h1>{e.name} - {e.age} лет</h1></div>

                            return <Card title={e.name} style={{ width: 300, margin: 30 }}>
                                {e.age} лет
                            </Card>

                        }
                    )
                }
            </div>

        </>
    )
}

export default Ited