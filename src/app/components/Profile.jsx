import './profile.css';
export default function Profile({image, name}){
    // let profile = {
    //     image : "https://i.imgur.com/MK3eW3Am.jpg",
    //     name : "Katherine Johnson"
    // }
    return(<div>
        <img
            src= {image}
            alt= {name}
            className='profile'
        />
    </div>)
}