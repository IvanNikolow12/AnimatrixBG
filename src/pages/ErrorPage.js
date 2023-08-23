import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";

import "./ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <div className="page-not-found-container">
        <div className="page-not-found-content">
        <h2>Error: 404 page not found</h2>
        <br/>
        <p>Sorry, the page you're looking for cannot be accessed</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
