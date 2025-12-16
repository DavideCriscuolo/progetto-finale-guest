export default function FooterC() {
  return (
    <footer className="bg-white text-center text-muted py-3 border-top">
      <div className="container">
        <small>
          © {new Date().getFullYear()} GameHub. Tutti i diritti riservati.
        </small>
      </div>
    </footer>
  );
}
