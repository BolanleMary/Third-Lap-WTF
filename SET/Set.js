const users =[
   
    {
        name: "John",
        email: "john@gmail.com"
    },

{
    name: "Precious",
    email: "precious@gmai.com"
},

{
    name: "PreciousClone",
    email: "precious@gmai.com"
}
    ]


    function mergeUsers(users){
        const existingEmail =new Set();

        const uniqueUsers = users.filter((user)=>{

            if(existingEmail.has(user.email)){return false}

            existingEmail.add(user.email)
            return true
        })
        return uniqueUsers;
    }

    console.log(mergeUsers(users))

console.log("hello");
// const myset 

// ClassWork

// You have two playlists on different streaming platforms.
// Each playlist contains song titles.

// Task:
// Write a function commonSongs(playlistA, playlistB) that returns a new array of songs that appear in both playlists using Set.


// const playlistA = ["Hallelujah", "Shape of You", "Blinding Lights"];

// const playlistB = ["Blinding Lights", "Shape of You", "Peaches"];

