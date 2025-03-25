import { use } from "react";
import Friend from "./friend";

export default function Friends({friendsData}){
    const friends = use(friendsData)
    console.log(friends);
    return <div className="users">
        <h3>Friends: {friends.length}</h3>
        {
            friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
        }
    </div>
}