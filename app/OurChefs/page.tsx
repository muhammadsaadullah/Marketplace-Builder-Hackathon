import Header from "../components/Header"
import Footer from "../components/Footer";
import ChefCard from "../components/ChefCard";

export default function Chef() {
    const title = "Our Chef"
    const location  = "Chef"
    const ChefDetails =[
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
        {
            image: "/chef1.jpeg",
            name: "Tehmina Rumi",
            designation: "Chef"
        },
    ]

    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <Header 
                title = {title}
                loc = {location}
            />
            <div className="grid grid-cols-4 mx-[170px] my-16 gap-5">
            {
                ChefDetails.map((details, index) => {
                    return ( 
                        
                            <ChefCard 
                                key = {index}
                                image = {details.image}
                                name = {details.name}
                                designation = {details.designation}
                            />
                        
                    )
                })
            }
            </div>
            <Footer />
        </div>       
    );
}