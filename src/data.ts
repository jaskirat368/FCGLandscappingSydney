import { 
  Leaf, 
  Hammer, 
  Shovel, 
  Grid, 
  LayoutDashboard, 
  Trees, 
  Fence, 
  Droplets, 
  Flower2, 
  Home 
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: "FCG Landscaping",
  phone: "0416 113 839",
  email: "1classgrass@gmail.com",
  experience: "14+",
  serviceArea: "Greater Sydney Metro Area",
  rating: "5.0",
  reviewCount: "18",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.213554786872!2d151.0234334755009!3d-33.70342257329043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d5fefee88387d%3A0xe1f27c9652a56563!2sDraco%20Concepts!5e0!3m2!1sen!2sin!4v1772083379554!5m2!1sen!2sin"
};

export const SERVICES = [
  {
    id: "landscape-design",
    title: "Landscape Design",
    shortDesc: "Custom planning and layout of outdoor spaces.",
    fullDesc: "Our landscape design service is the foundation of every great project. We create custom plans that blend your property's unique characteristics with your lifestyle needs. From initial concept sketches to detailed planting plans, we ensure every element is considered.",
    icon: LayoutDashboard,
    image: "https://img.freepik.com/free-vector/landscape-design-composition_1284-4930.jpg?semt=ais_user_personalization&w=740&q=80"
  },
  {
    id: "landscape-construction",
    title: "Landscape Construction",
    shortDesc: "Full build execution from start to finish.",
    fullDesc: "We bring designs to life with precision construction. Our team handles all aspects of hardscaping and softscaping, ensuring structural integrity and premium finishes. We use high-quality materials built to withstand the Australian climate.",
    icon: Hammer,
    image: "https://freshcutlandscape.com/wp-content/uploads/2025/09/Landscape-Construction.jpg"
  },
  {
    id: "landscape-maintenance",
    title: "Landscape Maintenance",
    shortDesc: "Ongoing care and upkeep of gardens.",
    fullDesc: "Protect your investment with our professional maintenance services. We provide regular care including pruning, fertilizing, lawn care, and pest management to keep your landscape looking pristine year-round.",
    icon: Shovel,
    image: "https://img.freepik.com/premium-photo/gardener-cultivating-vibrant-plants-modern-landscape-design-drip-irrigation-system_1426-25599.jpg?semt=ais_user_personalization&w=740&q=80"
  },
  {
    id: "greenwalls",
    title: "Greenwalls / Vertical Gardens",
    shortDesc: "Vertical planting systems for modern spaces.",
    fullDesc: "Transform blank walls into living art. Our vertical garden systems are perfect for maximizing greenery in compact spaces or creating striking visual features. We select plant species that thrive in vertical environments.",
    icon: Leaf,
    image: "https://img.freepik.com/premium-photo/potted-plants-pot_1606054-66.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: "paving",
    title: "Paving",
    shortDesc: "Stone, concrete, or tile paving solutions.",
    fullDesc: "Expert installation of natural stone, concrete pavers, or porcelain tiles. We focus on proper base preparation to ensure longevity and stability, creating beautiful pathways, driveways, and entertaining areas.",
    icon: Grid,
    image: "https://img.freepik.com/premium-photo/serene-backyard-oasis-landscaped-garden-with-patio-pond_1341597-34598.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: "decking",
    title: "Decking",
    shortDesc: "Timber or composite decking installations.",
    fullDesc: "Extend your living space outdoors with a custom deck. We specialize in both natural timber and high-performance composite decking, designing structures that seamlessly integrate with your home's architecture.",
    icon: LayoutDashboard, // Using LayoutDashboard as a proxy for Decking/Planks
    image: "https://img.freepik.com/free-photo/agriculture-healthy-food_23-2151969783.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: "retaining-walls",
    title: "Retaining Walls",
    shortDesc: "Structural walls for slope management.",
    fullDesc: "Functional and aesthetic retaining solutions. Whether you need to level a sloping block or create garden tiers, we build structural retaining walls using timber, concrete sleepers, blockwork, or natural stone.",
    icon: Fence,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENEmBPUFx6ykDOjCpQWTBqrrR35DgVWSdxw&s"
  },
  {
    id: "decorative-screening",
    title: "Decorative Screening",
    shortDesc: "Custom privacy and aesthetic screening.",
    fullDesc: "Enhance privacy and style with custom screening. We install timber slats, laser-cut metal, or composite screens that serve as functional barriers and decorative garden features.",
    icon: Grid,
    image: "https://www.strol.co.nz/wp-content/uploads/2025/06/Strol-screen-mouting-system-1024x576.jpg"
  },
  {
    id: "irrigation",
    title: "Irrigation Solutions",
    shortDesc: "Efficient watering systems for landscapes.",
    fullDesc: "Smart water management for healthy gardens. We design and install automated irrigation systems, including drip lines and pop-up sprinklers, to ensure your plants receive the right amount of water with minimal waste.",
    icon: Droplets,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/482824163/GK/BL/RW/14318258/landscape-irrigation-services-500x500.jpeg"
  },
  {
    id: "indoor-landscaping",
    title: "Indoor Landscaping",
    shortDesc: "Green installations for interiors.",
    fullDesc: "Bring the outdoors in. We design indoor plantscapes for homes and offices, selecting species that thrive in indoor conditions to improve air quality and aesthetics.",
    icon: Home,
    image: "https://www.groundsguys.com/us/en-us/grounds-guys/_assets/images/guy-blog-interior-landscaping.webp"
  }
];

