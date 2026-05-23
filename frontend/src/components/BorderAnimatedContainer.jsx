// How to make animated gradient border 👇
// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-2xl shadow-slate-200/50 flex overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
