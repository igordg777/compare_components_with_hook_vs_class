import React, { useState, useEffect } from 'react';
import { Switch, Button, Card } from 'antd';
// import './Switch.css'

const styleForSwitch = {
    height: '100px',
    backgroundColor: 'lightgreen',
    padding: 50
}

function SwitchExample() {

    const [showFilter, setShowFilter] = useState(false)

    const [showRussia, setShowRussia] = useState(true)
    const [showItaly, setShowItaly] = useState(true)
    const [showGermany, setShowGermany] = useState(true)


    const users = [
        {
            name: "Sergei",
            age: 17,
            country: 'Italy'
        },
        {
            name: "Anton",
            age: 23,
            country: 'Germany'

        },
        {
            name: "Ivan",
            age: 10,
            country: 'Italy'

        },
        {
            name: "Petr",
            age: 57,
            country: 'Russia'

        },
        {
            name: "Mikhail",
            age: 43,
            country: 'Russia'
        },

    ]


    let filterUsers = []

    for (let i = 0; i < users.length; i++) {
        if (users[i].country === 'Russia' && showRussia === true) {
            filterUsers.push(users[i])
        }

        if (users[i].country === 'Italy' && showItaly === true) {
            filterUsers.push(users[i])
        }

        if (users[i].country === 'Germany' && showGermany === true) {
            filterUsers.push(users[i])
        }

    }


    return (
        <>

            <Button onClick={() => showFilter === true ? setShowFilter(false) : setShowFilter(true)}>Фильтры</Button>
            {showFilter === true &&

                <div style={styleForSwitch} className='panel-for-switch'>

                    <Switch defaultChecked id="russia" onChange={() => showRussia ? setShowRussia(false) : setShowRussia(true)} /> <label htmlFor="russia">Russia</label>

                    <br />
                    <Switch defaultChecked id="italy" onChange={() => showItaly ? setShowItaly(false) : setShowItaly(true)} /> <label htmlFor="italy">Italy</label>
                    <br />
                    <Switch defaultChecked id="germany" onChange={() => showGermany ? setShowGermany(false) : setShowGermany(true)} /> <label htmlFor="germany">Germany</label>
                </div>
            }

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 30, background: 'lightgrey' }}>
                {filterUsers.map(
                    (item) => {
                        return <Card title={item.name} style={{ width: 300, margin: 20 }}>
                            <p>Возраст: {item.age}</p>
                            <p>Возраст: {item.country}</p>
                        </Card>
                    }
                )}
            </div>


        </>
    )
}

export default SwitchExample