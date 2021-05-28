import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import { SideMenu } from "./SideMenu";

function Template(props) {
  return (
    <div className="container-fluid p-0 h-100">
      <div className="row g-0 h-100">
        <div className="col-1 col-lg-2 bg-primary sidebar">
          <SideMenu />
        </div>
        <main className="col-11 col-lg-10 ms-auto bg-light">
          <div className="d-flex flex-column flex-shrink-0 h-100">
            <Navbar />

            <Content>
              {props.children}
            </Content>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Template;
