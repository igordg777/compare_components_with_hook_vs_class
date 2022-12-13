import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

function HookUsers() {

    const [users, setUsers] = useState([])
    const [filterText, setfilterText] = useState('')


    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(res => setUsers(res))
        }, []
    )

    // let filterUsers = []

    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].name.match(filterText) !== null) {
    //         filterUsers.push(users[i])
    //     }
    // }

    // let filterUsers = users.filter(e => e.name.match(filterText) !== null)

    let filterUsers = users.filter(e => e.name.toLowerCase().match(filterText.toLowerCase()) !== null)

    return (
        <>
            <input type="text" onChange={(e) => setfilterText(e.target.value)} />
            <div style={{ backgroundColor: 'lightgray', width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {filterUsers.map(
                    (item) => {
                        // return <p>{item.name}, {item.phone}, {item.email}, {item.website}</p>
                        return <Card title={item.name} bordered={false} style={{ width: 250, margin: 10 }}>
                            {item.phone}, {item.email}, {item.website}
                        </Card>
                    }
                )}
            </div>
        </>
    )
}

export default HookUsers;

