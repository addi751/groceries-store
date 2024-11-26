import Header from '../components/Header';
import Footer from '../components/Footer';
import TopSeller from '../components/TopSellers';
import BannerSection from '../components/Banner';
import Vegetables from '../components/Vegetables';
import BannerSection1 from '../components/Banner1';
import SoftDrink from '../components/SoftDrinks';
import CategorySection from '../components/Category';
import BannerSection2 from '../components/Banner2';
import Fruits from '../components/Fruits';
import BannerSection3 from '../components/Banner3';
import CategorySection1 from '../components/Category1';
import Gradient from '../components/Gradient';
import ProductGrid from '../components/Category2';
import Footers from '../components/Footer';



const Home = () => {

    return (
        <div>
            <Header />
            <TopSeller />
            <BannerSection />
            <Vegetables />
            <BannerSection1 />
            <SoftDrink />
            <CategorySection />
            <BannerSection2/>
            <Fruits />
            <BannerSection3 />
            <CategorySection1 />
            <Gradient />
            <ProductGrid />
            <Footers />

        </div>
        
    );
};

export default Home;
