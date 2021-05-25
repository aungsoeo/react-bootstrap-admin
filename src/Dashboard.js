import Navbar from "./body/Navbar";
import Content from "./body/Content";
import { SideMenu } from "./menu";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        <nav className="col-2 bg-light pe-3">
          <SideMenu />
        </nav>
        <main className="col-10 bg-secondary">
          <Navbar />
          <Content />
        </main>
      </div>
      <footer className="text-center py-4 text-muted small">
        <div className="mb-1">Exercise from Bootstrap လို-တို-ရှင်း by sir <a href="https://eimaung.com/" target="_blank" rel="noreferrer">Ei Maung</a></div>
        &copy; Copyright 2021
      </footer>
    </div>
  );
}

export default Dashboard;
