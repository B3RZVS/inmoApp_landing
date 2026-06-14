import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LandingView } from "./views/LandingView";

const App: React.FC = () => {
  return (
    <>
      {/* Skip-to-content for keyboard / screen-reader users */}
      <a
        href="#main-content"
        style={{
          position: "absolute",
          top: "-100px",
          left: "16px",
          zIndex: 9999,
          background: "#000",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: 600,
          transition: "top 0.2s",
        }}
        onFocus={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.top = "16px";
        }}
        onBlur={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.top = "-100px";
        }}
      >
        Ir al contenido principal
      </a>

      <Header />
      <LandingView />
      <Footer />
    </>
  );
};

export default App;
