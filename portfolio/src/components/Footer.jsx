export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </div>
    </footer>
  );
}