export const REVIEWS = [
  {
    name: "Lloyd Rodger",
    rating: 5,
    text: "Big thank you to Jamal and the team for the great job they have done with our bbq area! The finished product is better than anything we could have imagined. Jamal came to the table with a lot of great ideas and we wouldn't have ended up with such a great finished product without his influence and attention to detail. Thanks again Jamal!"
  },
  {
    name: "Robyn Felangue",
    rating: 5,
    text: "Jamal created an amazing total garden renovation backyard and front. My original garden was non existent and the shape of the front and back was clumsy looking. My only request was that it be low maintenance. Jamal's design was original, interesting and amazing to look at and very relaxing to sit in or wander around. It has the feel of a mini estate. The team were extremely hard working with considerable attention to detail. Jamal has an amazing eye for design that makes the most of a garden and is clever with his use of colour. He was able to advise and source all aspects of the project that left me stress free."
  },
  {
    name: "JH YPB",
    rating: 5,
    text: "Dear Jamal Thanks to you for our wonderful penthouse garden at Barangaroo Sydney ! You've designed and installed a beautiful low maintenance garden for us that has re-made our rooftop into a space that we now really enjoy. Thanks so much."
  },
  {
    name: "Barway",
    rating: 5,
    text: "I thoroughly recommend FCG Landscaping and Jamal Steer. Our backyard job was big and complicated by drainage issues. We had obtained quotes from other landscapers but we were either not comfortable with them or the quote was in the stratosphere. When I saw Jamal's work at a local petrol station, I thought I'd give a young bloke a go. My wife and I were immediately impressed with Jamal's professionalism, creativity and skill. He was friendly and was very considerate of us and our dogs. The work was done to an extremely high standard and was actually below budget due to Jamal's selfless suggestions which not only improved the aesthetics of the design but which also resulted in cost savings. I don't think any other landscaper would have done that. Jamal even went out of his way to buy and install a \"surprise\" feature which, he said, we didn't have to pay for if we didn't like it. Needless to say, we loved the surprise and all of his creative ideas. We now have an amazing backyard which has become an additional entertaining space as well as a place for relaxation and rejuvenation. I could not recommend Jamal and FCG more highly."
  },
  {
    name: "Glen Archibald",
    rating: 5,
    text: "Jamal and his guys always present a professional attitude when working in our backyard. I would highly recommend FCG Landscaping for any jobs; large or small. We have used FCG for both minor maintenance works on our garden plus also a rather intensive, large project (filling in our pool and associated landscaping) last year. Jamal always delivers a professional job, to budget and always to our expectations. Extremely happy."
  },
  {
    name: "HU-983082544",
    rating: 5,
    text: "Easy to work with. Great ideas during the brief and quote session. Fantastic results and very professional. Great post completion service also. Regularly checks in to see how the garden is doing. Highly recommended."
  },
  {
    name: "HU-825438369",
    rating: 5,
    text: "We hired Jamal from FCG Landscaping not just because of his wonderful vision for our garden but the way he went above and beyond during the quote process by visiting us with sketches and pictures of the plants he recommended. This really helped us visualise the design. During the project his communication was great and we were kept across all the progress, the schedule, and of course, involved in some of the minor decisions about amendments that had to be made on the fly. Finally, the things that impressed us the most were the quality of materials Jamal insisted on using, the craftsmanship of our wall, pathway, and privacy screens which became features of the garden in themselves, and ultimately, the care he clearly had for our project. His passion for landscaping was infectious and I believe it's that love for his work that made him capable of producing such a magnificent finished product that's the envy of our neighbours and a garden we can take real pride in."
  },
  {
    name: "Mervat Kassem",
    rating: 5,
    text: "FCG Landscaping are an amazing team to work with, from start to finish they took pride in their work and the final result is a masterpiece. Jamal and his team are professional and passionate about their work, they went above and beyond our expectations creating a beautiful modern oasis. I highly recommend FCG Landscaping for their exceptional quality!"
  },
  {
    name: "HU-820473871",
    rating: 5,
    text: "Jamal is very professional and his work speaks for itself. He completely re designed the front garden of our home, installing a new path, fence and all garden beds. After completing our front garden we then had to get him to do our back. He continues to check in to do regular maintenance. We can not recommend Jamal highly enough."
  },
  {
    name: "Oliver Konakoff",
    rating: 5,
    text: "Jamal and the team at FCG were outstanding! Extremely supportive, creative and responsive. They were flexible and catered to the unique needs of our school and project. They saw the job through to completion to the highest standard and were very friendly along the way! I would highly recommend them to any setting!!"
  },
  {
    name: "Kana",
    rating: 5,
    text: "We couldn't have asked for a better partner on the Drought Garden brand activation. The expectations were high but Jamal was professional the whole way through - being open to feedback and pulling together an impressive design and build that earned widespread coverage. The FCG crew worked really hard to deliver within tight timeframes and we're grateful for their cooperation and support. Give Jamal and the team your next landscaping challenge and we promise you won't be disappointed!"
  }
];

