function UserList() {
    const users = [
        { id: 1, name: "alice", age: 23 },
        { id: 2, name: "bob", age: 30 },
        { id: 3, name: "charlie", age: 22 },
        { id: 4, name: "niko", age: 19 },
    ];

    return (
        <main>
            <ol>
                {users.map(({ id, name, age }) => (
                    <li key={id}>
                        <div>
                            {name},
                            {age}
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}

export default UserList;
