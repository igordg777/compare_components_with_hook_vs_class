import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

function HookUsers() {

    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(res => setUsers(res))
        }, []
    )


    return (
        <div style={{ backgroundColor: 'lightgray', width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {users.map(
                (item) => {
                    // return <p>{item.name}, {item.phone}, {item.email}, {item.website}</p>
                    return <Card title={item.name} bordered={false} style={{ width: 250, margin: 10 }}>
                        {item.phone}, {item.email}, {item.website}
                    </Card>
                }
            )}
        </div>
    )
}

export default HookUsers;

