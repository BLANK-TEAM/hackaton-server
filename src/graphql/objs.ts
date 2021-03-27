namespace N {

    type Event = {
        title: string,
        subtitle: string,
        photoUrl: string
    }

    const eventArray: Array<Event> = [
        {
            title: "Hacathon 2021!",
            subtitle: "Online, April 25st, 9:00",
            photoUrl: "https://image.freepik.com/free-vector/hackathon-doodle-set-collection-hand-drawn-sketches-doodles_160308-1064.jpg"
        },
        {
            title: "Music Festival",
            subtitle: "Offline, April 30, 18:00",
            photoUrl: "https://image.freepik.com/free-vector/hand-drawn-international-jazz-day-illustration_23-2148895992.jpg"
        },
        {
            title: "Movie Nigth",
            subtitle: "Offline, November 25-30, 21:00 Everyday",
            photoUrl: "https://image.freepik.com/free-vector/cinema-festival-poster-with-camcorder-silhouette-center-attributes-film-industry_1284-7414.jpg"
        },
        {
            title: "Chess Competition",
            subtitle: "Online, March 1st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/vintage-chess-competition-poster_1284-40125.jpg"
        },
        {
            title: "World book day celebration",
            subtitle: "Offline, May 22st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/flat-world-book-day-illustration_23-2148874625.jpg"
        },
        ////////
        {
            title: "Face Concert",
            subtitle: "Offline, May 22st, 21:00",
            photoUrl: ""
        },
        {
            title: "World book day celebration",
            subtitle: "Offline, May 22st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/flat-world-book-day-illustration_23-2148874625.jpg"
        },
        {
            title: "World book day celebration",
            subtitle: "Offline, May 22st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/flat-world-book-day-illustration_23-2148874625.jpg"
        },
        {
            title: "World book day celebration",
            subtitle: "Offline, May 22st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/flat-world-book-day-illustration_23-2148874625.jpg"
        },
        {
            title: "World book day celebration",
            subtitle: "Offline, May 22st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/flat-world-book-day-illustration_23-2148874625.jpg"
        },
        {
            title: "World book day celebration",
            subtitle: "Offline, May 22st, 12:00",
            photoUrl: "https://image.freepik.com/free-vector/flat-world-book-day-illustration_23-2148874625.jpg"
        },
    ]

    namespace visited {

        type propsType = {
            eventTitle: string
            icon: 'bookOutline' | 'musicalNotesOutline' | 'pizzaOutline' | 'footballOutline'
        };

        const visitedArray: Array<propsType> = [
            {
                eventTitle: "21 Savage concert",
                icon: "musicalNotesOutline"
            },
            {
                eventTitle: "World book day celebration",
                icon: "bookOutline"
            },
            {
                eventTitle: "Italian food evening",
                icon: "pizzaOutline"
            },
            {
                eventTitle: "Abroad education fair",
                icon: "bookOutline"
            },
            {
                eventTitle: "Martin Luther King, Jr Birthday",
                icon: "bookOutline"
            }
        ]

    }

    namespace comments {

        type propsType = {
            title: string
            text: string
        };

        const comments: Array<propsType> = [
            {
                title: "Sounds interesting",
                text: "I am going to go to there with my gf"
            },
            {
                title: "Is it free?",
                text: "I would like to know if this event is not free"
            },
            {
                title: "Can't wait!",
                text: "I have been waiting for a whole year!"
            },
            {
                title: "Where?",
                text: "There is no information given about where the event will take place"
            },
        ]

        namespace _ {

            type propsType = {
                name: string
                avatarUrl: string
                text: string
            };

            const comments: Array<propsType> = [
                {
                    name: "Alex Weil",
                    avatarUrl: "https://i1.rgstatic.net/ii/profile.image/609165189844994-1522247707894_Q512/Alexander-Weil.jpg",
                    text: "Hi, this event was amazing. Thanks for organizators"
                },
                {
                    name: "Nikk Loiman",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDRfe1hK0OkRHYwiB7vK6-O2VQ3klj3ZH1kyqDeY7Yv4iWQ_MfQe0dzih0WgSubFnEbs&usqp=CAU",
                    text: "I was not confident about this event but everything passed good"
                },
                {
                    name: "Kun A. A.",
                    avatarUrl: "https://i.pinimg.com/originals/31/ec/31/31ec31d79d53690c710b5d0c665892b1.jpg",
                    text: "Cant't wait for the next event from this team!"
                },
                {
                    name: "Viole J. Greyce",
                    avatarUrl: "https://i.pinimg.com/originals/f5/bc/31/f5bc3185c827894e7c2be2cb7bef5a88.png",
                    text: "I am not a fun of such activity but this event was interesting even for me!"
                },
            ]

        }

    }

}