export const PROJECTS = [
  {
    id: "carlingford",
    title: "Carlingford Project",
    category: "Residential Transformation",
    description: "A complete transformation featuring modern paving, structured garden beds, and premium retaining solutions.",
    images: [
      "https://i.ibb.co/r2GHkGg9/553590182-18526974547058377-3426382547661024775-n.jpg",
      "https://img.sanishtech.com/u/ce3c009a28984b0ff274e3c5eaad6e32.jpg",
      "https://img.sanishtech.com/u/c01404793e03cb6a24c7308bfe52a7f0.jpg",
      "https://img.sanishtech.com/u/4a06454a0c9c4abe6658ec0d74edfda7.jpg",
      "https://img.sanishtech.com/u/af0276b130e2222cd340ddd835e73627.jpg",
      "https://img.sanishtech.com/u/7930ce2dd1c81d1b91dde7a7278bdb68.jpg",
      "https://img.sanishtech.com/u/c6c08239a5455536b2bc5356ee6d5310.jpg",
      "https://img.sanishtech.com/u/53ad9b24de006cf4bcd8151d10f32358.jpg",
      "https://img.sanishtech.com/u/f4356c82980351843c5126ebc0ec339c.jpg",
      "https://img.sanishtech.com/u/6feef7e9203dc238048289a01ffb465d.jpg"
    ]
  },
  {
    id: "sylvania-waters",
    title: "Sylvania Waters Project",
    category: "Waterfront Luxury",
    description: "High-end waterfront landscaping with limestone paving, frameless glass fencing, and coastal planting palette.",
    images: [
      "https://i.ibb.co/ksfjCLXW/632142249-18558657964058377-6757054443720232020-n.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/Ofcxb67z6YJfqVoEn8Hh/image.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/XuNVtIerFiIchGw4Js79/image.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/WJMkgQUMqgNq58yA0trQ/image.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/hL77yfq8QWL9LoK5epi0/image.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/FzEbcXYC6kLd7RyLsKpE/image.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/8IlOma1W3J8oSEAk8boU/image.jpg",
      "https://plain-eeur-prod-public.komododecks.com/202602/28/AkXVeOi5XBrtWyPYhSsn/image.jpg"
    ]
  },
  {
    id: "camden",
    title: "Camden Project",
    category: "Residential Transformation",
    description: "Expansive rural landscaping incorporating large-scale retaining walls, native gardens, and feature timber work.",
    images: [
      "https://i.ibb.co/zWYfHXqz/629519816-18557227300058377-8428278533826881664-n.jpg",
      "https://i.ibb.co/1GvkD2zS/631859151-18557227309058377-8852901535851435407-n.jpg",
      "https://i.ibb.co/39g10s0B/632565783-18557227285058377-7976383532491562820-n.jpg",
      "https://i.ibb.co/PGWxKjQT/630425895-18557227258058377-4336524208254217744-n.jpg",
      "https://i.ibb.co/C34cZg3W/631600997-18557227249058377-179018117579395490-n.jpg",
      "https://i.ibb.co/Y7J2TfsB/636686355-18557227240058377-5708728366821221578-n.jpg"
    ]
  }
];
