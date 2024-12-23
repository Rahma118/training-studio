/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../SubHeader";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      title: "Dubbell 2kG",
      description: "An apple mobile which is nothing like apple",
      price: "50",
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "assets/images/R.jfif",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "Dubbell 3kG",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: "64",
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "assets/images/R (1).jfif",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "kattelBell 4KG",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: "75",
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
        "assets/images/PhoenixFitness4KGGreenVinylKettlebellHeavyWeightKettleBellforStrengthandCardioTrainingKettlebellsforHomeandGymFitnessWorkoutEquipmentforBodybuildingandWeightLifting-0.jpg",
      ],
    },
    {
      id: 4,
      title: "kattelBell 6KG",
      description: "OPPO F19 is officially announced on April 2021.",
      price: "280",
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "assets/images/OIP (1).jfif",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Coolgear",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: "25",
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "assets/images/3501433-800x800.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "Mat",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: "80",
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "assets/images/OIP (2).jfif",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Gym Bar",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: "55",
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [
        "assets/images/7141WejJmGL._AC_UL960_QL65_.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Gloves Half Finger",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: "42",
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      images: [
        "assets/images/R (2).jfif",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Blender Shaker",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: "35",
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      images: [
        "assets/images/OIP (3).jfif",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "Whey Protein",
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: "1099",
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      images: [
        "assets/images/R (3).jfif",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      ],
    },
    {
      id: 11,
      title: "Hydrolyzed Protein",
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: "1089",
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      images: [
        "assets/images/OIP (4).jfif",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      ],
    },
    {
      id: 12,
      title: "Training T-shirt",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: "23",
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      images: [
        "assets/images/70ba96c8-ac6c-46a4-840e-2aa11f2175eb.a22703ab726264f2ca27bfab711eb406.webp",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
        "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      ],
    },
    {
      id: 13,
      title: "Treadmill",
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: "2023",
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      images: [
        "assets/images/R (4).jfif",
        "https://i.dummyjson.com/data/products/13/2.png",
        "https://i.dummyjson.com/data/products/13/3.jpg",
        "https://i.dummyjson.com/data/products/13/4.jpg",
        "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      ],
    },
    {
      id: 14,
      title: "Gymstick pro step",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: "765",
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      images: [
        "assets/images/OIP (5).jfif",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      ],
    },
    {
      id: 15,
      title: "Fitness Bag",
      description:
        "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: "534",
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      images: [
        "assets/images/R (5).jfif",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      ],
    },
    {
      id: 16,
      title: "Gym Ball",
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: "135",
      discountPercentage: 13.31,
      rating: 4.83,
      stock: 110,
      brand: "L'Oreal Paris",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      images: [
        "assets/images/OIP (6).jfif",
        "https://i.dummyjson.com/data/products/16/2.webp",
        "https://i.dummyjson.com/data/products/16/3.jpg",
        "https://i.dummyjson.com/data/products/16/4.jpg",
        "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      ],
    },
    {
      id: 17,
      title: "Gym Station",
      description:
        "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: "2134",
      discountPercentage: 4.09,
      rating: 4.52,
      stock: "",
      brand: "Hemani Tea",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      images: [
        "assets/images/OIP (7).jfif",
        "https://i.dummyjson.com/data/products/17/2.jpg",
        "https://i.dummyjson.com/data/products/17/3.jpg",
        "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      ],
    },
    {
      id: 18,
      title: "Workout Bar",
      description:
        "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      price: "987",
      discountPercentage: 13.1,
      rating: 4.56,
      stock: 88,
      brand: "Dermive",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      images: [
        "assets/images/R (7).jfif",
        "https://i.dummyjson.com/data/products/18/2.jpg",
        "https://i.dummyjson.com/data/products/18/3.jpg",
        "https://i.dummyjson.com/data/products/18/4.jpg",
        "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      ],
    },
    {
      id: 19,
      title: "Ufit Yoga Mat",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: "354",
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      images: [
        "assets/images/OIP (8).jfif",
        "https://i.dummyjson.com/data/products/19/2.jpg",
        "https://i.dummyjson.com/data/products/19/3.png",
        "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      ],
    },
    {
      id: 20,
      title: "Ufit Double Ankle",
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: "235",
      discountPercentage: 16.99,
      rating: 4.06,
      stock: 140,
      brand: "Fair & Clear",
      category: "skincare",
      thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      images: [
        "assets/images/OIP (9).jfif",
        "https://i.dummyjson.com/data/products/20/2.jpg",
        "https://i.dummyjson.com/data/products/20/3.jpg",
        "https://i.dummyjson.com/data/products/20/4.jpg",
        "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      ],
    },
    {
      id: 21,
      title: "Punching Bag",
      description: "Fine quality Branded Product Keep in a cool and dry place",
      price: "135",
      discountPercentage: 4.81,
      rating: 4.44,
      stock: 133,
      brand: "Saaf & Khaas",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
      images: [
        "assets/images/OIP (10).jfif",
        "https://i.dummyjson.com/data/products/21/2.jpg",
        "https://i.dummyjson.com/data/products/21/3.jpg",
      ],
    },
    {
      id: 22,
      title: "Hand Grippers",
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: "105",
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
      images: [
        "assets/images/OIP (11).jfif",
        "https://i.dummyjson.com/data/products/22/2.jpg",
        "https://i.dummyjson.com/data/products/22/3.jpg",
      ],
    },
    {
      id: 23,
      title: "Bench Press",
      description:
        "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      price: "2500",
      discountPercentage: 8.04,
      rating: 4.85,
      stock: 26,
      brand: "Baking Food Items",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      images: [
        "assets/images/R (8).jfif",
        "https://i.dummyjson.com/data/products/23/2.jpg",
        "https://i.dummyjson.com/data/products/23/3.jpg",
        "https://i.dummyjson.com/data/products/23/4.jpg",
        "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
      ],
    },
    {
      id: 24,
      title: "Trampoline",
      description:
        "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      price: "3400",
      discountPercentage: 16.8,
      rating: 4.94,
      stock: 113,
      brand: "fauji",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      images: [
        "assets/images/R (9).jfif",
        "https://i.dummyjson.com/data/products/24/2.jpg",
        "https://i.dummyjson.com/data/products/24/3.jpg",
        "https://i.dummyjson.com/data/products/24/4.jpg",
        "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      ],
    },
    {
      id: 25,
      title: "Jump Rope",
      description:
        "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      price: "400",
      discountPercentage: 13.58,
      rating: 4.87,
      stock: 47,
      brand: "Dry Rose",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      images: [
        "assets/images/R (10).jfif",
        "https://i.dummyjson.com/data/products/25/2.jpg",
        "https://i.dummyjson.com/data/products/25/3.png",
        "https://i.dummyjson.com/data/products/25/4.jpg",
        "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
      ],
    },
    {
      id: 26,
      title: "Elliptical",
      description:
        "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      price: "4200",
      discountPercentage: 17.86,
      rating: 4.08,
      stock: 131,
      brand: "Boho Decor",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
      images: [
        "assets/images/R (11).jfif",
        "https://i.dummyjson.com/data/products/26/2.jpg",
        "https://i.dummyjson.com/data/products/26/3.jpg",
        "https://i.dummyjson.com/data/products/26/4.jpg",
        "https://i.dummyjson.com/data/products/26/5.jpg",
        "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
      ],
    },
    {
      id: 27,
      title: "Smith Machine",
      description:
        "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      price: "1255",
      discountPercentage: 15.58,
      rating: 4.41,
      stock: 17,
      brand: "Flying Wooden",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
      images: [
        "assets/images/OIP (12).jfif",
        "https://i.dummyjson.com/data/products/27/2.jpg",
        "https://i.dummyjson.com/data/products/27/3.jpg",
        "https://i.dummyjson.com/data/products/27/4.jpg",
        "https://i.dummyjson.com/data/products/27/thumbnail.webp",
      ],
    },
    {
      id: 28,
      title: "Chin Up Bar",
      description:
        "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      price: "1354",
      discountPercentage: 16.49,
      rating: 4.82,
      stock: 54,
      brand: "LED Lights",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      images: [
        "assets/images/R (12).jfif",
        "https://i.dummyjson.com/data/products/28/2.jpg",
        "https://i.dummyjson.com/data/products/28/3.png",
        "https://i.dummyjson.com/data/products/28/4.jpg",
        "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
      ],
    },
    {
      id: 29,
      title: "Bosu Balance Trainer",
      description:
        "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      price: "955",
      discountPercentage: 15.34,
      rating: 4.44,
      stock: 7,
      brand: "luxury palace",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
      images: [
        "assets/images/R (13).jfif",
        "https://i.dummyjson.com/data/products/29/2.jpg",
        "https://i.dummyjson.com/data/products/29/3.webp",
        "https://i.dummyjson.com/data/products/29/4.webp",
        "https://i.dummyjson.com/data/products/29/thumbnail.webp",
      ],
    },
    {
      id: 30,
      title: "Resistence Bands",
      description:
        "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      price: "125",
      discountPercentage: 2.92,
      rating: 4.92,
      stock: 54,
      brand: "Golden",
      category: "home-decoration",
      thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      images: [
        "assets/images/R (14).jfif",
        "https://i.dummyjson.com/data/products/30/2.jpg",
        "https://i.dummyjson.com/data/products/30/3.jpg",
        "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
      ],
    },
  ];

  return (
    <CartProvider>
      <Container>
        <Row>
          {products.map((Rahma) => (
            <Col md="3" key={Rahma.id} className="text-center mb-4">
              <img
                src={Rahma.images[0]}
                className="img-fluid"
                style={{ height: "300px" }}
              ></img>
              <h2 style={{ fontWeight: "bold" }}>
                {Rahma.title}
              </h2>
              <h3 style={{ color: "red" }}>
                {Rahma.price} 
              </h3>
              <button
                className="btn  btn-primary mt-3"
                onClick={() => addItem(Rahma)}
              >
                Add to cart
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </CartProvider>
  );
}



function Basket() {
  return (
    <CartProvider>
      {/* <!-- ***** Header Area Start ***** --> */}
      <div className="pt-5 m-4"></div>
    <SubHeader/>
      {/* <!-- ***** Header Area End ***** --> */}
      <Page />
     
    </CartProvider>
  );
}
export default Basket;
