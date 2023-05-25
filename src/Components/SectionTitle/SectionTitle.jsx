const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center mb-12">
      <p className="text-[#D99904] text-lg mb-3">---{subHeading}---</p>
      <h2 className="text-5xl uppercase border-y-4 p-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
