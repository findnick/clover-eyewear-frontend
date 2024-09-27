export const Slide = ({ children }) => {
  return <div className="slide">{children}</div>;
};

export const Slider = ({ children }) => {
  return (
    <div className="slider">
      <div className="slide-track">{children}</div>
    </div>
  );
};
