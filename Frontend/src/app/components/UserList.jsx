import  './profile.css';
let users = [
    {
        id : 1,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768583240/rod4qfkz4gyay9fqu1if.jpg",
        "name": "Product One ",
        "description": "Very cool",
        "category": "men",
        "brand": "h&m",
        "price": 9000,
        "salePrice": 8500,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-16T17:08:39.808Z"
        },
        "updatedAt": {
            "$date": "2026-01-17T01:39:46.540Z"
        },
        "__v": 0
    },
    {
        id : 2,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768891208/ojcz2jj2fge54blstx82.jpg",
        "name": "Product Two",
        "description": "Product Two",
        "category": "men",
        "brand": "puma",
        "price": 9000,
        "salePrice": 7800,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-20T06:41:33.882Z"
        },
        "updatedAt": {
            "$date": "2026-01-20T06:41:33.882Z"
        },
        "__v": 0
    },
    {
        id : 3,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768891262/tebtpobh3eci6r2py1xp.jpg",
        "name": "Product Three",
        "description": "Product Three",
        "category": "men",
        "brand": "zara",
        "price": 10000,
        "salePrice": 9000,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-20T06:42:37.873Z"
        },
        "updatedAt": {
            "$date": "2026-01-20T06:42:37.873Z"
        },
        "__v": 0
    },
    {
        id : 4,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768891325/kiookwjd37umdslqzk0o.jpg",
        "name": "Product Four",
        "description": "Product Four",
        "category": "men",
        "brand": "adidas",
        "price": 15000,
        "salePrice": 14000,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-20T06:43:37.514Z"
        },
        "updatedAt": {
            "$date": "2026-01-20T06:43:37.514Z"
        },
        "__v": 0
    },
    {
        id : 5,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768891396/aaddw42zztp5n3oz0vga.jpg",
        "name": "Product Five",
        "description": "Product Five",
        "category": "women",
        "brand": "h&m",
        "price": 19000,
        "salePrice": 179999,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-20T06:44:48.473Z"
        },
        "updatedAt": {
            "$date": "2026-01-20T06:44:48.473Z"
        },
        "__v": 0
    },
    {
        id : 6,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768891467/pzcrgp6upmd6bqvr26ty.jpg",
        "name": "Product Six",
        "description": "Product Six",
        "category": "women",
        "brand": "puma",
        "price": 18999,
        "salePrice": 15000,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-20T06:46:09.709Z"
        },
        "updatedAt": {
            "$date": "2026-01-20T06:46:09.709Z"
        },
        "__v": 0
    },
    {
        id : 7,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1768891540/zjvbqavdsdycb8ypvzzs.jpg",
        "name": "Product Seven",
        "description": "Product Seven",
        "category": "women",
        "brand": "puma",
        "price": 25000,
        "salePrice": 0,
        "totalStock": 2,
        "createdAt": {
            "$date": "2026-01-20T06:47:05.003Z"
        },
        "updatedAt": {
            "$date": "2026-01-20T06:47:05.003Z"
        },
        "__v": 0
    },
    {
        id : 8,
        "image": "http://res.cloudinary.com/dg52gsebs/image/upload/v1769002438/qzxyar7ambevk9tfeitb.jpg",
        "name": "Product Ten",
        "description": "Product Ten",
        "category": "women",
        "brand": "puma",
        "price": 15000,
        "salePrice": 14500,
        "totalStock": 5,
        "createdAt": {
            "$date": "2026-01-21T13:35:08.213Z"
        },
        "updatedAt": {
            "$date": "2026-01-21T13:35:08.213Z"
        },
        "__v": 0
    }];

function User({user}){
    return(
        <div>
            {user.name}
            <img src={user.image} className={"profile"} alt="" />
        </div>
    )
}

export default function UserList(){
    return(<div>
            <h1>User List</h1>
        {
            users.map((user) => (
                <User user = {user} key={user.id} />
            ))
        }
    </div>)
}