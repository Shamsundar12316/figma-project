
import Category from "./component/category";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Music from "./component/music";
import Exploreproduct from "./component/exploreproduct";
import Explore from "./component/explore";
import Feature from "./component/feature";
import Delivery from "./component/delivery";
import Footer from "./component/footer";
import Flash from "./component/flash";
import FProduct from "./component/fproduct";


export default function Homepage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Category/>
      <Flash/>
      <Product />
      <Music/>
      <Exploreproduct/>
      <Explore/>
      <Feature/>
      <Delivery/>
      <Footer/>

    </div>
  );
}
