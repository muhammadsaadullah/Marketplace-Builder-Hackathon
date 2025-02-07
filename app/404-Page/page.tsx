import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Error() {
    const title = "404 Error";
    const location  = "Error"

    return (
        <div>
            <Header 
                title = {title}
                loc = {location}
            />
            <Footer />
        </div>       
    );
}