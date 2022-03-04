
import TopBar from "./TopBar";

import "../App.css";
import Footer from "./Footer";
import Row from "./Row";
import RowHeader from "./RowHeader";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />

        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <RowHeader />

          <Row />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContentWrapper;
