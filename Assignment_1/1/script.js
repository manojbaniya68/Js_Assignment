var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    
    library.forEach((e,index) => {
        console.log("Book no.: ",(index + 1));

        Object.keys(e).forEach((i) => {
            console.log(i," : ",e[i]);
        })
    })