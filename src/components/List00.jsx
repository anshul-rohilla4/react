const List00 = () => {
    // const numbers = [1,2,3,4,5,6];

    const userInfo = [
        {
            username: "user01",
            email: "user01@mail.com",
            location: "usa",
        },
        {
            username: "user02",
            email: "user02@mail.com",
            location: "la",
        },
        {
            username: "user03",
            email: "user03@mail.com",
            location: "china",
        },
        {
            username: "user04",
            email: "user04@mail.com",
            location: "india",
        },
    ];

    return (
        <>
            {/* <main>
        {numbers.map((number)=>(
            <ul key={number}>
                {<li>{number}</li>}
            </ul>
        ))}
    </main> */}

            <main>
                {userInfo.map(({ username, email, location }) => (
                    <ul key={username}>
                        <li>{username}</li>
                        {email} {location}
                    </ul>
                ))}
            </main>
        </>
    );
};

export default List00;
