let products = [
    {
        id: 1,
        name: 'Active tumbler',
        price: 22,
        discountPrice: null,
        image: "https://casona.familab.net/wp-content/uploads/2021/08/product_Active-TUMBLER_while-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 2,
        name: 'Back hug backpack',
        discountPrice: 88,
        price: 96,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_backhug_backpack2-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'


    },
    {
        id: 3,
        name: 'Backpack Heather Black',
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
        discountPrice: 88,
        price: 96,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product1-474x474.jpg"

    },
    {
        id: 4,
        name: 'Basic Placemat',

        discountPrice: null,
        price: 18,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/BASIC-PLACEMAT_BLACK-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'


    },
    {
        id: 5,
        name: 'Bellroy Leather Note Sleeve',

        discountPrice: null,
        price: 250,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product3-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'


    },
    {
        id: 6,
        name: 'Bely Backpack',

        discountPrice: null,
        price: 130,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/bellroy-shift-backpack-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'


    },
    {
        id: 7,
        name: 'Basic Placemat',

        discountPrice: null,
        price: 18,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/BASIC-PLACEMAT_BLACK-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'



    },
    {
        id: 8,
        name: 'Beoplay Wireless Headphones',

        discountPrice: 129,
        price: 135,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Beoplay-H4-Wireless-Headphones-Black-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'

    },
    {
        id: 9,
        name: 'Canvas Backpack',

        discountPrice: 88,
        price: 96,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Navy-Nylon-Canvas-Backpack3-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'

    },
    {
        id: 10,
        name: 'Casual Backpack',

        discountPrice: null,
        price: 45,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Casual-Backpack-for-Women-Black-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'

    },
    {
        id: 11,
        name: 'Craft Mortarf',

        discountPrice: null,
        price: 55,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Product_Craft-Mortarf-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 12,
        name: 'Fashion bags',

        discountPrice: null,
        price: 35,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Lee-Ji-baek2-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 13,
        name: 'Geo Thermo Vacuum Flask',
        discountPrice: null,
        price: 90,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Geo-Thermo-Pot-Normann-Thermo-Vacuum-Flask-3-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 14,
        name: 'Glass Water Bottle',
        discountPrice: 25,
        price: 130,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product5-1-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 15,
        name: 'Innovative speaker',
        discountPrice: null,
        price: 300,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_wireless-home-speaker-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },

    {
        id: 16,
        name: 'Keny Bowl',
        discountPrice: null,
        price: 25,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Krenit-Bowl-1-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },


    {
        id: 18,
        name: 'Nylon Pet Travel Carrier',
        discountPrice: null,
        price: 159,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Green-Tote-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 19,
        name: 'Longboard Skateboard',
        discountPrice: null,
        price: 125,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Cruiser-Longboard-Skateboard-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 20,
        name: 'Oneplus watch',
        discountPrice: null,
        price: 130,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_oneplus_watch_sliver-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },

    {
        id: 22,
        name: 'Orbitkey nylon key organizer',
        discountPrice: 58,
        price: 65,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_ORBITKEY-NYLON-KEY_while-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 23,
        name: 'Peak design bags',
        discountPrice: 88,
        price: 96,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product6-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 24,
        name: 'Powerful Bluetooth speaker',
       discountPrice: null,
        price: 600,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_speakPowerful-Bluetooth-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },

    {
        id: 25,
        name: 'Ripple Dog Bowl',
        discountPrice: 46,
        price: 50,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product_Ripple-Dog-Bowl-Midnight-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },

    {
        id: 27,
        name: 'Spa Bed',
        discountPrice: null,
        price: 148,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/SPA-BED-BLACK-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 28,
        name: "Travel Insulated Bottle",
        discountPrice: null,
        price: 27,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Travel-Insulated-Bottle-Black-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 29,
        name: "Wallets",
        discountPrice: null,
        price: 54,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/wallet_black-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 30,
        name: "Water Bottle Thermos",
        discountPrice: null,
        price: 25,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/Water-Bottle-Thermos-black-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },
    {
        id: 31,
        name: "Bosch Electric Screwdriver IXO",
        discountPrice: null,
        price: 90,
        image: "https://casona.familab.net/wp-content/uploads/2021/09/product8c-474x474.jpg",
        title: 'This is just a demo product.',
        description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    }
];

export default products;