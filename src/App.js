import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import AddProducts from "./Pages/AddProducts";
import EditProducts from "./Pages/EditProducts";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import SignOut from "./Pages/SignOut";

function App() {

  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/product-detail/:id" component={Product} />
            <Route path="/payment" component={Payment} />
            <Route path="/signout" component={SignOut} />
            <Route path="/addproducts" component={AddProducts}/>
            <Route path="/edit/:id" component={EditProducts}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
