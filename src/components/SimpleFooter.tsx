import colors from "@/components/colors";

const SimpleFooter = () => {
  return (
    <footer className="w-full border-t" style={{ borderColor: "rgba(0,0,0,0.06)", background: `linear-gradient(90deg, ${colors.primaryHex}, #000000)` }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/90">© {new Date().getFullYear()} Panabotics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:panabotics@gmail.com" className="text-white hover:text-white underline">panabotics@gmail.com</a>
            <a href="#" className="text-white/90 hover:text-white">Privacy</a>
            <a href="#" className="text-white/90 hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
