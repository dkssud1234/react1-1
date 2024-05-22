import React from 'react';

export default function NumberList() {

    const numbers = [1, 2, 3, 4, 5];

    const todoList =
        [
            {
                id: 1,
                todo: "할일1"
            },
            {
                id: 2,
                todo: "할일2"
            },
            {
                id: 3,
                todo: "할일3"
            },
            {
                id: 4,
                todo: "할일4"
            },
            {
                id: 5,
                todo: "할일5"
            }
        ]

    const listItems = numbers.map((number, index) =>
        <li key={index}> {number}</li>
    );

    const itemLists = todoList.map((item) =>
        <li key={item.id}>{item.todo}</li>
    );

    const foos = todoList.map((foo, index) =>
        <li key={index}>{foo.todo}</li>
    );
    
    const bars=todoList.map((bar)=>
        <li key={'student-id-${bar.id}'}>{bar.todo}</li>
    );

    return (
        <>
            <ul>{listItems}</ul>
            <ul>{itemLists}</ul>
            <ul>{foos}</ul>
            <ul>{bars}</ul>
        </>
    )
}
